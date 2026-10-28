'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import type { Mesh } from 'three'

interface OrbProps {
  position: [number, number, number]
  color: string
  size: number
  speed: number
}

function Orb({ position, color, size, speed }: OrbProps) {
  const meshRef = useRef<Mesh>(null)
  const initialY = position[1]

  useFrame(({ clock }) => {
    const mesh = meshRef.current
    if (!mesh) return

    const time = clock.elapsedTime * speed
    mesh.rotation.x = time * 0.05
    mesh.rotation.y = time * 0.08
    mesh.rotation.z = time * 0.03
    // Set position from a stable baseline instead of accumulating tiny movements.
    mesh.position.y = initialY + Math.sin(time) * 0.08
  })

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[size, 3]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.55}
        fog={false}
      />
      <mesh scale={1.12}>
        <icosahedronGeometry args={[size, 2]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} fog={false} />
      </mesh>
    </mesh>
  )
}

function OrbScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <color attach="background" args={['#020408']} />
      <ambientLight intensity={0.45} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00f5ff" />
      <pointLight position={[-10, -10, 5]} intensity={0.6} color="#bf00ff" />
      <Orb position={[0, 0, 0]} color="#00f5ff" size={1.5} speed={1} />
      <Orb position={[3, 2, -2]} color="#bf00ff" size={0.8} speed={1.2} />
      <Orb position={[-2.5, -1.5, -3]} color="#ff006e" size={0.6} speed={0.9} />
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="#0a1628" transparent opacity={0.1} />
      </mesh>
    </>
  )
}

export default function FloatingOrbs() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        dpr={[1, 1.35]}
        frameloop="always"
        gl={{ antialias: false, powerPreference: 'low-power', alpha: false }}
        camera={{ position: [0, 0, 8] }}
      >
        <OrbScene />
      </Canvas>
    </div>
  )
}
