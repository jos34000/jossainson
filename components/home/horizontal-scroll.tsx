"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface HorizontalScrollSectionProps {
  children: React.ReactNode
  id: string
}

export function HorizontalScrollSection({
  children,
  id,
}: Readonly<HorizontalScrollSectionProps>) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [sectionHeight, setSectionHeight] = useState(0)
  const [isInView, setIsInView] = useState(false)

  // Calculate dimensions on mount and resize
  useEffect(() => {
    const calculateDimensions = () => {
      if (containerRef.current) {
        setScrollWidth(containerRef.current.scrollWidth - window.innerWidth)
        setSectionHeight(containerRef.current.scrollWidth)
      }
    }

    calculateDimensions()
    window.addEventListener("resize", calculateDimensions)

    return () => {
      window.removeEventListener("resize", calculateDimensions)
    }
  }, [])

  // Set up intersection observer to detect when section is in view
  useEffect(() => {
    const sectionElement = sectionRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
    )

    if (sectionElement) {
      observer.observe(sectionElement)
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement)
      }
    }
  }, [])

  // Handle scroll behavior
  useEffect(() => {
    let lastScrollTop = window.scrollY
    const accumulatedDelta = 0
    let ticking = false
    let horizontalScrollComplete = false

    const handleScroll = () => {
      if (!isInView || !sectionRef.current) return

      const sectionTop = sectionRef.current.offsetTop
      const scrollTop = window.scrollY
      const sectionPosition = scrollTop - sectionTop

      // Determine if we're within the section bounds
      if (
        sectionPosition >= 0 &&
        sectionPosition <= sectionHeight &&
        !horizontalScrollComplete
      ) {
        if (!isScrolling) setIsScrolling(true)

        // Calculate how far to scroll horizontally
        const scrollProgress = Math.min(sectionPosition / sectionHeight, 1)
        const horizontalScroll = scrollProgress * scrollWidth

        // Apply the horizontal scroll
        if (containerRef.current) {
          containerRef.current.scrollLeft = horizontalScroll
        }

        // Pin the section
        window.scrollTo(0, sectionTop + sectionPosition)

        // Check if horizontal scrolling is complete
        if (scrollProgress >= 1) {
          horizontalScrollComplete = true
        }
      } else {
        if (isScrolling) setIsScrolling(false)
        horizontalScrollComplete = false
      }

      lastScrollTop = scrollTop
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [isInView, isScrolling, scrollWidth, sectionHeight])

  return (
    <div
      ref={sectionRef}
      id={id}
      className="relative overflow-hidden"
      style={{ height: `${sectionHeight}px` }}
    >
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex-shrink-0 w-screen h-screen flex items-center">
          {children}
        </div>
        <div className="flex-shrink-0 w-screen h-screen flex items-center">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-8 max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Mes compétences techniques
              </h2>
              <p className="text-muted-foreground">
                Je maîtrise un large éventail de technologies front-end et
                back-end, me permettant de développer des applications web
                complètes et performantes.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-screen h-screen flex items-center">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-8 max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Mes outils préférés</h2>
              <p className="text-muted-foreground">
                J&apos;utilise les frameworks et outils les plus modernes pour
                garantir des applications rapides, sécurisées et évolutives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
