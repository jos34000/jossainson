"use server"

import ContactRequestEmail from "@/lib/mails/contact.mail"
import { sendEmail } from "@/lib/mails/sendEmail"
import ThankYouContactEmail from "@/lib/mails/thanks.mail"

export async function sendContactEmail({
  email,
  reason,
  message,
}: {
  email: string
  reason: string
  message: string
}) {
  try {
    await sendEmail(
      "jocelynsainson@icloud.com",
      reason,
      await ContactRequestEmail({
        senderEmail: email,
        reason,
        message,
      })
    )
    await sendEmail(
      email,
      "Merci pour votre message — je vous réponds très vite !",
      await ThankYouContactEmail({ email, message, reason })
    )
    return { success: true }
  } catch (error) {
    console.error("Error sending contact email:", error)
    return { success: false }
  }
}
