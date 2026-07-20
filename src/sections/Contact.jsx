import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import { personal } from '../data/portfolioData'

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personal.location,
    href: null,
  },
]

const socials = [
  { icon: FiLinkedin, label: 'LinkedIn', href: personal.social.linkedin || '#' },
  { icon: FiGithub, label: 'GitHub', href: personal.social.github || '#' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-section" aria-labelledby="contact-heading">
      <div className="section-container">
        <SectionTitle
          id="contact-heading"
          label="Let's Connect"
          title="Contact Me"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 max-w-xl mx-auto"
        >
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-main mb-2">
              {personal.name}
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              I'm currently open to new opportunities. Whether you have a question
              or just want to say hi, my inbox is always open.
            </p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-3">
            {contactDetails.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="glass-card p-4 flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={16} className="text-primary-bright" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-text-muted text-xs mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-text-main text-sm hover:text-primary-bright transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-text-main text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted hover:text-primary-bright bg-bg-card hover:bg-primary/10 border border-border-color hover:border-primary/30 transition-all duration-200"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
