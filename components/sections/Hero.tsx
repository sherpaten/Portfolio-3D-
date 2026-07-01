'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FloatingOrbs from '@/components/3d/FloatingOrbs'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Hero() {
  // --- 3D Interactive Mouse Logic ---
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth out the movement with springs so it doesn't look rigid
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  // Map the mouse position to rotation (tilt) and translation (movement)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"])
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    // Calculate mouse position relative to the center of the image
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    // Reset to center when mouse leaves
    x.set(0)
    y.set(0)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-20 pb-10 px-6 md:px-12 overflow-hidden"
    >
      {/* 3D Orbs & Profile Picture overlay */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full md:w-1/2 h-full flex items-center justify-center pointer-events-none">
        <FloatingOrbs />
        
        {/* Interactive 3D Profile Image */}
        <div className="absolute z-10 pointer-events-auto" style={{ perspective: 1000 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              translateX,
              translateY,
              transformStyle: "preserve-3d",
            }}
            className="w-64 h-64 md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-2 border-neon-cyan/30 shadow-[0_0_40px_rgba(0,245,255,0.2)] cursor-crosshair"
          >
            <Image
              src="/Assets/profile-image.png"
              alt="Profile Picture"
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tag */}
        <motion.p
          variants={itemVariants}
          className="text-neon-cyan font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-3"
        >
          <span>▶</span>
          <span>Building the future, one commit at a time</span>
        </motion.p>

        {/* Title */}
        <motion.h1 variants={itemVariants} className="mb-6 leading-tight">
          <div className="text-5xl md:text-7xl font-bold mb-3">
            Full-Stack
          </div>
          <div className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink mb-3">
            Developer
          </div>
          <div className="text-5xl md:text-7xl font-bold text-gray-400">
            &amp; Founder
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed"
        >
          Crafting high-performance digital products that scale. Currently building my
          startup to reshape how dev teams collaborate in the age of AI.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#projects" 
            className="btn-neon glitch-hover interactive cursor-none text-center block"
          >
            View my work
          </a>
          <a 
            href="#contact" 
            className="btn-ghost interactive cursor-none text-center block"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 mt-16"
        >
          <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
            Scroll
          </span>
          <motion.div
            className="w-0.5 h-12 bg-gradient-to-b from-neon-cyan to-transparent"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}