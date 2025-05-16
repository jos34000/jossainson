"use client"

import { cn } from "@/lib/utils"
import { useCallback, useEffect, useRef, useState } from "react"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleCount?: number
  particleDensity?: number
  particleColor?: string
  particleOpacity?: number
  speed?: number
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleCount,
  particleDensity = 100,
  particleColor = "#FFF",
  particleOpacity = 0.5,
  speed = 1,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [particles, setParticles] = useState<any[]>([])
  const [animationId, setAnimationId] = useState<number | null>(null)

  const handleResize = useCallback(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (ctx) {
        setContext(ctx)
        const boundingRect = canvas.getBoundingClientRect()
        const width = boundingRect.width
        const height = boundingRect.height
        const dpr = window.devicePixelRatio || 1
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)
        setWidth(width)
        setHeight(height)
      }
    }
  }, [])

  const render = useCallback(() => {
    if (context && width > 0 && height > 0) {
      context.clearRect(0, 0, width, height)
      particles.forEach((particle) => {
        particle.update()
        particle.draw(context)
      })
    }
    const id = requestAnimationFrame(render)
    setAnimationId(id)
  }, [context, height, particles, width])

  useEffect(() => {
    if (width > 0 && height > 0) {
      const calculatedParticleCount =
        particleCount || Math.floor((width * height) / particleDensity)
      const newParticles = []
      for (let i = 0; i < calculatedParticleCount; i++) {
        const size = Math.random() * (maxSize - minSize) + minSize
        newParticles.push(
          new Particle({
            x: Math.random() * width,
            y: Math.random() * height,
            size,
            speed,
            maxWidth: width,
            maxHeight: height,
            color: particleColor,
            opacity: particleOpacity,
          })
        )
      }
      setParticles(newParticles)
    }
  }, [
    width,
    height,
    minSize,
    maxSize,
    particleCount,
    particleDensity,
    particleColor,
    particleOpacity,
    speed,
  ])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [handleResize])

  useEffect(() => {
    if (particles.length > 0) {
      if (animationId === null) {
        render()
      }
    }
    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [particles, render, animationId])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("h-full w-full", className)}
      style={{
        background,
      }}
    />
  )
}

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  maxWidth: number
  maxHeight: number
  color: string
  opacity: number

  constructor({
    x,
    y,
    size,
    speed,
    maxWidth,
    maxHeight,
    color,
    opacity,
  }: {
    x: number
    y: number
    size: number
    speed: number
    maxWidth: number
    maxHeight: number
    color: string
    opacity: number
  }) {
    this.x = x
    this.y = y
    this.size = size
    this.speedX = (Math.random() - 0.5) * speed
    this.speedY = (Math.random() - 0.5) * speed
    this.maxWidth = maxWidth
    this.maxHeight = maxHeight
    this.color = color
    this.opacity = opacity
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    if (this.x > this.maxWidth || this.x < 0) {
      this.speedX = -this.speedX
    }
    if (this.y > this.maxHeight || this.y < 0) {
      this.speedY = -this.speedY
    }
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    context.fillStyle = this.color
    context.globalAlpha = this.opacity
    context.fill()
    context.globalAlpha = 1
  }
}
