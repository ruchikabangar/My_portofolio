import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import DeveloperWorkspace from './DeveloperWorkspace.jsx'
import FloatingObjects from './FloatingObjects.jsx'

/** Simple loading placeholder shown while the 3D scene initializes (Suspense fallback) */
function ScenePlaceholder() {
  return null
}

/**
 * Full 3D hero scene. Detects small/low-power screens and automatically
 * reduces particle count and disables some floating shards so mobile
 * devices stay smooth. If WebGL isn't available at all, the parent
 * (Hero.jsx) swaps this out for a static gradient fallback.
 */
export default function Scene() {
  const pointer = useRef({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768)
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  useEffect(() => {
    if (isMobile) return // skip pointer tracking on touch devices to save cycles
    const handlePointerMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [isMobile])

  return (
    <Canvas
      dpr={[1, isMobile ? 1.5 : 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      frameloop="always"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={1} color="#22d3ee" />
      <pointLight position={[-4, -3, 2]} intensity={0.8} color="#8b5cf6" />

      <Suspense fallback={<ScenePlaceholder />}>
        <DeveloperWorkspace pointer={pointer} />
        <FloatingObjects reduced={isMobile} />
        <Sparkles
          count={isMobile ? 30 : 80}
          scale={[8, 5, 4]}
          size={2}
          speed={0.3}
          opacity={0.5}
          color="#22d3ee"
        />
      </Suspense>
    </Canvas>
  )
}
