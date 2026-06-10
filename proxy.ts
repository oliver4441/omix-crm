import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const protectedRoutes = [
  "/dashboard",
  "/leads",
  "/pipeline",
  "/notifications",
  "/settings",
]

export function proxy(
  request: NextRequest
) {
  const token =
    request.cookies.get(
      "sb-access-token"
    )?.value

  const isProtected =
    protectedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(
        route
      )
    )

  if (
    isProtected &&
    !token
  ) {
    return NextResponse.redirect(
      new URL(
        "/login",
        request.url
      )
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/leads/:path*",
    "/pipeline/:path*",
    "/notifications/:path*",
    "/settings/:path*",
  ],
}
