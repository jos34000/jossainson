import { z } from "zod"

export const contactSchema = {
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must contain at least 10 characters"),
  reason: z.enum(["job", "collaboration", "suggestion", "other"], {
    required_error: "Please select a reason",
  }),
}

export const contactStepSchema = {
  step1: z.object({
    message: contactSchema.message,
  }),
  step2: z.object({
    reason: contactSchema.reason,
  }),
  step3: z.object({
    email: contactSchema.email,
    message: contactSchema.message,
    reason: contactSchema.reason,
  }),
}
