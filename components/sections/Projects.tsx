'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Image from 'next/image'

interface ProjectData {
  title: string
  description: string
  image: string
  featured?: boolean
  stack: string[]
  links: {
    label: string
    href: string
  }[]
}

const projectsData: ProjectData[] = [
  {
    title: 'Online Business',
    description: 'My online software business and web design agency platform.',
    image: '/Assets/My-Startup.png', // Correct
    featured: true,
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
    links: [{ label: 'Visit Site', href: 'https://designwebsite.shop/' }],
  },
  {
    title: 'Plumbing Services Platform',
    description: 'A dedicated client-based web application for an on-demand plumbing business.',
    image: '/Assets/Plumbing.png', // Correct
    stack: ['React', 'Tailwind CSS', 'Client Delivery'],
    links: [{ label: 'Coming Soon', href: '#' }],
  },
  {
    title: 'Shamu Client Portal',
    description: 'A custom client-based project tailored to specific business requirements.',
    image: '/Assets/Shamu.png', // Correct
    stack: ['React', 'Vite', 'Node.js', 'PostgreSQL'],
    links: [{ label: 'Coming Soon', href: '#' }],
  },
  {
    title: 'University Group Project',
    description: 'A collaborative full-stack application for university assessment.',
    // UPDATED: Changed .jpeg to match your file name exactly
    image: '/Assets/Uni project.jpeg', 
    stack: ['React', 'JavaScript', 'HTML', 'Tailwind CSS'],
    links: [{ label: 'GitHub', href: '#' }],
  },
  {
    title: 'E-Learning Demo',
    description: 'A demonstration project showcasing interactive e-learning capabilities.',
    // UPDATED: Changed .jpeg to match your file name exactly
    image: '/Assets/E-Learning.jpeg', 
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    links: [{ label: 'Live demo', href: '#' }, { label: 'GitHub', href: '#' }],
  },
]

interface ProjectCardProps {
  project: ProjectData
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <ScrollReveal delay={index * 100}>
      <motion.div
        className={`group relative rounded-lg overflow-hidden border transition-all duration-300 ${
          project.featured
            ? 'border-neon-cyan/50 md:col-span-2'
            : 'border-neon-cyan/15 hover:border-neon-cyan/40'
        }`}
        whileHover={{ y: -8 }}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="inline-block px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono uppercase tracking-widest rounded backdrop-blur-md">
              Featured
            </span>
          </div>
        )}

        {/* Preview with Actual Image */}
        <div className="h-56 relative overflow-hidden flex items-center justify-center bg-dark-700">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Gradient overlay to ensure text readability if needed, and add styling */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 bg-dark-800/90 backdrop-blur-sm relative z-10 border-t border-white/5">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-neon-cyan/10 text-neon-cyan rounded font-mono hover:bg-neon-cyan/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-neon-cyan/10">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href !== '#' ? "_blank" : "_self"}
                rel={link.href !== '#' ? "noopener noreferrer" : ""}
                className="text-sm text-gray-400 hover:text-neon-cyan transition-colors group/link interactive cursor-none flex items-center gap-1"
              >
                {link.label}
                <span className="text-xs group-hover/link:translate-x-1 transition-transform">↗</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest">
              03 ─ Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Selected{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-cyan">
              Projects
            </span>
          </h2>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}