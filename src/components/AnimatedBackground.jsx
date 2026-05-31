import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedBackground - Animated background component with multiple variants
 * 
 * @param {string} variant - Background variant: 'gradient' | 'blobs' | 'particles' | 'mesh'
 * @param {string[]} colors - Array of colors for the animation
 * @param {string} intensity - Animation intensity: 'subtle' | 'medium' | 'strong'
 * @param {string} className - Additional CSS classes
 */
const AnimatedBackground = ({ 
    variant = 'blobs', 
    colors = ['#7c3aed', '#4338ca', '#f97316'],
    intensity = 'medium',
    className = ''
}) => {
    // Animation duration based on intensity
    const durations = {
        subtle: 25,
        medium: 20,
        strong: 15
    };

    const duration = durations[intensity] || 20;

    // Blob variant with floating animated shapes
    const BlobVariant = () => (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {/* Blob 1 - Purple */}
            <motion.div
                className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                style={{ background: colors[0] || '#7c3aed', top: '10%', left: '10%' }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
            
            {/* Blob 2 - Blue */}
            <motion.div
                className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                style={{ background: colors[1] || '#4338ca', top: '40%', right: '10%' }}
                animate={{
                    x: [0, -80, 0],
                    y: [0, 80, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{
                    duration: duration + 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2
                }}
            />
            
            {/* Blob 3 - Coral */}
            <motion.div
                className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                style={{ background: colors[2] || '#f97316', bottom: '10%', left: '30%' }}
                animate={{
                    x: [0, 60, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.15, 1]
                }}
                transition={{
                    duration: duration + 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 4
                }}
            />
        </div>
    );

    // Gradient variant with animated gradient background
    const GradientVariant = () => (
        <motion.div
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{
                background: `linear-gradient(135deg, ${colors[0]}15 0%, ${colors[1]}15 50%, ${colors[2]}15 100%)`,
                backgroundSize: '200% 200%'
            }}
            animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: 'linear'
            }}
        />
    );

    // Particles variant with floating dots
    const ParticlesVariant = () => {
        const particleCount = intensity === 'subtle' ? 20 : intensity === 'medium' ? 30 : 40;
        const particles = Array.from({ length: particleCount });

        return (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
                {particles.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            background: colors[i % colors.length],
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.2
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            scale: [1, 1.5, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: duration + Math.random() * 10,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>
        );
    };

    // Mesh variant with grid pattern
    const MeshVariant = () => (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            <motion.div
                className="absolute inset-0 bg-dot-pattern opacity-20"
                animate={{
                    opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
        </div>
    );

    // Render appropriate variant
    const variants = {
        blobs: <BlobVariant />,
        gradient: <GradientVariant />,
        particles: <ParticlesVariant />,
        mesh: <MeshVariant />
    };

    return variants[variant] || <BlobVariant />;
};

export default AnimatedBackground;
