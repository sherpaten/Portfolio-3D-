'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useInView } from 'react-intersection-observer'

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
  tags: string[]
}

const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Three.js / WebGL', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Three.js'],
  },
  {
    title: 'Backend',
    icon: '🔧',
    skills: [
      { name: 'Node.js / Express', level: 95 },
      { name: 'MongoDB', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'REST APIs', level: 90 }, 
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'GitHub', level: 99 },
      { name: 'GitLab', level: 90 },
      { name: 'GitHub Copilot', level: 95 },
      { name: 'ChatGPT / Claude', level: 90 },
    ],
    tags: ['GitHub', 'GitLab', 'Copilot', 'AI Prompts', 'Git'],
  },
]

interface SkillBarProps {
  name: string
  level: number
  inView: boolean
}

function SkillBar({ name, level, inView }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-400">{name}</span>
        <span className="text-sm font-mono text-neon-cyan">{level}%</span>
      </div>
      <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-cyan to-neon-violet rounded-full"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ originX: 0 }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-dark-900 via-dark-700/20 to-dark-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest">
              02 ─ Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-pink">
              Stack
            </span>
          </h2>
        </ScrollReveal>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid md:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 100}>
              <motion.div
                className="neon-border p-6 rounded-lg backdrop-blur-sm hover:bg-dark-600/40 transition-all duration-300 group"
                whileHover={{ y: -4 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4 mb-6">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      inView={skillsInView}
                    />
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neon-cyan/10">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-neon-cyan/10 text-neon-cyan rounded-full font-mono hover:bg-neon-cyan/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}