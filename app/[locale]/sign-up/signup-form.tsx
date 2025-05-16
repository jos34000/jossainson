"use client"

import { BackHome } from "@/components/back-home"
import { Button } from "@/components/shadcn/button"
import { Input } from "@/components/shadcn/input"
import { Label } from "@/components/shadcn/label"
import { Link, useRouter } from "@/i18n/navigation"
import { providerAction, signUpAction } from "@/lib/actions/auth.action"
import { useLogo } from "@/lib/hooks/use-logo"
import { SignUpSchema } from "@/lib/schemas/signUp.schema"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useActionState, useState } from "react"
import { FaGithub, FaGoogle } from "react-icons/fa"
import { toast } from "sonner"

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const t = useTranslations("SignUp")
  const router = useRouter()
  const [isPending, setIsPending] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const { form } = SignUpSchema()

  const [_, formAction, isSubmitting] = useActionState(
    async (state: SignUpResult, formData: FormData): Promise<SignUpResult> => {
      const payload = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        name: `${formData.get("firstName")} ${formData.get("lastName")}`,
        username: formData.get("username") as string,
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
      }
      const result = await signUpAction(payload)
      if (result.success) {
        toast.success(t("notifications.success"))
        router.push("/login")
        return { success: true, error: null }
      } else {
        toast.error(result.error)
        return {
          success: false,
          error: result.error ?? t("notifications.genericError"),
        }
      }
    },
    { success: false, error: null }
  )

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <BackHome
        isLoading={isPending}
        onFinishLoading={() => setIsPending(false)}
      />
      <form action={formAction}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-28 items-center justify-center rounded-md">
                <Image
                  src={useLogo()}
                  alt="logo"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
              <span className="sr-only">Jos Inc.</span>
            </Link>
            <h1 className="text-xl font-bold">{t("welcome")}</h1>
            <div className="text-center text-sm">
              {t("alreadyHaveAccount")} <br />
              <Button
                variant="link"
                onClick={() => {
                  setIsRedirecting(true)
                  router.push("/login")
                }}
                className={cn(isRedirecting && "animate-pulse")}
              >
                {t("signIn")}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <Label htmlFor="firstName">{t("form.firstName")}</Label>
              <Input
                id="firstName"
                type="text"
                placeholder={t("form.placeholders.firstName")}
                {...form.register("firstName")}
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="lastName">{t("form.lastName")}</Label>
              <Input
                id="lastName"
                type="text"
                placeholder={t("form.placeholders.lastName")}
                {...form.register("lastName")}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="username">{t("form.username")}</Label>
              <Input
                id="username"
                type="text"
                placeholder={t("form.placeholders.username")}
                {...form.register("username")}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">{t("form.email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("form.placeholders.email")}
                {...form.register("email")}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">{t("form.password")}</Label>
              <Input
                id="password"
                type="password"
                placeholder={t("form.placeholders.password")}
                {...form.register("password")}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="passwordConfirmation">
                {t("form.confirmPassword")}
              </Label>
              <Input
                id="passwordConfirmation"
                type="password"
                placeholder={t("form.placeholders.password")}
                {...form.register("passwordConfirmation")}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("form.buttons.loading")}
                </>
              ) : (
                t("form.buttons.signUp")
              )}
            </Button>
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              {t("or")}
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={() => providerAction("github")}
            >
              <FaGithub className="mr-2 h-4 w-4" />
              {t("form.buttons.github")}
            </Button>
            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={() => providerAction("google")}
            >
              <FaGoogle className="mr-2 h-4 w-4" />
              {t("form.buttons.google")}
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        {t("termsAndPolicy.text")}{" "}
        <Link href="/">{t("termsAndPolicy.terms")}</Link>{" "}
        {t("termsAndPolicy.and")}{" "}
        <Link href="/">{t("termsAndPolicy.privacy")}</Link>.
      </div>
    </div>
  )
}
