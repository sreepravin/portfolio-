import { projects } from '../data/resumeData'
import SectionHeading from './ui/SectionHeading'
import ProjectCard from './ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="Two full-stack builds that pair practical engineering with applied AI."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
