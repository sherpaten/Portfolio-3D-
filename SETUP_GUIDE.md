# 📖 Complete Setup Guide

## 🎯 Overview

This is a production-ready dark futuristic portfolio built with modern web technologies. This guide covers everything from installation to customization to deployment.

---

## 📋 System Requirements

- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher (or yarn/pnpm)
- **Git**: For version control
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (latest 2 versions)

Check your versions:
```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation Steps

### Step 1: Clone/Download the Project

If from Git:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

Or extract the downloaded ZIP file and navigate to the folder.

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages listed in `package.json`. This may take 2-5 minutes.

**Alternative package managers:**
```bash
# Using Yarn
yarn install

# Using pnpm
pnpm install
```

### Step 3: Create Environment File

Copy the example environment file:
```bash
cp .env.example .env.local
```

Edit `.env.local` if needed:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 4: Start Development Server

```bash
npm run dev
```

You should see:
```
> portfolio@0.1.0 dev
> next dev

  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

### Step 5: Open in Browser

Navigate to: `http://localhost:3000`

🎉 Your portfolio is now running!

---

## 📂 Project Structure Deep Dive

### `/app` - Next.js App Directory

```
app/
├── layout.tsx          # Root layout component
│                       # - Sets up metadata
│                       # - Includes global providers
│                       # - Wraps all pages
│
├── page.tsx            # Main page component
│                       # - Imports all sections
│                       # - Initializes smooth scroll
│                       # - Sets up animations
│
└── globals.css         # Global styles
                        # - Tailwind imports
                        # - Custom animations
                        # - Utility classes
                        # - Font declarations
```

### `/components` - React Components

#### `/components/sections` - Page Sections

| Component | Purpose |
|-----------|---------|
| `Navbar.tsx` | Navigation with smooth scroll |
| `Hero.tsx` | Hero/banner with intro |
| `About.tsx` | About section with stats |
| `Skills.tsx` | Skills with progress bars |
| `Projects.tsx` | Project showcase cards |
| `Contact.tsx` | Contact form + social |
| `Footer.tsx` | Footer with links |

#### `/components/3d` - 3D Effects

| Component | Technology |
|-----------|----------|
| `FloatingOrbs.tsx` | Three.js + React Three Fiber |
| `ParticleBackground.tsx` | HTML5 Canvas |

#### `/components/ui` - UI Components

| Component | Purpose |
|-----------|---------|
| `CustomCursor.tsx` | Interactive cursor tracking |
| `ScrollReveal.tsx` | Scroll-triggered animations |

### `/lib` - Utilities

| File | Contents |
|------|----------|
| `utils.ts` | Helper functions (scroll, debounce, etc.) |
| `constants.ts` | Site config, colors, animation settings |

### `/hooks` - Custom React Hooks

| Hook | Purpose |
|------|---------|
| `useInViewport()` | Detect if element is visible |
| `useMousePosition()` | Track mouse coordinates |
| `useScrollPosition()` | Track scroll position |
| `useWindowSize()` | Get window dimensions |
| `useIsMobile()` | Detect mobile device |
| `useDarkMode()` | Toggle dark mode |
| `useDebounce()` | Debounce values |
| `useLocalStorage()` | Persist data locally |

---

## 🎨 Customization Guide

### 1. Update Personal Information

#### Hero Section
**File**: `components/sections/Hero.tsx`

```tsx
// Change your name and title
<h1 className="...">
  <div>Your Title</div>
  <div className="text-gradient-cyan">Your Specialty</div>
  <div>&amp; Your Role</div>
</h1>

// Update description
<p className="text-lg ...">
  Your personal introduction and what you're building
</p>
```

#### About Section
**File**: `components/sections/About.tsx`

```tsx
// Update bio
<p>Hi, I'm <span>Your Name</span> — your introduction...</p>

// Update stats
<CountUp end={4} />  {/* Years of experience */}
<CountUp end={30} /> {/* Number of projects */}
<CountUp end={1} />  {/* Startups */}

// Update terminal code
<span className="t-key">role</span>: <span className="t-string">"Your Role"</span>,
<span className="t-key">stack</span>: [<span className="t-string">"Your Tech"</span>, ...],
```

### 2. Update Skills

**File**: `components/sections/Skills.tsx`

```tsx
const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '⚡',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      // Add your skills
    ],
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  // Add more categories
]
```

**Available Icons (Emojis)**:
```
Frontend: ⚡ 🎨 🖌️
Backend:  🔧 ⚙️ 🛠️
DevOps:   ☁️ 🐳 📦
Database: 🗄️ 💾 📊
```

### 3. Update Projects

**File**: `components/sections/Projects.tsx`

```tsx
const projectsData: ProjectData[] = [
  {
    title: 'Your Project Name',
    description: 'What does this project do? What problem does it solve?',
    icon: '🚀',  // Project icon/emoji
    featured: true,  // Show as featured
    stack: ['React', 'Node.js', 'PostgreSQL'],
    links: [
      { label: 'Live', href: 'https://project.com' },
      { label: 'GitHub', href: 'https://github.com/repo' },
    ],
  },
]
```

### 4. Update Contact Information

**File**: `components/sections/Contact.tsx`

```tsx
const socialLinks = [
  { 
    label: 'Email', 
    icon: '✉', 
    href: 'mailto:your@email.com' 
  },
  { 
    label: 'LinkedIn', 
    icon: '🔗', 
    href: 'https://linkedin.com/in/yourprofile' 
  },
  { 
    label: 'GitHub', 
    icon: '🐙', 
    href: 'https://github.com/yourprofile' 
  },
  // Add more links
]
```

### 5. Customize Colors

#### Option A: Tailwind Config
**File**: `tailwind.config.js`

```js
colors: {
  neon: {
    cyan:   '#00f5ff',  // Primary color
    violet: '#bf00ff',  // Secondary color
    pink:   '#ff006e',  // Accent color
    green:  '#00ff88',  // Tertiary color
  },
}
```

#### Option B: CSS Variables
**File**: `app/globals.css`

```css
:root {
  --neon-cyan:    #00f5ff;
  --neon-violet:  #bf00ff;
  --neon-pink:    #ff006e;
  --bg-primary:   #020408;
  --bg-secondary: #060d14;
}
```

**Popular Color Schemes**:

| Scheme | Cyan | Violet | Pink |
|--------|------|--------|------|
| Default | `#00f5ff` | `#bf00ff` | `#ff006e` |
| Cool | `#0ff0fc` | `#a66bff` | `#ff1493` |
| Warm | `#ffb800` | `#ff6b35` | `#f7b801` |
| Purple | `#00d9ff` | `#7c3aed` | `#ec4899` |

### 6. Customize Fonts

**File**: `tailwind.config.js`

```js
fontFamily: {
  sans:   ['Space Grotesk', 'sans-serif'],
  mono:   ['Space Mono', 'monospace'],
  clash:  ['Clash Display', 'sans-serif'],
}
```

To use a different font, import from Google Fonts in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR+FONT:wght@400;600;700&display=swap');
```

Then update the config to use the new font name.

### 7. Customize Animations

#### Framer Motion Animations

Edit animation variants in component files:

```tsx
const itemVariants = {
  hidden: { opacity: 0, y: 30 },      // Starting state
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,      // How long the animation takes (seconds)
      ease: 'easeOut'     // Animation curve
    },
  },
}
```

**Available easing functions**:
```
'easeIn', 'easeOut', 'easeInOut', 'circOut', 
'backOut', 'anticipate', 'linear'
```

#### Tailwind Animations

Edit in `tailwind.config.js`:

```js
keyframes: {
  float: {
    '0%,100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' }  // Change float height
  },
}
```

### 8. Customize Particle Background

**File**: `components/3d/ParticleBackground.tsx`

```tsx
const particleCount = 80        // Number of particles
const maxDistance = 120         // Max connection distance
const speed = 0.5              // Particle speed
```

Lower values = better performance on slower devices.

### 9. Customize 3D Orbs

**File**: `components/3d/FloatingOrbs.tsx`

```tsx
<Orb 
  position={[0, 0, 0]}     // X, Y, Z position
  color="#00f5ff"          // Hex color
  size={1.5}               // Sphere radius
  speed={1}                // Rotation speed
/>
```

---

## ⚙️ Configuration Files

### `tsconfig.json` - TypeScript Configuration

Handles TypeScript compiler options and path aliases.

Key settings:
- `strict: true` - Strict type checking
- `paths` - Path aliases (e.g., `@/components`)

### `tailwind.config.js` - Tailwind CSS

Defines custom theme (colors, fonts, animations).

### `next.config.js` - Next.js Configuration

Next.js-specific settings:
```js
{
  images: { domains: [...] },  // Allowed image domains
  transpilePackages: ['three'], // Packages to transpile
}
```

### `package.json` - Dependencies

Lists all npm packages and scripts.

**Main scripts**:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

---

## 🎬 Animation & Effects

### Scroll Reveal Animation

Wrap any component with `ScrollReveal`:

```tsx
<ScrollReveal delay={100}>
  <YourComponent />
</ScrollReveal>
```

This automatically animates the element when it enters the viewport.

### Framer Motion Animations

Use `motion` components for more control:

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

### Custom Cursor

The custom cursor is automatically enabled. Customize in:
**File**: `components/ui/CustomCursor.tsx`

---

## 📱 Responsive Design

The portfolio is mobile-first and adapts to:

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | < 768px | Single column |
| Tablet | 768px - 1024px | 2 columns |
| Desktop | > 1024px | 3 columns |

Test on different devices using Chrome DevTools (F12 → Toggle device toolbar).

---

## 🚀 Building & Deployment

### Build for Production

```bash
npm run build
```

Creates optimized build in `.next/` folder.

### Preview Production Build

```bash
npm run build
npm start
```

Runs the production-ready site locally.

### Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

**Environment variables** in Vercel dashboard:
- Go to Settings → Environment Variables
- Add any `.env` variables

### Deploy to Netlify

1. Build locally: `npm run build`
2. Upload the `.next` folder to Netlify
3. Set build command: `npm run build`
4. Set output directory: `.next`

### Self-Hosted (AWS, DigitalOcean, etc.)

1. SSH into your server
2. Clone repository
3. Install Node.js
4. Run:
   ```bash
   npm install
   npm run build
   npm start
   ```
5. Set up reverse proxy (Nginx/Apache)

---

## 🔧 Development Workflow

### Running Locally

```bash
npm run dev
```

- Hot reload enabled
- Navigate to `http://localhost:3000`
- Changes reflect instantly

### Code Quality

```bash
npm run lint
```

Runs ESLint to check code quality.

### Building

```bash
npm run build
```

Optimizes and bundles the code.

---

## 📊 Performance Optimization

### Image Optimization

Use Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={400}
  height={300}
  loading="lazy"
/>
```

### Code Splitting

Next.js automatically splits code by page/route.

### Lazy Loading Components

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

### Reduce Animation Load

Lower particle count in `ParticleBackground`:
```tsx
const particleCount = 40  // Reduced from 80
```

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
npm run dev -- -p 3001
```

Runs on port 3001 instead.

### Dependencies Installation Error

```bash
rm -rf node_modules package-lock.json
npm install
```

Clear cache and reinstall.

### Canvas Not Rendering

- Clear browser cache (Ctrl+Shift+Delete)
- Check if WebGL is supported: [Get WebGL Report](https://www.khronos.org/webgl/wiki/Getting_Started)
- Check browser console for errors (F12)

### Animations Not Working

- Verify Framer Motion is installed: `npm list framer-motion`
- Check if JavaScript is enabled
- Clear `.next` folder: `rm -rf .next`

### TypeScript Errors

```bash
npx tsc --noEmit
```

Check for TypeScript compilation errors.

---

## 📚 Additional Resources

### Documentation
- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Three.js](https://threejs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

### Tools
- [Vercel Deployment](https://vercel.com)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools)
- [WebGL Report](https://www.khronos.org/webgl/wiki/Getting_Started)
- [Can I Use](https://caniuse.com)

---

## ✅ Deployment Checklist

Before going live:

- [ ] Update all personal information
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Optimize images
- [ ] Test form submission
- [ ] Set up custom domain
- [ ] Add SEO metadata
- [ ] Set up analytics (optional)
- [ ] Enable HTTPS
- [ ] Test on different browsers
- [ ] Check performance (Lighthouse)
- [ ] Set up email forwarding (optional)

---

## 🎉 Next Steps

1. **Customize** - Follow the customization guide above
2. **Test** - Run locally and test thoroughly
3. **Deploy** - Push to GitHub and deploy to Vercel
4. **Monitor** - Check analytics and user feedback
5. **Iterate** - Improve based on feedback

---

## 💬 Need Help?

- Check code comments
- Review the QUICK_START.md guide
- Check component documentation
- Look at example code in components

Good luck! 🚀
