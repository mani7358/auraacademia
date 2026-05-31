import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * ParticleField - Floating particle effects for visual interest
 * Inspired by ReactBits particle animations
 * 
 * @param {number} count - Number of particles (20-100, default: 50)
 * @param {string[]} colors - Particle colors (default: green/blue palette)
 * @param {'slow'|'medium'|'fast'} speed - Animation speed
 * @param {'small'|'medium'|'large'} size - Particle size
 * @param {string} className - Additional CSS classes
 */
const ParticleField = ({
    count = 50,
    colors = ['#10B981', '#3B82F6', '#F59E0B'],
    speed = 'medium',
    size = 'medium',
    className = ''
}) => {
    // Speed mapping (duration in seconds)
    const speedMap = {
        slow: { min: 20, max: 30 },
        medium: { min: 10, max: 20 },
        fast: { min: 5, max: 10 }
    };

    // Size mapping (in pixels)
    const sizeMap = {
        small: { min: 2, max: 4 },
        medium: { min: 4, max: 8 },
        large: { min: 8, max: 12 }
    };

    // Generate particles with random properties
    const particles = useMemo(() => {
        return Array.from({ length: Math.min(Math.max(count, 20), 100) }, (_, i) => {
            const speedRange = speedMap[speed] || speedMap.medium;
            const sizeRange = sizeMap[size] || sizeMap.medium;
            
            return {
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min,
                color: colors[Math.floor(Math.random() * colors.length)],
                duration: Math.random() * (speedRange.max - speedRange.min) + speedRange.min,
                delay: Math.random() * 5,
                opacity: Math.random() * 0.5 + 0.3
            };
        });
    }, [count, colors, speed, size]);

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                        opacity: particle.opacity,
                        willChange: 'transform, opacity'
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleField;
