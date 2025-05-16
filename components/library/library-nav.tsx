"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import {
  ImagesIcon as Icons,
  ImageIcon,
  Layers,
  Palette,
  Type,
} from "lucide-react"

type Category = "components" | "images" | "icons" | "fonts" | "colors" | "all"

interface LibraryNavProps {
  activeCategory: Category
  onCategoryChange: (category: Category) => void
}

export function LibraryNav({
  activeCategory,
  onCategoryChange,
}: Readonly<LibraryNavProps>) {
  const categories = [
    { id: "all", name: "Tous les éléments", icon: Layers },
    { id: "components", name: "Composants", icon: Layers },
    { id: "images", name: "Images", icon: ImageIcon },
    { id: "icons", name: "Icônes", icon: Icons },
    { id: "fonts", name: "Typographie", icon: Type },
    { id: "colors", name: "Couleurs", icon: Palette },
  ]

  return (
    <nav className="w-full md:w-64 shrink-0">
      <div className="bg-card/30 backdrop-blur-md rounded-xl border border-border/50 overflow-hidden">
        <div className="p-4 border-b border-border/50">
          <h2 className="font-semibold">Catégories</h2>
        </div>
        <ul className="p-2">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <li key={category.id}>
                <button
                  onClick={() => onCategoryChange(category.id as Category)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-left transition-colors",
                    activeCategory === category.id
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-primary/5 text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
