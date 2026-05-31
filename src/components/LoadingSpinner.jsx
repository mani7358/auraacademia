import React from 'react';
import { motion } from 'framer-motion';

/**
 * LoadingSpinner - Animated loading spinner component
 * 
 * @param {string} size - Spinner size: 'sm' | 'md' | 'lg'
 * @param {string} color - Spinner color (default: purple-600)
 * @param {string} className - Additional CSS classes
 */
const LoadingSpinner = ({ 
    size = 'md', 
    color = 'border-purple-600',
    className = '' 
}) => {
    const sizeClasses = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-2',
        lg: 'w-12 h-12 border-3'
    };

    return (
        <motion.div
            className={`inline-block rounded-full ${sizeClasses[size]} ${color} border-t-transparent ${className}`}
            animate={{ rotate: 360 }}
            transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: 'linear'
            }}
            role="status"
            aria-label="Loading"
        />
    );
};

export default LoadingSpinner;
