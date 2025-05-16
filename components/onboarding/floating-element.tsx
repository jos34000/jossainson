import { motion, useMotionValue, useTransform } from "framer-motion"

export function FloatingElement({
  children,
  className = "",
  intensity = 10,
  scale = 1.03,
  rotateIntensity = 5,
}: Readonly<{
  children: React.ReactNode
  className?: string
  intensity?: number
  scale?: number
  rotateIntensity?: number
}>) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(
    y,
    [-100, 100],
    [rotateIntensity, -rotateIntensity]
  )
  const rotateY = useTransform(
    x,
    [-100, 100],
    [-rotateIntensity, rotateIntensity]
  )

  function handleMouse(event: React.MouseEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY

    x.set(mouseX / intensity)
    y.set(mouseY / intensity)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
      }}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {children}
    </motion.div>
  )
}
