'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const socialLinks = [
  { 
    label: 'Email', 
    icon: '✉', 
    href: 'mailto:kudoten55@gmail.com',
    external: false 
  },
  { 
    label: 'LinkedIn', 
    icon: '🔗', 
    href: 'https://www.linkedin.com/in/tenzing-sherpa-6593532b7/',
    external: true 
  },
  { 
    label: 'GitHub', 
    icon: '🐙', 
    href: 'https://github.com/sherpaten',
    external: true 
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill all fields')
      return
    }

    setLoading(true)
    setError('')

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: 'kudoten55@gmail.com',
      }

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      )

      if (response.status === 200) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        
        setTimeout(() => {
          setSubmitted(false)
        }, 4000)
      }
    } catch (err: any) {
      console.error('Email send error:', err)
      setError('Failed to send message. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* HEADER SECTION */}
        <ScrollReveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest">
              04 ─ Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">
              build
            </span>
            {' '}something
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether it's a startup collab, a freelance project, or you just want to talk tech — my inbox is always open.
          </p>
        </ScrollReveal>

        {/* SOCIAL LINKS SECTION */}
        <ScrollReveal delay={100} className="flex justify-center flex-wrap gap-3 mb-12">
          {socialLinks.map((link) => {
            const linkProps: any = {
              href: link.href,
              className: "neon-border px-6 py-3 rounded-lg hover:bg-neon-cyan/5 transition-all duration-300 group interactive cursor-none",
              'aria-label': link.label,
            }

            if (link.external) {
              linkProps.target = '_blank'
              linkProps.rel = 'noopener noreferrer'
            }

            return (
              <a key={link.label} {...linkProps}>
                <span className="text-xl mr-2">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            )
          })}
        </ScrollReveal>

        {/* FORM SECTION */}
        <ScrollReveal delay={200}>
          <motion.form
            onSubmit={handleSubmit}
            className="neon-border p-8 rounded-lg bg-dark-600/20 backdrop-blur-sm space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* NAME FIELD */}
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
                  disabled={loading}
                  className="w-full bg-dark-700/50 border border-neon-cyan/15 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                  aria-label="Your name"
                />
              </div>

              {/* EMAIL FIELD */}
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
                  disabled={loading}
                  className="w-full bg-dark-700/50 border border-neon-cyan/15 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your@email.com"
                  aria-label="Your email"
                />
              </div>
            </div>

            {/* MESSAGE FIELD */}
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
                disabled={loading}
                rows={5}
                className="w-full bg-dark-700/50 border border-neon-cyan/15 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/30 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Tell me about your project..."
                aria-label="Your message"
              />
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <motion.div
                className="p-3 bg-neon-pink/10 border border-neon-pink/30 rounded text-neon-pink text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
              >
                <span>{error}</span>
              </motion.div>
            )}

            {/* BUTTON & SUCCESS MESSAGE */}
            <div className="flex justify-between items-center">
              <button
                type="submit"
                disabled={loading}
                className="btn-neon interactive cursor-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>

              {submitted && (
                <motion.span
                  className="text-neon-cyan font-mono text-sm"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  role="status"
                >
                  ✓ Message sent successfully!
                </motion.span>
              )}
            </div>
          </motion.form>
        </ScrollReveal>

        {/* DIRECT EMAIL SECTION */}
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