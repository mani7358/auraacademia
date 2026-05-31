import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * GlassCard - Enhanced glass morphism card component with multiple variants
 * 
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 * @param {string} variant - Card variant: 'default' | 'elevated' | 'bordered' | 'gradient'
 * @param {boolean} hoverEffect - Enable hover lift animation
 * @param {boolean} tilt - Enable 3D tilt effect on mouse move
 * @param {string} borderAccent - Custom border color (left border)
 * @param {boolean} glowEffect - Enable glow effect on hover
 * @param {function} onClick - Click handler
 */
const GlassCard = ({ 
    children, 
    className = '', 
    variant = 'default',
    hoverEffect = true, 
    borderAccent = null, 
    tilt = false,
    glowEffect = false,
    onClick
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        if (!tilt) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        if (!tilt) return;
        x.set(0);
        y.set(0);
    };

    // Variant styles
    const variantClasses = {
        default: 'glass-card',
        elevated: 'glass-card-elevated',
        bordered: 'glass-card border-2 border-purple-600/20',
        gradient: 'bg-gradient-to-br from-white/80 to-purple-50/90 backdrop-blur-[10px] border border-purple-600/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]'
    };

    const styleProps = {
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformStyle: "preserve-3d",
        ...(borderAccent && { borderLeft: `4px solid ${borderAccent}` })
    };

    const hoverProps = hoverEffect ? {
        whileHover: { y: -8, scale: 1.02 },
        transition: { type: 'spring', stiffness: 300, damping: 20 }
    } : {};

    const glowClass = glowEffect ? 'hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]' : '';

    return (
        <motion.div
            className={`${variantClasses[variant]} rounded-2xl relative overflow-hidden ${hoverEffect ? 'glass-card-hover' : ''} ${glowClass} ${className}`}
            style={styleProps}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            {...hoverProps}
        >
            {/* Optional Top Border Gradient Strip on Hover */}
            {hoverEffect && !borderAccent && variant !== 'bordered' && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
            {children}
        </motion.div>
    );
};

export default GlassCard;
