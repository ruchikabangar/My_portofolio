import { motion } from 'framer-motion'
import { MapPin, CheckCircle2 } from 'lucide-react'
import { personal, aboutHighlights, aboutPoints } from '../data/portfolioData.js'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-3"
        >
          // about me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-heading mb-14"
        >
          Building interfaces people enjoy using
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Profile card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-signal/30 to-violet-depth/30 border border-white/10 flex items-center justify-center font-display text-2xl font-semibold text-cyan-signal">
                RB
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-primary">
                  {personal.name}
                </h3>
                <p className="text-ink-muted text-sm flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  {personal.location}
                </p>
              </div>
            </div>
            <p className="text-ink-muted leading-relaxed text-sm">{personal.summary}</p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {aboutHighlights.map((item) => (
                <div key={item.label} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                  <p className="font-display text-lg text-cyan-signal font-semibold">{item.value}</p>
                  <p className="text-xs text-ink-faint font-mono mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Points */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 grid sm:grid-cols-2 gap-4"
          >
            {aboutPoints.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                className="glass-card p-5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-signal shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-ink-muted leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
