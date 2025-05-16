import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const SignInSchema = () => {
  const t = useTranslations("Login")

  const formSchema = z.object({
    email: z.string().email(t("validation.email")),
    password: z.string().min(8, t("validation.password")),
  })

  const form = useForm<SignInPayload>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return { form, formSchema }
}
