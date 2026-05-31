import React from 'react';
import { motion } from 'framer-motion';

/**
 * WaveBackground - Animated wave patterns using SVG
 * Inspired by ReactBits wave animations
 * 
 * @param {string} color - Wave color (default: green)
 * @param {number} amplitude - Wave height (default: 20)
 * @param {number} frequency - Wave frequency (default: 2)
 * @param {number} speed - Animation speed in seconds (default: 10)
 * @param {number} opacity - Wave opacity 0-1 (default: 0.3)
 * @param {string} className - Additional CSS classes
 */
const WaveBackground = ({
    color = '#10B981',
    amplitude = 20,
    frequency = 2,
    speed = 10,
    opacity = 0.3,
    className = ''
}) => {
    // Generate wave path
    const generateWavePath = (offset = 0) => {
        const width = 1000;
        const height = 100;
        const points = 50;
        let path = `M 0 ${height / 2}`;

        for (let i = 0; i <= points; i++) {
            const x = (i / points) * width;
            const y = height / 2 + Math.sin((i / points) * Math.PI * frequency + offset) * amplitude;
            path += ` L ${x} ${y}`;
        }

        path += ` L ${width} ${height} L 0 ${height} Z`;
        return path;
    };

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg
                className="absolute bottom-0 left-0 w-full h-full"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
                style={{ opacity }}
            >
                {/* Wave 1 */}
                <motion.path
                    d={generateWavePath(0)}
                    fill={color}
                    animate={{
                        d: [
                            generateWavePath(0),
                            generateWavePath(Math.PI),
                            generateWavePath(Math.PI * 2)
                        ]
                    }}
                    transition={{
                        duration: speed,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
                
                {/* Wave 2 - Slightly offset */}
                <motion.path
                    d={generateWavePath(Math.PI / 2)}
                    fill={color}
                    style={{ opacity: 0.5 }}
                    animate={{
                        d: [
                            generateWavePath(Math.PI / 2),
                            generateWavePath(Math.PI * 1.5),
                            generateWavePath(Math.PI * 2.5)
                        ]
                    }}
                    transition={{
                        duration: speed * 1.2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
            </svg>
        </div>
    );
};

export default WaveBackground;
