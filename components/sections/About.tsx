'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { useState, useRef } from 'react'

// Sync: 14 lines * 1.4s = 19.6 seconds total
const terminalVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1.4, 
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

  const [isRunning, setIsRunning] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleRunScript = () => {
    if (!isRunning) {
      setIsRunning(true)
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.volume = 0.5
        audioRef.current.play().catch(e => console.log("Audio play blocked until interaction"))
      }
    }
  }

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">am</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              Hey, I'm <span className="text-white font-semibold">Tenzing Norkay Sherpa</span> — a full-stack developer with a builder's obsession.
            </p>
            {/* Stats grid remains here... */}
          </ScrollReveal>

          <ScrollReveal delay={200}>
            {/* Updated path: typing-sound.mp3 is now in the public root */}
            <audio ref={audioRef} src="/typing-sound.mp3" preload="auto" />

            <div className="terminal rounded-lg overflow-hidden border border-neon-cyan/20 bg-dark-800 shadow-[0_0_30px_rgba(0,245,255,0.05)]">
              <div className="terminal-header p-4 border-b border-white/10 bg-dark-900 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                {!isRunning && (
                  <button onClick={handleRunScript} className="text-xs font-mono text-neon-cyan hover:text-white px-3 py-1 bg-neon-cyan/10 rounded cursor-pointer">
                    ▶ Run script.sh
                  </button>
                )}
              </div>

              <motion.div 
                className="terminal-body space-y-2 text-sm p-6 font-mono text-gray-300 min-h-[350px]"
                variants={terminalVariants}
                initial="hidden"
                animate={isRunning ? "visible" : "hidden"}
              >
                {/* Your 14 lines of code here... */}
                <motion.div variants={lineVariants} className="t-comment"><span className="text-neon-pink">const</span> <span className="text-white">tenzing</span> = {'{'}</motion.div>
                {/* ... remaining lines ... */}
                <motion.div variants={lineVariants} className="t-comment pt-2">
                  <span className="text-neon-violet">TNS</span>.<span className="text-neon-cyan">build</span>()
                  <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 bg-neon-cyan align-middle ml-1" />
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}