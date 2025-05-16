"use client"

import { Badge } from "@/components/shadcn/badge"
import { Button } from "@/components/shadcn/button"
import { Card, CardContent } from "@/components/shadcn/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState } from "react"
import { projects } from "../data/projects.data"

export function ProjectsSection() {
  const t = useTranslations("Home.sections.projects")
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  )

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.tags.includes(activeFilter))
    : projects

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={activeFilter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(null)}
            className="rounded-full"
          >
            {t("filters.all")}
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={activeFilter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={cn(
                  "h-full overflow-hidden transition-all duration-300 hover:shadow-lg",
                  project.featured && "border-primary/50"
                )}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={t(`items.${project.id}.title`)}
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                  {project.featured && (
                    <Badge className="absolute top-2 right-2">
                      {t("badges.featured")}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`items.${project.id}.title`)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t(`items.${project.id}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Github size={16} />
                          <span>{t("buttons.code")}</span>
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink size={16} />
                          <span>{t("buttons.demo")}</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
