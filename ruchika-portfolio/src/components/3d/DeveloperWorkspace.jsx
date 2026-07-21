import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Text } from '@react-three/drei'

const CODE_LINES = [
  { text: 'const dev = {', color: '#8892a6' },
  { text: "  name: 'Ruchika Bangar',", color: '#e9edf6' },
  { text: "  role: 'Frontend Developer',", color: '#22d3ee' },
  { text: "  stack: ['React', 'JS', 'CSS'],", color: '#fbbf24' },
  { text: '};', color: '#8892a6' },
]

/**
 * The signature 3D element: a translucent glass "code panel" — a stand-in
 * for the developer's editor — floating in space with a soft cyan glow,
 * tilting gently toward the pointer. This is the one bold visual the whole
 * hero is built around.
 */
export default function DeveloperWorkspace({ pointer }) {
  const groupRef = useRef()
  const panelRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    // Gentle parallax tilt toward the pointer
    const targetX = pointer.current.y * 0.25
    const targetY = pointer.current.x * 0.35
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04

    if (panelRef.current) {
      panelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.15} floatIntensity={0.6}>
        <group ref={panelRef}>
          {/* Glass panel */}
          <RoundedBox args={[3.4, 2.1, 0.08]} radius={0.12} smoothness={4}>
            <meshPhysicalMaterial
              color="#121728"
              transparent
              opacity={0.55}
              roughness={0.15}
              metalness={0.1}
              transmission={0.35}
              thickness={0.5}
              clearcoat={1}
            />
          </RoundedBox>

          {/* Glowing edge frame */}
          <mesh position={[0, 0, -0.02]}>
            <planeGeometry args={[3.5, 2.2]} />
            <meshBasicMaterial color="#22d3ee" transparent opacity={0.06} />
          </mesh>

          {/* Code lines */}
          <group position={[-1.5, 0.75, 0.06]}>
            {CODE_LINES.map((line, i) => (
              <Text
                key={i}
                position={[0, -i * 0.34, 0]}
                fontSize={0.16}
                color={line.color}
                anchorX="left"
                anchorY="middle"
                font={undefined}
              >
                {line.text}
              </Text>
            ))}
          </group>

          {/* Blinking cursor dot */}
          <mesh position={[-1.5, -0.6, 0.07]}>
            <circleGeometry args={[0.03, 16]} />
            <meshBasicMaterial color="#22d3ee" />
          </mesh>
        </group>
      </Float>
    </group>
  )
}
