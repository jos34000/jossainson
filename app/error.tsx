"use client"

import { LoadingScreen } from "@/components/loading-screen"
import { routing } from "@/i18n/routing"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function RootError({
  error,
}: Readonly<{
  error: Error & { digest?: string }
}>) {
  const router = useRouter()

  useEffect(() => {
    const pathname = window.location.pathname
    const firstSegment = pathname.split("/")[1]
    const locale = routing.locales.includes(firstSegment as any)
      ? firstSegment
      : "en"

    router.replace(`/${locale}/error/500`)
  }, [router, error])

  return <LoadingScreen />
}
