"use client"

import { PremiumError } from "@/components/shadcn/premium-error"
import { useTranslations } from "next-intl"

export default function ForbiddenError() {
  const t = useTranslations("Errors.403")
  return (
    <PremiumError
      code="403"
      title={t("title")}
      message={t("message")}
      actions={{
        primary: {
          label: t("actions.primary"),
          href: "/",
        },
        secondary: {
          label: t("actions.secondary"),
          href: "/login",
        },
      }}
    />
  )
}
