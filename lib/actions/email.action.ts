import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type OnboardingEmailData = {
  userId: string
  email: string
  firstName: string
  lastName: string
  steps: Array<{
    step: string
    data: any
    completedAt: Date
  }>
}

export const sendOnboardingRecap = async (data: OnboardingEmailData) => {
  const { email, firstName, lastName, steps } = data

  const stepsHtml = steps
    .map(
      (step) => `
      <div style="margin-bottom: 20px;">
        <h3 style="margin: 0;">${step.step}</h3>
        <p style="margin: 5px 0;">Complété le : ${step.completedAt.toLocaleDateString()}</p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
          ${JSON.stringify(step.data, null, 2)}
        </pre>
      </div>
    `
    )
    .join("")

  await resend.emails.send({
    from: "onboarding@votredomaine.com",
    to: email,
    subject: "Récapitulatif de votre onboarding",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h1>Bonjour ${firstName} ${lastName},</h1>
        <p>Voici un récapitulatif des informations que vous avez fournies lors de votre onboarding :</p>
        ${stepsHtml}
        <p>Cordialement,<br>L'équipe</p>
      </div>
    `,
  })
}
