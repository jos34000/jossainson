"use client"
import { LibraryItem } from "@/components/library/library-item"
import { LibrarySectionTitle } from "@/components/library/library-section-title"
import { Button } from "@/components/shadcn/button"
import { Card, CardContent } from "@/components/shadcn/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/tabs"
import { useTranslations } from "next-intl"

const ButtonPreview = () => <Button>Click me</Button>

const CardPreview = () => (
  <Card>
    <CardContent className="p-6">Contenu de la carte</CardContent>
  </Card>
)

const TabsPreview = () => (
  <Tabs defaultValue="tab1">
    <TabsList>
      <TabsTrigger value="tab1">Onglet 1</TabsTrigger>
      <TabsTrigger value="tab2">Onglet 2</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">Contenu de l&apos;onglet 1</TabsContent>
    <TabsContent value="tab2">Contenu de l&apos;onglet 2</TabsContent>
  </Tabs>
)

interface ComponentsSectionProps {
  searchQuery: string
  filters: string[]
}

export function ComponentsSection({
  searchQuery,
  filters,
}: Readonly<ComponentsSectionProps>) {
  const t = useTranslations("library.components")

  const components = [
    {
      id: "button",
      name: t("items.button.name"),
      description: t("items.button.description"),
      category: "Interaction",
      type: t("types.UI"),
      status: t("status.Updated"),
      complexity: t("complexity.Simple"),
      code: `<Button>Click me</Button>`,
      preview: ButtonPreview,
      usage: `import { Button } from "@/components/shadcn/button"

export function MyComponent() {
  return <Button>Click me</Button>
}`,
    },
    {
      id: "card",
      name: t("items.card.name"),
      description: t("items.card.description"),
      category: "Layout",
      type: t("types.Layout"),
      status: t("status.New"),
      complexity: t("complexity.Simple"),
      code: `<Card>
  <CardContent className="p-6">
    Contenu de la carte
  </CardContent>
</Card>`,
      preview: CardPreview,
      usage: `import { Card, CardContent } from "@/components/shadcn/card"

export function MyComponent() {
  return (
    <Card>
      <CardContent>Contenu de la carte</CardContent>
    </Card>
  )
}`,
    },
    {
      id: "tabs",
      name: t("items.tabs.name"),
      description: t("items.tabs.description"),
      category: "Navigation",
      type: t("types.Navigation"),
      status: t("status.Updated"),
      complexity: t("complexity.Moderate"),
      code: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Onglet 1</TabsTrigger>
    <TabsTrigger value="tab2">Onglet 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Contenu de l'onglet 1</TabsContent>
  <TabsContent value="tab2">Contenu de l'onglet 2</TabsContent>
</Tabs>`,
      preview: TabsPreview,
      usage: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/tabs"

export function MyComponent() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Onglet 1</TabsTrigger>
        <TabsTrigger value="tab2">Onglet 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Contenu de l'onglet 1</TabsContent>
      <TabsContent value="tab2">Contenu de l'onglet 2</TabsContent>
    </Tabs>
  )
}`,
    },
  ]

  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilters =
      filters.length === 0 ||
      filters.some(
        (filter) =>
          component.type === filter ||
          component.status === filter ||
          component.complexity === filter
      )

    return matchesSearch && matchesFilters
  })

  return (
    <section className="mb-12">
      <LibrarySectionTitle title={t("title")} description={t("description")} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((component) => (
          <LibraryItem
            key={component.id}
            title={component.name}
            description={component.description}
            category={component.category}
            preview={component.preview}
            code={component.code}
            usage={component.usage}
            tags={[
              { label: component.type, variant: "default" },
              { label: component.status, variant: "outline" },
              { label: component.complexity, variant: "secondary" },
            ]}
          />
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          {t("noResults")}
        </div>
      )}
    </section>
  )
}
