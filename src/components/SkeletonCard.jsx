import React from 'react';
import { motion } from 'framer-motion';

/**
 * SkeletonCard - Loading skeleton component for card placeholders
 * 
 * @param {string} variant - Skeleton variant: 'course' | 'faculty' | 'testimonial' | 'gallery' | 'default'
 * @param {string} className - Additional CSS classes
 */
const SkeletonCard = ({ variant = 'default', className = '' }) => {
    const pulseAnimation = {
        animate: {
            opacity: [0.5, 0.8, 0.5]
        },
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    };

    // Course card skeleton
    if (variant === 'course') {
        return (
            <div className={`glass-card p-0 rounded-2xl overflow-hidden ${className}`}>
                <motion.div 
                    className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
                    {...pulseAnimation}
                />
                <div className="p-6 space-y-4">
                    <motion.div 
                        className="h-4 bg-gray-200 rounded w-3/4"
                        {...pulseAnimation}
                    />
                    <motion.div 
                        className="h-6 bg-gray-200 rounded w-full"
                        {...pulseAnimation}
                    />
                    <motion.div 
                        className="h-4 bg-gray-200 rounded w-5/6"
                        {...pulseAnimation}
                    />
                    <div className="flex gap-2">
                        <motion.div 
                            className="h-6 bg-gray-200 rounded-full w-16"
                            {...pulseAnimation}
                        />
                        <motion.div 
                            className="h-6 bg-gray-200 rounded-full w-20"
                            {...pulseAnimation}
                        />
                        <motion.div 
                            className="h-6 bg-gray-200 rounded-full w-16"
                            {...pulseAnimation}
                        />
                    </div>
                    <motion.div 
                        className="h-12 bg-gray-200 rounded-xl w-full mt-4"
                        {...pulseAnimation}
                    />
                </div>
            </div>
        );
    }

    // Faculty card skeleton
    if (variant === 'faculty') {
        return (
            <div className={`glass-card p-0 rounded-2xl overflow-hidden ${className}`}>
                <motion.div 
                    className="h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
                    {...pulseAnimation}
                />
                <div className="p-6 space-y-3">
                    <motion.div 
                        className="h-6 bg-gray-200 rounded w-2/3"
                        {...pulseAnimation}
                    />
                    <div className="flex gap-2">
                        <motion.div 
                            className="h-6 bg-gray-200 rounded-full w-20"
                            {...pulseAnimation}
                        />
                        <motion.div 
                            className="h-6 bg-gray-200 rounded-full w-24"
                            {...pulseAnimation}
                        />
                    </div>
                    <motion.div 
                        className="h-4 bg-gray-200 rounded w-full"
                        {...pulseAnimation}
                    />
                </div>
            </div>
        );
    }

    // Testimonial card skeleton
    if (variant === 'testimonial') {
        return (
            <div className={`glass-card p-6 rounded-2xl ${className}`}>
                <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                        className="w-12 h-12 bg-gray-200 rounded-full"
                        {...pulseAnimation}
                    />
                    <div className="flex-1 space-y-2">
                        <motion.div 
                            className="h-4 bg-gray-200 rounded w-1/2"
                            {...pulseAnimation}
                        />
                        <motion.div 
                            className="h-3 bg-gray-200 rounded w-1/3"
                            {...pulseAnimation}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <motion.div 
                        className="h-3 bg-gray-200 rounded w-full"
                        {...pulseAnimation}
                    />
                    <motion.div 
                        className="h-3 bg-gray-200 rounded w-5/6"
                        {...pulseAnimation}
                    />
                    <motion.div 
                        className="h-3 bg-gray-200 rounded w-4/5"
                        {...pulseAnimation}
                    />
                </div>
            </div>
        );
    }

    // Gallery item skeleton
    if (variant === 'gallery') {
        return (
            <motion.div 
                className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-2xl ${className}`}
                style={{ aspectRatio: '4/3' }}
                {...pulseAnimation}
            />
        );
    }

    // Default skeleton
    return (
        <div className={`glass-card p-6 rounded-2xl ${className}`}>
            <motion.div 
                className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl mb-4"
                {...pulseAnimation}
            />
            <div className="space-y-3">
                <motion.div 
                    className="h-4 bg-gray-200 rounded w-3/4"
                    {...pulseAnimation}
                />
                <motion.div 
                    className="h-4 bg-gray-200 rounded w-1/2"
                    {...pulseAnimation}
                />
            </div>
        </div>
    );
};

export default SkeletonCard;
