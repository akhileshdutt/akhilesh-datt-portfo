
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Float, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

function FloatingObjects() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  
  // Create random positions for objects
  const positions = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ],
      scale: 0.1 + Math.random() * 0.5
    }));
  }, []);
  
  // Animate objects
  useFrame((state) => {
    if (sphereRef.current && boxRef.current && torusRef.current) {
      sphereRef.current.rotation.y += 0.01;
      boxRef.current.rotation.y += 0.01;
      torusRef.current.rotation.x += 0.01;
    }
  });
  
  return (
    <>
      {positions.map((props, i) => (
        <React.Fragment key={i}>
          {i % 3 === 0 && (
            <Float 
              speed={1 + Math.random()} 
              rotationIntensity={0.5} 
              floatIntensity={0.5}
              position={props.position as [number, number, number]}
            >
              <Sphere 
                args={[props.scale, 16, 16]} 
                ref={i === 0 ? sphereRef : undefined}
              >
                <meshStandardMaterial 
                  color="#ec4899" 
                  emissive="#ec4899"
                  emissiveIntensity={0.3}
                  roughness={0.2} 
                  metalness={0.8} 
                />
              </Sphere>
            </Float>
          )}
          
          {i % 3 === 1 && (
            <Float 
              speed={1 + Math.random()} 
              rotationIntensity={0.5} 
              floatIntensity={0.5}
              position={props.position as [number, number, number]}
            >
              <Box 
                args={[props.scale, props.scale, props.scale]} 
                ref={i === 1 ? boxRef : undefined}
              >
                <meshStandardMaterial 
                  color="#8b5cf6" 
                  emissive="#8b5cf6"
                  emissiveIntensity={0.3}
                  roughness={0.2} 
                  metalness={0.8} 
                />
              </Box>
            </Float>
          )}
          
          {i % 3 === 2 && (
            <Float 
              speed={1 + Math.random()} 
              rotationIntensity={0.5} 
              floatIntensity={0.5}
              position={props.position as [number, number, number]}
            >
              <Torus 
                args={[props.scale, props.scale/3, 16, 16]} 
                ref={i === 2 ? torusRef : undefined}
              >
                <meshStandardMaterial 
                  color="#10b981" 
                  emissive="#10b981"
                  emissiveIntensity={0.3}
                  roughness={0.2} 
                  metalness={0.8} 
                />
              </Torus>
            </Float>
          )}
        </React.Fragment>
      ))}
    </>
  );
}

export const ThreeScene = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingObjects />
        <OrbitControls 
          enabled={false} 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false} 
        />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};
