"use client"
import { LibraryFontItem } from "@/components/library/library-font-item"
import { LibrarySectionTitle } from "@/components/library/library-section-title"
import { useTranslations } from "next-intl"

interface FontsSectionProps {
  searchQuery: string
  filters: string[]
}

export const FontsSection = ({
  searchQuery,
  filters,
}: Readonly<FontsSectionProps>) => {
  const t = useTranslations("library.fonts")

  const fonts = [
    {
      id: "inter",
      name: "Inter",
      description: t("inter.description"),
      category: t("inter.category"),
      weights: ["Regular", "Medium", "Bold"],
      cssVariable: "var(--font-sans)",
      cssImport: `import { Inter } from "next/font/google"`,
      cssUsage: `font-family: var(--font-inter);`,
    },
    {
      id: "jetbrains-mono",
      name: "JetBrains Mono",
      description: t("jetbrainsMono.description"),
      category: t("jetbrainsMono.category"),
      weights: ["Regular", "Medium"],
      cssVariable: "var(--font-mono)",
      cssImport: `import { JetBrains_Mono } from "next/font/google"`,
      cssUsage: `font-family: var(--font-jetbrains);`,
    },
  ]

  const filteredFonts = fonts.filter((font) => {
    const matchesSearch =
      font.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      font.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilters =
      filters.length === 0 ||
      filters.some(
        (filter) => font.category.toLowerCase() === filter.toLowerCase()
      )

    return matchesSearch && matchesFilters
  })

  return (
    <section className="mb-12">
      <LibrarySectionTitle title={t("title")} description={t("description")} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFonts.map((font) => (
          <LibraryFontItem
            key={font.id}
            name={font.name}
            description={font.description}
            category={font.category}
            weights={font.weights}
            cssVariable={font.cssVariable}
            cssImport={font.cssImport}
            cssUsage={font.cssUsage}
          />
        ))}
      </div>

      {filteredFonts.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          {t("noResults")}
        </div>
      )}
    </section>
  )
}
