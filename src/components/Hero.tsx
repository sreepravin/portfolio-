import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { profile } from '../data/resumeData'
import ParticlesBackground from './ParticlesBackground'
import TypingText from './ui/TypingText'
import Button from './ui/Button'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 })
  const shiftX = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 100, damping: 20 })
  const shiftY = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), { stiffness: 100, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-fade [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <ParticlesBackground />
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-royal-600/25 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-royal-500/15 rounded-full blur-[130px]" />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Hello, I&apos;m</span>
          <h1 className="font-display font-bold text-[var(--text-primary)] text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.08] tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-[var(--text-muted)] font-medium h-8">
            <TypingText words={profile.roles} />
          </p>
          <p className="mt-6 text-[var(--text-muted)] leading-relaxed max-w-xl">
            {profile.summary.slice(0, 205)}…
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={profile.resumeFile} download icon={<FiDownload size={16} />}>
              Download Resume
            </Button>
            <Button href="#contact" variant="ghost" icon={<FiMail size={16} />}>
              Contact Me
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full glass text-[var(--text-primary)] hover:text-royal-400 hover:border-royal-400/50 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full glass text-[var(--text-primary)] hover:text-royal-400 hover:border-royal-400/50 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          style={{ perspective: 1000 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            style={{ rotateX, rotateY, x: shiftX, y: shiftY }}
            className="relative w-64 h-64 sm:w-80 sm:h-80"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-royal-500/40 to-royal-700/10 blur-2xl animate-pulseGlow" />
            <div className="absolute inset-0 rounded-full border border-royal-400/30 animate-float" />
            <div className="absolute inset-3 rounded-full glass-strong overflow-hidden shadow-glow">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-muted)] hover:text-royal-400 transition-colors"
        aria-label="Scroll to About section"
      >
        <FiArrowDown size={22} />
      </motion.button>
    </section>
  )
}
