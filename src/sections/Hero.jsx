import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, ChevronRight, ImageOff } from 'lucide-react'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { personal } from '../data/portfolioData'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

const fadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

const socials = [
  { icon: FiLinkedin, label: 'LinkedIn', href: personal.social.linkedin || '#' },
  { icon: FiGithub, label: 'GitHub', href: personal.social.github || '#' },
  { icon: FiMail, label: 'Email', href: personal.social.email },
]

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-main"
    >
      {/* Background orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="hero-orb glow-pulse"
          style={{
            width: 600,
            height: 600,
            top: '-15%',
            left: '-10%',
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%)',
          }}
        />
        <div
          className="hero-orb glow-pulse"
          style={{
            width: 500,
            height: 500,
            bottom: '-10%',
            right: '-5%',
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.14) 0%, transparent 70%)',
            animationDelay: '1.5s',
          }}
        />
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="section-container relative z-10 w-full py-24 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Right side text (order-1 on mobile = below image) ── */}
          <motion.div
            className="flex flex-col gap-6 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-bright bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-bright animate-pulse" aria-hidden="true" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <p className="text-text-secondary text-lg font-medium font-body">Hello, I'm</p>
              <h1 className="font-heading text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-none gradient-text">
                SATHISH P
              </h1>
            </motion.div>

            <motion.p variants={fadeUp} className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-lg">
              {personal.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <motion.button
                onClick={() => scrollTo('projects')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
                aria-label="View my projects"
              >
                View Projects
                <ChevronRight size={16} aria-hidden="true" />
              </motion.button>
              <motion.a
                href={personal.resumeUrl}
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline"
                aria-label="Download my resume"
              >
                <Download size={16} aria-hidden="true" />
                Download Resume
              </motion.a>
              <motion.button
                onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-text-secondary border border-border-color hover:border-primary/40 hover:text-text-main transition-all duration-300"
                aria-label="Go to contact section"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="text-text-muted text-xs">Find me on:</span>
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted hover:text-primary-bright bg-bg-card hover:bg-primary/10 border border-border-color hover:border-primary/30 transition-colors duration-200"
                >
                  <Icon size={18} aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Left side image ── */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl glow-pulse"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.35) 0%, transparent 70%)',
                  transform: 'scale(1.1)',
                }}
              />
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 profile-glow float-anim">
                {!imgError ? (
                  <img
                    src={personal.profileImage}
                    alt="Sathish P – professional profile photo"
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                    loading="eager"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-3"
                    style={{
                      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #2563EB20 100%)',
                    }}
                  >
                    <ImageOff size={40} className="text-primary/40" aria-hidden="true" />
                    <p className="text-text-muted text-xs text-center px-4">
                      Place profile.png in<br />
                      <code className="text-primary-bright">public/images/</code>
                    </p>
                  </div>
                )}
                {/* Image overlay gradient */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(2,6,23,0.6) 0%, transparent 50%)',
                  }}
                />
              </div>

              {/* Decorative corner dots */}
              <div aria-hidden="true" className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary-bright rounded-tl-lg" />
              <div aria-hidden="true" className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary-bright rounded-tr-lg" />
              <div aria-hidden="true" className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary-bright rounded-bl-lg" />
              <div aria-hidden="true" className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-primary-bright rounded-br-lg" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="text-text-muted text-xs">Scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-primary-bright" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
