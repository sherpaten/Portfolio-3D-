'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { useState, useRef } from 'react'

// Animation variants for the 20-second terminal execution effect
const terminalVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1.35, // 14 lines * 1.35s = ~19 seconds total animation
      delayChildren: 0.2,
    },
  },
}

const lineVariants = {
  hidden: { opacity: 0, x: -10, display: 'none' },
  visible: { 
    opacity: 1, 
    x: 0, 
    display: 'block',
    transition: { duration: 0.2, ease: 'easeOut' }
  },
}

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  // State and Refs for the Interactive Terminal
  const [isRunning, setIsRunning] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleRunScript = () => {
    if (!isRunning) {
      setIsRunning(true)
      if (audioRef.current) {
        audioRef.current.volume = 0.4 // Set a comfortable volume
        audioRef.current.play()
      }
    }
  }

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest">
              01 ─ About
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">am</span>
          </h2>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <ScrollReveal className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              Hey, I'm <span className="text-white font-semibold">Tenzing Norkay Sherpa</span> — a full-stack developer with a builder's
              obsession. I don't just write code; I architect solutions that scale.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              By day I'm Working on Front-End speed. By night I'm deep in my startup, building tools that help
              dev teams move faster without burning out.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My stack is opinionated, my commits are clean, and my{' '}
              <span className="text-neon-cyan">coffee is strong</span>. I believe{' '}
              <span className="text-white font-semibold">the best product is the one that ships</span>.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-neon-cyan/15">
              <div className="neon-border p-4">
                <div className="text-3xl font-bold text-neon-cyan mb-2">
                  {statsInView && <CountUp end={2} duration={2} />}
                  {!statsInView && <span>0</span>}+
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                  Years Exp
                </p>
              </div>
              <div className="neon-border p-4">
                <div className="text-3xl font-bold text-neon-cyan mb-2">
                  {statsInView && <CountUp end={5} duration={2} />}
                  {!statsInView && <span>0</span>}+
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                  Projects
                </p>
              </div>
              <div className="neon-border p-4">
                <div className="text-3xl font-bold text-neon-cyan mb-2">
                  {statsInView && <CountUp end={1} duration={1} />}
                  {!statsInView && <span>0</span>}
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-mono">
                  Startup
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Terminal */}
          <ScrollReveal delay={200}>
            {/* Hidden Audio Element - Remember to rename your file to remove the space! */}
            <audio ref={audioRef} src="/Assets/typing-sound.mp3" preload="auto" />

            <div className="terminal rounded-lg overflow-hidden border border-neon-cyan/20 bg-dark-800 shadow-[0_0_30px_rgba(0,245,255,0.05)]">
              
              {/* Terminal Header with Run Button */}
              <div className="terminal-header p-4 border-b border-white/10 bg-dark-900 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f56' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#febc2e' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#27c93f' }} />
                </div>
                
                {!isRunning && (
                  <button 
                    onClick={handleRunScript}
                    className="text-xs font-mono text-neon-cyan hover:text-white transition-colors flex items-center gap-2 px-3 py-1 bg-neon-cyan/10 rounded hover:bg-neon-cyan/20 cursor-pointer"
                  >
                    <span>▶</span> Run script.sh
                  </button>
                )}
                {isRunning && (
                  <span className="text-xs font-mono text-gray-500">executing...</span>
                )}
              </div>
              
              {/* Animated Terminal Body */}
              <motion.div 
                className="terminal-body space-y-2 text-sm p-6 font-mono text-gray-300 min-h-[350px]"
                variants={terminalVariants}
                initial="hidden"
                animate={isRunning ? "visible" : "hidden"}
              >
                <motion.div variants={lineVariants} className="t-comment">
                  <span className="text-neon-pink">const</span> <span className="text-white">tenzing</span> = {'{'}
                </motion.div>
                <motion.div variants={lineVariants} className="t-comment ml-4">
                  <span className="text-neon-cyan">role</span>: <span className="text-green-400">"Fullstack Dev & Founder"</span>,
                </motion.div>
                <motion.div variants={lineVariants} className="t-comment ml-4">
                  <span className="text-neon-cyan">stack</span>: [
                </motion.div>
                <motion.div variants={lineVariants} className="t-comment ml-8">
                  <span className="text-green-400">"React"</span>, <span className="text-green-400">"Node.js"</span>,{' '}
                  <span className="text-green-400">"Go"</span>,
                </motion.div>
                <motion.div variants={lineVariants} className="t-comment ml-8">
                  <span className="text-green-400">"TypeScript"</span>, <span className="text-green-400">"Three.js"</span>
                </motion.div>
                <motion.div variants={lineVariants} className="t-comment ml-4">],</motion.div>
                <motion.div variants={lineVariants} className="t-comment ml-4">
                  <span className="text-neon-cyan">startup</span>: <span className="text-green-400">"stealth mode 🚀"</span>,
                </motion.div>
                <motion.div variants={lineVariants} className="t-comment ml-4">
                  <span className="text-neon-cyan">passion</span>: [
                </motion.div>
                <motion.div variants={lineVariants} className="t-comment ml-8">
                  <span className="text-green-400">"performance"</span>,
                </motion.div>
                <motion.div variants={lineVariants} className="t-comment ml-8">
                  <span className="text-green-400">"clean architecture"</span>,
                </motion.div>
                <motion.div variants={lineVariants} className="t-comment ml-8">
                  <span className="text-green-400">"shipping fast"</span>
                </motion.div>
                <motion.div variants={lineVariants} className="t-comment ml-4">],</motion.div>
                <motion.div variants={lineVariants} className="t-comment">{'}'};</motion.div>
                
                <motion.div variants={lineVariants} className="t-comment mt-4 pt-2 border-t border-white/5">
                  <span className="text-neon-violet">TNS</span>.<span className="text-neon-cyan">build</span>()
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-neon-cyan align-middle ml-1"
                  />
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}