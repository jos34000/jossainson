"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import { z } from "zod"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select"
import { Textarea } from "@/components/shadcn/textarea"
import { sendContactEmail } from "@/lib/actions/sendEmail.action"
import { contactStepSchema } from "@/lib/schemas/contacting.schema"
import { cn } from "@/lib/utils"

import { Button } from "../shadcn/button"

type ContactDialogProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  email: string
  onSubmit: (data: { email: string; message: string; reason: string }) => void
}

export const ContactDialog = ({
  isOpen,
  onOpenChange,
  email,
  onSubmit,
}: ContactDialogProps) => {
  const t = useTranslations("Home.sections.contact.dialog")
  const [message, setMessage] = useState("")
  const [reason, setReason] = useState("")
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateStep = () => {
    try {
      if (step === 1) {
        contactStepSchema.step1.parse({ message })
      } else if (step === 2) {
        if (!reason) {
          setErrors({ reason: t("form.reason.error") })
          return false
        }
        contactStepSchema.step2.parse({ reason })
      } else if (step === 3) {
        contactStepSchema.step3.parse({ email, message, reason })
      }
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (typeof err.path[0] === "string") {
            newErrors[err.path[0]] = t(`form.${err.path[0]}.error`)
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1)
    }
  }

  const prevStep = () => setStep(step - 1)

  const handleSubmit = async () => {
    if (validateStep()) {
      onSubmit({ email, message, reason })
      await sendContactEmail({
        email,
        reason,
        message,
      })

      setStep(1)
      setMessage("")
      setReason("")
      setErrors({})
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-neutral-950 text-neutral-200 rounded-lg border border-neutral-800 shadow-2xl max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 pb-2">
            {t(`steps.${step}.title`)}
          </DialogTitle>
          <DialogDescription className="text-neutral-500 text-sm">
            {t(`steps.${step}.description`)}
          </DialogDescription>
        </DialogHeader>
        <div className="my-6">
          {step === 1 && (
            <div>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("form.message.placeholder")}
                className={`bg-neutral-950 border-neutral-800 text-neutral-200 rounded-lg focus:ring-2 focus:ring-teal-500 min-h-[150px] placeholder:text-neutral-700 ${
                  errors.message ? "border-red-500" : "border-neutral-800"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
          )}
          {step === 2 && (
            <div>
              <Select onValueChange={setReason}>
                <SelectTrigger
                  className={cn(
                    "bg-neutral-950 text-neutral-200 rounded-lg transition-all duration-300",
                    errors.reason ? "border-red-500" : "border-neutral-800",
                    "hover:border-sky-600 focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  )}
                >
                  <SelectValue placeholder={t("form.reason.placeholder")} />
                </SelectTrigger>
                <SelectContent className="bg-neutral-950 border-neutral-800 text-neutral-200">
                  <SelectItem value="job">
                    {t("form.reason.options.job")}
                  </SelectItem>
                  <SelectItem value="collaboration">
                    {t("form.reason.options.collaboration")}
                  </SelectItem>
                  <SelectItem value="suggestion">
                    {t("form.reason.options.suggestion")}
                  </SelectItem>
                  <SelectItem value="other">
                    {t("form.reason.options.other")}
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.reason && (
                <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
              )}
            </div>
          )}
          {step === 3 && (
            <div className="space-y-3 text-sm bg-neutral-950 border border-neutral-800 p-4 rounded-lg">
              <p>
                <strong className="text-neutral-200">
                  {t("form.preview.email")}:
                </strong>{" "}
                <span className="text-neutral-500">{email}</span>
              </p>
              <p>
                <strong className="text-neutral-200">
                  {t("form.preview.message")}:
                </strong>{" "}
                <span className="text-neutral-500">{message}</span>
              </p>
              <p>
                <strong className="text-neutral-200">
                  {t("form.preview.reason")}:
                </strong>{" "}
                <span className="text-neutral-500">{reason}</span>
              </p>
            </div>
          )}
        </div>
        <DialogFooter className="flex justify-between">
          {step > 1 && (
            <Button
              onClick={prevStep}
              className="bg-neutral-950 border hover:border-indigo-500 text-neutral-200 rounded-lg hover:bg-neutral-900 px-6 py-2 transition-colors duration-300"
            >
              {t("buttons.back")}
            </Button>
          )}
          {step < 3 ? (
            <Button
              onClick={nextStep}
              className="bg-neutral-950 border hover:border-sky-500 text-neutral-200 rounded-lg  hover:bg-neutral-900 px-6 py-2 transition-all duration-300"
            >
              {t("buttons.next")}
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-neutral-950 border hover:border-sky-500 text-neutral-200 rounded-lg hover:bg-neutral-900 px-6 py-2 transition-all duration-300"
            >
              {t("buttons.send")}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
