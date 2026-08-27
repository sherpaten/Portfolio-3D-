'use client'

import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import dynamic from 'next/dynamic'

// Statically import ONLY what is visible on initial load
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'

// Dynamically import everything else so they don't block the initial page load
const ParticleBackground = dynamic(() => import('@/components/3d/ParticleBackground'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false })
const About = dynamic(() => import('@/components/sections/About'))
const Skills = dynamic(() => import('@/components/sections/Skills'))
const Projects = dynamic(() => import('@/components/sections/Projects'))
const Contact = dynamic(() => import('@/components/sections/Contact'))
const Footer = dynamic(() => import('@/components/sections/Footer'))
const ScrollReveal = dynamic(() => import('@/components/ui/ScrollReveal'))

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    setTimeout(() => setIsLoading(false), 1000)

    return () => lenis.destroy()
  }, [])

  return (
    <main className="relative w-full min-h-screen bg-dark-900">
      <ParticleBackground />
      <CustomCursor />

      <Navbar />
      <Hero />
      
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><Projects /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>

      <Footer />

      {isLoading && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink z-50 animate-pulse" />
      )}
    </main>
  )
}