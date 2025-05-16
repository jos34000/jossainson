import { defaultNavItems } from "@/components/data/nav.data"
import { AboutSection } from "@/components/home/about-section"
import { Carroussel } from "@/components/home/carroussel"
import { Contact } from "@/components/home/contact-section"
import { Footer } from "@/components/home/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { Steps } from "@/components/home/steps"
import { ScrollObserver } from "@/components/scroll-observer"
import { FloatingNav } from "@/components/shadcn/floating-navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <ScrollObserver />
      <FloatingNav navItems={defaultNavItems} />

      <HeroSection />

      <div className="relative">
        <div className="absolute inset-0 bg-grid-small-white/[0.2] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
        <div className="animate-on-scroll">
          <AboutSection />
        </div>
      </div>

      <div className="relative py-10 bg-muted/30  animate-on-scroll">
        <Carroussel />
      </div>

      <div className="animate-on-scroll">
        <Steps />
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-grid-small-white/[0.2] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
        <div className="animate-on-scroll">
          <ProjectsSection />
        </div>
      </div>

      <div className="relative animate-on-scroll">
        <Contact />
      </div>

      <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm animate-on-scroll">
        <Footer />
      </div>
    </main>
  )
}
