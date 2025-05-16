"use client"

import { usePathname } from "next/navigation"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/shadcn/breadcrumb"

export const BreadcrumbNav = () => {
  const pathname = usePathname()

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment, index) => {
      return index !== 0 && index !== 2
    })
    .map((segment, index, array) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: `/${array.slice(0, index + 1).join("/")}`,
    }))

  if (!segments.length) return null

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => (
          <BreadcrumbItem key={segment.href}>
            {index === segments.length - 1 ? (
              <BreadcrumbPage>{segment.name}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href={segment.href}>
                {segment.name}
              </BreadcrumbLink>
            )}
            {index < segments.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
