export const FAMILYPLUS_PRIVACY_PATH = "/familyplus/privacy";
export const FAMILYPLUS_PRIVACY_EN_PATH = "/familyplus/privacy/en";
export const FAMILYPLUS_PRIVACY_UPDATED_ISO = "2026-08-25";

export const FAMILYPLUS_TERMS_PATH = "/familyplus/terms";
export const FAMILYPLUS_TERMS_EN_PATH = "/familyplus/terms/en";
export const FAMILYPLUS_TERMS_UPDATED_ISO = "2026-08-25";

export const FAMILYPLUS_SUPPORT_PATH = "/familyplus/support";
export const FAMILYPLUS_SUPPORT_EN_PATH = "/familyplus/support/en";
export const FAMILYPLUS_SUPPORT_UPDATED_ISO = "2026-08-25";

export const FAMILYPLUS_LEGAL_EN_PATHS = [
  FAMILYPLUS_PRIVACY_EN_PATH,
  FAMILYPLUS_TERMS_EN_PATH,
  FAMILYPLUS_SUPPORT_EN_PATH,
] as const;

export const FAMILYPLUS_LEGAL_IT_PATHS = [
  FAMILYPLUS_PRIVACY_PATH,
  FAMILYPLUS_TERMS_PATH,
  FAMILYPLUS_SUPPORT_PATH,
] as const;

const FAMILYPLUS_LEGAL_EN_PATH_SET = new Set<string>(FAMILYPLUS_LEGAL_EN_PATHS);

/** English Family Plus legal routes that require `<html lang="en">`. */
export function isFamilyPlusEnglishLegalPath(pathname: string): boolean {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  return FAMILYPLUS_LEGAL_EN_PATH_SET.has(normalized);
}
