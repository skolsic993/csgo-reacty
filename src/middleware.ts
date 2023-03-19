import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const sessionCookie = req.cookies.get("accessToken")?.value;

  if (req.nextUrl.pathname.startsWith("/")) {
    return !sessionCookie
      ? NextResponse.redirect(new URL("/auth/signin", req.url))
      : NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/",
    "/auth/signout",
    "/tournaments",
    "/tournaments/:path*",
    "/matches",
    "/matches/:path*",
    "/championships",
    "/championships/:path*",
    "/hubs",
    "/hubs/:path*",
  ],
};
