"use server"
import { auth } from "@/lib/auth/auth"
import { headers } from "next/headers"

export const signUpAction = async (payload: SignUpPayload) => {
  try {
    const session = await auth.api.signUpEmail({
      body: {
        email: payload.email,
        password: payload.password,
        name: payload.name,
        username: payload.username,
        firstName: payload.firstName,
        lastName: payload.lastName,
        initials: `${payload.firstName.charAt(0).toUpperCase()}${payload.lastName.charAt(0).toUpperCase()}`,
      },

      headers: await headers(),
    })
    return { success: true, session }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
}

export const signInAction = async (payload: SignInPayload) => {
  try {
    const session = await auth.api.signInEmail({
      body: { email: payload.email, password: payload.password },
      headers: await headers(),
    })
    return { success: true, session }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
}

export const providerAction = async (provider: Provider) => {
  try {
    const session = await auth.api.signInSocial({
      body: { provider: provider },
    })
    return { success: true, session }
  } catch (error) {
    return { success: false, error: (error as Error).message }
  }
}
