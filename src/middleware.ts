import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX_HOST = "fernandopiras.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();

  if (host === `www.${APEX_HOST}`) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = APEX_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
