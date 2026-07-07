"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import {
  buildDirectMailto,
  buildDiscoveryMailto,
  discoverySectors,
  getDiscoveryDocumentPath,
} from "@/config/discovery";
import { ButtonLink } from "@/components/layout/Header";
import { cn } from "@/lib/utils";

type ContactMode = "email" | "discovery";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M8 2h8l4 4v14a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2z" strokeLinejoin="round" />
      <path d="M16 2v4h4M9 13h6M9 17h6M9 9h2" strokeLinecap="round" />
    </svg>
  );
}

function ModeTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-11 flex-1 rounded-full px-4 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        active
          ? "bg-foreground text-background shadow-lg shadow-foreground/10"
          : "text-muted hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

export function DiscoveryDocumentPicker() {
  const [mode, setMode] = useState<ContactMode>("discovery");
  const [sectorId, setSectorId] = useState(discoverySectors[0].id);

  const selectedSector = useMemo(
    () => discoverySectors.find((sector) => sector.id === sectorId) ?? discoverySectors[0],
    [sectorId],
  );

  const downloads = [
    { href: getDiscoveryDocumentPath(sectorId, "fillable-pdf"), label: "PDF compilabile" },
    { href: getDiscoveryDocumentPath(sectorId, "docx"), label: "Word (.docx)" },
    { href: getDiscoveryDocumentPath(sectorId, "pdf"), label: "PDF stampabile" },
    { href: getDiscoveryDocumentPath(sectorId, "json"), label: "JSON (per AI)" },
  ] as const;

  return (
    <div className="space-y-6">
      <div className="flex rounded-full border border-glass-border bg-background/50 p-1">
        <ModeTab active={mode === "discovery"} onClick={() => setMode("discovery")}>
          Avvia un progetto
        </ModeTab>
        <ModeTab active={mode === "email"} onClick={() => setMode("email")}>
          Scrivimi direttamente
        </ModeTab>
      </div>

      <AnimatePresence mode="wait">
        {mode === "email" ? (
          <motion.div
            key="email"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-glass-border bg-background/40 p-5 sm:p-6"
          >
            <h4 className="text-base font-semibold text-foreground sm:text-lg">
              Preferisci una mail veloce?
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Scrivimi direttamente con una breve descrizione del progetto. Rispondo
              entro 24–48 ore lavorative.
            </p>
            <div className="mt-5">
              <ButtonLink href={buildDirectMailto(siteConfig.email)}>
                Apri email
              </ButtonLink>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="discovery"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <DocumentIcon />
                </span>
                <div>
                  <h4 className="text-base font-semibold text-foreground sm:text-lg">
                    SwiftWithFer Discovery Document
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Template professionale per raccogliere il 100% delle informazioni
                    di progetto. Compilalo, allegalo via email e avviamo lo sviluppo
                    senza ulteriori domande.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="discovery-sector" className="mb-2 block text-sm font-medium text-foreground">
                Tipo di attività
              </label>
              <select
                id="discovery-sector"
                value={sectorId}
                onChange={(event) => setSectorId(event.target.value)}
                className="w-full min-h-11 rounded-xl border border-glass-border bg-background/80 px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
              >
                {discoverySectors.map((sector) => (
                  <option key={sector.id} value={sector.id}>
                    {sector.label}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-sm text-muted">{selectedSector.description}</p>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-foreground">Scarica il template</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {downloads.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    download
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-glass-border bg-background/60 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <DownloadIcon />
                    {item.label}
                  </a>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Il settore <span className="font-medium text-foreground">{selectedSector.label}</span>{" "}
                è già precompilato. Usa il PDF compilabile o Word per compilazione manuale,
                oppure il JSON se lavori con strumenti AI.
              </p>
            </div>

            <div className="rounded-2xl border border-glass-border bg-background/40 p-5 sm:p-6">
              <h4 className="text-sm font-semibold text-foreground sm:text-base">
                Documento compilato?
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Allega il file alla mail. L&apos;oggetto includerà già il settore selezionato.
              </p>
              <div className="mt-4">
                <ButtonLink href={buildDiscoveryMailto(siteConfig.email, selectedSector.label)}>
                  Invia documento compilato
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
