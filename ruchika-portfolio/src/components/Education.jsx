import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-3"
        >
          // education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-heading mb-14"
        >
          Academic background
        </motion.h2>

        <div className="grid gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.55 }}
              className="glass-card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-depth/10 border border-violet-depth/25 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-violet-depth" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-ink-primary">
                      {edu.degree}
                    </h3>
                    {edu.institution && (
                      <p className="text-sm text-ink-muted">{edu.institution}</p>
                    )}
                  </div>
                </div>
                {edu.duration && (
                  <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-ink-muted whitespace-nowrap">
                    {edu.duration}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {edu.breakdown.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3 min-w-[120px]"
                  >
                    <p className="font-display text-lg text-cyan-signal font-semibold">
                      {item.value}
                    </p>
                    <p className="text-xs text-ink-faint font-mono mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
