"use server"

import { cookies } from "next/headers"

const setCookie = async (name: string, value: string) => {
  const cookieStore = await cookies()
  cookieStore.set(name, value, {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  })
}

const getCookie = async (name: string) => {
  const cookieStore = await cookies()
  return cookieStore.get(name)?.value
}

const hasCookie = async (name: string) => {
  const cookieStore = await cookies()
  return cookieStore.has(name)
}

const deleteCookie = async (name: string) => {
  const cookieStore = await cookies()
  cookieStore.delete(name)
}

export const setOnboardingCookie = async () => {
  await setCookie("onboarding-completed", "true")
}

export const removeOnboardingCookie = async () => {
  await deleteCookie("onboarding-completed")
}

export const hasOnboardingCookie = async () => {
  return await hasCookie("onboarding-completed")
}
