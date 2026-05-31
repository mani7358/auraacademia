import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedHeading - Text entrance animations for headings
 * Inspired by ReactBits text animations
 * 
 * @param {React.ReactNode} children - Heading content
 * @param {'fade'|'slide'|'scale'|'blur'} variant - Animation variant
 * @param {number} delay - Animation delay in seconds (default: 0)
 * @param {number} duration - Animation duration in seconds (default: 0.6)
 * @param {string} className - Additional CSS classes
 * @param {string} as - HTML element to render (default: 'h2')
 */
const AnimatedHeading = ({
    children,
    variant = 'fade',
    delay = 0,
    duration = 0.6,
    className = '',
    as = 'h2'
}) => {
    // Check for reduced motion preference
    const prefersReducedMotion = typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Animation variants
    const variants = useMemo(() => {
        if (prefersReducedMotion) {
            return {
                hidden: {},
                visible: {}
            };
        }

        const variantMap = {
            fade: {
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            },
            slide: {
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            },
            scale: {
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
            },
            blur: {
                hidden: { opacity: 0, filter: 'blur(10px)' },
                visible: { opacity: 1, filter: 'blur(0px)' }
            }
        };

        return variantMap[variant] || variantMap.fade;
    }, [variant, prefersReducedMotion]);

    const MotionComponent = motion[as] || motion.h2;

    return (
        <MotionComponent
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={variants}
            transition={{
                duration,
                delay,
                ease: 'easeOut'
            }}
        >
            {children}
        </MotionComponent>
    );
};

export default AnimatedHeading;
