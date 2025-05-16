"use server"

import { ReactElement } from "react"
import { Resend } from "resend"

export const sendEmail = async (
  email: string,
  subject: string,
  mail: ReactElement
) => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: email,
    subject: subject,
    react: mail,
  })
}
