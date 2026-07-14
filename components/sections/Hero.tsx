'use client'

import React from 'react'
import { motion } from 'framer-motion'
import FloatingOrbs from '@/components/3d/FloatingOrbs'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-between pt-24 pb-10 px-6 md:px-20 overflow-hidden"
    >
      
      {/* Text Content - Always on the Left on Desktop */}
      <motion.div 
        className="w-full md:w-1/2 z-10 text-center md:text-left mb-12 md:mb-0" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-neon-cyan font-mono text-xs uppercase tracking-widest mb-6">
          ▶ Building the future, one commit at a time
        </motion.p>
        
        <motion.h1 variants={itemVariants} className="mb-8 leading-tight text-5xl md:text-7xl font-bold">
          Full-Stack <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink">
            Developer
          </span><br />
          <span className="text-gray-400">&amp; Founder</span>
        </motion.h1>
        
        <motion.div variants={itemVariants} className="flex justify-center md:justify-start gap-4">
          <a href="#projects" className="px-8 py-3 rounded border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-colors">
            View Work
          </a>
          <a href="#contact" className="px-8 py-3 rounded border border-white text-white hover:bg-white hover:text-dark-900 transition-colors">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Profile Image - Always on the Right on Desktop */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
        <motion.div 
          className="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-2 animate-pulse-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Rotating Border */}
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan via-transparent to-neon-violet animate-spin-slow rounded-full" />
          
          <div className="relative w-full h-full rounded-full overflow-hidden bg-dark-900 border-4 border-dark-900">
            <Image 
              src="/profile.png" 
              alt="Profile Picture" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
        </motion.div>
      </div>

      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <FloatingOrbs />
      </div>
    </section>
  )
}