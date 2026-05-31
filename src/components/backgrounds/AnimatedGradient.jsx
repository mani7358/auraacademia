import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedGradient - Smooth animated gradient background
 * Inspired by ReactBits gradient animations
 * 
 * @param {string[]} colors - Array of hex colors for the gradient
 * @param {number} duration - Animation duration in seconds (default: 20)
 * @param {'horizontal'|'vertical'|'diagonal'} direction - Gradient direction
 * @param {'subtle'|'medium'|'strong'} intensity - Animation intensity
 * @param {string} className - Additional CSS classes
 */
const AnimatedGradient = ({
    colors = ['#10B981', '#3B82F6', '#F59E0B'],
    duration = 20,
    direction = 'diagonal',
    intensity = 'medium',
    className = ''
}) => {
    // Generate gradient direction based on prop
    const gradientDirection = useMemo(() => {
        switch (direction) {
            case 'horizontal':
                return '90deg';
            case 'vertical':
                return '180deg';
            case 'diagonal':
            default:
                return '135deg';
        }
    }, [direction]);

    // Generate color stops
    const colorStops = useMemo(() => {
        return colors.map((color, index) => {
            const position = (index / (colors.length - 1)) * 100;
            return `${color} ${position}%`;
        }).join(', ');
    }, [colors]);

    // Animation variants based on intensity
    const animationVariants = useMemo(() => {
        const intensityMap = {
            subtle: { scale: [1, 1.05, 1], rotate: [0, 2, 0] },
            medium: { scale: [1, 1.1, 1], rotate: [0, 5, 0] },
            strong: { scale: [1, 1.2, 1], rotate: [0, 10, 0] }
        };
        return intensityMap[intensity] || intensityMap.medium;
    }, [intensity]);

    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(${gradientDirection}, ${colorStops})`,
                    backgroundSize: '200% 200%'
                }}
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    ...animationVariants
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
            
            {/* Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
        </div>
    );
};

export default AnimatedGradient;
