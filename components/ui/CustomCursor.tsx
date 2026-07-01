'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  let mouseX = 0
  let mouseY = 0
  let ringX = 0
  let ringY = 0

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX + 'px'
        cursorRef.current.style.top = mouseY + 'px'
      }
    }

    const animate = () => {
      if (ringRef.current) {
        ringX += (mouseX - ringX) * 0.15
        ringY += (mouseY - ringY) * 0.15

        ringRef.current.style.left = ringX + 'px'
        ringRef.current.style.top = ringY + 'px'
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    requestAnimationFrame(animate)

    // Hover effect on interactive elements
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (cursorRef.current) {
        cursorRef.current.classList.add('scale-150')
      }
      if (ringRef.current) {
        ringRef.current.classList.add('ring-pink')
        ringRef.current.style.width = '60px'
        ringRef.current.style.height = '60px'
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('scale-150')
      }
      if (ringRef.current) {
        ringRef.current.classList.remove('ring-pink')
        ringRef.current.style.width = '40px'
        ringRef.current.style.height = '40px'
      }
    }

    document.querySelectorAll('a, button, .interactive').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.querySelectorAll('a, button, .interactive').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-dot fixed w-2.5 h-2.5 bg-neon-cyan rounded-full pointer-events-none z-50 box-glow-cyan transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed w-10 h-10 border border-neon-cyan rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
        style={{ borderColor: 'rgba(0,245,255,0.5)' }}
      />
    </>
  )
}
