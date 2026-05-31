import React from 'react';
import { motion } from 'framer-motion';

/**
 * GradientText - Text with animated gradient fill
 * Inspired by ReactBits gradient text
 * 
 * @param {React.ReactNode} children - Text content
 * @param {string[]} colors - Gradient colors (default: green to blue)
 * @param {boolean} animate - Enable animation (default: true)
 * @param {string} className - Additional CSS classes
 */
const GradientText = ({
    children,
    colors = ['#10B981', '#3B82F6'],
    animate = true,
    className = ''
}) => {
    // Generate gradient string
    const gradient = `linear-gradient(135deg, ${colors.join(', ')})`;

    const baseStyles = {
        background: gradient,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundSize: animate ? '200% 200%' : '100% 100%'
    };

    if (animate) {
        return (
            <motion.span
                className={`inline-block ${className}`}
                style={baseStyles}
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >
                {children}
            </motion.span>
        );
    }

    return (
        <span
            className={`inline-block ${className}`}
            style={baseStyles}
        >
            {children}
        </span>
    );
};

export default GradientText;
