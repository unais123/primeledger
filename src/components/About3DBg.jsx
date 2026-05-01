import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function FloatingElements() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.05;
    group.current.rotation.x = t * 0.02;
  });

  // Create some random lines like a graph
  const points = [
    [0, 0, 0], [1, 2, -1], [2, 1, 1], [3, 4, 0], [4, 3, -2], [5, 5, 1]
  ].map(p => new THREE.Vector3(...p));

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Line 
          points={points} 
          color="#00D2FF" 
          lineWidth={1} 
          transparent 
          opacity={0.3} 
        />
      </Float>
      
      {[...Array(20)].map((_, i) => (
        <Float key={i} speed={1} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[0.02, 16, 16]} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]}>
            <meshBasicMaterial color="#D4AF37" transparent opacity={0.2} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export default function About3DBg() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <FloatingElements />
      </Canvas>
    </div>
  );
}
