"use client"

import { Check, Moon, Sun } from "lucide-react"
import { useTranslations } from "next-intl"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu"
import { useThemeSwitch } from "@/lib/hooks/use-themeSwitch"
import { cn } from "@/lib/utils"

type ToggleProps = {
  direction?: "top" | "right" | "bottom" | "left"
  orientation?: "vertical" | "horizontal"
}

type ThemeType = "light" | "dark" | "system"

type ThemeOption = {
  value: ThemeType
  label: string
}

export const ThemeToggle = ({
  direction = "bottom",
  orientation = "vertical",
}: ToggleProps) => {
  const { theme, switchTheme, isPending } = useThemeSwitch()
  const t = useTranslations("Common")

  const isVerticalDirection = direction === "top" || direction === "bottom"

  const themes: ThemeOption[] = [
    { value: "light", label: t("themes.light") },
    { value: "dark", label: t("themes.dark") },
    { value: "system", label: t("themes.system") },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="relative size-full flex items-center justify-center transition-colors hover:opacity-70 cursor-pointer"
          disabled={isPending}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t("themes.toggleTheme")}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isVerticalDirection ? "center" : "end"}
        alignOffset={isVerticalDirection ? 0 : -5}
        side={direction}
        className={cn(
          "min-w-[120px] h-full",
          orientation === "horizontal" && "flex flex-row items-center gap-2 p-2"
        )}
      >
        {themes.map((themeOption) => (
          <div key={themeOption.value}>
            <DropdownMenuItem
              onClick={() => switchTheme(themeOption.value)}
              className={cn(
                "flex items-center justify-between px-2 py-2 cursor-pointer",
                orientation === "horizontal" && "flex-1",
                theme === themeOption.value && "bg-accent"
              )}
              disabled={isPending || theme === themeOption.value}
            >
              {themeOption.label}
              {theme === themeOption.value && (
                <Check className="h-4 w-4 ml-2" />
              )}
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
