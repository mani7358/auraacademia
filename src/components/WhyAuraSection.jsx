import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

/**
 * WhyAuraSection - Why choose Aura Academia section
 */
const WhyAuraSection = () => {
    const features = [
        { icon: '🎯', title: 'Personalised', desc: 'Small batches for individual attention', color: '#7c3aed' },
        { icon: '👨‍🏫', title: 'Expert Faculty', desc: '15+ experienced teachers', color: '#4338ca' },
        { icon: '📊', title: 'Mock Tests', desc: 'Regular assessments & feedback', color: '#6366f1' },
        { icon: '⏰', title: 'Flexible', desc: 'Evening & weekend batches', color: '#3b82f6' },
        { icon: '🏆', title: 'Track Record', desc: '10+ years of excellence', color: '#f97316' },
        { icon: '🧠', title: 'Career Guidance', desc: 'Psychometric testing available', color: '#ea580c' },
    ];

    return (
        <section className="py-20 bg-white fade-up-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader 
                    label="The Aura Advantage" 
                    title="Why Choose Aura?" 
                    subtitle="Expert faculty with data-driven methods for every student." 
                />
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 stagger-children">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -4 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="stagger-item flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:shadow-lg transition-all cursor-default glass-card-hover"
                        >
                            <div 
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 shadow-sm"
                                style={{ backgroundColor: `${f.color}15` }}
                            >
                                {f.icon}
                            </div>
                            <h4 className="font-bold text-[#0f172a] text-sm mb-1">{f.title}</h4>
                            <p className="text-xs text-gray-500">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyAuraSection;
