"use client"

import { FloatingElement } from "@/components/onboarding/floating-element"
import { SelectionOption } from "@/components/onboarding/selection-option"
import { motion } from "framer-motion"
import { BarChart, Cookie, Settings, Shield } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

export const StepCookies = () => {
  const t = useTranslations("Onboarding.steps.cookies")
  const [cookiePreferences, setCookiePreferences] = useState<{
    necessary: boolean
    functional: boolean
    analytics: boolean
    marketing: boolean
  }>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  })

  const toggleCookie = (type: keyof typeof cookiePreferences) => {
    if (type === "necessary") return
    const updated = {
      ...cookiePreferences,
      [type]: !cookiePreferences[type],
    }
    setCookiePreferences(updated)
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold tracking-tight mb-3">{t("title")}</h2>
        <p className="text-muted-foreground">{t("description")}</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 mt-6">
        <FloatingElement intensity={20} scale={1.01}>
          <SelectionOption
            data-testid="onboarding-cookies-necessary"
            selected={cookiePreferences.necessary}
            onClick={() => {}}
          >
            <div className="flex items-center space-x-4">
              <div className="p-2.5 rounded-full bg-primary/20">
                <Shield className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <span className="font-medium block">{t("necessary")}</span>
                <span className="text-sm text-muted-foreground">
                  {t("necessaryDescription")}
                </span>
              </div>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20} scale={1.01}>
          <SelectionOption
            data-testid="onboarding-cookies-functional"
            selected={cookiePreferences.functional}
            onClick={() => toggleCookie("functional")}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`p-2.5 rounded-full ${cookiePreferences.functional ? "bg-primary/20" : "bg-muted/50"}`}
              >
                <Settings className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <span className="font-medium block">{t("functional")}</span>
                <span className="text-sm text-muted-foreground">
                  {t("functionalDescription")}
                </span>
              </div>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20} scale={1.01}>
          <SelectionOption
            data-testid="onboarding-cookies-analytics"
            selected={cookiePreferences.analytics}
            onClick={() => toggleCookie("analytics")}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`p-2.5 rounded-full ${cookiePreferences.analytics ? "bg-primary/20" : "bg-muted/50"}`}
              >
                <BarChart className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <span className="font-medium block">{t("analytics")}</span>
                <span className="text-sm text-muted-foreground">
                  {t("analyticsDescription")}
                </span>
              </div>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20} scale={1.01}>
          <SelectionOption
            data-testid="onboarding-cookies-marketing"
            selected={cookiePreferences.marketing}
            onClick={() => toggleCookie("marketing")}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`p-2.5 rounded-full ${cookiePreferences.marketing ? "bg-primary/20" : "bg-muted/50"}`}
              >
                <Cookie className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <span className="font-medium block">{t("marketing")}</span>
                <span className="text-sm text-muted-foreground">
                  {t("marketingDescription")}
                </span>
              </div>
            </div>
          </SelectionOption>
        </FloatingElement>
      </div>

      <p className="text-sm text-muted-foreground mt-4">{t("legalNote")}</p>
    </div>
  )
}
