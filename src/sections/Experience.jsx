import SectionTitle from '../components/SectionTitle'
import ExperienceCard from '../components/ExperienceCard'
import { experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-main" aria-labelledby="experience-heading">
      <div className="section-container">
        <SectionTitle
          id="experience-heading"
          label="My Journey"
          title="Work Experience"
          subtitle="Professional internships where I contributed to real-world projects."
        />
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
