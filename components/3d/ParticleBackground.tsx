'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d', { alpha: false })
    if (!canvas || !ctx) return

    let width = 0
    let height = 0
    let animationFrameId = 0
    let lastFrameTime = 0
    let isVisible = !document.hidden
    const frameInterval = 1000 / (window.innerWidth < 768 ? 30 : 40)
    const maxDistance = 120
    const particles: Particle[] = []
    const particleCount = window.innerWidth < 768 ? 22 : 48

    const resize = () => {
      // Limit DPR to avoid very expensive full-screen high-resolution canvases.
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.45 + 0.12,
      })
    }

    const draw = (timestamp: number) => {
      animationFrameId = 0
      if (!isVisible) return
      if (timestamp - lastFrameTime < frameInterval) {
        animationFrameId = requestAnimationFrame(draw)
        return
      }
      lastFrameTime = timestamp

      ctx.fillStyle = '#020408'
      ctx.fillRect(0, 0, width, height)

      for (const particle of particles) {
        particle.x += particle.vx
        particle.y += particle.vy
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,245,255,${particle.opacity})`
        ctx.fill()
      }

      // Compare squared distances first; only calculate a square root for visible lines.
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distanceSquared = dx * dx + dy * dy
          if (distanceSquared >= maxDistance * maxDistance) continue

          const distance = Math.sqrt(distanceSquared)
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(0,245,255,${0.07 * (1 - distance / maxDistance)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    const start = () => {
      if (isVisible && !animationFrameId) animationFrameId = requestAnimationFrame(draw)
    }
    const stop = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      animationFrameId = 0
    }
    const onVisibilityChange = () => {
      isVisible = !document.hidden
      if (isVisible) start()
      else stop()
    }

    document.addEventListener('visibilitychange', onVisibilityChange)
    window.addEventListener('resize', resize, { passive: true })
    start()

    return () => {
      stop()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-full h-full z-0 opacity-60 pointer-events-none"
    />
  )
}
