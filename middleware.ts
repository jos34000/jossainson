import { getSessionCookie } from "better-auth/cookies"
import createMiddleware from "next-intl/middleware"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { routing } from "./i18n/routing"

const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname
  const locale = pathname.split("/")[1]
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "")

  const isOnboardingCompleted =
    request.cookies.get("onboarding-completed")?.value === "true"
  const hasSession = getSessionCookie(request)

  const supportedLocales = ["fr", "en", "es"]
  const isValidLocale = supportedLocales.includes(locale)

  if (!isValidLocale) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
  }

  if (pathnameWithoutLocale.startsWith("/dashboard")) {
    if (!hasSession) {
      return NextResponse.redirect(new URL(`/${locale}/error/403`, request.url))
    }
  }

  if (
    !isOnboardingCompleted &&
    !pathnameWithoutLocale.startsWith("/onboarding")
  ) {
    return NextResponse.redirect(new URL(`/${locale}/onboarding`, request.url))
  }

  if (
    isOnboardingCompleted &&
    pathnameWithoutLocale.startsWith("/onboarding")
  ) {
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  const handleI18nRouting = createMiddleware(routing)
  return handleI18nRouting(request)
}

export default middleware

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}
