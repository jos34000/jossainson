"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRef, useState } from "react"

interface SpotlightProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export function Spotlight({
  children,
  className = "",
  intensity = 0.15,
}: Readonly<SpotlightProps>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
    setOpacity(intensity)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300"
        style={{
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(var(--spotlight-color), ${opacity}), transparent 40%)`,
          opacity: opacity > 0 ? 1 : 0,
        }}
        animate={{
          opacity: opacity > 0 ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
      {children}
    </motion.div>
  )
}
