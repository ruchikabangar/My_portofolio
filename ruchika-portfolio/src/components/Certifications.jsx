import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/portfolioData.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-3"
        >
          // certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-heading mb-14"
        >
          Certifications
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-6 flex flex-col items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-spark/10 border border-amber-spark/25 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-spark" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-ink-primary leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-ink-muted font-mono mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
