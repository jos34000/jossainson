import { useRouter } from "@/i18n/navigation"
import { authClient } from "@/lib/auth/auth-client"
import { useTranslations } from "next-intl"
import { toast } from "sonner"

export const useSignOut = () => {
  const t = useTranslations("SignOut")
  const router = useRouter()

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success(t("notifications.success"))
          router.push(`/login`)
        },
        onError: () => {
          toast.error(t("notifications.error"))
        },
      },
    })
  }

  return handleSignOut
}
