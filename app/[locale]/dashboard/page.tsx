"use client"
import { redirect } from "next/navigation"
import { useEffect } from "react"

import { Maintenance } from "@/components/shadcn/maintenance"
import { authClient } from "@/lib/auth/auth-client"
import { useSignOut } from "@/lib/hooks/use-signOut"

export default function DashboardPage() {
  useEffect(() => {
    const checkSession = async () => {
      const { data: session } = await authClient.getSession()
      if (!session) {
        redirect("/login")
      }
    }
    checkSession()
  }, [])
  const signOut = useSignOut()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Maintenance onBack={signOut} />
    </div>
  )
}
