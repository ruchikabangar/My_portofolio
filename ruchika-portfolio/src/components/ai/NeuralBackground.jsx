import { motion } from 'framer-motion'

// Fixed, deterministic node layout (no per-render randomness) so the
// network looks intentional rather than noisy. Positions are on an
// 800x420 viewBox and scale with the container.
const NODES = [
  { id: 0, x: 60, y: 80 },
  { id: 1, x: 180, y: 40 },
  { id: 2, x: 150, y: 200 },
  { id: 3, x: 300, y: 120 },
  { id: 4, x: 280, y: 300 },
  { id: 5, x: 420, y: 60 },
  { id: 6, x: 440, y: 220 },
  { id: 7, x: 400, y: 350 },
  { id: 8, x: 560, y: 140 },
  { id: 9, x: 600, y: 300 },
  { id: 10, x: 680, y: 70 },
  { id: 11, x: 720, y: 240 },
  { id: 12, x: 90, y: 320 },
  { id: 13, x: 540, y: 380 },
]

const EDGES = [
  [0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 5],
  [3, 6], [4, 6], [4, 7], [5, 8], [6, 8], [6, 9],
  [7, 9], [8, 10], [8, 11], [9, 11], [9, 13], [10, 11],
  [2, 12], [4, 12], [11, 13], [7, 13],
]

/** Decorative, non-interactive neural-network visual behind the AI section. */
export default function NeuralBackground({ className = '' }) {
  return (
    <svg
      viewBox="0 0 800 420"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {EDGES.map(([a, b], i) => {
        const na = NODES[a]
        const nb = NODES[b]
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke="url(#edgeGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: i * 0.04, ease: 'easeOut' }}
          />
        )
      })}

      {NODES.map((node, i) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r={i % 3 === 0 ? 4 : 2.5}
          fill={i % 2 === 0 ? '#22d3ee' : '#8b5cf6'}
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.85, 1.1, 0.85] }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.15,
          }}
        />
      ))}
    </svg>
  )
}
