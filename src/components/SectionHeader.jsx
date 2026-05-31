import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/motionVariants';

const SectionHeader = ({ label, title, subtitle, align = 'center', labelColor = 'green' }) => {
    const colorMap = {
        purple: 'bg-emerald-600/10 text-emerald-600',
        blue: 'bg-blue-600/10 text-blue-600',
        coral: 'bg-emerald-600/10 text-emerald-600',
        amber: 'bg-[#f59e0b]/10 text-[#f59e0b]',
        indigo: 'bg-emerald-600/10 text-emerald-600',
        mint: 'bg-emerald-600/10 text-emerald-600',
        green: 'bg-emerald-600/10 text-emerald-600',
    };

    const alignmentClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

    return (
        <motion.div 
            className={`flex flex-col gap-4 mb-16 ${alignmentClass}`}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            {label && (
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold font-accent uppercase tracking-wider ${colorMap[labelColor] || colorMap.green} inline-block ${align === 'center' ? 'self-center' : 'self-start'}`}>
                    {label}
                </span>
            )}

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-[#0f172a] leading-tight">
                {title}
            </h2>

            {subtitle && (
                <p className="text-base md:text-lg text-[#475569] leading-relaxed">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeader;
