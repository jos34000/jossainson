import { ScrollObserver } from "@/components/scroll-observer"
import { ThemeProvider } from "@/components/themes/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { NextIntlClientProvider, useLocale } from "next-intl"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import { Toaster } from "sonner"
import "./globals.css"
import Loading from "./loading"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Jocelyn Sainson | Full-Stack Developer",
  description: "Portfolio de Jocelyn Sainson, développeur Full-Stack",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", type: "image/png" },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = useLocale()
  const messages = require(`@/messages/${locale}.json`)

  return (
    <html
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body key={locale}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Suspense fallback={<Loading />}>
              <Analytics />
              <SpeedInsights />
              <ScrollObserver />
              {children}
              <Toaster richColors position="top-right" />
            </Suspense>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
