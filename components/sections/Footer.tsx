'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-neon-cyan/15 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="font-mono text-sm tracking-widest">
            <span className="text-neon-cyan">&#47;&#47;</span>
            <span className="text-white">TNS</span>
            <span className="text-neon-cyan">dev</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 font-mono text-xs">
            Designed &amp; built with{' '}
            <span className="text-neon-pink">♥</span> in {currentYear}
          </p>

          {/* Quick Links */}
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-gray-500 hover:text-neon-cyan transition-colors text-sm font-mono interactive cursor-none"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-500 hover:text-neon-cyan transition-colors text-sm font-mono interactive cursor-none"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-gray-500 hover:text-neon-cyan transition-colors text-sm font-mono interactive cursor-none"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-neon-cyan/10 flex justify-center">
          <p className="text-gray-600 font-mono text-xs text-center">
            Built with React, Next.js, Framer Motion, Three.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
