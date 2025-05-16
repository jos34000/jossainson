"use client"
import { LibraryColorItem } from "@/components/library/library-color-item"
import { LibrarySectionTitle } from "@/components/library/library-section-title"
import { useTranslations } from "next-intl"

interface ColorsSectionProps {
  searchQuery: string
  filters: string[]
}

export function ColorsSection({
  searchQuery,
  filters,
}: Readonly<ColorsSectionProps>) {
  const t = useTranslations("Library.colors")

  const colors = [
    {
      id: "primary",
      name: t("items.primary.name"),
      description: t("items.primary.description"),
      category: t("categories.Base"),
      lightValue: "oklch(0 0 0)",
      darkValue: "oklch(1 0 0)",
      cssVariable: "var(--primary)",
      usage: "text-primary, bg-primary, border-primary",
    },
    {
      id: "secondary",
      name: t("items.secondary.name"),
      description: t("items.secondary.description"),
      category: t("categories.Base"),
      lightValue: "oklch(0.94 0 0)",
      darkValue: "oklch(0.25 0 0)",
      cssVariable: "var(--secondary)",
      usage: "text-secondary, bg-secondary, border-secondary",
    },
    {
      id: "accent",
      name: t("items.accent.name"),
      description: t("items.accent.description"),
      category: t("categories.Base"),
      lightValue: "oklch(0.94 0 0)",
      darkValue: "oklch(0.32 0 0)",
      cssVariable: "var(--accent)",
      usage: "text-accent, bg-accent, border-accent",
    },
    {
      id: "background",
      name: t("items.background.name"),
      description: t("items.background.description"),
      category: t("categories.Background"),
      lightValue: "oklch(0.99 0 0)",
      darkValue: "oklch(0 0 0)",
      cssVariable: "var(--background)",
      usage: "bg-background",
    },
    {
      id: "foreground",
      name: t("items.foreground.name"),
      description: t("items.foreground.description"),
      category: t("categories.Text"),
      lightValue: "oklch(0 0 0)",
      darkValue: "oklch(1 0 0)",
      cssVariable: "var(--foreground)",
      usage: "text-foreground",
    },
    {
      id: "muted",
      name: t("items.muted.name"),
      description: t("items.muted.description"),
      category: t("categories.Text"),
      lightValue: "oklch(0.97 0 0)",
      darkValue: "oklch(0.23 0 0)",
      cssVariable: "var(--muted)",
      usage: "bg-muted, text-muted-foreground",
    },
    {
      id: "border",
      name: t("items.border.name"),
      description: t("items.border.description"),
      category: t("categories.Border"),
      lightValue: "oklch(0.92 0 0)",
      darkValue: "oklch(0.26 0 0)",
      cssVariable: "var(--border)",
      usage: "border-border",
    },
    {
      id: "destructive",
      name: "Destructive",
      description: "Couleur pour les actions destructives",
      category: t("categories.Base"),
      lightValue: "oklch(0.63 0.19 23.03)",
      darkValue: "oklch(0.69 0.2 23.91)",
      cssVariable: "var(--destructive)",
      usage: "text-destructive, bg-destructive",
    },
    {
      id: "ring",
      name: "Ring",
      description: "Couleur pour les focus et outlines",
      category: t("categories.Border"),
      lightValue: "oklch(0 0 0)",
      darkValue: "oklch(0.72 0 0)",
      cssVariable: "var(--ring)",
      usage: "ring, outline-ring",
    },
    {
      id: "input",
      name: "Input",
      description: "Couleur pour les champs de saisie",
      category: t("categories.Border"),
      lightValue: "oklch(0.94 0 0)",
      darkValue: "oklch(0.32 0 0)",
      cssVariable: "var(--input)",
      usage: "border-input",
    },
  ]

  const filteredColors = colors.filter((color) => {
    const matchesSearch =
      color.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      color.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilters =
      filters.length === 0 ||
      filters.some(
        (filter) => color.category.toLowerCase() === filter.toLowerCase()
      )

    return matchesSearch && matchesFilters
  })

  return (
    <section className="mb-12">
      <LibrarySectionTitle title={t("title")} description={t("description")} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColors.map((color) => (
          <LibraryColorItem
            key={color.id}
            name={color.name}
            description={color.description}
            category={color.category}
            lightValue={color.lightValue}
            darkValue={color.darkValue}
            cssVariable={color.cssVariable}
            usage={color.usage}
          />
        ))}
      </div>

      {filteredColors.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          {t("noResults")}
        </div>
      )}
    </section>
  )
}
