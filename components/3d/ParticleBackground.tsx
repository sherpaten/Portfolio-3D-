'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number; vx: number; vy: number; size: number; opacity: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    // Reduced particle count slightly for better mobile performance
    const particleCount = window.innerWidth < 768 ? 40 : 80 
    const maxDistance = 120
    let animationFrameId: number
    let isVisible = true

    // Only render when the canvas is actually in the viewport
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    })
    observer.observe(canvas)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
      })
    }

    const drawParticles = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(drawParticles)
        return // Skip heavy math if off-screen
      }

      ctx.fillStyle = '#020408'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,245,255,${particle.opacity})`
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,245,255,${0.08 * (1 - distance / maxDistance)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animationFrameId = requestAnimationFrame(drawParticles)
    }

    drawParticles()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-60" />
}