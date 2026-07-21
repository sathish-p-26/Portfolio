import { motion } from 'framer-motion'
import { User, Code2, Zap, Layers } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { personal } from '../data/portfolioData'

const highlights = [
  { icon: Code2, label: 'Frontend Development', desc: 'Building responsive and accessible web interfaces' },
  { icon: Zap, label: 'Workflow Automation', desc: 'Creating n8n-powered automation pipelines' },
  { icon: Layers, label: 'API Integration', desc: 'Connecting platforms via REST APIs and webhooks' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-section" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionTitle
          id="about-heading"
          label="Who I Am"
          title="About Me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <User size={22} className="text-primary-bright" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading font-semibold text-text-main">{personal.name}</p>
                <p className="text-text-muted text-sm">{personal.location}</p>
              </div>
            </div>

            <p className="text-text-secondary leading-relaxed text-base">
              {personal.about}
            </p>


          </motion.div>

          {/* Highlights side */}
          <div className="flex flex-col gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ x: 6 }}
                className="glass-card p-5 flex items-start gap-4 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <h.icon size={18} className="text-primary-bright" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-text-main mb-1">{h.label}</h3>
                  <p className="text-text-muted text-sm">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
