#!/usr/bin/env python3
"""
Genera il prompt Cursor da un Discovery Document JSON compilato.
Usage: python3 generate_cursor_prompt.py [path/to/filled.json]
"""

import json
import re
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent
DEFAULT_JSON = SCRIPT_DIR.parent / "output" / "SwiftWithFer-Discovery-Document.json"


def collect_values(schema: dict) -> dict:
    values = {}
    for section in schema.get("sections", []):
        for subsection in section.get("subsections", []):
            for field in subsection.get("fields", []):
                fid = field["id"]
                val = field.get("value")
                if field["type"] == "checkbox":
                    values[fid] = "Sì" if val else "No"
                elif field["type"] == "checkbox_group" and isinstance(val, dict):
                    selected = [k for k, v in val.items() if v]
                    values[fid] = ", ".join(selected) if selected else "Nessuno"
                elif val is not None:
                    values[fid] = str(val)
                else:
                    values[fid] = "[da compilare]"
    return values


def find_prompt_template(schema: dict) -> str:
    for section in schema.get("sections", []):
        if section.get("id") == "cursor_prompt":
            for subsection in section.get("subsections", []):
                for field in subsection.get("fields", []):
                    if field.get("generated"):
                        return field.get("template") or field.get("value", "")
    return ""


def render_prompt(template: str, values: dict) -> str:
    def replacer(match):
        key = match.group(1)
        return values.get(key, f"[{key}]")

    return re.sub(r"\{\{(\w+)\}\}", replacer, template)


def main():
    json_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_JSON
    if not json_path.exists():
        print(f"File non trovato: {json_path}", file=sys.stderr)
        sys.exit(1)

    schema = json.loads(json_path.read_text(encoding="utf-8"))
    template = find_prompt_template(schema)
    if not template:
        print("Template prompt non trovato nello schema.", file=sys.stderr)
        sys.exit(1)

    values = collect_values(schema)
    prompt = render_prompt(template, values)

    output_path = json_path.parent / "SwiftWithFer-Cursor-Prompt.md"
    output_path.write_text(prompt, encoding="utf-8")
    print(prompt)
    print(f"\n---\nSalvato in: {output_path}")


if __name__ == "__main__":
    main()
