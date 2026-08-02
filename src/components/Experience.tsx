import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'
import { experience } from '../data/resumeData'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Hands-on experience applying data and software skills to real problems."
        />

        <div className="relative pl-10 sm:pl-14">
          <div className="absolute left-[13px] sm:left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-royal-500/60 via-royal-500/25 to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-10 sm:-left-14 top-1.5 w-8 h-8 rounded-full glass-strong flex items-center justify-center text-royal-400 shadow-glow-sm">
                <FiBriefcase size={14} />
              </span>

              <GlassCard hover className="p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">{exp.role}</h3>
                    <p className="text-royal-400 text-sm font-medium mt-0.5">{exp.company}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{exp.org}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] justify-end">
                      <FiCalendar size={12} /> {exp.period}
                    </p>
                    <p className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] justify-end mt-1">
                      <FiMapPin size={12} /> {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 mt-4">
                  {exp.points.map((point) => (
                    <li key={point} className="text-sm text-[var(--text-muted)] leading-relaxed flex gap-2.5">
                      <span className="text-royal-400 mt-1.5 w-1 h-1 rounded-full bg-royal-400 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
