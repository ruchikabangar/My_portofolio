import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'


export default function AIAssistantBadge() {
  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    document.getElementById('ai-development')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40 hidden sm:block"
    >
      <div className="relative flex items-center">
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="mr-3 whitespace-nowrap font-mono text-xs glass rounded-full px-3 py-1.5 text-ink-muted"
            >
              Exploring AI-assisted development
            </motion.span>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          aria-label="Jump to AI & Modern Development section"
          className="relative w-11 h-11 rounded-full glass shadow-glow flex items-center justify-center text-cyan-signal hover:border-cyan-signal/40 transition-colors"
        >
          <span className="absolute inset-0 rounded-full bg-cyan-signal/10 animate-ping" aria-hidden="true" />
          <Sparkles className="w-[18px] h-[18px] relative" aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  )
}
