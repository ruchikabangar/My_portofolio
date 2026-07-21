import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { achievements } from '../data/portfolioData.js'

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-3"
        >
          // achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-heading mb-4"
        >
          Beyond the code
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-ink-muted max-w-2xl mb-14"
        >
          Strategy and creativity — the same instincts I bring to solving frontend problems.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div
                className="absolute -right-6 -top-6 text-8xl opacity-[0.08] group-hover:opacity-[0.15] transition-opacity select-none"
                aria-hidden="true"
              >
                {achievement.emoji}
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-amber-spark" aria-hidden="true" />
                  <span className="font-mono text-xs tracking-widest uppercase text-amber-spark">
                    {achievement.rank}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink-primary mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-ink-muted">{achievement.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
