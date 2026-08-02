import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon, FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '../data/resumeData'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const active = useActiveSection(['home', ...links.map((l) => l.id)])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${scrolled ? 'glass-strong' : ''}`}>
          <button
            onClick={() => scrollTo('home')}
            className="font-display font-semibold text-lg text-[var(--text-primary)] tracking-tight"
          >
            SP<span className="text-royal-400">.</span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  active === l.id
                    ? 'text-royal-400 bg-royal-400/10'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--text-muted)] hover:text-royal-400 transition-colors">
              <FiGithub size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--text-muted)] hover:text-royal-400 transition-colors">
              <FiLinkedin size={18} />
            </a>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-full glass text-[var(--text-primary)] hover:text-royal-400 transition-colors"
            >
              {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </div>

          <button
            className="lg:hidden text-[var(--text-primary)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-2 rounded-2xl glass-strong overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-1">
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => scrollTo(l.id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium ${
                      active === l.id ? 'text-royal-400 bg-royal-400/10' : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
                <div className="flex items-center gap-4 px-4 pt-3 border-t border-white/10 mt-2">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)]">
                    <FiGithub size={18} />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)]">
                    <FiLinkedin size={18} />
                  </a>
                  <button onClick={toggle} className="ml-auto text-[var(--text-muted)]">
                    {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
