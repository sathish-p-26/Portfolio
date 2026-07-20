import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-main" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionTitle
          id="projects-heading"
          label="What I've Built"
          title="Featured Projects"
          subtitle="A selection of projects that showcase my skills in automation, API integration, and frontend development."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
