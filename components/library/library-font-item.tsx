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
import { useState } from "react"

interface LibraryFontItemProps {
  name: string
  description: string
  category: string
  weights: string[]
  cssVariable: string
  cssImport: string
  cssUsage: string
}

export function LibraryFontItem({
  name,
  description,
  category,
  weights,
  cssVariable,
  cssImport,
  cssUsage,
}: Readonly<LibraryFontItemProps>) {
  const [copied, setCopied] = useState<"variable" | "import" | "usage" | null>(
    null
  )

  const handleCopy = (type: "variable" | "import" | "usage", text: string) => {
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
            <div className="space-y-2">
              {weights.map((weight) => (
                <div
                  key={weight}
                  className="bg-muted/40 p-3 rounded-lg"
                  style={{
                    fontFamily: name,
                    fontWeight:
                      weight === "Regular" ? "normal" : weight.toLowerCase(),
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Aa Bb Cc 123</span>
                    <Badge variant="secondary">{weight}</Badge>
                  </div>
                </div>
              ))}
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
                <code className="truncate">{cssImport}</code>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-6 w-6 ml-2 flex-shrink-0"
                  onClick={() => handleCopy("import", cssImport)}
                >
                  {copied === "import" ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>

              <div className="bg-muted/40 p-3 rounded-lg text-xs flex justify-between items-center">
                <code className="truncate">{cssUsage}</code>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-6 w-6 ml-2 flex-shrink-0"
                  onClick={() => handleCopy("usage", cssUsage)}
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
            onClick={() => handleCopy("usage", cssUsage)}
          >
            {copied === "usage" ? (
              <Check className="h-4 w-4 mr-2" />
            ) : (
              <Copy className="h-4 w-4 mr-2" />
            )}
            Copier CSS
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
