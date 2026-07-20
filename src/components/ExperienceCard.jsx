import { motion } from 'framer-motion'
import { Briefcase, CheckCircle } from 'lucide-react'

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function ExperienceCard({ experience, index }) {
  const { role, company, location, duration, type, highlights } = experience

  return (
    <motion.article
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4 }}
      className="glass-card p-6 sm:p-8 flex flex-col gap-4 transition-shadow duration-300 hover:shadow-glow"
      aria-label={`${role} at ${company}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center">
            <Briefcase size={20} className="text-primary-bright" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-text-main">{role}</h3>
            <p className="text-primary-bright text-sm font-medium">
              {company}{location ? `, ${location}` : ''}
            </p>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 sm:gap-1 flex-shrink-0">
          <span className="text-xs font-medium text-text-muted bg-bg-card-secondary px-3 py-1 rounded-full border border-border-color whitespace-nowrap">
            {duration}
          </span>
          <span className="text-xs font-medium text-primary-bright bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            {type}
          </span>
        </div>
      </div>

      {/* Highlights */}
      <ul className="flex flex-col gap-2.5 mt-1" role="list">
        {highlights.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
            <CheckCircle
              size={15}
              className="text-primary-bright mt-0.5 flex-shrink-0"
              aria-hidden="true"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
