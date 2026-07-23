'use client'

import * as React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Center, Bounds, Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

function Logo() {
  const gltf = useGLTF('/models/ravex-logo.glb')
  const groupRef = React.useRef<THREE.Group>(null)

  const scene = React.useMemo(() => {
    const s = gltf?.scene?.clone?.(true)
    if (!s) return null
    s.traverse((obj: any) => {
      if (obj?.isMesh) {
        obj.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#e8e8ee'),
          metalness: 1,
          roughness: 0.17,
          envMapIntensity: 1.35,
        })
        obj.castShadow = false
        obj.receiveShadow = false
      }
    })
    return s
  }, [gltf?.scene])

  useFrame((state) => {
    const t = state?.clock?.elapsedTime ?? 0
    const g = groupRef.current
    if (!g) return
    const px = state?.pointer?.x ?? 0
    const py = state?.pointer?.y ?? 0
    g.rotation.y = Math.sin(t * 0.32) * 0.34 + px * 0.45
    g.rotation.x = Math.sin(t * 0.22) * 0.06 - py * 0.22
    g.position.y = Math.sin(t * 0.6) * 0.06
  })

  if (!scene) return null

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      className="hero__canvas"
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6], fov: 32 }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 1.18
      }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 6]} intensity={1.8} />
      <directionalLight position={[-6, -2, 2]} intensity={0.7} color="#9a9ac0" />
      <React.Suspense fallback={null}>
        <Bounds fit clip observe margin={1.15}>
          <Logo />
        </Bounds>
        <Environment resolution={256}>
          {/* Bright front panel so the flat faces read as polished chrome */}
          <Lightformer intensity={3.2} position={[0, 1, 9]} scale={[16, 12, 1]} color="#ffffff" />
          <Lightformer intensity={3} position={[0, 5, -6]} scale={[14, 9, 1]} color="#ffffff" />
          <Lightformer intensity={2.4} position={[-6, 1, -1]} scale={[7, 12, 1]} color="#cdcde4" />
          <Lightformer intensity={2.6} position={[6, -1, 2]} scale={[9, 9, 1]} color="#ffffff" />
          <Lightformer intensity={1.6} position={[0, -6, 4]} scale={[12, 7, 1]} color="#7a7a98" />
        </Environment>
      </React.Suspense>
    </Canvas>
  )
}

useGLTF.preload('/models/ravex-logo.glb')
