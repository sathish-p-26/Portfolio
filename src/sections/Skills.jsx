import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import { skillCategories } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg-section" aria-labelledby="skills-heading">
      <div className="section-container">
        <SectionTitle
          id="skills-heading"
          label="What I Know"
          title="Technical Skills"
          subtitle="Technologies and tools I use to build and automate digital solutions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
