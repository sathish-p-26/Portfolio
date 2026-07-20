import { motion } from 'framer-motion'
import { Award, Palette, Box, Plane, Database, ExternalLink } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { certifications } from '../data/portfolioData'

const iconMap = {
  palette: Palette,
  box: Box,
  plane: Plane,
  database: Database,
}

// 🔗 Replace this with your Google Drive link
const DRIVE_LINK = 'https://drive.google.com/drive/folders/1DQ60DMc1BelLBV8vEMMBolqKhyNVWSyc?usp=sharing'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-bg-main" aria-labelledby="certs-heading">
      <div className="section-container">
        <SectionTitle
          id="certs-heading"
          label="Credentials"
          title="Certifications"
          subtitle="Professional certifications that complement my technical skills."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="glass-card p-8 max-w-3xl mx-auto"
        >
          {/* Cert list */}
          <ul className="divide-y divide-border-color" aria-label="Certifications list">
            {certifications.map((cert, i) => {
              const Icon = iconMap[cert.icon] || Award
              return (
                <li
                  key={cert.id}
                  className={`flex items-center gap-4 py-4 ${i === 0 ? 'pt-0' : ''} ${
                    i === certifications.length - 1 ? 'pb-0' : ''
                  }`}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary-bright" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <div className="flex-1">
                    <p className="font-heading font-semibold text-sm text-text-main leading-snug">
                      {cert.title}
                    </p>
                    {cert.issuer && (
                      <p className="text-text-muted text-xs mt-0.5">{cert.issuer}</p>
                    )}
                  </div>

                  {/* Badge */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <Award size={13} className="text-primary-bright" aria-hidden="true" />
                    <span className="text-xs text-primary-bright font-medium">Certified</span>
                  </div>
                </li>
              )
            })}
          </ul>

          {/* View All Button */}
          <div className="mt-6 pt-6 border-t border-border-color flex justify-center">
            <a
              href={DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="view-all-certificates-btn"
              className="btn-primary gap-2 text-sm px-6 py-2.5"
              aria-label="View all certificates on Google Drive"
            >
              <ExternalLink size={15} aria-hidden="true" />
              View All Certificates
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
