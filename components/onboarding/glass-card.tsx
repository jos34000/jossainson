import { Spotlight } from "@/components/shadcn/spotlight"
import { FloatingElement } from "./floating-element"

export function GlassCard({
  children,
  className = "",
  interactive = true,
  intensity = 10,
}: {
  children: React.ReactNode
  className?: string
  interactive?: boolean
  intensity?: number
}) {
  return interactive ? (
    <FloatingElement intensity={intensity} className={className}>
      <div className="backdrop-blur-md bg-card/30 rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 rounded-xl border border-white/10 dark:border-black/10" />
        <div className="absolute inset-[1px] rounded-[10px] border border-black/5 dark:border-white/5" />
        <div className="absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]" />

        <div className="relative">{children}</div>
      </div>
    </FloatingElement>
  ) : (
    <Spotlight className={className}>
      <div className="backdrop-blur-md bg-card/30 rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 rounded-xl border border-white/10 dark:border-black/10" />
        <div className="absolute inset-[1px] rounded-[10px] border border-black/5 dark:border-white/5" />
        <div className="absolute inset-0 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]" />

        <div className="relative">{children}</div>
      </div>
    </Spotlight>
  )
}
