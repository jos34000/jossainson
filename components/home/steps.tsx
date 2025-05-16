import { timelineData } from "@/components/data/timeline.data"
import { Timeline } from "@/components/shadcn/timeline"

export function Steps() {
  return (
    <div className="w-full bg-muted/30">
      <Timeline data={timelineData} />
    </div>
  )
}
