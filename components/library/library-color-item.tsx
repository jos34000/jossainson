"use client"

import { Badge } from "@/components/shadcn/badge"
import { Button } from "@/components/shadcn/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card"
import { motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

interface LibraryColorItemProps {
  name: string
  description: string
  category: string
  lightValue: string
  darkValue: string
  cssVariable: string
  usage: string
}

export function LibraryColorItem({
  name,
  description,
  category,
  lightValue,
  darkValue,
  cssVariable,
  usage,
}: Readonly<LibraryColorItemProps>) {
  const [copied, setCopied] = useState<"variable" | "value" | "usage" | null>(
    null
  )
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const colorValue = isDark ? darkValue : lightValue

  const handleCopy = (type: "variable" | "value" | "usage", text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg">{name}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            </div>
            <Badge variant="outline">{category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <div
                  className="h-20 rounded-lg border border-border/50 mb-2"
                  style={{ backgroundColor: colorValue }}
                />
                <p className="text-xs text-center text-muted-foreground">
                  {isDark ? "Dark Mode" : "Light Mode"}
                </p>
              </div>
              <div className="flex-1">
                <div
                  className="h-20 rounded-lg border border-border/50 mb-2"
                  style={{
                    backgroundColor: isDark ? lightValue : darkValue,
                  }}
                />
                <p className="text-xs text-center text-muted-foreground">
                  {isDark ? "Light Mode" : "Dark Mode"}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="bg-muted/40 p-3 rounded-lg text-xs flex justify-between items-center">
                <code className="truncate">{cssVariable}</code>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-6 w-6 ml-2 flex-shrink-0"
                  onClick={() => handleCopy("variable", cssVariable)}
                >
                  {copied === "variable" ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>

              <div className="bg-muted/40 p-3 rounded-lg text-xs flex justify-between items-center">
                <code className="truncate">{colorValue}</code>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-6 w-6 ml-2 flex-shrink-0"
                  onClick={() => handleCopy("value", colorValue)}
                >
                  {copied === "value" ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>

              <div className="bg-muted/40 p-3 rounded-lg text-xs flex justify-between items-center">
                <code className="truncate">{usage}</code>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-6 w-6 ml-2 flex-shrink-0"
                  onClick={() => handleCopy("usage", usage)}
                >
                  {copied === "usage" ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-2 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleCopy("variable", cssVariable)}
          >
            {copied === "variable" ? (
              <Check className="h-4 w-4 mr-2" />
            ) : (
              <Copy className="h-4 w-4 mr-2" />
            )}
            Copier Variable
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
