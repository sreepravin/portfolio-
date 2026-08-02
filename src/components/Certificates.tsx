import { FiAward } from 'react-icons/fi'
import { certificates } from '../data/resumeData'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Credentials"
          title="Certificates"
          description="Continuous learning across cloud AI and large-scale data systems."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((c, i) => (
            <GlassCard key={c.title} delay={i * 0.1} className="p-7 flex gap-5">
              <span className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-royal-500/30 to-royal-700/10 border border-royal-400/25 flex items-center justify-center text-royal-400 shadow-glow-sm">
                <FiAward size={22} />
              </span>
              <div>
                <h3 className="font-display font-semibold text-[var(--text-primary)] leading-snug">{c.title}</h3>
                <p className="text-royal-400 text-xs font-medium mt-1.5">{c.issuer} · {c.date}</p>
                <p className="text-sm text-[var(--text-muted)] mt-3 leading-relaxed">{c.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
