import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isCieloStorieEnglishLegalPath } from "@/config/cielostorie-legal-paths";

const APEX_HOST = "fernandopiras.com";
const HTML_LANG_HEADER = "x-html-lang";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  if (host === `www.${APEX_HOST}`) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = APEX_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    HTML_LANG_HEADER,
    isCieloStorieEnglishLegalPath(request.nextUrl.pathname) ? "en" : "it",
  );

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
