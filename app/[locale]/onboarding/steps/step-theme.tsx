"use client"

import { Monitor, Moon, Sun } from "lucide-react"

import { FloatingElement } from "@/components/onboarding/floating-element"
import { SelectionOption } from "@/components/onboarding/selection-option"
import { useThemeSwitch } from "@/lib/hooks/use-themeSwitch"
import { useTranslations } from "next-intl"

export const StepTheme = () => {
  const { theme, switchTheme } = useThemeSwitch()
  const t = useTranslations("Onboarding")
  const tTheme = useTranslations("Common")
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-3">
          {t("steps.theme.choice")}
        </h2>
        <p className="text-muted-foreground">{t("steps.theme.description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        <FloatingElement intensity={20}>
          <SelectionOption
            data-testid="onboarding-theme-light"
            selected={theme === "light"}
            onClick={() => switchTheme("light")}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 rounded-full bg-white/80 shadow-sm">
                <Sun className="h-6 w-6" />
              </div>
              <span className="font-medium">{tTheme("themes.light")}</span>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20}>
          <SelectionOption
            data-testid="onboarding-theme-dark"
            selected={theme === "dark"}
            onClick={() => switchTheme("dark")}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 rounded-full bg-gray-900/80 shadow-sm">
                <Moon className="h-6 w-6" />
              </div>
              <span className="font-medium">{tTheme("themes.dark")}</span>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20}>
          <SelectionOption
            data-testid="onboarding-theme-system"
            selected={theme === "system"}
            onClick={() => switchTheme("system")}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-white to-gray-900 shadow-sm">
                <Monitor className="h-6 w-6" />
              </div>
              <span className="font-medium">{tTheme("themes.system")}</span>
            </div>
          </SelectionOption>
        </FloatingElement>
      </div>
    </div>
  )
}
