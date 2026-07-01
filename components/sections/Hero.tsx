'use client'

import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import FloatingOrbs from '@/components/3d/FloatingOrbs'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Hero() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"])
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-10 px-6 md:px-12 overflow-hidden">
      
      {/* 3D Visuals Container */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full md:w-1/2 h-full flex items-center justify-center pointer-events-none">
        <div className="absolute z-0">
          <FloatingOrbs />
        </div>
        
        <motion.div
          className="absolute z-20 pointer-events-auto cursor-crosshair"
          style={{ perspective: 1000 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY, translateX, translateY, transformStyle: "preserve-3d" }}
            className="w-64 h-64 md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-2 border-neon-cyan/30 shadow-[0_0_40px_rgba(0,245,255,0.2)]"
          >
            <Image
              src="/profile-image.png"
              alt="Profile Picture"
              width={320}
              height={320}
              className="object-cover pointer-events-none"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="relative z-10 max-w-3xl mx-auto w-full" variants={containerVariants} initial="hidden" animate="visible">
        <motion.p variants={itemVariants} className="text-neon-cyan font-mono text-xs uppercase tracking-widest mb-6">
          ▶ Building the future, one commit at a time
        </motion.p>
        <motion.h1 variants={itemVariants} className="mb-6 leading-tight text-5xl md:text-7xl font-bold">
          Full-Stack <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink">Developer</span><br />
          <span className="text-gray-400">&amp; Founder</span>
        </motion.h1>
      </motion.div>
    </section>
  )
}