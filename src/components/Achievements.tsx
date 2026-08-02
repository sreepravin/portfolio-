import { FiStar } from 'react-icons/fi'
import { achievements } from '../data/resumeData'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Highlights" title="Achievements" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <GlassCard key={a.title} delay={i * 0.07} className="p-6">
              <FiStar className="text-royal-400 mb-3.5" size={20} />
              <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2 leading-snug">{a.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{a.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
