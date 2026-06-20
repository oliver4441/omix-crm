import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const protectedRoutes = ["/dashboard", "/leads", "/pipeline", "/notifications", "/clients", "/settings"]

export function proxy(request: NextRequest) {
  const isProtected = protectedRoutes.some((r) =>
    request.nextUrl.pathname.startsWith(r)
  )

  if (!isProtected) return NextResponse.next()

  // @supabase/ssr names its cookies "sb-<project-ref>-auth-token", and may
  // split large tokens into "sb-<project-ref>-auth-token.0", ".1", etc.
  // Match on "includes" rather than strict prefix/suffix so chunked cookies
  // (and any project ref) are still recognized as a valid session.
  const hasCookie = request.cookies
    .getAll()
    .some((c) => c.name.startsWith("sb-") && c.name.includes("-auth-token"))

  if (!hasCookie) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/leads/:path*",
    "/pipeline/:path*",
    "/notifications/:path*",
    "/clients/:path*",
    "/settings/:path*",
  ],
}
