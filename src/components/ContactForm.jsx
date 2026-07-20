import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

const INITIAL_STATE = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const formRef = useRef(null)
  const [values, setValues] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = {}
    if (!values.name.trim()) e.name = 'Name is required.'
    if (!values.email.trim()) {
      e.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      e.email = 'Enter a valid email address.'
    }
    if (!values.subject.trim()) e.subject = 'Subject is required.'
    if (!values.message.trim()) e.message = 'Message is required.'
    else if (values.message.trim().length < 20) e.message = 'Message must be at least 20 characters.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setValues(INITIAL_STATE)
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field) =>
    `w-full bg-bg-section border rounded-xl px-4 py-3 text-sm text-text-main placeholder-text-muted outline-none
    transition-colors duration-200 focus:border-primary-bright focus:ring-1 focus:ring-primary-bright
    ${errors[field] ? 'border-red-500/70' : 'border-border-color hover:border-primary/40'}`

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="glass-card p-6 sm:p-8 flex flex-col gap-5"
    >
      <h3 className="font-heading font-semibold text-lg text-text-main">Send a Message</h3>

      {/* Success */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
        >
          <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>Your message was sent successfully! I'll get back to you soon.</span>
        </motion.div>
      )}

      {/* Error */}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
        >
          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>Something went wrong. Please check your EmailJS configuration or try again.</span>
        </motion.div>
      )}

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-text-secondary">
            Your Name <span aria-hidden="true" className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={inputClass('name')}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <span id="name-error" role="alert" className="text-xs text-red-400">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-text-secondary">
            Your Email <span aria-hidden="true" className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass('email')}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" role="alert" className="text-xs text-red-400">{errors.email}</span>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-medium text-text-secondary">
          Subject <span aria-hidden="true" className="text-red-400">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          placeholder="Project Inquiry"
          className={inputClass('subject')}
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <span id="subject-error" role="alert" className="text-xs text-red-400">{errors.subject}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-text-secondary">
          Message <span aria-hidden="true" className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className={`${inputClass('message')} resize-none`}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <span id="message-error" role="alert" className="text-xs text-red-400">{errors.message}</span>
        )}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
        whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
        className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} aria-hidden="true" />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  )
}
