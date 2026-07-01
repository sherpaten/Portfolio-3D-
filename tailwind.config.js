/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan:   '#00f5ff',
          violet: '#bf00ff',
          pink:   '#ff006e',
          green:  '#00ff88',
        },
        dark: {
          900: '#020408',
          800: '#060d14',
          700: '#0a1628',
          600: '#0d1f35',
          500: '#112540',
        },
      },
      fontFamily: {
        sans:  ['Space Grotesk', 'sans-serif'],
        mono:  ['Space Mono', 'monospace'],
        clash: ['Clash Display', 'sans-serif'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'pulse-neon':   'pulseNeon 2s ease-in-out infinite',
        'scan':         'scan 3s linear infinite',
        'spin-slow':    'spin 8s linear infinite', // Updated for smoother rotation
        'pulse-glow':   'pulseGlow 4s ease-in-out infinite', // Added for circle effect
        'orbit':        'orbit 8s linear infinite',
        'blink':        'blink 1s infinite',
        'glitch':       'glitch 0.3s ease-in-out',
        'gradient-x':   'gradientX 4s ease infinite',
        'fade-up':      'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        float:      { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        pulseNeon:  { '0%,100%': { boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff' }, '50%': { boxShadow: '0 0 20px #00f5ff, 0 0 40px #00f5ff, 0 0 60px #00f5ff' } },
        pulseGlow:  { '0%,100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.2)' }, '50%': { boxShadow: '0 0 50px rgba(0, 245, 255, 0.5)' } },
        scan:       { '0%': { top: '0%' }, '100%': { top: '100%' } },
        orbit:      { from: { transform: 'rotate(0deg) translate(80px) rotate(0deg)' }, to: { transform: 'rotate(360deg) translate(80px) rotate(-360deg)' } },
        blink:      { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        glitch:     { '0%,100%': { transform: 'translate(0)' }, '20%': { transform: 'translate(-3px, 1px)' }, '40%': { transform: 'translate(3px, -1px)' }, '60%': { transform: 'translate(-1px, 3px)' }, '80%': { transform: 'translate(1px, -2px)' } },
        gradientX:  { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        fadeUp:     { from: { opacity: 0, transform: 'translateY(40px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
      backgroundImage: {
        'grid-neon':    'linear-gradient(rgba(0,245,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.05) 1px, transparent 1px)',
        'radial-dark':  'radial-gradient(ellipse at center, #0a1628 0%, #020408 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}