import React from 'react';
import { motion } from 'framer-motion';

/**
 * MeshGradient - Mesh gradient effect with multiple color stops
 * Inspired by ReactBits mesh gradients
 * 
 * @param {string[]} colors - Array of colors for mesh (default: green/blue palette)
 * @param {boolean} animate - Enable animation (default: true)
 * @param {number} duration - Animation duration in seconds (default: 15)
 * @param {string} className - Additional CSS classes
 */
const MeshGradient = ({
    colors = ['#10B981', '#3B82F6', '#F59E0B', '#34D399'],
    animate = true,
    duration = 15,
    className = ''
}) => {
    // Generate mesh gradient stops
    const meshStops = colors.map((color, index) => {
        const angle = (index / colors.length) * 360;
        return {
            color,
            angle,
            position: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}% ${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`
        };
    });

    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {animate ? (
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `
                            radial-gradient(at 20% 30%, ${colors[0]} 0px, transparent 50%),
                            radial-gradient(at 80% 20%, ${colors[1]} 0px, transparent 50%),
                            radial-gradient(at 40% 70%, ${colors[2]} 0px, transparent 50%),
                            radial-gradient(at 80% 80%, ${colors[3] || colors[0]} 0px, transparent 50%)
                        `
                    }}
                    animate={{
                        opacity: [0.6, 0.8, 0.6],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
            ) : (
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
                            radial-gradient(at 20% 30%, ${colors[0]} 0px, transparent 50%),
                            radial-gradient(at 80% 20%, ${colors[1]} 0px, transparent 50%),
                            radial-gradient(at 40% 70%, ${colors[2]} 0px, transparent 50%),
                            radial-gradient(at 80% 80%, ${colors[3] || colors[0]} 0px, transparent 50%)
                        `,
                        opacity: 0.7
                    }}
                />
            )}
            
            {/* Blur overlay for smooth effect */}
            <div className="absolute inset-0 backdrop-blur-3xl" />
        </div>
    );
};

export default MeshGradient;
