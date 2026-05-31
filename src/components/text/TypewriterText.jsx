import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * TypewriterText - Typewriter animation effect
 * Inspired by ReactBits typewriter animations
 * 
 * @param {string} text - Text to animate
 * @param {number} speed - Typing speed in milliseconds (default: 50)
 * @param {boolean} showCursor - Show blinking cursor (default: true)
 * @param {string} className - Additional CSS classes
 * @param {function} onComplete - Callback when animation completes
 */
const TypewriterText = ({
    text,
    speed = 50,
    showCursor = true,
    className = '',
    onComplete
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // Check for reduced motion preference
    const prefersReducedMotion = typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    useEffect(() => {
        if (prefersReducedMotion) {
            setDisplayedText(text);
            if (onComplete) onComplete();
            return;
        }

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (onComplete && currentIndex === text.length) {
            onComplete();
        }
    }, [currentIndex, text, speed, onComplete, prefersReducedMotion]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && (
                <motion.span
                    className="inline-block ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    |
                </motion.span>
            )}
        </span>
    );
};

export default TypewriterText;
