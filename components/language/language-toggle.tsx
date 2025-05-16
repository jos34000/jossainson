"use client"

import { Check, Languages } from "lucide-react"
import { useTranslations } from "next-intl"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu"
import { useLanguageSwitch } from "@/lib/hooks/use-languageSwitch"
import { cn } from "@/lib/utils"

type ToggleProps = {
  direction?: "top" | "right" | "bottom" | "left"
  orientation?: "vertical" | "horizontal"
}

type Language = {
  code: SupportedLanguage
  label: string
}

export const LanguageToggle = ({
  direction = "bottom",
  orientation = "vertical",
}: ToggleProps) => {
  const t = useTranslations("Common")
  const { switchLanguage, currentLocale, isPending } = useLanguageSwitch()

  const languages: Language[] = [
    { code: "fr", label: t("languages.fr") },
    { code: "en", label: t("languages.en") },
    { code: "es", label: t("languages.es") },
  ]

  const isVerticalDirection = direction === "top" || direction === "bottom"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="relative size-full flex items-center justify-center transition-colors hover:opacity-70 cursor-pointer"
          disabled={isPending}
        >
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("languages.changeLanguage")}</span>
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
        {languages.map((lang) => (
          <div key={lang.code}>
            <DropdownMenuItem
              onClick={() => switchLanguage(lang.code)}
              className={cn(
                "flex items-center justify-between px-2 py-2 cursor-pointer",
                orientation === "horizontal" && "flex-1",
                currentLocale === lang.code && "bg-accent"
              )}
              disabled={isPending || currentLocale === lang.code}
            >
              {lang.label}
              {currentLocale === lang.code && (
                <Check className="h-4 w-4 ml-2" />
              )}
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
