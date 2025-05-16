"use client"

import type React from "react"

import { FilterPopover } from "@/components/library/filter-popover"
import { LibraryNav } from "@/components/library/library-nav"
import { ColorsSection } from "@/components/library/sections/colors-section"
import { ComponentsSection } from "@/components/library/sections/components-section"
import { FontsSection } from "@/components/library/sections/fonts-section"
import { IconsSection } from "@/components/library/sections/icons-section"
import { ImagesSection } from "@/components/library/sections/images-section"
import { Badge } from "@/components/shadcn/badge"
import { Button } from "@/components/shadcn/button"
import { Input } from "@/components/shadcn/input"
import { motion } from "framer-motion"
import { Search, X } from "lucide-react"
import { useState } from "react"

type Category = "components" | "images" | "icons" | "fonts" | "colors" | "all"

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState<string[]>([])

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter))
  }

  const clearFilters = () => {
    setFilters([])
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <LibraryNav
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="flex-1">
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Rechercher dans la bibliothèque..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <FilterPopover
                  selectedFilters={filters}
                  onFilterChange={setFilters}
                />
                {filters.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Effacer les filtres
                  </Button>
                )}
              </div>
            </div>

            {filters.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <Badge key={filter} variant="secondary" className="px-2 py-1">
                    {filter}
                    <button
                      onClick={() => removeFilter(filter)}
                      className="ml-2 hover:text-destructive focus:outline-none"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {(activeCategory === "all" || activeCategory === "components") && (
              <ComponentsSection searchQuery={searchQuery} filters={filters} />
            )}
            {(activeCategory === "all" || activeCategory === "images") && (
              <ImagesSection searchQuery={searchQuery} filters={filters} />
            )}
            {(activeCategory === "all" || activeCategory === "icons") && (
              <IconsSection searchQuery={searchQuery} filters={filters} />
            )}
            {(activeCategory === "all" || activeCategory === "fonts") && (
              <FontsSection searchQuery={searchQuery} filters={filters} />
            )}
            {(activeCategory === "all" || activeCategory === "colors") && (
              <ColorsSection searchQuery={searchQuery} filters={filters} />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
