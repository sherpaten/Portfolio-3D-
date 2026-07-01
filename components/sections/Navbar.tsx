'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-neon-cyan/15'
          : 'bg-gradient-to-b from-dark-900 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-4 group cursor-none"
        >
          {/* Logo size set to 12 (48px) and centered */}
          <div className="relative w-12 h-12">
            <Image 
              src="/Assets/logo.png" 
              alt="TNS Logo" 
              fill
              className="object-contain"
            />
          </div>
          
          {/* Increased font size to xl and weight to extrabold/bold */}
          <span className="font-mono tracking-widest flex items-center">
            <span className="text-white font-extrabold text-xl drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]">
              TNS
            </span>
            <span className="text-neon-cyan font-bold text-xl">
              dev
            </span>
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="text-sm uppercase tracking-widest text-gray-500 hover:text-neon-cyan transition-colors duration-300 relative group cursor-none interactive"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-violet group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a 
          href="#contact"
          onClick={handleNavClick}
          className="btn-neon cursor-none interactive flex items-center justify-center"
        >
          Get in touch
        </a>
      </div>
    </nav>
  )
}