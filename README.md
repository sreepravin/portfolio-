# Sree Preavin K I — Portfolio

A premium, glassmorphic personal portfolio built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**, designed to support applications for Software Developer, Full Stack Developer, Data Analyst, AI Engineer, and Data Engineer roles.

## ✨ Features

- Black · White · Royal Blue glassmorphism theme with dark/light mode
- Framer Motion page-load, scroll-reveal, and hover animations
- Animated hero with typing effect, floating particles, and mouse parallax
- Scroll progress bar + a "signal trace" section nav (signature motif tying the data-pipeline theme to navigation)
- Fully responsive (desktop, tablet, mobile) and keyboard-accessible
- Custom animated cursor (desktop only), reduced-motion support
- Content generated entirely from the résumé — no placeholder text
- SEO meta tags (Open Graph, Twitter Card, description, keywords)

## 🧱 Tech Stack

React · Vite · TypeScript · Tailwind CSS · Framer Motion · React Icons

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── photo.jpg                # Hero / About / Contact profile photo
│   └── Sree_Preavin_KI_Resume.pdf
├── src/
│   ├── components/
│   │   ├── ui/                  # Reusable primitives (Button, GlassCard, SkillBar, ...)
│   │   ├── Hero.tsx, About.tsx, Skills.tsx, Experience.tsx,
│   │   │   Projects.tsx, Certificates.tsx, Education.tsx,
│   │   │   Achievements.tsx, Contact.tsx, Footer.tsx
│   │   ├── Navbar.tsx, ScrollProgressBar.tsx, SignalTrace.tsx,
│   │   │   ParticlesBackground.tsx, CustomCursor.tsx, LoadingScreen.tsx
│   ├── data/resumeData.ts       # All résumé content, typed
│   ├── hooks/                   # useTheme, useActiveSection
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

The site runs at `http://localhost:5173` by default.

## ✍️ Editing Content

All résumé content — name, summary, experience, projects, skills, certificates, education, and achievements — lives in a single typed file:

```
src/data/resumeData.ts
```

Update that file and every section on the site updates automatically. Swap `public/photo.jpg` and `public/Sree_Preavin_KI_Resume.pdf` to update the photo and downloadable résumé.

## 🌐 Deployment

### Vercel (recommended)
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — Vercel auto-detects everything else.

### Netlify
1. Push to GitHub (or drag-and-drop the `dist` folder after building).
2. New site from Git → build command `npm run build`, publish directory `dist`.

### GitHub Pages
1. `npm run build`
2. Deploy the `dist` folder using [gh-pages](https://www.npmjs.com/package/gh-pages) or GitHub Actions.

## ♿ Accessibility

- Visible keyboard focus states on interactive elements
- `prefers-reduced-motion` respected (animations disabled automatically)
- Semantic headings and alt text throughout

---

Built for **Sree Preavin K I** — [sreepravin103@gmail.com](mailto:sreepravin103@gmail.com) · [github.com/sreepravin](https://github.com/sreepravin) · [linkedin.com/in/sree-pravin-k-i](https://linkedin.com/in/sree-pravin-k-i)
