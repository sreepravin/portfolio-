import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import { education } from '../data/resumeData'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Academics" title="Education" />

        <div className="relative pl-10 sm:pl-14">
          <div className="absolute left-[13px] sm:left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-royal-500/60 via-royal-500/25 to-transparent" />

          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              <span className="absolute -left-10 sm:-left-14 top-1.5 w-8 h-8 rounded-full glass-strong flex items-center justify-center text-royal-400 shadow-glow-sm">
                <FiBookOpen size={14} />
              </span>
              <GlassCard hover className="p-6">
                <div className="flex flex-wrap justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold text-[var(--text-primary)]">{ed.degree}</h3>
                    <p className="text-sm text-royal-400 mt-1">{ed.school}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{ed.location}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-[var(--text-muted)]">{ed.period}</p>
                    <p className="text-sm font-medium text-[var(--text-primary)] mt-1">{ed.detail}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
