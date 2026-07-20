import { motion } from 'framer-motion'
import { GraduationCap, CalendarDays } from 'lucide-react'

const itemVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.18, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function EducationTimeline({ items }) {
  return (
    <div className="relative" role="list" aria-label="Education history">
      {/* Vertical line */}
      <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent" aria-hidden="true" />

      <div className="flex flex-col gap-8">
        {items.map((item, i) => (
          <motion.article
            key={item.id}
            role="listitem"
            custom={i}
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative pl-16 sm:pl-20"
            aria-label={`${item.degree} at ${item.institution}`}
          >
            {/* Dot */}
            <div className="absolute left-2.5 sm:left-3.5 top-1 w-5 h-5 rounded-full border-2 border-primary bg-bg-main flex items-center justify-center" aria-hidden="true">
              <div className={`w-2 h-2 rounded-full ${item.current ? 'bg-primary-bright animate-pulse' : 'bg-primary'}`} />
            </div>

            <div className="glass-card p-5 sm:p-6 hover:shadow-glow transition-shadow duration-300">
              {/* Period */}
              <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                <CalendarDays size={13} aria-hidden="true" />
                <span>{item.period}</span>
                {item.current && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary-bright border border-primary/30">
                    Current
                  </span>
                )}
              </div>

              {/* Degree */}
              <h3 className="font-heading font-semibold text-base text-text-main mb-1 flex items-start gap-2">
                <GraduationCap size={17} className="text-primary-bright mt-0.5 flex-shrink-0" aria-hidden="true" />
                {item.degree}
              </h3>

              {/* Institution */}
              <p className="text-primary-bright text-sm font-medium mb-1">{item.institution}</p>

              {/* Grade */}
              <p className="text-text-secondary text-sm">{item.grade}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
