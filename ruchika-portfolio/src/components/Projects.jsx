import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import { projects } from '../data/portfolioData.js'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setStyle({
      transform: `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateZ(0)`,
    })
  }

  const handleMouseLeave = () => {
    setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transition: 'transform 0.2s ease-out' }}
      className="glass-card p-7 sm:p-8 flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-ink-faint flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
          {project.duration}
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold text-ink-primary mb-3">
        {project.title}
      </h3>

      <p className="text-sm text-ink-muted leading-relaxed mb-5">{project.description}</p>

      <ul className="space-y-2 mb-6">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-muted">
            <span className="text-cyan-signal mt-1.5 shrink-0">▸</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="tech-badge">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-5 border-t border-white/[0.06]">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl bg-cyan-signal/10 border border-cyan-signal/25 text-cyan-signal hover:bg-cyan-signal/20 transition-colors"
          >
            View Project <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        ) : (
          <span
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-ink-faint cursor-not-allowed"
            title="Add a live URL in src/data/portfolioData.js"
          >
            Live link coming soon
          </span>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl border border-white/15 text-ink-primary hover:border-cyan-signal/40 hover:bg-white/5 transition-colors"
        >
          <Github className="w-3.5 h-3.5" aria-hidden="true" />
          GitHub
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-3"
        >
          // projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-heading mb-4"
        >
          Things I've built
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-ink-muted max-w-2xl mb-14"
        >
          Live and GitHub links are wired up as placeholders — add yours in{' '}
          <code className="tech-badge">src/data/portfolioData.js</code>.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
