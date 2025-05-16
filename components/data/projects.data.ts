export type Project = {
  id: "portfolio" | "exoskel"
  image: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "portfolio",
    image: "/static/Projects-screenshots/Portfolio.png",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Email",
      "Better Auth",
      "Translations",
    ],
    github: "https://github.com/jos34000/portfolio",
    demo: "https://jossainson.dev",
    featured: true,
  },
  {
    id: "exoskel",
    image: "/static/Projects-screenshots/Exoskel.png",
    tags: ["Next.js", "TypeScript", "Prisma"],
    github: "https://github.com/jos34000/exoskel",
    demo: "https://exoskel.jossainson.dev",
  },
]
