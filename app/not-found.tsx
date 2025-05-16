"use client"

import { LoadingScreen } from "@/components/loading-screen"
import { routing } from "@/i18n/routing"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function RootNotFound() {
  const router = useRouter()

  useEffect(() => {
    const pathname = window.location.pathname

    const firstSegment = pathname.split("/")[1]

    const locale = routing.locales.includes(firstSegment as any)
      ? firstSegment
      : "en"

    router.replace(`/${locale}/error/404`)
  }, [router])

  return <LoadingScreen />
}
