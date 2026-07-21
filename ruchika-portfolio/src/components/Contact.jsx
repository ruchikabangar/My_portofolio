import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Terminal, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { personal, contactConfig } from '../data/portfolioData.js'

const contactLinks = [
  { label: 'Email', value: personal.email, href: personal.links.email, icon: Mail },
  { label: 'LinkedIn', value: 'ruchika-bangar', href: personal.links.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'ruchikabangar', href: personal.links.github, icon: Github },
  { label: 'HackerRank', value: 'ruchikabangar97', href: personal.links.hackerrank, icon: Terminal },
]

function validate({ name, email, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

const isBackendConfigured =
  Boolean(contactConfig.formspreeEndpoint) ||
  Boolean(contactConfig.customEndpoint) ||
  Boolean(contactConfig.emailjs.serviceId && contactConfig.emailjs.templateId && contactConfig.emailjs.publicKey)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    if (!isBackendConfigured) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      if (contactConfig.formspreeEndpoint) {
        const res = await fetch(contactConfig.formspreeEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Formspree request failed')
      } else if (contactConfig.emailjs.serviceId) {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: contactConfig.emailjs.serviceId,
            template_id: contactConfig.emailjs.templateId,
            user_id: contactConfig.emailjs.publicKey,
            template_params: form,
          }),
        })
        if (!res.ok) throw new Error('EmailJS request failed')
      } else if (contactConfig.customEndpoint) {
        const res = await fetch(contactConfig.customEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Custom endpoint request failed')
      }
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-3"
        >
          // contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-heading mb-4"
        >
          Let's work together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-ink-muted max-w-2xl mb-14"
        >
          Have an opportunity or a project in mind? I'd love to hear from you.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 grid gap-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-signal/10 border border-cyan-signal/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-signal/20 transition-colors">
                  <link.icon className="w-5 h-5 text-cyan-signal" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-ink-faint">{link.label}</p>
                  <p className="text-sm text-ink-primary truncate">{link.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3 glass-card p-6 sm:p-8 grid gap-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-ink-muted mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:border-cyan-signal/50 outline-none transition-colors"
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-red-400 mt-1.5">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-ink-muted mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:border-cyan-signal/50 outline-none transition-colors"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-red-400 mt-1.5">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-ink-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:border-cyan-signal/50 outline-none transition-colors resize-none"
                placeholder="Tell me about the role or project..."
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-red-400 mt-1.5">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" disabled={status === 'submitting'} className="btn-primary justify-center">
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                Message sent — thank you! I'll get back to you soon.
              </p>
            )}

            {status === 'error' && !isBackendConfigured && (
              <p className="flex items-start gap-2 text-sm text-amber-spark">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                This form isn't connected to a backend yet. Open{' '}
                <code className="tech-badge mx-1">src/data/portfolioData.js</code> and add a
                Formspree, EmailJS, or custom endpoint — or reach out directly via email in the
                meantime.
              </p>
            )}

            {status === 'error' && isBackendConfigured && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="w-4 h-4" aria-hidden="true" />
                Something went wrong sending your message. Please try again or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
