import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function SectionTitle({ id, label, title, subtitle, center = true }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-bright mb-3">
          {label}
        </span>
      )}
      <h2 id={id} className="font-heading text-3xl sm:text-4xl font-bold text-text-main mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-bright ${center ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
