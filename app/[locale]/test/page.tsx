"use server"
import { getTranslations } from "next-intl/server"

export default async function page() {
  const t = await getTranslations("Test")
  return <div>{t("test")}</div>
}
