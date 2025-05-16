import {
  AudioWaveform,
  BookOpen,
  Command,
  Frame,
  GalleryVerticalEnd,
  Library,
  Presentation,
  Settings2,
} from "lucide-react"

export const createSidebarData = () => ({
  user: {
    name: "",
    email: "",
    avatar: "",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Library",
      url: "/dashboard/library",
      icon: Library,
      isActive: true,
      items: [
        {
          title: "Images",
          url: "/dashboard/library",
        },
        {
          title: "Starred",
          url: "/dashboard/starred",
        },
        {
          title: "Settings",
          url: "/dashboard/settings",
        },
      ],
    },
    {
      title: "Articles",
      url: "/dashboard/articles",
      icon: Presentation,
      items: [
        {
          title: "News",
          url: "/dashboard/articles/news",
        },
        {
          title: "Tutorials",
          url: "/dashboard/articles/tutorials",
        },
      ],
    },
    {
      title: "Documentation",
      url: "/dashboard/docs",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/dashboard/docs/introduction",
        },
        {
          title: "Get Started",
          url: "/dashboard/docs/get-started",
        },
        {
          title: "Tutorials",
          url: "/dashboard/docs/tutorials",
        },
        {
          title: "Changelog",
          url: "/dashboard/docs/changelog",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/settings/general",
        },
        {
          title: "Team",
          url: "/dashboard/settings/team",
        },
        {
          title: "Billing",
          url: "/dashboard/settings/billing",
        },
        {
          title: "Limits",
          url: "/dashboard/settings/limits",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Exoskel",
      url: "/dashboard/projects/exoskel",
      icon: Frame,
    },
  ],
})
