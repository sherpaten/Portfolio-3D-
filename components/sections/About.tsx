'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { useState, useRef } from 'react'

const terminalVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1.4, // Matches 1.4s per line
      delayChildren: 0.2,
    },
  },
}

const lineVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.3, ease: 'easeOut' }
  },
}

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const [isRunning, setIsRunning] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleRunScript = () => {
    if (!isRunning) {
      setIsRunning(true)
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.volume = 0.5
        audioRef.current.play().catch(e => console.log("Audio play blocked:", e))
      }
    }
  }

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest">01 ─ About</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">am</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              Hey, I'm <span className="text-white font-semibold">Tenzing Norkay Sherpa</span> — a full-stack developer with a builder's obsession. I don't just write code; I architect solutions that scale.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              By day I'm working on Front-End speed. By night I'm deep in my startup, building tools that help dev teams move faster without burning out.
            </p>

            <div ref={statsRef} className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-neon-cyan/15">
              <div className="neon-border p-4">
                <div className="text-3xl font-bold text-neon-cyan mb-2">{statsInView && <CountUp end={2} duration={2} />}+</div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-mono">Years Exp</p>
              </div>
              <div className="neon-border p-4">
                <div className="text-3xl font-bold text-neon-cyan mb-2">{statsInView && <CountUp end={5} duration={2} />}+</div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-mono">Projects</p>
              </div>
              <div className="neon-border p-4">
                <div className="text-3xl font-bold text-neon-cyan mb-2">{statsInView && <CountUp end={1} duration={1} />}</div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-mono">Startup</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            {/* Audio path updated to root public folder */}
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
                <motion.div variants={lineVariants}><span className="text-neon-pink">const</span> <span className="text-white">tenzing</span> = {'{'}</motion.div>
                <motion.div variants={lineVariants} className="ml-4"><span className="text-neon-cyan">role</span>: <span className="text-green-400">"Fullstack Dev & Founder"</span>,</motion.div>
                <motion.div variants={lineVariants} className="ml-4"><span className="text-neon-cyan">stack</span>: [</motion.div>
                <motion.div variants={lineVariants} className="ml-8"><span className="text-green-400">"React"</span>, <span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"Go"</span>,</motion.div>
                <motion.div variants={lineVariants} className="ml-8"><span className="text-green-400">"TypeScript"</span>, <span className="text-green-400">"Three.js"</span></motion.div>
                <motion.div variants={lineVariants} className="ml-4">],</motion.div>
                <motion.div variants={lineVariants} className="ml-4"><span className="text-neon-cyan">startup</span>: <span className="text-green-400">"stealth mode 🚀"</span>,</motion.div>
                <motion.div variants={lineVariants} className="ml-4"><span className="text-neon-cyan">passion</span>: [</motion.div>
                <motion.div variants={lineVariants} className="ml-8"><span className="text-green-400">"performance"</span>,</motion.div>
                <motion.div variants={lineVariants} className="ml-8"><span className="text-green-400">"clean architecture"</span>,</motion.div>
                <motion.div variants={lineVariants} className="ml-8"><span className="text-green-400">"shipping fast"</span></motion.div>
                <motion.div variants={lineVariants} className="ml-4">],</motion.div>
                <motion.div variants={lineVariants}>{'}'};</motion.div>
                <motion.div variants={lineVariants} className="mt-4 pt-2 border-t border-white/5">
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