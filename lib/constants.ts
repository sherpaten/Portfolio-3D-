/**
 * Constants and configuration for the portfolio
 */

export const SITE_CONFIG = {
  name: 'Alex Dev',
  title: 'Alex Dev - Full-Stack Developer & Founder',
  description: 'High-performance digital products. Full-stack developer building the future.',
  url: 'https://alexdev.io',
  email: 'alex@alexdev.io',
  keywords: ['developer', 'react', 'nodejs', 'portfolio', 'startup'],
}

export const COLORS = {
  neon: {
    cyan: '#00f5ff',
    violet: '#bf00ff',
    pink: '#ff006e',
    green: '#00ff88',
  },
  dark: {
    900: '#020408',
    800: '#060d14',
    700: '#0a1628',
    600: '#0d1f35',
    500: '#112540',
  },
  gray: {
    600: '#4a6a8a',
    500: '#6a7a9a',
    400: '#8a9aaa',
  },
}

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8,
}

export const ANIMATION_EASING = {
  easeIn: 'easeIn',
  easeOut: 'easeOut',
  easeInOut: 'easeInOut',
  circOut: 'circOut',
  backOut: 'backOut',
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  contact: 'contact',
}

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'mailto:alex@alexdev.io',
}

export const PARTICLE_CONFIG = {
  count: 80,
  maxDistance: 120,
  speed: 0.5,
}

export const THREE_CONFIG = {
  orbCount: 3,
  orbSizes: [1.5, 0.8, 0.6],
  orbColors: ['#00f5ff', '#bf00ff', '#ff006e'],
  cameraPosition: [0, 0, 8],
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
