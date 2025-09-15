import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Character: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      // Idle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      
      // Mouse interaction - subtle look-at behavior
      const mouse = state.mouse;
      groupRef.current.rotation.y = mouse.x * 0.1;
      groupRef.current.rotation.x = mouse.y * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Main Character Body */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <capsuleGeometry args={[0.8, 1.6, 4, 8]} />
          <meshToonMaterial 
            color="#ff6b6b" 
            gradientMap={null}
          />
        </mesh>
        
        {/* Head */}
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshToonMaterial 
            color="#ff8e8e"
            gradientMap={null}
          />
        </mesh>
        
        {/* Eyes */}
        <mesh position={[-0.2, 1.3, 0.4]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        <mesh position={[0.2, 1.3, 0.4]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        
        {/* Cat companion */}
        <group position={[1.2, -0.5, 0.3]}>
          <mesh>
            <sphereGeometry args={[0.3, 12, 12]} />
            <meshToonMaterial color="#ffa500" />
          </mesh>
          {/* Cat ears */}
          <mesh position={[-0.15, 0.25, 0]}>
            <coneGeometry args={[0.1, 0.2, 3]} />
            <meshToonMaterial color="#ffa500" />
          </mesh>
          <mesh position={[0.15, 0.25, 0]}>
            <coneGeometry args={[0.1, 0.2, 3]} />
            <meshToonMaterial color="#ffa500" />
          </mesh>
        </group>
        
        {/* Arms */}
        <mesh position={[-0.7, 0.3, 0]} rotation={[0, 0, 0.3]}>
          <capsuleGeometry args={[0.2, 0.8, 4, 8]} />
          <meshToonMaterial color="#ff6b6b" />
        </mesh>
        <mesh position={[0.7, 0.3, 0]} rotation={[0, 0, -0.3]}>
          <capsuleGeometry args={[0.2, 0.8, 4, 8]} />
          <meshToonMaterial color="#ff6b6b" />
        </mesh>
        
        {/* Legs */}
        <mesh position={[-0.3, -1.2, 0]}>
          <capsuleGeometry args={[0.25, 1, 4, 8]} />
          <meshToonMaterial color="#ff6b6b" />
        </mesh>
        <mesh position={[0.3, -1.2, 0]}>
          <capsuleGeometry args={[0.25, 1, 4, 8]} />
          <meshToonMaterial color="#ff6b6b" />
        </mesh>
      </Float>
    </group>
  );
};

export default Character;