"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimate, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [scope, _] = useAnimate()
  const isInView = useInView(scope)
  const [started, setStarted] = useState(false)
  const [textWidth, setTextWidth] = useState(0)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.scrollWidth)
    }
  }, [words])

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true)
    }
  }, [isInView, started])

  const renderWords = () => {
    return (
      <div className="inline">
        {words.map((word, idx) => {
          return (
            <div key={`${word.text}-${idx}`} className="inline-block">
              <span className={cn("text-foreground", word.className)}>
                {word.text}
              </span>
              {idx < words.length - 1 && <span>&nbsp;</span>}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div ref={scope} className={cn("text-base font-bold", className)}>
      <div className="inline relative text-left">
        <motion.div
          ref={textRef}
          className="inline-block overflow-hidden whitespace-nowrap align-bottom"
          initial={{ width: 0 }}
          animate={{ width: started ? textWidth : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ willChange: "width" }}
        >
          {renderWords()}
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block h-full w-[4px] translate-y-[2px] bg-primary cursor",
            cursorClassName
          )}
        />
      </div>
    </div>
  )
}
