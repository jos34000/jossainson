"use client"

import { PremiumError } from "@/components/shadcn/premium-error"
import { useTranslations } from "next-intl"

export default function ServerError() {
  const t = useTranslations("Errors.500")
  return (
    <PremiumError
      code="500"
      title={t("title")}
      message={t("message")}
      actions={{
        primary: {
          label: t("actions.primary"),
          href: "/",
        },
        secondary: {
          label: t("actions.secondary"),
          onClick: () => window.location.reload(),
        },
      }}
    />
  )
}
