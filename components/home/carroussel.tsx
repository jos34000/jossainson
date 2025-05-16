"use client"
import { Card, Carousel } from "@/components/shadcn/cards-carousel"
import { useTranslations } from "next-intl"
import { useCarouselData } from "../data/carrousel.data"

export function Carroussel() {
  const t = useTranslations("Home.sections.skills")
  const data = useCarouselData()
  const cards = data.map((card) => <Card key={card.src} card={card} />)

  return (
    <div className="max-w-7xl mx-auto py-5 px-4 md:px-8 lg:px-10 " id="skills">
      <h2 className="text-lg md:text-4xl mb-2  text-black dark:text-white max-w-4xl">
        {t("title")}
      </h2>
      <p className="text-zinc-400/80 dark:text-zinc-500/90 text-sm md:text-base max-w-sm">
        {t("description")}
      </p>
      <Carousel items={cards} />
    </div>
  )
}
