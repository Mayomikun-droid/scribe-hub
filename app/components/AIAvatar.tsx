"use client"

import { Canvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"

function AvatarModel() {
  const { scene } = useGLTF("/models/carla_rigged_001_rigged_3d_business_women.glb")
  return <primitive object={scene} scale={1.6} />
}

export default function AIAvatar() {
  return (
    <div className="w-[400px] h-[500px]">
      <Canvas camera={{ position: [0, 1.5, 3] }} >
        <ambientLight intensity={1} />
        <AvatarModel />
      </Canvas>
    </div>
  )
}
