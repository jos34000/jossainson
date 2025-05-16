"use client"

import { PremiumError } from "@/components/shadcn/premium-error"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface ErrorProps {
  readonly error: Error & { digest?: string }
  readonly reset: () => void
}

export default function ErrorPage({ error, reset }: Readonly<ErrorProps>) {
  const t = useTranslations("Errors.global")
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <PremiumError
      title={t("title")}
      message={error.message || t("message")}
      actions={{
        primary: {
          label: t("actions.primary"),
          onClick: reset,
        },
        secondary: {
          label: t("actions.secondary", { fallback: "Go Back" }),
          onClick: () => router.back(),
        },
      }}
    />
  )
}
