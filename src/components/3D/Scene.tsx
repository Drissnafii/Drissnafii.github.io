import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Character Component
const Character3D: React.FC = () => {
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

// Loading component
const SceneLoader: React.FC = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff0000" wireframe />
    </mesh>
  );
};

// Main Scene Component
interface Scene3DProps {
  className?: string;
}

const Scene3D: React.FC<Scene3DProps> = ({ className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ 
          position: [0, 0, 5], 
          fov: 45,
          near: 0.1,
          far: 100
        }}
        shadows
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        {/* Environment */}
        <Environment preset="studio" background={false} />
        
        {/* 3D Content */}
        <Suspense fallback={<SceneLoader />}>
          <Character3D />
        </Suspense>
        
        {/* Controls - disabled for production, enable for development */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
};

export default Scene3D;