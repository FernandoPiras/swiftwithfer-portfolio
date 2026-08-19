export const CIELOSTORIE_PRIVACY_PATH = "/legal/cielostorie/privacy";
export const CIELOSTORIE_PRIVACY_EN_PATH = "/legal/cielostorie/privacy/en";
export const CIELOSTORIE_PRIVACY_LEGACY_PATH = "/cielostorie/privacy";
export const CIELOSTORIE_PRIVACY_EN_LEGACY_PATH = "/cielostorie/privacy/en";
export const CIELOSTORIE_PRIVACY_UPDATED_ISO = "2026-08-18";

export const CIELOSTORIE_TERMS_PATH = "/legal/cielostorie/terms";
export const CIELOSTORIE_TERMS_EN_PATH = "/legal/cielostorie/terms/en";
export const CIELOSTORIE_TERMS_UPDATED_ISO = "2026-08-19";

export const CIELOSTORIE_SUPPORT_PATH = "/legal/cielostorie/support";
export const CIELOSTORIE_SUPPORT_EN_PATH = "/legal/cielostorie/support/en";
export const CIELOSTORIE_SUPPORT_UPDATED_ISO = "2026-08-19";

export const CIELOSTORIE_LEGAL_EN_PATHS = [
  CIELOSTORIE_PRIVACY_EN_PATH,
  CIELOSTORIE_TERMS_EN_PATH,
  CIELOSTORIE_SUPPORT_EN_PATH,
] as const;

const CIELOSTORIE_LEGAL_EN_PATH_SET = new Set<string>(
  CIELOSTORIE_LEGAL_EN_PATHS,
);

/** Canonical English CieloStorie legal routes that require `<html lang="en">`. */
export function isCieloStorieEnglishLegalPath(pathname: string): boolean {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  return CIELOSTORIE_LEGAL_EN_PATH_SET.has(normalized);
}
