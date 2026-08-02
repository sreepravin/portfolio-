import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { profile } from '../data/resumeData'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} {profile.name}. Built with React & care.
        </p>

        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-royal-400 transition-colors" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-royal-400 transition-colors" aria-label="LinkedIn">
            <FiLinkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-[var(--text-muted)] hover:text-royal-400 transition-colors" aria-label="Email">
            <FiMail size={18} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 flex items-center justify-center rounded-full glass text-[var(--text-primary)] hover:text-royal-400 transition-colors ml-2"
            aria-label="Back to top"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
