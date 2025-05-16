import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"

import { prisma } from "@/lib/db/client"
import { sendEmail } from "@/lib/mails/sendEmail"
import VerifyEmail from "@/lib/mails/verifyEmail.mail"

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  user: {
    deleteUser: {
      enabled: true,
    },
    additionalFields: {
      username: {
        type: "string",
        required: true,
        defaultValue: "",
      },
      firstName: {
        type: "string",
        required: true,
        defaultValue: "",
      },
      lastName: {
        type: "string",
        required: true,
        defaultValue: "",
      },
      initials: {
        type: "string",
        required: true,
        defaultValue: "",
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      const userAgent = request?.headers.get("user-agent")

      const ip =
        request?.headers.get("x-real-ip") ??
        request?.headers.get("x-forwarded-for")?.split(",")[0] ??
        request?.headers.get("x-client-ip") ??
        "Unknown"

      const UAParser = require("ua-parser-js")
      const parser = new UAParser(userAgent)

      const device = `${parser.getOS().name} ${parser.getOS().version}`
      const browser = `${parser.getBrowser().name} ${parser.getBrowser().version}`

      await sendEmail(
        user.email,
        "Vérifiez votre email",
        await VerifyEmail({
          verificationUrl: url,
          userFirstname: user.name,
          deviceInfo: {
            device,
            browser,
            ip: ip ?? "Unknown",
          },
        })
      )
    },
    autoSignInAfterVerification: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
})

type Session = typeof auth.$Infer.Session
