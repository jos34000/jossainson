"use client"
import { LibraryImageItem } from "@/components/library/library-image-item"
import { LibrarySectionTitle } from "@/components/library/library-section-title"
import { useTranslations } from "next-intl"

interface ImagesSectionProps {
  searchQuery: string
  filters: string[]
}

export function ImagesSection({
  searchQuery,
  filters,
}: Readonly<ImagesSectionProps>) {
  const t = useTranslations("library.images")

  const images = [
    {
      id: "human-quality",
      name: t("humanQuality.name"),
      description: t("humanQuality.description"),
      path: "/static/Skills/Quality-1.png",
      category: t("category.illustrations"),
      tags: [t("tags.quality"), t("tags.human"), t("tags.skill")],
    },
    {
      id: "human-quality-2",
      name: t("humanQuality2.name"),
      description: t("humanQuality2.description"),
      path: "/static/Skills/Quality-2.png",
      category: t("category.illustrations"),
      tags: [t("tags.quality"), t("tags.human"), t("tags.skill")],
    },
    {
      id: "techno-back",
      name: t("backendTech.name"),
      description: t("backendTech.description"),
      path: "/static/Skills/Backend.png",
      category: t("category.technologies"),
      tags: [t("tags.backend"), t("tags.technology"), t("tags.development")],
    },
    {
      id: "devops",
      name: t("devops.name"),
      description: t("devops.description"),
      path: "/static/Skills/Dev-Ops.png",
      category: t("category.technologies"),
      tags: [t("tags.devops"), t("tags.tools"), t("tags.development")],
    },
    {
      id: "os",
      name: t("os.name"),
      description: t("os.description"),
      path: "/static/Skills/OS.png",
      category: t("category.technologies"),
      tags: [t("tags.os"), t("tags.system"), t("tags.operating")],
    },
    {
      id: "technos-front",
      name: t("frontendTech.name"),
      description: t("frontendTech.description"),
      path: "/static/Skills/Frontend.png",
      category: t("category.technologies"),
      tags: [t("tags.frontend"), t("tags.technology"), t("tags.development")],
    },
  ]

  const filteredImages = images.filter((image) => {
    const matchesSearch =
      image.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )

    const matchesFilters =
      filters.length === 0 ||
      filters.some(
        (filter) => image.category.toLowerCase() === filter.toLowerCase()
      )

    return matchesSearch && matchesFilters
  })

  return (
    <section className="mb-12">
      <LibrarySectionTitle title={t("title")} description={t("description")} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <LibraryImageItem
            key={image.id}
            title={image.name}
            description={image.description}
            category={image.category}
            path={image.path}
            tags={image.tags}
          />
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          {t("noResults")}
        </div>
      )}
    </section>
  )
}
