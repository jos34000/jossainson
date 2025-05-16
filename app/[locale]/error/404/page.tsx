"use client"

import { PremiumError } from "@/components/shadcn/premium-error"
import { useTranslations } from "next-intl"

export default function NotFound() {
  const t = useTranslations("Errors.404")
  return (
    <PremiumError
      code="404"
      title={t("title")}
      message={t("message")}
      actions={{
        primary: {
          label: t("actions.primary"),
          href: "/",
        },
        secondary: {
          label: t("actions.secondary"),
          href: "/contact",
        },
      }}
    />
  )
}
