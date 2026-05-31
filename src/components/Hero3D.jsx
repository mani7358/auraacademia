import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from '@react-three/drei';

function AnimatedSphere({ color, position, size, speed, distort }) {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.position.y = position[1] + Math.sin(time * 0.5) * 0.2;
    });

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={mesh} args={[size, 64, 64]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={distort}
                    speed={speed}
                    roughness={0.1}
                    metalness={0.2}
                />
            </Sphere>
        </Float>
    );
}

function FloatingShape({ color, position, size, speed, factor }) {
    return (
        <Float speed={speed} rotationIntensity={2} floatIntensity={1.5}>
            <mesh position={position}>
                <octahedronGeometry args={[size, 0]} />
                <MeshWobbleMaterial color={color} speed={speed} factor={factor} />
            </mesh>
        </Float>
    );
}

export default function Hero3D() {
    return (
        <div className="w-full h-[300px] lg:h-[600px] relative pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

                {/* Main Central Orb */}
                <AnimatedSphere
                    color="#4f46e5"
                    position={[0, 0, 0]}
                    size={1.2}
                    speed={2}
                    distort={0.4}
                />

                {/* Orbiting Elements */}
                <FloatingShape
                    color="#f4633a"
                    position={[-2.5, 1.5, -1]}
                    size={0.4}
                    speed={3}
                    factor={0.6}
                />

                <FloatingShape
                    color="#10b981"
                    position={[2.5, -1.2, 0]}
                    size={0.3}
                    speed={2}
                    factor={0.4}
                />

                <FloatingShape
                    color="#f59e0b"
                    position={[-1.5, -2, -0.5]}
                    size={0.35}
                    speed={4}
                    factor={0.5}
                />

                <FloatingShape
                    color="#8b5cf6"
                    position={[2, 2, -1]}
                    size={0.25}
                    speed={2.5}
                    factor={0.7}
                />
            </Canvas>
        </div>
    );
}
