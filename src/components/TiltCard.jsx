import React, { useRef, useCallback } from 'react';

/**
 * TiltCard — a wrapper that gives any card a 3D tilt effect on mouse hover.
 * Uses CSS perspective + rotateX/Y transforms driven by mouse position.
 */
const TiltCard = ({ children, className = '', intensity = 12, glare = true }) => {
    const ref = useRef(null);
    const glareRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const el = ref.current;
        if (!el) return;
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = (e.clientX - left) / width;   // 0–1
        const y = (e.clientY - top) / height;    // 0–1
        const rotateX = (y - 0.5) * -intensity;
        const rotateY = (x - 0.5) *  intensity;

        el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        el.style.transition = 'transform 0.1s ease';

        if (glare && glareRef.current) {
            const glareX = x * 100;
            const glareY = y * 100;
            glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`;
            glareRef.current.style.opacity = '1';
        }
    }, [intensity, glare]);

    const handleMouseLeave = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        el.style.transition = 'transform 0.5s ease';
        if (glare && glareRef.current) {
            glareRef.current.style.opacity = '0';
        }
    }, [glare]);

    return (
        <div
            ref={ref}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
            {children}
            {glare && (
                <div
                    ref={glareRef}
                    className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300"
                    style={{ opacity: 0, zIndex: 10 }}
                />
            )}
        </div>
    );
};

export default TiltCard;
