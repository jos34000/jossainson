"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

interface PremiumErrorProps {
  readonly code?: string | number
  readonly title: string
  readonly message: string
  readonly actions?: {
    readonly primary?: {
      readonly label: string
      readonly href?: string
      readonly onClick?: () => void
    }
    readonly secondary?: {
      readonly label: string
      readonly href?: string
      readonly onClick?: () => void
    }
  }
}

export function PremiumError({
  code,
  title,
  message,
  actions,
}: Readonly<PremiumErrorProps>) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 0
  const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 0
  const moveX = (mousePosition.x - centerX) / 25
  const moveY = (mousePosition.y - centerY) / 25

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-md w-full mx-4 text-center">
        {code && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <div
              className="text-[180px] font-bold text-center leading-none"
              style={{
                color: "#e0e0e0",
                textShadow:
                  "0 4px 8px rgba(0,0,0,0.3), 0 1px 2px rgba(255,255,255,0.1)",
                WebkitTextStroke: "1px rgba(255,255,255,0.1)",
                background: "linear-gradient(to bottom, #f5f5f5, #c0c0c0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {code}
            </div>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-medium text-[#e0e0e0] mb-4"
          style={{
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[#a0a0a0] text-lg mb-12"
        >
          {message}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          {actions?.primary && (
            <PremiumButton
              label={actions.primary.label}
              href={actions.primary.href}
              onClick={actions.primary.onClick}
              variant="primary"
            />
          )}

          {actions?.secondary && (
            <PremiumButton
              label={actions.secondary.label}
              href={actions.secondary.href}
              onClick={actions.secondary.onClick}
              variant="secondary"
            />
          )}
        </motion.div>
      </div>
    </div>
  )
}

function PremiumButton({
  label,
  href,
  onClick,
  variant = "primary",
}: Readonly<{
  label: string
  href?: string
  onClick?: () => void
  variant: "primary" | "secondary"
}>) {
  const [isHovered, setIsHovered] = useState(false)

  const getButtonStyles = () => {
    const baseStyles =
      "relative py-3 px-8 rounded-lg font-medium text-[#e0e0e0] overflow-hidden transition-all duration-300"

    if (variant === "primary") {
      return `${baseStyles} bg-[#111111] border border-[#333333] hover:border-[#444444] hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)]`
    } else {
      return `${baseStyles} bg-transparent border border-[#333333] hover:border-[#444444] hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)]`
    }
  }

  const ButtonContent = () => (
    <span className="relative z-10 flex items-center justify-center">
      {label}
    </span>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={getButtonStyles()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ButtonContent />
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={getButtonStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ButtonContent />
    </button>
  )
}
