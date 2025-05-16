"use client"

import { BackHome } from "@/components/back-home"
import { Button } from "@/components/shadcn/button"
import { Input } from "@/components/shadcn/input"
import { Label } from "@/components/shadcn/label"
import { Link, useRouter } from "@/i18n/navigation"
import { providerAction, signInAction } from "@/lib/actions/auth.action"
import { useLogo } from "@/lib/hooks/use-logo"
import { SignInSchema } from "@/lib/schemas/signIn.schema"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useActionState, useState } from "react"
import { FaGithub, FaGoogle } from "react-icons/fa"
import { toast } from "sonner"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()
  const [isBackHome, setIsBackHome] = useState(false)
  const [isGoSignUp, setIsGoSignUp] = useState(false)
  const { form } = SignInSchema()
  const t = useTranslations("Login")

  const [_, formAction, isSubmitting] = useActionState(
    async (state: SignInResult, formData: FormData): Promise<SignInResult> => {
      const payload = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      }
      const result = await signInAction(payload)
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
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <BackHome
        isLoading={isBackHome}
        onFinishLoading={() => setIsBackHome(false)}
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
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <span className="sr-only">Jos Inc.</span>
            </Link>
            <h1 className="text-xl font-bold">{t("welcome")}</h1>
            <div className="text-center text-sm">
              {t("dontHaveAccount")} <br />
              <Button
                variant="link"
                onClick={() => {
                  setIsGoSignUp(true)
                  router.push("/sign-up")
                }}
                className={cn(isGoSignUp && "animate-pulse")}
              >
                {t("signUp")}
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">{t("email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                {...form.register("email")}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">{t("password")}</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                {...form.register("password")}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("loading")}
                </>
              ) : (
                t("login")
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
              <FaGithub />
              Github
            </Button>
            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={() => providerAction("google")}
            >
              <FaGoogle />
              Google
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
