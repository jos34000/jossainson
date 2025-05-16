"use client"

import type React from "react"

import { Button } from "@/components/shadcn/button"
import { motion } from "framer-motion"
import { Home } from "lucide-react"
import Link from "next/link"
import { PremiumBackground } from "./prenium-background"

interface ErrorPageProps {
  code?: string | number
  title: string
  description: string
  icon: React.ReactNode
  actions?: React.ReactNode
}

export function ErrorPage({
  code,
  title,
  description,
  icon,
  actions,
}: Readonly<ErrorPageProps>) {
  const numberVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <PremiumBackground />

      <div className="container max-w-md mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl blur-lg opacity-70 dark:opacity-30" />
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl blur-xl opacity-70 dark:opacity-30" />

          <div className="relative bg-card/80 backdrop-blur-xl rounded-xl border border-white/10 dark:border-black/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-8 overflow-hidden transform perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute -inset-[100px] opacity-0 group-hover:opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_60%)] transition-opacity duration-500" />

            <div className="flex flex-col items-center text-center relative z-10">
              {code && (
                <div className="flex items-center justify-center mb-6 perspective-1000">
                  {String(code)
                    .split("")
                    .map((num, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={numberVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-7xl font-bold mx-1 text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/70 dark:from-primary dark:to-primary/70 drop-shadow-sm"
                        style={{
                          textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        }}
                      >
                        {num}
                      </motion.div>
                    ))}
                </div>
              )}

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.3,
                }}
                className="relative mb-6 group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-md opacity-70" />
                <div className="relative bg-gradient-to-br from-background to-background/80 p-4 rounded-full border border-white/10 dark:border-black/10 shadow-[0_4px_15px_rgb(0,0,0,0.1)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                  {icon}
                </div>
              </motion.div>

              <h1 className="text-3xl font-bold mb-2 text-foreground drop-shadow-sm">
                {title}
              </h1>

              <p className="text-muted-foreground mb-6">{description}</p>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                {actions || (
                  <Button
                    className="flex-1 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary"
                    asChild
                  >
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Accueil
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground text-sm">
            Si le problème persiste, veuillez contacter l&apos;administrateur du
            site.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
