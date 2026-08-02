import { motion } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'

const nodes = [
  { id: 'home', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function SignalTrace() {
  const active = useActiveSection(nodes.map((n) => n.id))

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center">
      <div className="relative flex flex-col gap-7 py-2">
        <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-royal-700/10 via-royal-400/40 to-royal-700/10" />
        {nodes.map((n) => {
          const isActive = active === n.id
          return (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="relative group flex items-center"
              aria-label={`Go to ${n.label} section`}
            >
              <motion.span
                animate={isActive ? { scale: [1, 1.35, 1] } : { scale: 1 }}
                transition={{ duration: 1.8, repeat: isActive ? Infinity : 0, ease: 'easeInOut' }}
                className={`relative z-10 block rounded-full transition-all duration-300 ${
                  isActive ? 'w-3 h-3 bg-royal-400 shadow-glow-sm' : 'w-2 h-2 bg-mist-700/60 group-hover:bg-royal-400/70'
                }`}
              />
              <span
                className={`absolute left-6 whitespace-nowrap font-display text-xs tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'opacity-100 translate-x-0 text-royal-400'
                    : 'opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 text-[var(--text-muted)]'
                }`}
              >
                {n.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
