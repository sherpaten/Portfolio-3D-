'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useState } from 'react'

const socialLinks = [
  { label: 'Email', icon: '✉', href: 'mailto:kudoten55@gmail.com' },
  { label: 'LinkedIn', icon: '🔗', href: 'https://www.linkedin.com/in/tenzing-sherpa-6593532b7/' },
  { label: 'GitHub', icon: '🐙', href: 'https://github.com/sherpaten' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest">
              04 ─ Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">build</span>{' '}
            something
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether it's a startup collab, a freelance project, or you just want to talk tech — my inbox is
            always open.
          </p>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={100} className="flex justify-center flex-wrap gap-3 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="neon-border px-6 py-3 rounded-lg hover:bg-neon-cyan/5 transition-all duration-300 group interactive cursor-none"
            >
              <span className="text-xl mr-2">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal delay={200}>
          <motion.form
            onSubmit={handleSubmit}
            className="neon-border p-8 rounded-lg bg-dark-600/20 backdrop-blur-sm space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-700/50 border border-neon-cyan/15 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-700/50 border border-neon-cyan/15 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-widest text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-dark-700/50 border border-neon-cyan/15 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center">
              <button type="submit" className="btn-neon interactive cursor-none">
                Send message
              </button>

              {submitted && (
                <motion.span
                  className="text-neon-cyan font-mono text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  ✓ Message sent!
                </motion.span>
              )}
            </div>
          </motion.form>
        </ScrollReveal>

        {/* Email CTA */}
        <ScrollReveal delay={300} className="text-center mt-8">
          <p className="text-gray-500 font-mono text-sm">
            Or reach me directly:{' '}
            <a
              href="mailto:kudoten55@gmail.com"
              className="text-neon-cyan hover:text-neon-violet transition-colors interactive cursor-none"
            >
              kudoten55@gmail.com
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
