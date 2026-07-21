import { motion } from 'framer-motion'
import { Sparkles, Wand2, Bot, Workflow, BadgeCheck } from 'lucide-react'
import { aiWorkflow } from '../data/portfolioData.js'
import NeuralBackground from './ai/NeuralBackground.jsx'

const cardIcons = [Sparkles, Wand2, Bot, Workflow]

export default function AIWorkflow() {
  return (
    <section id="ai-development" className="section-padding relative overflow-hidden">
      {/* Neural network backdrop */}
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <NeuralBackground className="w-full h-full" />
      </div>
      {/* Subtle holographic wash */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-violet-depth/[0.05] via-transparent to-cyan-signal/[0.04]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-3"
        >
          // ai & modern development
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-heading mb-5"
        >
          AI & Modern Development
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-ink-muted max-w-2xl mb-6 leading-relaxed"
        >
          {aiWorkflow.intro}
        </motion.p>

        {/* Capability chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-14"
        >
          {aiWorkflow.capabilities.map((item) => (
            <span
              key={item}
              className="font-mono text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-cyan-signal/15 text-ink-muted"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Dashboard cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {aiWorkflow.cards.map((card, idx) => {
            const Icon = cardIcons[idx % cardIcons.length]
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card p-6 relative group"
              >
                {/* Holographic corner glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(120px circle at var(--x,50%) var(--y,0%), rgba(34,211,238,0.12), transparent 70%)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-signal/15 to-violet-depth/15 border border-cyan-signal/25 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-cyan-signal" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-ink-primary mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Certification callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-5 flex flex-wrap items-center gap-4"
        >
          <div className="w-11 h-11 rounded-xl bg-amber-spark/10 border border-amber-spark/25 flex items-center justify-center shrink-0">
            <BadgeCheck className="w-5 h-5 text-amber-spark" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm text-ink-primary font-medium">
              Certified: {aiWorkflow.certification.title}
            </p>
            <p className="text-xs text-ink-muted font-mono mt-0.5">
              {aiWorkflow.certification.issuer}
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-xs text-ink-faint mt-6 max-w-2xl"
        >
          I use these tools to work faster and think more clearly as a Frontend Developer — this
          isn't a claim to AI/ML engineering expertise.
        </motion.p>
      </div>
    </section>
  )
}
