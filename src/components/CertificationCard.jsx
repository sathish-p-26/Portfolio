import { motion } from 'framer-motion'
import { Award, Palette, Box, Plane, Database } from 'lucide-react'

const iconMap = {
  palette: Palette,
  box: Box,
  plane: Plane,
  database: Database,
}

const cardVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' },
  }),
}

export default function CertificationCard({ cert, index }) {
  const { title, issuer, date, credentialUrl, icon } = cert
  const Icon = iconMap[icon] || Award

  return (
    <motion.article
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4 }}
      className="glass-card p-6 flex flex-col gap-3 hover:shadow-glow transition-shadow duration-300"
      aria-label={`Certification: ${title}`}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-1">
        <Icon size={22} className="text-primary-bright" aria-hidden="true" />
      </div>

      <div className="flex-1">
        <h3 className="font-heading font-semibold text-sm text-text-main leading-snug">{title}</h3>
        {issuer && <p className="text-text-muted text-xs mt-1">{issuer}</p>}
        {date && <p className="text-text-muted text-xs">{date}</p>}
      </div>

      {/* Badge */}
      <div className="flex items-center gap-2">
        <Award size={14} className="text-primary-bright" aria-hidden="true" />
        <span className="text-xs text-primary-bright font-medium">Certified</span>
      </div>
    </motion.article>
  )
}
