type SignUpPayload = {
  email: string
  password: string
  name: string
  username: string
  firstName: string
  lastName: string
}

type SignUpFormValues = {
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
  passwordConfirmation: string
  initials: string
}

type SignUpResult = {
  success: boolean
  error: string | null
}

type SignInPayload = {
  email: string
  password: string
}

type SignInResult = {
  success: boolean
  error: string | null
}

type Provider =
  | "github"
  | "apple"
  | "discord"
  | "facebook"
  | "microsoft"
  | "google"
  | "spotify"
  | "twitch"
  | "twitter"
  | "dropbox"
  | "kick"
  | "linkedin"
  | "gitlab"
  | "tiktok"
  | "reddit"
  | "roblox"
  | "vk"
  | "zoom"
