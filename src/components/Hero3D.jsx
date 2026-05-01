import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Text, MeshReflectorMaterial, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

function GlassPanel({ text, position, color, rotation }) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.sin(t + position[0]) * 0.1;
    mesh.current.rotation.x = rotation[0] + Math.cos(t * 0.5) * 0.05;
    mesh.current.rotation.y = rotation[1] + Math.sin(t * 0.5) * 0.05;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={mesh}
        position={position}
        rotation={rotation}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.5, 1, 0.05]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.8}
          transmission={0.5}
          thickness={0.5}
          color={hovered ? "#00D2FF" : "#ffffff"}
          emissive={hovered ? "#00D2FF" : "#000000"}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/outfit/v11/Q_7Tv_A8D7ak7vhuE-Q_.woff"
        >
          {text}
        </Text>
      </mesh>
    </Float>
  );
}

function Scene() {
  const group = useRef();
  const { viewport, mouse } = useThree();

  useFrame((state) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.x * 0.2, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -mouse.y * 0.2, 0.1);
  });

  const panels = [
    { text: "Accounting", position: [-1.2, 0.8, 0], color: "#0F1F5A", rotation: [0, 0.2, 0] },
    { text: "Taxation", position: [1.2, 0.5, 0.5], color: "#0F1F5A", rotation: [0, -0.2, 0] },
    { text: "Compliance", position: [-0.8, -0.5, 1], color: "#0F1F5A", rotation: [0.1, 0.1, 0] },
    { text: "GST", position: [0.8, -0.8, 0.2], color: "#0F1F5A", rotation: [-0.1, -0.1, 0] },
    { text: "Consulting", position: [0, 0, -1], color: "#0F1F5A", rotation: [0, 0, 0] },
  ];

  return (
    <group ref={group}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D2FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
      <spotLight position={[0, 5, 10]} angle={0.15} penumbra={1} intensity={2} color="#00D2FF" castShadow />
      
      {panels.map((panel, i) => (
        <GlassPanel key={i} {...panel} />
      ))}

      {/* Decorative floating particles/lines */}
      <mesh position={[0, 0, -5]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshBasicMaterial color="#00D2FF" />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px', cursor: 'grab' }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Scene />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
