"use client"

import { Button } from "@/components/shadcn/button"
import { SparklesCore } from "@/components/shadcn/sparkles"
import { TypewriterEffect } from "@/components/shadcn/typewriter-effect"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const t = useTranslations("Home.sections.hero")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const nameWords = [
    { text: "Jocelyn" },
    { text: "Sainson", className: "text-zinc-400/80 dark:text-zinc-500/90" },
  ]

  const separatorWords = [{ text: "•" }]

  const roleWords = [
    { text: "Full-Stack", className: "text-zinc-400/80 dark:text-zinc-500/90" },
    { text: "Developer", className: "text-primary dark:text-primary" },
  ]

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-muted/30"
    >
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#888888"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <div className="space-y-4">
            <div className="hidden md:block">
              <TypewriterEffect
                words={[...nameWords, ...separatorWords, ...roleWords]}
                className="text-5xl lg:text-6xl font-bold"
              />
            </div>

            <div className="flex flex-col space-y-2 md:hidden">
              <TypewriterEffect
                words={nameWords}
                className="text-3xl font-bold"
              />
              <TypewriterEffect
                words={separatorWords}
                className="text-3xl font-bold text-muted-foreground"
              />
              <TypewriterEffect
                words={roleWords}
                className="text-3xl font-bold"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4"
            >
              {t("description")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" className="rounded-full px-8">
              <a href="#projects">{t("viewProjects")}</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              <a href="#contact">{t("contactMe")}</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
