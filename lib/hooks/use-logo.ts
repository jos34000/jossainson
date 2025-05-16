import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const useLogo = () => {
  const { theme } = useTheme()
<<<<<<< HEAD
  const [logo, setLogo] = useState("/static/Logos/logo-dark.png")
=======
  const [logo, setLogo] = useState("/static/logo-dark.png")
>>>>>>> 907bed09a76160ea7a26b81e284ff59cbc188af8

  useEffect(() => {
    if (!theme || theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "light"
        : "dark"
<<<<<<< HEAD
      setLogo(`/static/Logos/logo-${systemTheme}.png`)
      return
    }
    setLogo(`/static/Logos/logo-${theme === "dark" ? "light" : "dark"}.png`)
=======
      setLogo(`/static/logo-${systemTheme}.png`)
      return
    }
    setLogo(`/static/logo-${theme === "dark" ? "light" : "dark"}.png`)
>>>>>>> 907bed09a76160ea7a26b81e284ff59cbc188af8
  }, [theme])

  return logo
}
