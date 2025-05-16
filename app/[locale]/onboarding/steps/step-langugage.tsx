"use client"
import { FloatingElement } from "@/components/onboarding/floating-element"
import { SelectionOption } from "@/components/onboarding/selection-option"
import {
  EnglishIcon,
  FrenchIcon,
  SpanishIcon,
} from "@/components/shadcn/language-icons"
import { useLanguageSwitch } from "@/lib/hooks/use-languageSwitch"
import { useTranslations } from "next-intl"

export const StepLanguage = () => {
  const { switchLanguage, currentLocale, isPending } = useLanguageSwitch()
  const t = useTranslations("Onboarding")

  const handleLanguageChange = (newLanguage: SupportedLanguage) => {
    if (isPending) return
    switchLanguage(newLanguage)
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-3">
          {t("steps.language.choice")}
        </h2>
        <p className="text-muted-foreground">
          {t("steps.language.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        <FloatingElement intensity={20}>
          <SelectionOption
            data-testid="onboarding-language-en"
            selected={currentLocale === "en"}
            onClick={() => handleLanguageChange("en")}
          >
            <div className="flex items-center space-x-4">
              <EnglishIcon selected={currentLocale === "en"} />
              <span className="font-medium">{t("languages.en")}</span>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20}>
          <SelectionOption
            data-testid="onboarding-language-fr"
            selected={currentLocale === "fr"}
            onClick={() => handleLanguageChange("fr")}
          >
            <div className="flex items-center space-x-4">
              <FrenchIcon selected={currentLocale === "fr"} />
              <span className="font-medium">{t("languages.fr")}</span>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20}>
          <SelectionOption
            data-testid="onboarding-language-es"
            selected={currentLocale === "es"}
            onClick={() => handleLanguageChange("es")}
          >
            <div className="flex items-center space-x-4">
              <SpanishIcon selected={currentLocale === "es"} />
              <span className="font-medium">{t("languages.es")}</span>
            </div>
          </SelectionOption>
        </FloatingElement>
      </div>
    </div>
  )
}
