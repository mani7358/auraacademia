import React, { useState, useRef, useCallback } from 'react';

export const TestimonialsColumn = ({ className = '', testimonials, duration = 10 }) => {
    const [paused, setPaused] = useState(false);
    const scrollRef = useRef(null);

    const handleTouchStart = useCallback(() => {
        setPaused(true);
    }, []);

    const handleTouchEnd = useCallback(() => {
        // Resume after a short delay so user can read
        setTimeout(() => setPaused(false), 2000);
    }, []);

    return (
        <div
            className={`${className} overflow-hidden`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div
                ref={scrollRef}
                className="flex flex-col gap-6 pb-6 testimonial-scroll"
                style={{
                    animation: `testimonialScroll ${duration}s linear infinite`,
                    animationPlayState: paused ? 'paused' : 'running',
                }}
            >
                {[...new Array(2)].fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {testimonials.map(({ text, name, role, avatarGradient }, i) => (
                            <div
                                className="p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg shadow-emerald-500/10 w-full bg-white"
                                key={i}
                            >
                                <div className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">{text}</div>
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-black shrink-0"
                                        style={{ background: avatarGradient || 'linear-gradient(135deg, #059669, #34D399)' }}
                                    >
                                        {name.charAt(0)}
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <div className="font-bold tracking-tight leading-5 text-gray-900 truncate">
                                            {name}
                                        </div>
                                        <div className="leading-5 text-gray-600 tracking-tight text-sm truncate">
                                            {role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
