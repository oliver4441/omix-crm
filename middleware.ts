import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const protectedRoutes = ["/dashboard", "/leads", "/pipeline", "/notifications", "/clients", "/settings"]

export function middleware(request: NextRequest) {
  const isProtected = protectedRoutes.some((r) =>
    request.nextUrl.pathname.startsWith(r)
  )

  if (!isProtected) return NextResponse.next()

  // Supabase stores session in sb-<project>-auth-token cookies
  const hasCookie = [...request.cookies.getAll().map(c => c.name)]
    .some((name) => name.startsWith("sb-") && name.endsWith("-auth-token"))

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
