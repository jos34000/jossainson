import { usePathname, useRouter } from "@/i18n/navigation"
import Cookies from "js-cookie"
import { useLocale } from "next-intl"
import { useTransition } from "react"

export const useLanguageSwitch = () => {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale() as SupportedLanguage
  const [isPending, startTransition] = useTransition()

  const switchLanguage = (newLanguage: SupportedLanguage) => {
    if (newLanguage === currentLocale) return

    Cookies.set("NEXT_LOCALE", newLanguage, {
      path: "/",
      sameSite: "Lax",
      secure: window.location.protocol === "https:",
    })

    startTransition(async () => {
      router.replace(pathname, { locale: newLanguage })
      setTimeout(() => {
        const pathSegments = window.location.pathname.split("/")
        if (pathSegments.length > 1) {
          pathSegments[1] = newLanguage
        }
        const newPath = pathSegments.join("/")
        window.location.href = newPath
      }, 100)
    })
  }

  return {
    switchLanguage,
    currentLocale,
    isPending,
  }
}
