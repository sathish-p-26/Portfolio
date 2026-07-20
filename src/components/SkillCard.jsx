import { motion } from 'framer-motion'
import {
  Monitor,
  Code,
  Database,
  Zap,
  Wrench,
} from 'lucide-react'

const iconMap = {
  monitor: Monitor,
  code: Code,
  database: Database,
  zap: Zap,
  wrench: Wrench,
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function SkillCard({ category, index }) {
  const { category: name, icon, skills } = category
  const Icon = iconMap[icon] || Code

  return (
    <motion.article
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass-card p-6 flex flex-col gap-4 transition-shadow duration-300 hover:shadow-glow h-full"
      aria-label={`${name} skills`}
    >
      {/* Category header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Icon size={18} className="text-primary-bright" aria-hidden="true" />
        </div>
        <h3 className="font-heading font-semibold text-base text-text-main">{name}</h3>
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2" role="list" aria-label={`${name} technologies`}>
        {skills.map((skill) => (
          <span key={skill} role="listitem" className="pill-tag">
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
