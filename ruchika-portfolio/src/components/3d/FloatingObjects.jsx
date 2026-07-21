import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'

/**
 * A single floating, softly-rotating tech "shard" — a stylized low-poly
 * stand-in for a language/tool, labelled with its name. Kept intentionally
 * simple (no external model loading) so it stays lightweight on mobile.
 */
function TechShard({ position, color, label, geometry = 'box', scale = 1, speed = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed
  })

  return (
    <Float speed={1.4 * speed} rotationIntensity={0.5} floatIntensity={1.2}>
      <group position={position} scale={scale}>
        <mesh ref={meshRef}>
          {geometry === 'box' && <boxGeometry args={[0.7, 0.7, 0.7]} />}
          {geometry === 'octahedron' && <octahedronGeometry args={[0.55]} />}
          {geometry === 'icosahedron' && <icosahedronGeometry args={[0.5]} />}
          {geometry === 'torus' && <torusGeometry args={[0.4, 0.15, 16, 32]} />}
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.45}
            roughness={0.25}
            metalness={0.4}
            transparent
            opacity={0.92}
          />
        </mesh>
        <Text
          position={[0, -0.85, 0]}
          fontSize={0.22}
          color="#e9edf6"
          anchorX="center"
          anchorY="middle"
          font={undefined}
        >
          {label}
        </Text>
      </group>
    </Float>
  )
}

/**
 * The constellation of tech shards orbiting the central workspace —
 * React, JavaScript, HTML, and CSS: the four pillars called out in the resume.
 */
export default function FloatingObjects({ reduced = false }) {
  const shards = [
    { position: [-2.6, 1.2, -0.5], color: '#22d3ee', label: 'React', geometry: 'icosahedron', scale: 1, speed: 1 },
    { position: [2.7, 0.9, -0.8], color: '#fbbf24', label: 'JavaScript', geometry: 'box', scale: 0.9, speed: 0.8 },
    { position: [-2.2, -1.3, -0.3], color: '#f97316', label: 'HTML', geometry: 'octahedron', scale: 0.85, speed: 1.1 },
    { position: [2.3, -1.4, -0.6], color: '#8b5cf6', label: 'CSS', geometry: 'torus', scale: 0.9, speed: 0.9 },
  ]

  const visible = reduced ? shards.slice(0, 2) : shards

  return (
    <>
      {visible.map((shard) => (
        <TechShard key={shard.label} {...shard} />
      ))}
    </>
  )
}
