import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ImageOff } from 'lucide-react'

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function ProjectCard({ project, index }) {
  const { title, description, image, tags, liveUrl, githubUrl } = project
  const [imgError, setImgError] = useState(false)

  return (
    <motion.article
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6 }}
      className="glass-card overflow-hidden flex flex-col group transition-shadow duration-300 hover:shadow-glow h-full"
      aria-label={title}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-video bg-bg-card-secondary flex-shrink-0">
        {!imgError ? (
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-text-muted">
            <ImageOff size={32} aria-hidden="true" />
            <span className="text-xs">Add image to public/images/</span>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-heading font-semibold text-base text-text-main group-hover:text-primary-bright transition-colors duration-200 leading-snug">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed flex-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2" aria-label="Technologies used">
          {tags.map((tag) => (
            <span key={tag} className="pill-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-1 mt-auto">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-4 py-2"
              aria-label={`View ${title} live`}
            >
              <ExternalLink size={13} aria-hidden="true" />
              View Project
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-bg-card-secondary text-text-muted cursor-not-allowed border border-border-color"
              aria-label="Live link not available"
            >
              <ExternalLink size={13} aria-hidden="true" />
              View Project
            </button>
          )}

          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs px-4 py-2"
              aria-label={`View ${title} on GitHub`}
            >
              <Github size={13} aria-hidden="true" />
              GitHub
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-border-color text-text-muted cursor-not-allowed"
              aria-label="GitHub link not available"
            >
              <Github size={13} aria-hidden="true" />
              GitHub
            </button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
