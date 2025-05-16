"use client"

import {
  IconBriefcase,
  IconEdit,
  IconHome,
  IconLineHeight,
  IconMessage,
  IconUser,
} from "@tabler/icons-react"

export const defaultNavItems: NavItem[] = [
  {
    id: "home",
    name: "Home",
    link: "#home",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    id: "about",
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    id: "skills",
    name: "Skills",
    link: "#skills",
    icon: <IconEdit className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    id: "timeline",
    name: "Timeline",
    link: "#timeline",
    icon: (
      <IconLineHeight className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    id: "projects",
    name: "Projects",
    link: "#projects",
    icon: (
      <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    id: "contact",
    name: "Contact",
    link: "#contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
]
