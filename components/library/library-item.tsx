"use client"

import { Badge } from "@/components/shadcn/badge"
import { Button } from "@/components/shadcn/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/tabs"
import { motion } from "framer-motion"
import { Check, Code, Copy, ExternalLink } from "lucide-react"
import * as React from "react"
import { useState } from "react"

interface Tag {
  label: string
  variant: "default" | "secondary" | "outline"
}

interface LibraryItemProps {
  title: string
  description: string
  category: string
  preview: () => React.ReactNode
  code: string
  usage: string
  tags?: Tag[]
}

export function LibraryItem({
  title,
  description,
  category,
  preview,
  code,
  usage,
  tags,
}: Readonly<LibraryItemProps>) {
  const [copied, setCopied] = useState<"code" | "usage" | null>(null)

  const handleCopy = (type: "code" | "usage", text: string) => {
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
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
              {tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant={tag.variant}>
                      {tag.label}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <Badge variant="outline">{category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="bg-muted/40 rounded-lg p-4 flex items-center justify-center min-h-[100px]">
            {preview()}
          </div>

          <Tabs defaultValue="code" className="mt-4">
            <TabsList className="w-full">
              <TabsTrigger value="code" className="flex-1">
                <Code className="h-4 w-4 mr-2" />
                Code
              </TabsTrigger>
              <TabsTrigger value="usage" className="flex-1">
                <ExternalLink className="h-4 w-4 mr-2" />
                Usage
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code" className="mt-2">
              <div className="relative">
                <pre className="bg-muted/40 p-4 rounded-lg text-xs overflow-x-auto max-h-[200px]">
                  {code}
                </pre>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8"
                  onClick={() => handleCopy("code", code)}
                >
                  {copied === "code" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="usage" className="mt-2">
              <div className="relative">
                <pre className="bg-muted/40 p-4 rounded-lg text-xs overflow-x-auto max-h-[200px]">
                  {usage}
                </pre>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8"
                  onClick={() => handleCopy("usage", usage)}
                >
                  {copied === "usage" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="pt-2 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleCopy("code", code)}
          >
            {copied === "code" ? (
              <Check className="h-4 w-4 mr-2" />
            ) : (
              <Copy className="h-4 w-4 mr-2" />
            )}
            Copier
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
