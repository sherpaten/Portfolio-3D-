'use client'

import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import ParticleBackground from '@/components/3d/ParticleBackground'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Simulate page load
    setTimeout(() => setIsLoading(false), 1000)

    return () => lenis.destroy()
  }, [])

 return (
  <main className="relative w-full min-h-screen bg-dark-900">
    <ParticleBackground />
    <CustomCursor />

    <Navbar />
    <Hero />
    
    {/* Wrap the sections you want to animate */}
    <ScrollReveal>
      <About />
    </ScrollReveal>

    <ScrollReveal>
      <Skills />
    </ScrollReveal>

    <ScrollReveal>
      <Projects />
    </ScrollReveal>

    <ScrollReveal>
      <Contact />
    </ScrollReveal>

    <Footer />

    {isLoading && (
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink z-50 animate-pulse" />
    )}
  </main>
)
  )
}
