'use client'

import React, { useEffect } from 'react'
import Lenis from 'lenis'
import dynamic from 'next/dynamic'

import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'

const ParticleBackground = dynamic(() => import('@/components/3d/ParticleBackground'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false })
const About = dynamic(() => import('@/components/sections/About'))
const Skills = dynamic(() => import('@/components/sections/Skills'))
const Projects = dynamic(() => import('@/components/sections/Projects'))
const Contact = dynamic(() => import('@/components/sections/Contact'))
const Footer = dynamic(() => import('@/components/sections/Footer'))
const ScrollReveal = dynamic(() => import('@/components/ui/ScrollReveal'))

export default function Home() {
  useEffect(() => {
    // Native scrolling is preferable on touch devices and reduced-motion setups.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (prefersReducedMotion || isCoarsePointer) return

    const lenis = new Lenis({ duration: 1.05 })
    let frameId = 0

    const raf = (time: number) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
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
    </main>
  )
}
