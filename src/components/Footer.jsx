import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { personal } from '../data/portfolioData'

const year = new Date().getFullYear()

const socials = [
  { icon: FiLinkedin, label: 'LinkedIn', href: personal.social.linkedin || '#' },
  { icon: FiGithub, label: 'GitHub', href: personal.social.github || '#' },
  { icon: FiMail, label: 'Email', href: personal.social.email },
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-bg-section border-t border-border-color" role="contentinfo">
      <div className="section-container py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <img
              src="/images/sp-logo.png"
              alt="SP Logo"
              className="w-10 h-10 object-contain"
              aria-label="Sathish P logo"
            />
            <p className="text-text-muted text-xs">
              © {year} Sathish P. All rights reserved.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-4" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-text-muted hover:text-primary-bright text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-bright rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-primary-bright hover:bg-primary/10 border border-border-color hover:border-primary/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-bright"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
