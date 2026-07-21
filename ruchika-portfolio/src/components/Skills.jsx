import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Database, Wrench } from 'lucide-react'
import { skills } from '../data/portfolioData.js'

const categoryMeta = {
  Frontend: { icon: Code, color: '#22d3ee' },
  Backend: { icon: Server, color: '#8b5cf6' },
  Database: { icon: Database, color: '#fbbf24' },
  Tools: { icon: Wrench, color: '#f97316' },
}

/** A glass card with a subtle 3D tilt that follows the pointer. */
function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setStyle({
      transform: `perspective(700px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale3d(1.02,1.02,1.02)`,
    })
  }

  const handleMouseLeave = () => {
    setStyle({ transform: 'perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)' })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transition: 'transform 0.2s ease-out' }}
      className={className}
    >
      {children}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-3"
        >
          // skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-heading mb-4"
        >
          Tools I build with
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-ink-muted max-w-2xl mb-14"
        >
          A practical toolkit built through real project work — from interfaces to the APIs and
          databases behind them.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], idx) => {
            const meta = categoryMeta[category]
            const Icon = meta.icon
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <TiltCard className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${meta.color}1a`,
                        borderColor: `${meta.color}33`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: meta.color }} aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-ink-primary">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="tech-badge hover:border-cyan-signal/40 hover:text-ink-primary transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
