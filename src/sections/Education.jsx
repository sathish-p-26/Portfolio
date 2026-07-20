import SectionTitle from '../components/SectionTitle'
import EducationTimeline from '../components/EducationTimeline'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg-section" aria-labelledby="education-heading">
      <div className="section-container">
        <SectionTitle
          id="education-heading"
          label="Academic Background"
          title="Education"
          subtitle="My formal education and academic achievements."
        />
        <div className="max-w-2xl mx-auto">
          <EducationTimeline items={education} />
        </div>
      </div>
    </section>
  )
}
