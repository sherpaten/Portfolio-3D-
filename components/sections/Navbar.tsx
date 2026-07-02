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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMobileMenuOpen(false) // Close menu on click
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-neon-cyan/15' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10">
            <Image src="/logo.png" alt="TNS Logo" fill className="object-contain" />
          </div>
          <span className="font-mono tracking-widest flex items-center">
            <span className="text-white font-extrabold text-lg">TNS</span>
            <span className="text-neon-cyan font-bold text-lg">dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={handleNavClick} className="text-sm uppercase tracking-widest text-gray-400 hover:text-neon-cyan transition-colors relative group">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-neon-cyan text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* CTA Button (Hidden on Mobile) */}
        <a href="#contact" onClick={handleNavClick} className="hidden md:flex px-5 py-2 border border-neon-cyan text-neon-cyan text-sm rounded hover:bg-neon-cyan/10 transition-colors">
          Get in touch
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-neon-cyan/20 p-6 flex flex-col gap-6 items-center">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={handleNavClick} className="text-lg uppercase text-white hover:text-neon-cyan">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={handleNavClick} className="px-6 py-2 border border-neon-cyan text-neon-cyan rounded">
            Get in touch
          </a>
        </div>
      )}
    </nav>
  )
}