"use client"

import { Button } from "@/components/shadcn/button"
import { motion } from "framer-motion"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export function AboutSection() {
  const t = useTranslations("Home.sections.about")

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 blur-lg" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src="/static/profil.jpg"
                  alt="Jocelyn Sainson"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("title")}
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>{t("paragraphs.intro")}</p>
              <p>{t("paragraphs.skills")}</p>
              <p>{t("paragraphs.hobbies")}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Download size={16} />
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center"
                >
                  {t("buttons.cv")}
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <a
                  href="https://github.com/jos34000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center"
                >
                  <Github size={16} />
                  {t("buttons.github")}
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <a
                  href="https://www.linkedin.com/in/jocelyn-sainson-42305920b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center"
                >
                  <Linkedin size={16} />
                  {t("buttons.linkedin")}
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <a
                  href="mailto:jocelynsainson@icloud.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center"
                >
                  <Mail size={16} />
                  {t("buttons.email")}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
