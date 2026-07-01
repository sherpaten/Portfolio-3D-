# 📁 Project File Manifest & Structure

## 📋 Complete File List

### Root Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | NPM dependencies and scripts |
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.js` | Tailwind CSS theme configuration |
| `next.config.js` | Next.js configuration |
| `postcss.config.js` | PostCSS configuration (Tailwind) |
| `.eslintrc.json` | ESLint code quality rules |
| `.gitignore` | Git ignore rules |
| `.env.example` | Example environment variables |
| `README.md` | Project overview and documentation |

---

## 📂 `/app` - Next.js Application

```
app/
├── layout.tsx          (Root layout wrapper)
├── page.tsx            (Main page/home)
├── globals.css         (Global styles & animations)
└── [Structure: 3 files]
```

### File Details

#### `app/layout.tsx`
- Root layout component
- Sets up metadata (title, description, OG tags)
- Includes HTML head configuration
- Wraps all pages with providers
- **Lines**: ~40 | **Size**: ~1.5 KB

#### `app/page.tsx`
- Main portfolio page
- Imports all section components
- Initializes Lenis smooth scroll
- Sets up animations and particle background
- **Lines**: ~60 | **Size**: ~2.2 KB

#### `app/globals.css`
- Global Tailwind CSS imports
- Custom CSS animations (float, glitch, scan, etc.)
- Utility classes (neon-border, glow effects, etc.)
- Custom cursor styles
- Terminal and button styles
- **Lines**: ~450 | **Size**: ~18 KB

---

## 🎨 `/components` - React Components

### Structure
```
components/
├── 3d/
│   ├── FloatingOrbs.tsx         (3D orbs with Three.js)
│   └── ParticleBackground.tsx   (Canvas particles)
├── sections/
│   ├── Navbar.tsx               (Navigation)
│   ├── Hero.tsx                 (Hero section)
│   ├── About.tsx                (About + stats)
│   ├── Skills.tsx               (Skills grid)
│   ├── Projects.tsx             (Project cards)
│   ├── Contact.tsx              (Contact form)
│   └── Footer.tsx               (Footer)
└── ui/
    ├── CustomCursor.tsx         (Custom cursor)
    └── ScrollReveal.tsx         (Scroll animations)
```

### 3D Components

#### `components/3d/FloatingOrbs.tsx`
- Three.js 3D orbs rendering
- Uses React Three Fiber
- Animated rotating icosahedrons
- Multiple orbs with different colors
- Lighting and camera setup
- **Lines**: ~110 | **Size**: ~3.5 KB
- **Dependencies**: three, @react-three/fiber, @react-three/drei

#### `components/3d/ParticleBackground.tsx`
- HTML5 Canvas particle system
- 80 animated particles
- Particles connect with lines
- Wraps around viewport edges
- Responsive to window resize
- **Lines**: ~90 | **Size**: ~2.8 KB

### Section Components

#### `components/sections/Navbar.tsx`
- Fixed navigation bar
- Smooth scroll navigation
- Responsive mobile/desktop
- Hover effects and animations
- Logo and CTA button
- **Lines**: ~80 | **Size**: ~2.6 KB

#### `components/sections/Hero.tsx`
- Hero banner section
- Animated title with gradient text
- CTA buttons
- Scroll indicator animation
- Integrates FloatingOrbs for 3D effect
- **Lines**: ~90 | **Size**: ~3.2 KB
- **Dependencies**: framer-motion

#### `components/sections/About.tsx`
- About section with bio
- Animated stats with CountUp
- Terminal code display
- Responsive grid layout
- **Lines**: ~140 | **Size**: ~4.5 KB
- **Dependencies**: framer-motion, react-intersection-observer

#### `components/sections/Skills.tsx`
- Skills categories (Frontend, Backend, DevOps)
- Animated progress bars
- Skill tags
- Hover effects
- **Lines**: ~150 | **Size**: ~4.8 KB
- **Dependencies**: framer-motion

#### `components/sections/Projects.tsx`
- Project showcase cards
- Featured project highlighting
- Project preview with grid background
- Tech stack tags
- Project links
- **Lines**: ~120 | **Size**: ~4.2 KB
- **Dependencies**: framer-motion

#### `components/sections/Contact.tsx`
- Contact form (name, email, message)
- Social media links
- Form submission handling
- Success message animation
- **Lines**: ~130 | **Size**: ~4.5 KB
- **Dependencies**: framer-motion

#### `components/sections/Footer.tsx`
- Footer with logo
- Copyright information
- Quick navigation links
- Tech stack credits
- **Lines**: ~50 | **Size**: ~1.8 KB
- **Dependencies**: framer-motion

### UI Components

#### `components/ui/CustomCursor.tsx`
- Custom cursor dot with glow
- Cursor ring that follows mouse
- Hover effects on interactive elements
- Smooth movement interpolation
- **Lines**: ~80 | **Size**: ~2.4 KB

#### `components/ui/ScrollReveal.tsx`
- Scroll-triggered reveal animations
- Intersection Observer API
- Customizable delay and threshold
- Reusable component wrapper
- **Lines**: ~50 | **Size**: ~1.5 KB

---

## 🛠️ `/lib` - Utility Functions

### Structure
```
lib/
├── utils.ts          (Helper functions)
└── constants.ts      (Configuration constants)
```

#### `lib/utils.ts`
Contains:
- `scrollToElement()` - Smooth scroll to element
- `debounce()` - Debounce function
- `throttle()` - Throttle function
- `getScrollDirection()` - Detect scroll direction
- `isInViewport()` - Check if element is visible
- `formatDate()` - Format dates
- `copyToClipboard()` - Copy text to clipboard
- `getRandomColor()` - Random color from palette
- `clamp()` - Clamp number between min/max
- `map()` - Map number between ranges
- `sleep()` - Delay function
- `cn()` - Combine classnames

**Lines**: ~150 | **Size**: ~4.2 KB

#### `lib/constants.ts`
Exports:
- `SITE_CONFIG` - Site metadata
- `COLORS` - Color palettes
- `ANIMATION_DURATION` - Animation timings
- `ANIMATION_EASING` - Easing functions
- `BREAKPOINTS` - Responsive breakpoints
- `SECTION_IDS` - Section identifiers
- `SOCIAL_LINKS` - Social media URLs
- `PARTICLE_CONFIG` - Particle settings
- `THREE_CONFIG` - Three.js settings
- `NAV_LINKS` - Navigation links

**Lines**: ~90 | **Size**: ~2.5 KB

---

## 🎣 `/hooks` - Custom React Hooks

### File: `hooks/index.ts`

Contains:
| Hook | Purpose |
|------|---------|
| `useInViewport()` | Detect if element is visible |
| `useMousePosition()` | Track mouse X, Y coordinates |
| `useScrollPosition()` | Get current scroll position |
| `useScrollDirection()` | Detect scroll up/down |
| `useWindowSize()` | Get window width/height |
| `useIsMobile()` | Mobile device detection |
| `useDarkMode()` | Dark mode toggle |
| `useDebounce()` | Debounce values |
| `usePrevious()` | Get previous value |
| `useLocalStorage()` | LocalStorage persistence |
| `useLazyLoad()` | Lazy loading on scroll |

**Lines**: ~280 | **Size**: ~8.2 KB

---

## 📊 File Statistics

### Total Files: 24
```
Configuration files:    9
App files:             3
Components:            12
Library files:         2
Hook files:            1
Documentation:         3
```

### Total Lines of Code
- **TypeScript/React**: ~2,500+ lines
- **CSS**: ~450 lines
- **Configuration**: ~200 lines
- **Documentation**: ~1,500+ lines
- **Total**: ~4,650+ lines

### Total Project Size
- **Code**: ~65 KB
- **Configuration**: ~8 KB
- **Documentation**: ~35 KB
- **Total**: ~108 KB (uncompressed)

---

## 🔗 Component Dependencies Graph

```
app/page.tsx (Main)
├── Navbar.tsx
├── Hero.tsx
│   └── FloatingOrbs.tsx
│       └── Three.js + React Three Fiber
├── About.tsx
│   └── Framer Motion + Intersection Observer
├── Skills.tsx
│   └── Framer Motion + Intersection Observer
├── Projects.tsx
│   └── Framer Motion + Intersection Observer
├── Contact.tsx
│   └── Framer Motion
├── Footer.tsx
│   └── Framer Motion
├── ParticleBackground.tsx
│   └── HTML5 Canvas
└── CustomCursor.tsx
    └── React Hooks
```

---

## 📦 NPM Dependencies

### Production Dependencies (18 packages)
```
Core:
- next@14.2.0
- react@18
- react-dom@18

Animations:
- framer-motion@11.2.0
- gsap@3.12.5
- lenis@1.1.9

3D Graphics:
- three@0.164.1
- @react-three/fiber@8.16.8
- @react-three/drei@9.105.4

UI & Forms:
- react-hot-toast@2.4.1
- @emailjs/browser@4.3.3

Utilities:
- clsx@2.1.1
- tailwind-merge@2.3.0
- react-intersection-observer@9.10.3
- react-type-animation@3.2.0
- react-countup@6.5.3
```

### Dev Dependencies (8 packages)
```
- typescript@5
- tailwindcss@3.4.1
- postcss@8
- autoprefixer@10.0.1
- eslint@8
- eslint-config-next@14.2.0
@types/node
@types/react
@types/react-dom
@types/three
```

---

## 🎯 File Purposes Summary

### Configuration Layer (9 files)
- Define project settings
- Manage dependencies
- Configure build tools
- Set TypeScript rules

### Application Layer (3 files)
- Root layout and metadata
- Main page structure
- Global styling

### Component Layer (12 files)
- 3D effects and visual elements
- Page sections and layouts
- UI components and utilities

### Utility Layer (2 files)
- Helper functions
- Constants and configuration

### Hook Layer (1 file)
- Custom React hooks for logic reuse

### Documentation (3+ files)
- Setup instructions
- Customization guide
- API reference

---

## 🔧 Key Technologies Used

| Category | Technologies |
|----------|--------------|
| Frontend Framework | React 18, Next.js 14 |
| Styling | Tailwind CSS, PostCSS |
| 3D Graphics | Three.js, React Three Fiber |
| Animations | Framer Motion, GSAP (optional) |
| Smooth Scroll | Lenis |
| Type Safety | TypeScript |
| Build Tools | Next.js, Webpack |
| Package Manager | npm, yarn, pnpm |
| Linting | ESLint |

---

## 📝 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `QUICK_START.md` | Quick setup guide |
| `SETUP_GUIDE.md` | Comprehensive setup |
| `FILE_MANIFEST.md` | This file |

---

## 🚀 How to Use This Project

1. **Install**: `npm install`
2. **Develop**: `npm run dev`
3. **Customize**: Edit component files
4. **Build**: `npm run build`
5. **Deploy**: Push to Vercel/Netlify

---

## ✅ What's Included

✓ Responsive dark theme portfolio
✓ 3D animated orbs (Three.js)
✓ Particle background effects
✓ Smooth page scroll
✓ Custom cursor tracking
✓ Section animations
✓ Contact form
✓ Project showcase
✓ Skills display
✓ About section
✓ Social links
✓ Mobile-optimized
✓ Performance optimized
✓ SEO ready
✓ TypeScript support
✓ ESLint configured
✓ Tailwind CSS customizable
✓ Deployment ready

---

## 📚 Quick Reference

### Common Customizations
- Change colors → `tailwind.config.js`
- Update content → Edit component files in `/components/sections`
- Add animations → Modify `framer-motion` variants
- Customize particles → `components/3d/ParticleBackground.tsx`
- Change fonts → `tailwind.config.js` & `app/globals.css`

### Common Commands
```bash
npm run dev      # Start development
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Check code quality
npm install      # Install dependencies
```

### Common Hooks
```tsx
useInViewport()         // Scroll detection
useMousePosition()      // Mouse tracking
useScrollPosition()     // Scroll position
useWindowSize()         // Responsive sizes
useIsMobile()          // Mobile detection
useLocalStorage()      // Persist data
```

---

Generated: 2026
Version: 1.0.0
