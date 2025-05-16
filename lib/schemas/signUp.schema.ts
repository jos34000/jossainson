import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const SignUpSchema = () => {
  const t = useTranslations("SignUp")

  const formSchema = z
    .object({
      firstName: z.string().min(2, t("validation.firstNameLength")),
      lastName: z.string().min(2, t("validation.lastNameLength")),
      email: z.string().email(t("validation.email")),
      username: z.string().min(4, t("validation.username")),
      initials: z.string(),
      password: z.string().min(8, t("validation.password")),
      passwordConfirmation: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: t("validation.passwordConfirmation"),
      path: ["passwordConfirmation"],
    })

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      initials: "",
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    },
  })

  return { form, formSchema }
}
