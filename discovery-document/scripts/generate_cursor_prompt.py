#!/usr/bin/env python3
"""
Genera il prompt Cursor completo da un Discovery Document JSON compilato.
Produce un prompt esaustivo con TUTTI i campi per sviluppo autonomo.
"""

import json
import re
import sys
from datetime import datetime
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent
DEFAULT_JSON = SCRIPT_DIR.parent / "output" / "SwiftWithFer-Discovery-Document.json"

sys.path.insert(0, str(SCRIPT_DIR))
from discovery_schema import META


def format_field_value(field: dict) -> str:
    val = field.get("value")
    ftype = field["type"]

    if ftype == "checkbox":
        return "Sì" if val else "No"
    if ftype == "checkbox_group" and isinstance(val, dict):
        selected = [k for k, v in val.items() if v]
        return ", ".join(selected) if selected else "Nessuno selezionato"
    if val is not None and str(val).strip():
        return str(val).strip()
    if field.get("required"):
        return "[MANCANTE — campo obbligatorio]"
    return "[non specificato]"


def collect_missing_required(schema: dict) -> list[str]:
    missing = []
    for section in schema.get("sections", []):
        for subsection in section.get("subsections", []):
            for field in subsection.get("fields", []):
                if field.get("required") and field.get("type") != "checkbox":
                    val = field.get("value")
                    if val is None or (isinstance(val, str) and not val.strip()):
                        missing.append(field["label"])
    return missing


def build_comprehensive_prompt(schema: dict) -> str:
    meta = schema.get("meta", META)
    missing = collect_missing_required(schema)

    lines = [
        "# SWIFTWITHFER — BRIEF DI SVILUPPO COMPLETO",
        "",
        "> **Istruzioni per Cursor AI:** Tutte le informazioni del progetto sono in questo documento. "
        "Non fare domande di chiarimento: usa i valori indicati, segna le assunzioni minime dove un campo "
        "è `[non specificato]`, e procedi con architettura, implementazione e deliverable.",
        "",
        f"**Documento:** {meta.get('title', META['title'])} v{meta.get('version', META['version'])}",
        f"**Generato:** {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        "",
    ]

    if missing:
        lines.extend([
            "## ⚠ CAMPI OBBLIGATORI MANCANTI",
            "",
            "I seguenti campi obbligatori non sono compilati. Procedi con assunzioni conservative:",
            "",
        ])
        for item in missing:
            lines.append(f"- {item}")
        lines.append("")

    for section in schema.get("sections", []):
        if section.get("id") == "cursor_prompt":
            continue

        lines.append(f"## {section['number']}. {section['title']}")
        if section.get("description"):
            lines.append(f"*{section['description']}*")
        lines.append("")

        for subsection in section.get("subsections", []):
            lines.append(f"### {subsection['title']}")
            lines.append("")

            for field in subsection.get("fields", []):
                if field.get("generated"):
                    continue
                label = field["label"]
                value = format_field_value(field)
                lines.append(f"**{label}**")
                lines.append(value)
                lines.append("")

    lines.extend([
        "---",
        "",
        "## ISTRUZIONI OPERATIVE PER LO SVILUPPO",
        "",
        "1. **Analizza** tutte le sezioni sopra prima di scrivere codice.",
        "2. **Definisci** stack, architettura e modello dati in base ai vincoli indicati.",
        "3. **Implementa** le funzionalità in ordine di priorità (Must-have → Should-have → Nice-to-have).",
        "4. **Rispetta** branding, UI/UX, sicurezza GDPR e integrazioni richieste.",
        "5. **Configura** automazioni, pagamenti e API come specificato.",
        "6. **Segui** la roadmap e i criteri di accettazione indicati.",
        "7. **Consegna** codice, documentazione, deploy e checklist consegna.",
        "",
        "## OUTPUT ATTESO",
        "",
        "- Repository con codice production-ready",
        "- README con setup, env vars e comandi",
        "- Architettura documentata",
        "- Test per flussi critici",
        "- Deploy configurato sul cloud indicato",
        "",
        f"— {meta.get('author', META['author'])} | {meta.get('website', META['website'])}",
    ])

    return "\n".join(lines)


def main():
    json_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_JSON
    if not json_path.exists():
        print(f"File non trovato: {json_path}", file=sys.stderr)
        sys.exit(1)

    schema = json.loads(json_path.read_text(encoding="utf-8"))
    prompt = build_comprehensive_prompt(schema)

    output_path = json_path.parent / "SwiftWithFer-Cursor-Prompt.md"
    output_path.write_text(prompt, encoding="utf-8")
    print(prompt)
    print(f"\n---\nSalvato in: {output_path}")


if __name__ == "__main__":
    main()
