import { useTranslations } from "next-intl"

export const useCarouselData = () => {
  const t = useTranslations("Home.sections.skills.cards")

  return [
    {
      category: t("frontend"),
      title: "",
      src: "/static/Skills/Frontend.png",
    },
    {
      category: t("backend"),
      title: "",
      src: "/static/Skills/Backend.png",
    },
    {
      category: t("devops"),
      title: "",
      src: "/static/Skills/Dev-Ops.png",
    },
    {
      category: t("os"),
      title: "",
      src: "/static/Skills/OS.png",
    },
    {
      category: t("qualities"),
      title: "",
      src: "/static/Skills/Quality-1.png",
    },
    {
      category: t("qualities"),
      title: "",
      src: "/static/Skills/Quality-2.png",
    },
  ]
}
