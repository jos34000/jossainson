"use client"

import { LoadingScreen } from "@/components/loading-screen"
import { GlassCard } from "@/components/onboarding/glass-card"
import { Button } from "@/components/shadcn/button"
import { useRouter } from "@/i18n/navigation"
import { AnimatePresence, motion } from "framer-motion"
import Cookies from "js-cookie"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState, useTransition } from "react"
import {
  StepCookies,
  StepInterests,
  StepIntro,
  StepLanguage,
  StepTheme,
} from "./steps"

export default function OnboardingPage() {
  const router = useRouter()
  const t = useTranslations("Common")
  const totalSteps = 5
  const [isPending, startTransition] = useTransition()

  const [step, setStep] = useState(() => {
    // Initialiser avec une fonction pour n'exécuter ce code qu'une fois au montage initial
    if (typeof window !== "undefined") {
      const savedStep = Cookies.get("onboarding-step")
      return savedStep ? parseInt(savedStep, 10) : 1
    }
    return 1
  })

  // Persister l'étape actuelle dans un cookie à chaque changement
  useEffect(() => {
    Cookies.set("onboarding-step", step.toString(), {
      path: "/",
      sameSite: "Lax",
      secure: window.location.protocol === "https:",
    })
  }, [step])

  const handleNext = async () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      startTransition(() => {
        Cookies.set("onboarding-completed", "true", {
          path: "/",
          sameSite: "Lax",
          secure: window.location.protocol === "https:",
        })
        // Nettoyer le cookie d'étape quand l'onboarding est terminé
        Cookies.remove("onboarding-step")
        router.push("/")
      })
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSkip = async () => {
    Cookies.set("onboarding-completed", "true", {
      path: "/",
      sameSite: "Lax",
      secure: window.location.protocol === "https:",
    })
    // Nettoyer le cookie d'étape quand l'onboarding est sauté
    Cookies.remove("onboarding-step")
    router.push("/")
  }

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const renderButtonContent = () => {
    if (step === totalSteps) {
      return isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        t("buttons.finish")
      )
    }

    return (
      <>
        {t("buttons.next")}
        <ChevronRight className="ml-2 h-4 w-4" />
      </>
    )
  }

  return (
    <>
      <LoadingScreen duration={1000} message="Preparing your experience..." />

      <div className="min-h-screen flex items-center justify-center p-4">
        <GlassCard interactive={false} className="w-full max-w-3xl">
          <div className="w-full h-1 bg-muted/50">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <motion.span
                key={`step-${step}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-medium text-muted-foreground"
              >
                {t("others.step")} {step} {t("others.of")} {totalSteps}
              </motion.span>
              <div className="flex space-x-1">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i + 1 === step ? "bg-primary" : "bg-muted-foreground/30"}`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>

            <div className="min-h-[450px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  {step === 1 && <StepIntro />}
                  {step === 2 && <StepLanguage />}
                  {step === 3 && <StepTheme />}
                  {step === 4 && <StepInterests />}
                  {step === 5 && <StepCookies />}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-8 pt-4 border-t border-border/30 gap-4">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={step === 1}
                  className={`${step === 1 ? "opacity-0" : "opacity-100"} backdrop-blur-sm bg-background/50`}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  {t("buttons.return")}
                </Button>

                <Button
                  data-testid="onboarding-skip"
                  variant="ghost"
                  size="sm"
                  onClick={handleSkip}
                  className="text-muted-foreground hover:text-foreground transition-colors text-xs"
                >
                  {t("buttons.skip")}
                </Button>

                <Button
                  data-testid={
                    step === totalSteps
                      ? "onboarding-finish"
                      : "onboarding-next"
                  }
                  onClick={handleNext}
                  className="backdrop-blur-sm bg-primary/90 hover:bg-primary/80"
                  disabled={isPending}
                >
                  {renderButtonContent()}
                </Button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </>
  )
}
