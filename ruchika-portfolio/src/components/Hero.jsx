import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, ChevronDown } from 'lucide-react'
import { personal } from '../data/portfolioData.js'
import SceneErrorBoundary from './3d/SceneErrorBoundary.jsx'

// Lazy-load the heavy 3D scene so it doesn't block the initial page paint.
const Scene = lazy(() => import('./3d/Scene.jsx'))

/** Static, zero-cost visual shown while the 3D scene loads or if it fails. */
function StaticFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-cyan-signal/20 via-violet-depth/10 to-transparent blur-3xl animate-float" />
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid-glow"
    >
      {/* 3D canvas layer */}
      <div className="absolute inset-0" aria-hidden="true">
        <SceneErrorBoundary fallback={<StaticFallback />}>
          <Suspense fallback={<StaticFallback />}>
            <Scene />
          </Suspense>
        </SceneErrorBoundary>
      </div>

      {/* Content layer */}
      <div className="relative z-10 w-full section-padding pt-32 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow mb-4">
              // frontend developer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] mb-6"
            >
              {personal.name}
              <span className="block text-cyan-signal mt-2">{personal.title}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-ink-muted text-lg leading-relaxed max-w-xl mb-10"
            >
              {personal.intro}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                View My Work
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href={personal.resumeUrl} download className="btn-secondary">
                Download Resume
                <Download className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary"
              >
                Contact Me
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Right column intentionally left visually empty — the 3D scene
              occupies this space behind the content. */}
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ink-faint"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
