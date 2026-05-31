import React, { useRef, useEffect, useState, Suspense, lazy } from 'react';
import { motion, useInView } from 'framer-motion';

const FloatingOrbs = lazy(() => import('./FloatingOrbs'));

const stats = [
    { value: 2000, suffix: '+', label: 'Students Mentored',  sub: 'and counting' },
    { value: 100,  suffix: '%', label: 'Pass Rate',          sub: 'across all boards & exams' },
    { value: 7,    suffix: '+', label: 'Years of Excellence', sub: 'in Sharjah, UAE' },
    { value: 5,    suffix: '',  label: 'Expert Faculty',      sub: 'qualified & experienced' },
];

function AnimatedNumber({ target, suffix, inView }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1800;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);
    return <>{count}{suffix}</>;
}

const StatsSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section ref={ref} className="relative py-20 overflow-hidden bg-[#0A1628]">
            {/* Dot grid pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(rgba(16,185,129,0.4) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />
            {/* Glow blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            {/* 3D floating orbs */}
            <Suspense fallback={null}>
                <FloatingOrbs />
            </Suspense>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        Aura by the Numbers
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-white">
                        Years of Proven Results
                    </h2>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.12, duration: 0.6 }}
                            className="bg-[#0A1628] p-8 md:p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors duration-300"
                        >
                            <div className="text-5xl md:text-6xl font-black text-white mb-2 tabular-nums leading-none group-hover:text-emerald-400 transition-colors duration-300">
                                <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
                            </div>
                            <p className="text-emerald-400 font-bold text-base mb-1">{stat.label}</p>
                            <p className="text-gray-500 text-xs">{stat.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
