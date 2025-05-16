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
import { Check, Copy, Download, Link } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface LibraryImageItemProps {
  title: string
  description: string
  category: string
  path: string
  tags: string[]
}

export function LibraryImageItem({
  title,
  description,
  category,
  path,
  tags,
}: Readonly<LibraryImageItemProps>) {
  const [copied, setCopied] = useState<"path" | "html" | null>(null)

  const handleCopy = (type: "path" | "html", text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const htmlCode = `<img src="${path}" alt="${title}" />`

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
              <CardTitle className="text-lg">{title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            </div>
            <Badge variant="outline">{category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="bg-muted/40 rounded-lg p-4 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={path || "/placeholder.svg"}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="bg-muted/40 p-3 rounded-lg text-xs flex justify-between items-center">
              <code className="truncate">{path}</code>
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6 ml-2 flex-shrink-0"
                onClick={() => handleCopy("path", path)}
              >
                {copied === "path" ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-2 flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleCopy("html", htmlCode)}
          >
            {copied === "html" ? (
              <Check className="h-4 w-4 mr-2" />
            ) : (
              <Link className="h-4 w-4 mr-2" />
            )}
            Copier HTML
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={path} download target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-2" />
              Télécharger
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
