import { useTheme } from "next-themes"
import { useTransition } from "react"

type ThemeType = "light" | "dark" | "system"

export const useThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const [isPending, startTransition] = useTransition()

  const switchTheme = (newTheme: ThemeType) => {
    if (newTheme === theme) return

    startTransition(() => {
      setTheme(newTheme)
    })
  }

  return {
    switchTheme,
    theme,
    isPending,
  }
}
