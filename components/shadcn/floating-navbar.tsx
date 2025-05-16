"use client"
import { Link, useRouter } from "@/i18n/navigation"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { useState } from "react"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[]
  className?: string
}) => {
  const router = useRouter()
  const t = useTranslations("Home")
  const tLogin = useTranslations("Login")
  const [isLoading, setIsLoading] = useState(false)
  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem: NavItem) => (
        <Link
          key={navItem.id}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 "
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm">
            {t(`nav.${navItem.id}`)}
          </span>
        </Link>
      ))}
      <div className="flex items-center space-x-2">
        <button
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full cursor-pointer"
          onClick={() => {
            setIsLoading(true)
            router.push("/login")
          }}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <span>{tLogin("login")}</span>
          )}
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent h-px" />
        </button>
      </div>
    </motion.div>
  )
}
