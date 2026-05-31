import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Individual floating orb
function Orb({ position, color, radius, speed, phaseOffset }) {
    const meshRef = useRef();
    const origin = useMemo(() => ({
        x: position[0],
        y: position[1],
        z: position[2],
    }), [position]);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        meshRef.current.position.x = origin.x + Math.sin(t * speed * 0.7 + phaseOffset) * 0.7;
        meshRef.current.position.y = origin.y + Math.sin(t * speed + phaseOffset) * 1.0;
        meshRef.current.position.z = origin.z + Math.cos(t * speed * 0.5 + phaseOffset) * 0.5;
        meshRef.current.rotation.y = t * 0.12;
        meshRef.current.rotation.x = t * 0.08;
    });

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[radius, 32, 32]} />
            <meshStandardMaterial
                color={color}
                transparent
                opacity={0.13}
                roughness={0.1}
                metalness={0.9}
                emissive={color}
                emissiveIntensity={0.25}
            />
        </mesh>
    );
}

// Scene content
function OrbScene() {
    const orbs = useMemo(() => [
        { position: [-4.5,  1.5, -3], color: '#10B981', radius: 1.4, speed: 0.35, phaseOffset: 0.0 },
        { position: [ 4.0, -1.0, -4], color: '#2563EB', radius: 1.1, speed: 0.28, phaseOffset: 1.5 },
        { position: [ 1.5,  2.5, -5], color: '#059669', radius: 1.7, speed: 0.22, phaseOffset: 3.0 },
        { position: [-2.5, -2.0, -2], color: '#0891B2', radius: 0.8, speed: 0.48, phaseOffset: 4.5 },
        { position: [ 5.0,  1.5, -6], color: '#10B981', radius: 1.2, speed: 0.32, phaseOffset: 2.0 },
        { position: [-5.5, -0.5, -5], color: '#2563EB', radius: 0.9, speed: 0.42, phaseOffset: 5.2 },
        { position: [ 0.5, -3.0, -3], color: '#059669', radius: 1.0, speed: 0.38, phaseOffset: 1.1 },
        { position: [-1.0,  4.0, -6], color: '#0891B2', radius: 1.3, speed: 0.26, phaseOffset: 3.8 },
    ], []);

    return (
        <>
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1.2} color="#10B981" />
            <pointLight position={[-5, -5, 3]} intensity={0.8} color="#2563EB" />
            {orbs.map((orb, i) => (
                <Orb key={i} {...orb} />
            ))}
        </>
    );
}

/**
 * FloatingOrbs — renders a WebGL canvas with floating 3D spheres.
 * Place inside a `position-relative` container. The canvas is absolutely
 * positioned and pointer-events are disabled so it doesn't block clicks.
 */
const FloatingOrbs = ({ className = '' }) => {
    return (
        <div
            className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
            aria-hidden="true"
        >
            <Canvas
                camera={{ position: [0, 0, 8], fov: 55 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, alpha: true }}
                style={{ width: '100%', height: '100%' }}
            >
                <OrbScene />
            </Canvas>
        </div>
    );
};

export default FloatingOrbs;
