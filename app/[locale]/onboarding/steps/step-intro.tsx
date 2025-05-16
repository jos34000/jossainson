import { motion } from "framer-motion"
import { Sparkles, User } from "lucide-react"
import { useTranslations } from "next-intl"

export const StepIntro = () => {
  const t = useTranslations("Onboarding")
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <div className="inline-flex items-center justify-center mb-6">
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="h-14 w-14 text-primary" />
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-3">
          {t("steps.intro.title")}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {t("steps.intro.description")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center py-6"
      >
        <div className="relative w-40 h-40">
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/5 flex items-center justify-center"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              scale: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
              },
              rotate: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
              },
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute inset-4 rounded-full border border-primary/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2.5,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />

            <motion.div
              className="absolute inset-8 rounded-full border border-primary/40"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />

            <User className="h-16 w-16 text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
