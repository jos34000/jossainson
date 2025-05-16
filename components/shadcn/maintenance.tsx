"use client"

import { motion } from "framer-motion"
import { Construction, Hammer } from "lucide-react"
import { useTranslations } from "next-intl"
import { Button } from "./button"

interface MaintenanceProps {
  title?: string
  description?: string
  showBackButton?: boolean
  onBack?: () => void
}

export function Maintenance({
  title,
  description,
  showBackButton = true,
  onBack,
}: Readonly<MaintenanceProps>) {
  const t = useTranslations("Maintenance")
  return (
    <div className="min-h-[400px] w-full flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <div className="relative mx-auto w-24 h-24">
          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Construction className="w-24 h-24 text-primary" />
          </motion.div>
          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: [0, 15, 0, -15, 0],
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Hammer className="w-12 h-12 text-primary/50 absolute -bottom-2 -right-2" />
          </motion.div>
        </div>

        <div className="space-y-3 max-w-md mx-auto">
          <h2 className="text-2xl font-bold tracking-tight">
            {title ?? t("title")}
          </h2>
          <p className="text-muted-foreground">
            {description ?? t("description")}
          </p>
        </div>

        {showBackButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="outline"
              onClick={onBack || (() => window.history.back())}
            >
              {t("back")}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
