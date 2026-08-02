import { skillGroups } from '../data/resumeData'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'
import SkillBar from './ui/SkillBar'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Toolset"
          description="Languages, frameworks and tools I use to design, build and ship software end to end."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <GlassCard key={group.category} delay={gi * 0.08} className="p-6" hover={true}>
              <h3 className="font-display text-sm tracking-[0.2em] uppercase text-royal-400 mb-5">
                {group.category}
              </h3>
              <div className="flex flex-col gap-4">
                {group.items.map((item, ii) => (
                  <SkillBar key={item.name} name={item.name} level={item.level} delay={ii * 0.06} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
