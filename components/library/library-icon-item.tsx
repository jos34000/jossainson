"use client"

import type React from "react"

import { Badge } from "@/components/shadcn/badge"
import { Button } from "@/components/shadcn/button"
import { Card, CardContent } from "@/components/shadcn/card"
import { motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

interface LibraryIconItemProps {
  name: string
  category: string
  icon: React.ReactNode
  usage: string
}

export function LibraryIconItem({
  name,
  category,
  icon,
  usage,
}: Readonly<LibraryIconItemProps>) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(usage)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ y: -2 }}
    >
      <Card className="overflow-hidden h-full">
        <CardContent className="p-4 flex flex-col items-center">
          <div className="bg-muted/40 rounded-lg p-4 flex items-center justify-center w-full h-16 mb-3">
            {icon}
          </div>
          <div className="text-center">
            <p className="font-medium text-sm truncate w-full">{name}</p>
            <Badge variant="outline" className="mt-1 text-xs">
              {category}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="mt-3 w-full"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-3 w-3 mr-2" />
            ) : (
              <Copy className="h-3 w-3 mr-2" />
            )}
            {copied ? "Copié" : "Copier"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
