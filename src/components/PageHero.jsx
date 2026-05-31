import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageHero — shared hero banner for all inner pages.
 *
 * Props
 * ─────
 * title       string | string[]   Page heading. If an array, each item is a
 *                                  separate line; the LAST line gets the
 *                                  gradient treatment.
 * subtitle    string               Supporting sentence below the title.
 * badge       string               Small eyebrow label (default "Aura Academia").
 *
 * Legacy props accepted but ignored: variant, gradientText, showAnimatedBg
 */
const PageHero = ({ title, subtitle, badge }) => {
    const titleLines = Array.isArray(title) ? title : [title];

    return (
        <div className="relative pt-[7.5rem] pb-8 md:pt-32 md:pb-10 overflow-hidden bg-white">

            {/* ── Colourful background blobs ──────────────────── */}
            <div
                className="absolute top-0 right-0 pointer-events-none"
                style={{
                    width: 640, height: 640,
                    background: 'radial-gradient(circle at 60% 40%, #059669 0%, #3B82F6 45%, #7C3AED 100%)',
                    filter: 'blur(90px)',
                    opacity: 0.07,
                    transform: 'translate(35%, -35%)',
                    borderRadius: '50%',
                }}
            />
            <div
                className="absolute bottom-0 left-0 pointer-events-none"
                style={{
                    width: 380, height: 380,
                    background: 'radial-gradient(circle, #F59E0B 0%, #F97316 100%)',
                    filter: 'blur(70px)',
                    opacity: 0.06,
                    transform: 'translate(-35%, 35%)',
                    borderRadius: '50%',
                }}
            />

            {/* ── Dot-grid decoration (top-right) ─────────────── */}
            <div
                className="absolute top-10 right-10 w-52 h-52 pointer-events-none opacity-[0.055]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #0A1628 1.5px, transparent 1.5px)',
                    backgroundSize: '20px 20px',
                }}
            />

            {/* ── Thin diagonal stripe accent (top-left) ──────── */}
            <div
                className="absolute -top-4 -left-6 w-64 h-64 pointer-events-none opacity-[0.025]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #0A1628 0, #0A1628 1px, transparent 0, transparent 50%)',
                    backgroundSize: '12px 12px',
                }}
            />

            {/* ── Main content ────────────────────────────────── */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl">

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="flex items-center gap-3 mb-4"
                    >
                        {/* Colourful dash trio */}
                        <div className="flex items-center gap-1">
                            <span className="block h-[5px] w-9 rounded-full bg-emerald-500" />
                            <span className="block h-[5px] w-5 rounded-full bg-blue-500" />
                            <span className="block h-[5px] w-3 rounded-full bg-purple-500" />
                        </div>
                        <span
                            className="text-[11px] font-black uppercase tracking-[0.22em] text-emerald-600"
                            style={{ fontFamily: 'var(--font-accent)' }}
                        >
                            {badge || 'Aura Academia'}
                        </span>
                    </motion.div>

                    {/* Title — Syne font, each line staggers in */}
                    <h1
                        className="font-black leading-[1.05] tracking-tight mb-4"
                        style={{
                            fontFamily: 'var(--font-accent)',
                            fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
                        }}
                    >
                        {titleLines.map((line, i) => {
                            const isLast = i === titleLines.length - 1;
                            return (
                                <motion.span
                                    key={i}
                                    className={`block ${
                                        isLast
                                            ? 'text-gradient-primary'
                                            : 'text-[#0A1628]'
                                    }`}
                                    initial={{ opacity: 0, y: 28 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.65,
                                        delay: 0.08 + i * 0.1,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    {line}
                                </motion.span>
                            );
                        })}
                    </h1>

                    {/* Colourful segmented bar */}
                    <motion.div
                        className="flex items-center gap-1.5 mb-5"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.55, delay: 0.38, ease: 'easeOut' }}
                        style={{ transformOrigin: 'left' }}
                    >
                        <span className="block h-[5px] w-16 rounded-full bg-emerald-500" />
                        <span className="block h-[5px] w-9  rounded-full bg-blue-500" />
                        <span className="block h-[5px] w-5  rounded-full bg-purple-500" />
                        <span className="block h-[5px] w-3  rounded-full bg-amber-400" />
                    </motion.div>

                    {/* Subtitle */}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.48, ease: 'easeOut' }}
                            className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xl"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>

            {/* Bottom fade into page */}
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
    );
};

export default PageHero;
