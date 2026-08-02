import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { profile, aboutPoints, stats } from '../data/resumeData'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="Building thoughtful software, one problem at a time"
          description="A quick look at who I am and what I bring to a team."
        />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-strong p-2 max-w-sm">
              <img
                src={profile.photo}
                alt={`${profile.name} portrait`}
                className="rounded-2xl w-full object-cover aspect-[4/5] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-6 glass-strong rounded-2xl px-5 py-4 shadow-glow-sm">
              <p className="font-display text-2xl font-semibold text-royal-400">7.8 CGPA</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">AI & Data Science, KSRCT</p>
            </div>
          </motion.div>

          <div>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8">{profile.summary}</p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {aboutPoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-start gap-2.5"
                >
                  <FiCheckCircle className="text-royal-400 mt-0.5 shrink-0" size={16} />
                  <span className="text-sm text-[var(--text-primary)]">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <GlassCard key={s.label} delay={i * 0.08} className="p-5 text-center" hover={false}>
                  <p className="font-display text-3xl font-bold text-royal-400">{s.value}+</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">{s.label}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
