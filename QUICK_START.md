# 🚀 Portfolio Quick Start Guide

## 📋 What You Got

A complete, production-ready dark futuristic portfolio built with:
- **React 18** + **Next.js 14**
- **TypeScript** for type safety
- **Framer Motion** for smooth animations
- **Three.js** + **React Three Fiber** for 3D effects
- **Tailwind CSS** for styling
- **Lenis** for smooth scrolling
- Custom cursor, particle effects, and more!

---

## ⚡ Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
```
http://localhost:3000
```

That's it! 🎉 Your portfolio is live.

---

## 📝 Customization Guide

### Step 1: Update Your Info

#### Hero Section (`components/sections/Hero.tsx`)
```tsx
// Change the title
<div className="text-5xl md:text-7xl font-bold mb-3">
  Your Title Here
</div>

// Change subtitle
<motion.p variants={itemVariants} className="...">
  Your subtitle and description here
</motion.p>
```

#### About Section (`components/sections/About.tsx`)
```tsx
// Update your bio
<p className="text-gray-400 text-lg leading-relaxed">
  Hey, I'm <span className="text-white font-semibold">Your Name</span> — your bio here...
</p>

// Update stats
<div className="text-3xl font-bold text-neon-cyan mb-2">
  {statsInView ? <CountUp isCounting={statsInView} end={YOUR_NUMBER} duration={2} /> : 0}+
</div>
```

#### Terminal Code (`components/sections/About.tsx`)
```tsx
// Customize the JavaScript object shown in terminal
<span className="t-key">role</span>: <span className="t-string">"Your Role"</span>,
<span className="t-key">startup</span>: <span className="t-string">"Your Project"</span>,
```

### Step 2: Update Skills

Edit `components/sections/Skills.tsx`:

```tsx
const skillsData: SkillCategory[] = [
  {
    title: 'Your Category',
    icon: '⚡',  // Change icon (emoji or unicode)
    skills: [
      { name: 'Your Skill', level: 90 },
      { name: 'Another Skill', level: 85 },
    ],
    tags: ['tag1', 'tag2', 'tag3'],
  },
]
```

### Step 3: Update Projects

Edit `components/sections/Projects.tsx`:

```tsx
const projectsData: ProjectData[] = [
  {
    title: 'Your Project Title',
    description: 'What does this project do?',
    icon: '🚀',  // Change emoji
    featured: true,  // Make it featured
    stack: ['React', 'Node.js', 'PostgreSQL'],
    links: [
      { label: 'Live demo', href: 'https://your-project.com' },
      { label: 'GitHub', href: 'https://github.com/yourrepo' },
    ],
  },
  // Add more projects...
]
```

### Step 4: Update Contact

Edit `components/sections/Contact.tsx`:

```tsx
const socialLinks = [
  { label: 'Email', icon: '✉', href: 'mailto:your@email.com' },
  { label: 'LinkedIn', icon: '🔗', href: 'https://linkedin.com/in/yourprofile' },
  { label: 'GitHub', icon: '🐙', href: 'https://github.com/yourprofile' },
  { label: 'Twitter', icon: '𝕏', href: 'https://twitter.com/yourprofile' },
]
```

### Step 5: Customize Colors

Edit `tailwind.config.js`:

```js
colors: {
  neon: {
    cyan:   '#YOUR_COLOR_1',
    violet: '#YOUR_COLOR_2',
    pink:   '#YOUR_COLOR_3',
    green:  '#YOUR_COLOR_4',
  },
}
```

Or update CSS variables in `app/globals.css`:

```css
:root {
  --neon-cyan:    #YOUR_COLOR_1;
  --neon-violet:  #YOUR_COLOR_2;
  --neon-pink:    #YOUR_COLOR_3;
}
```

### Step 6: Update Logo/Branding

Edit `components/sections/Navbar.tsx`:

```tsx
<span className="font-mono text-sm tracking-widest">
  &#47;&#47; <span className="text-neon-cyan">yourname</span>
  <span className="text-white">dev</span>
</span>
```

---

## 🎨 Color Palette

The portfolio comes with a cyberpunk color scheme:

| Color | Hex | Usage |
|-------|-----|-------|
| Cyan | `#00f5ff` | Primary accent |
| Violet | `#bf00ff` | Secondary accent |
| Pink | `#ff006e` | Tertiary accent |
| Dark BG | `#020408` | Background |

**To change colors globally**, edit `app/globals.css`:

```css
:root {
  --neon-cyan:    #NEW_COLOR;
  --neon-violet:  #NEW_COLOR;
  --neon-pink:    #NEW_COLOR;
  --bg-primary:   #NEW_COLOR;
}
```

---

## 🎬 Customize Animations

### Framer Motion Animations
Edit any component file and modify the `variants`:

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  // Change delay between children
      delayChildren: 0.2,    // Initial delay
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },  // Change from position
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },  // Change duration
  },
}
```

### Tailwind Animations
Edit `tailwind.config.js` under `keyframes`:

```js
keyframes: {
  float: { 
    '0%,100%': { transform: 'translateY(0px)' }, 
    '50%': { transform: 'translateY(-20px)' }  // Change height
  },
}
```

---

## 📱 Responsive Design

The portfolio is mobile-first. The layout automatically adapts:

- **Mobile** (< 768px): Stacked layout
- **Tablet** (768px - 1024px): 2-column grid
- **Desktop** (> 1024px): Full 3-column layout

Test with browser DevTools (F12) → Toggle device toolbar

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Done! Your portfolio is live.

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `.next` folder to Netlify

### Self-Hosted (VPS)

1. Build:
   ```bash
   npm run build
   ```

2. Start:
   ```bash
   npm start
   ```

3. Set up a reverse proxy (Nginx/Apache)

---

## 📊 Project Structure Explained

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page (imports all sections)
│   └── globals.css             # Global styles & animations
│
├── components/
│   ├── 3d/
│   │   ├── FloatingOrbs.tsx       # 3D orbs (Three.js)
│   │   └── ParticleBackground.tsx # Particle canvas
│   │
│   ├── sections/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Hero.tsx            # Hero/banner section
│   │   ├── About.tsx           # About + stats
│   │   ├── Skills.tsx          # Skills categories
│   │   ├── Projects.tsx        # Project cards
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer
│   │
│   └── ui/
│       ├── CustomCursor.tsx    # Custom cursor tracking
│       └── ScrollReveal.tsx    # Scroll animations
│
├── lib/
│   ├── utils.ts                # Helper functions
│   └── constants.ts            # Config & constants
│
├── hooks/
│   └── index.ts                # Custom React hooks
│
├── public/                      # Static assets (images, icons)
│
├── tailwind.config.js          # Tailwind theme config
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
└── package.json                # Dependencies
```

---

## 🔧 Common Customizations

### Change Font

Edit `tailwind.config.js`:

```js
fontFamily: {
  sans:  ['Your Font', 'sans-serif'],
  mono:  ['Courier New', 'monospace'],
}
```

### Change Section Order

Edit `app/page.tsx` - reorder the component imports:

```tsx
<Hero />
<About />
<Skills />
{/* Move components around */}
<Projects />
<Contact />
```

### Add New Section

1. Create `components/sections/YourSection.tsx`
2. Add to `app/page.tsx`
3. Add to navigation in `components/sections/Navbar.tsx`

### Disable Animations

Comment out animations in component variants or add `motion.div` with `initial` and `animate` removed.

---

## ⚡ Performance Tips

1. **Reduce Particle Count** in `components/3d/ParticleBackground.tsx`:
   ```tsx
   const particleCount = 50  // Default: 80
   ```

2. **Lazy Load Images**:
   ```tsx
   import Image from 'next/image'
   <Image src="..." alt="..." loading="lazy" />
   ```

3. **Optimize Three.js** by reducing orb detail:
   ```tsx
   <icosahedronGeometry args={[size, 8]} />  // Default: 16
   ```

---

## 🐛 Troubleshooting

### Canvas not showing?
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console (F12)
- Make sure GPU acceleration is enabled

### Animations stuttering?
- Reduce `particleCount`
- Disable motion on mobile
- Check browser performance (DevTools → Performance)

### Tailwind styles not applying?
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

### Three.js errors?
- Check WebGL support in browser
- Update `next.config.js` transpilePackages

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Three.js](https://threejs.org)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

---

## 💡 Pro Tips

1. **Use Chrome DevTools** to test mobile
2. **Use Vercel Analytics** to track performance
3. **Add SEO metadata** in `app/layout.tsx`
4. **Use Image Optimization** for faster loads
5. **Enable compression** in deployment

---

## ✅ Before Launch Checklist

- [ ] Update all personal info
- [ ] Change colors to match your brand
- [ ] Add all your projects
- [ ] Update email/social links
- [ ] Test on mobile
- [ ] Set up Google Analytics (optional)
- [ ] Set up form submission (EmailJS or Formspree)
- [ ] Deploy to Vercel/Netlify
- [ ] Add custom domain
- [ ] Set up email forwarding

---

## 🎉 Done!

You now have a production-ready dark futuristic portfolio!

Next steps:
1. Customize content (follow Step 1-6 above)
2. Deploy (Vercel recommended)
3. Share your awesome portfolio! 

Need help? Check the README.md or the comments in the code.

Happy coding! ✨
