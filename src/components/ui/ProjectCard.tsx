import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronDown, FiCheck, FiAlertCircle, FiTrendingUp } from 'react-icons/fi'
import { Project, profile } from '../../data/resumeData'
import GlassCard from './GlassCard'
import ProjectIllustration from './ProjectIllustration'
import SqlDemo from './SqlDemo'

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const [open, setOpen] = useState(false)

  return (
    <GlassCard delay={delay} className="overflow-hidden" hover={false}>
      <div className="h-44 relative">
        <ProjectIllustration theme={project.theme} />
        <span className="absolute top-4 left-4 text-[11px] tracking-widest uppercase font-display px-3 py-1 rounded-full glass text-royal-400">
          {project.tag}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-2.5">{project.title}</h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{project.overview}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((t) => (
            <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-royal-500/10 text-royal-300 border border-royal-400/20">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-royal-400 transition-colors"
          >
            <FiGithub size={15} /> GitHub
          </a>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)]/60 cursor-not-allowed" title="Demo coming soon">
            <FiExternalLink size={15} /> Live Demo
          </span>
          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-royal-400"
          >
            Details
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <FiChevronDown size={16} />
            </motion.span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-white/10 space-y-5">
                <div>
                  <h4 className="flex items-center gap-2 text-xs tracking-widest uppercase font-display text-royal-400 mb-2.5">
                    <FiCheck size={13} /> Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="text-sm text-[var(--text-muted)] flex gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-royal-400 mt-2 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.theme === 'ai' && (
                  <div>
                    <h4 className="text-xs tracking-widest uppercase font-display text-royal-400 mb-2.5">Live Example</h4>
                    <SqlDemo />
                  </div>
                )}

                <div>
                  <h4 className="flex items-center gap-2 text-xs tracking-widest uppercase font-display text-royal-400 mb-2.5">
                    <FiAlertCircle size={13} /> Challenges
                  </h4>
                  <ul className="space-y-1.5">
                    {project.challenges.map((c) => (
                      <li key={c} className="text-sm text-[var(--text-muted)] flex gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-royal-400 mt-2 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-xs tracking-widest uppercase font-display text-royal-400 mb-2.5">
                    <FiTrendingUp size={13} /> Future Improvements
                  </h4>
                  <ul className="space-y-1.5">
                    {project.improvements.map((im) => (
                      <li key={im} className="text-sm text-[var(--text-muted)] flex gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-royal-400 mt-2 shrink-0" />
                        {im}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GlassCard>
  )
}
