import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-3"
        >
          // experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-heading mb-14"
        >
          Where I've worked
        </motion.h2>

        <div className="relative pl-8 sm:pl-10">
          {/* Timeline line */}
          <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-signal via-white/10 to-transparent" />

          {experience.map((job, idx) => (
            <motion.div
              key={job.company + job.duration}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 sm:-left-10 top-1.5 w-5 h-5 rounded-full bg-void border-2 border-cyan-signal flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-signal" />
              </div>

              <div className="glass-card p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-signal/10 border border-cyan-signal/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-cyan-signal" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink-primary">
                        {job.role}
                      </h3>
                      <p className="text-sm text-ink-muted">
                        {job.company} · {job.location}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-ink-muted whitespace-nowrap">
                    {job.duration}
                    {job.current && (
                      <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-cyan-signal animate-pulse" />
                    )}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-ink-muted leading-relaxed">
                      <span className="text-cyan-signal mt-1.5 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
