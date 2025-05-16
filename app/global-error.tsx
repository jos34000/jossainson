"use client"

import { PremiumError } from "@/components/shadcn/premium-error"
import { ThemeProvider } from "@/components/themes/theme-provider"
import { useEffect } from "react"

interface GlobalErrorProps {
  readonly error: Error & { digest?: string }
  readonly reset: () => void
}

export default function GlobalError({
  error,
  reset,
}: Readonly<GlobalErrorProps>) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="fr">
      <body className="bg-black">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PremiumError
            title="Critical Error"
            message="An unexpected error has occurred on the server."
            actions={{
              primary: {
                label: "Try Again",
                onClick: reset,
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
