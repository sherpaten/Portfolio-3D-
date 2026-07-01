'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Sphere } from '@react-three/drei'
import { Mesh } from 'three'
import * as THREE from 'three'

interface OrbProps {
  position: [number, number, number]
  color: string
  size: number
  speed: number
}

function Orb({ position, color, size, speed }: OrbProps) {
  const meshRef = useRef<Mesh>(null)
  const rotationRef = useRef({ x: 0, y: 0, z: 0 })

  useFrame(() => {
    if (meshRef.current) {
      rotationRef.current.x += 0.0005 * speed
      rotationRef.current.y += 0.0008 * speed
      rotationRef.current.z += 0.0003 * speed

      meshRef.current.rotation.x = rotationRef.current.x
      meshRef.current.rotation.y = rotationRef.current.y
      meshRef.current.rotation.z = rotationRef.current.z

      meshRef.current.position.y += Math.sin(Date.now() * 0.001 * speed) * 0.0008
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[size, 16]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        wireframe={false}
        fog={false}
      />

      {/* Glow layer */}
      <mesh scale={[1.2, 1.2, 1.2]}>
        <icosahedronGeometry args={[size, 16]} />
        <meshBasicMaterial
          color={color}
          transparent={true}
          opacity={0.15}
          fog={false}
        />
      </mesh>
    </mesh>
  )
}

function OrbScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <color attach="background" args={['#020408']} />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color="#bf00ff" />

      {/* Orbs */}
      <Orb position={[0, 0, 0]} color="#00f5ff" size={1.5} speed={1} />
      <Orb position={[3, 2, -2]} color="#bf00ff" size={0.8} speed={1.2} />
      <Orb position={[-2.5, -1.5, -3]} color="#ff006e" size={0.6} speed={0.9} />

      {/* Grid background */}
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial
          color="#0a1628"
          transparent={true}
          opacity={0.1}
        />
      </mesh>
    </>
  )
}

export default function FloatingOrbs() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <OrbScene />
      </Canvas>
    </div>
  )
}
