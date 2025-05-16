"use client"

import { motion } from "framer-motion"

interface LibrarySectionTitleProps {
  title: string
  description: string
}

export function LibrarySectionTitle({
  title,
  description,
}: Readonly<LibrarySectionTitleProps>) {
  return (
    <div className="mb-6">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-2xl font-bold mb-2"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-muted-foreground"
      >
        {description}
      </motion.p>
    </div>
  )
}
