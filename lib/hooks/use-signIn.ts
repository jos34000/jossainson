import { useRouter } from "@/i18n/navigation"
import { authClient } from "@/lib/auth/auth-client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

type FormValues = {
  email: string
  password: string
}

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const t = useTranslations("Login")
  const router = useRouter()
  const formSchema = z.object({
    email: z.string().email(t("validation.email")),
    password: z.string().min(1, t("validation.password")),
  })

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true)
      const { error } = await authClient.signIn.email(
        {
          email: values.email,
          password: values.password,
          rememberMe: false,
        },
        {
          onRequest: () => setIsLoading(true),
          onResponse: () => setIsLoading(false),
          onError: (ctx: { error: Error }) => {
            toast.error(
              ctx.error.message ?? t("notifications.invalidCredentials")
            )
          },
          onSuccess: async () => {
            const { data: session } = await authClient.getSession()
            if (session) {
              toast.success(t("notifications.success"))
              router.push("/dashboard")
            } else {
              toast.error(t("notifications.invalidUsername"))
            }
          },
        }
      )
      if (error) {
        toast.error(error.message ?? t("notifications.genericError"))
      }
    } catch {
      toast.error(t("notifications.genericErrorLogin"))
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialSignIn = async (provider: "github" | "google") => {
    await authClient.signIn.social({
      provider,
      callbackURL: `/dashboard`,
    })
  }

  return {
    form,
    isLoading,
    onSubmit,
    handleSocialSignIn,
    setIsLoading,
  }
}
