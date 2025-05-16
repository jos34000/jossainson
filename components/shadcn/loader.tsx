"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface LoaderProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "dots" | "spinner"
}

export function Loader({
  className,
  size = "md",
  variant = "default",
}: Readonly<LoaderProps>) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex items-center justify-center gap-2", className)}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={cn(
              "rounded-full bg-primary",
              size === "sm"
                ? "w-1.5 h-1.5"
                : size === "md"
                  ? "w-2.5 h-2.5"
                  : "w-3.5 h-3.5"
            )}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === "spinner") {
    return (
      <div className={cn("relative", sizeClasses[size], className)}>
        <motion.div
          className="absolute inset-0 border-t-2 border-r-2 border-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 border-t-2 border-r-2 border-primary/30 rounded-full"
          animate={{ rotate: -180 }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
    )
  }

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/40"
        animate={{ scale: [1, 0.8, 1] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-2 rounded-full bg-background"
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <motion.div className="absolute top-0 left-1/2 w-1 h-1 -translate-x-1/2 rounded-full bg-primary" />
      </motion.div>
    </div>
  )
}
