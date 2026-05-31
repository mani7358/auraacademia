import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, ArrowRight, Star, Shield } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import facultyData from '../data/faculty.json';

// Colour palette for teaching staff
const teacherAccents = ['#2563EB', '#7C3AED', '#059669', '#0891B2'];
const teacherGrads = [
    { from: '#2563EB', to: '#3B82F6' },
    { from: '#7C3AED', to: '#A78BFA' },
    { from: '#059669', to: '#10B981' },
    { from: '#0891B2', to: '#22D3EE' },
];

// Track teacher index separately so colour cycling ignores admin entries
let teacherCounter = 0;

const Faculty = () => {
    teacherCounter = 0; // reset on each render

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
            className="bg-white min-h-screen"
        >
            <SEO
                title="Expert Faculty - Meet Our Teachers | Aura Academia Sharjah"
                description="Learn from the region's finest educators with years of proven academic success. Meet our passionate teachers dedicated to student excellence."
                keywords="expert teachers sharjah, qualified tutors UAE, experienced faculty, CBSE teachers, IGCSE instructors"
            />

            <PageHero
                title={["Meet Our Expert", "Faculty"]}
                subtitle="Our teachers bring deep subject expertise, years of exam experience, and genuine care for every student's success."
                badge="Meet the Team"
            />

            <section className="py-20" style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="space-y-6">
                        {facultyData.map((faculty, i) => {
                            if (faculty.isAdmin) {
                                // ── Admin card (amber / gold) ──────────────────
                                return (
                                    <motion.div
                                        key={faculty.id}
                                        initial={{ opacity: 0, y: 32 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-amber-100 group"
                                    >
                                        <div className="flex flex-col md:flex-row">
                                            {/* Left accent panel — amber/gold */}
                                            <div
                                                className="md:w-64 shrink-0 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
                                                style={{ background: 'linear-gradient(160deg, #D97706 0%, #F59E0B 100%)' }}
                                            >
                                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                                                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full" />

                                                {/* Admin badge */}
                                                <div className="relative z-10 flex items-center gap-1.5 bg-white/20 border border-white/30 rounded-full px-3 py-1 mb-4">
                                                    <Shield size={11} className="text-white" />
                                                    <span className="text-white text-[10px] font-black uppercase tracking-wider">Administration</span>
                                                </div>

                                                {/* Monogram */}
                                                <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center text-white text-4xl font-black mb-4 shadow-xl group-hover:scale-105 transition-transform duration-300">
                                                    {faculty.name.charAt(0)}
                                                </div>

                                                <h3 className="relative z-10 text-xl font-black text-white mb-1">{faculty.name}</h3>
                                                <p className="relative z-10 text-white/80 text-xs font-semibold mb-3">{faculty.role}</p>

                                                {/* Experience badge */}
                                                <div className="relative z-10 bg-white/15 border border-white/25 rounded-2xl px-5 py-3 text-center">
                                                    <p className="text-3xl font-black text-white leading-none">{faculty.experience}+</p>
                                                    <p className="text-white/70 text-xs font-semibold mt-0.5">Years Experience</p>
                                                </div>
                                            </div>

                                            {/* Right content */}
                                            <div className="flex-1 p-8 flex flex-col">
                                                <div className="flex flex-wrap items-start justify-between gap-4 mb-5 pb-5 border-b border-gray-100">
                                                    <div>
                                                        <p className="text-xs font-black uppercase tracking-widest mb-1 text-amber-600">
                                                            {faculty.role}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-0.5">
                                                        {[...Array(5)].map((_, si) => (
                                                            <Star key={si} size={14} className="fill-amber-400 text-amber-400" />
                                                        ))}
                                                    </div>
                                                </div>

                                                <p className="text-gray-600 text-sm leading-relaxed mb-6">{faculty.bio}</p>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
                                                    <div>
                                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Areas of Expertise</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {faculty.specializations.map((spec, si) => (
                                                                <span key={si} className="text-xs font-bold px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700">
                                                                    {spec}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Key Highlights</p>
                                                        <ul className="space-y-2">
                                                            {faculty.achievements.map((ach, ai) => (
                                                                <li key={ai} className="flex items-start gap-2 text-xs text-gray-600">
                                                                    <CheckCircle size={12} className="mt-0.5 shrink-0 text-amber-500" />
                                                                    {ach}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            } else {
                                // ── Teacher card (coloured gradient) ──────────
                                const ti = teacherCounter++;
                                const accent = teacherAccents[ti % teacherAccents.length];
                                const grad   = teacherGrads[ti % teacherGrads.length];

                                return (
                                    <motion.div
                                        key={faculty.id}
                                        initial={{ opacity: 0, y: 32 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: ti * 0.1, duration: 0.6 }}
                                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100 group"
                                    >
                                        <div className="flex flex-col md:flex-row">
                                            {/* Left accent panel */}
                                            <div
                                                className="md:w-64 shrink-0 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden"
                                                style={{ background: `linear-gradient(160deg, ${grad.from} 0%, ${grad.to} 100%)` }}
                                            >
                                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                                                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full" />

                                                {/* Monogram */}
                                                <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center text-white text-4xl font-black mb-4 shadow-xl group-hover:scale-105 transition-transform duration-300">
                                                    {faculty.name.charAt(0)}
                                                </div>

                                                <h3 className="relative z-10 text-xl font-black text-white mb-1">{faculty.name}</h3>

                                                {/* Subject tags */}
                                                <div className="relative z-10 flex flex-wrap justify-center gap-1.5 mt-2">
                                                    {faculty.subjects.map((s, si) => (
                                                        <span key={si} className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/25">
                                                            {s}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Experience badge */}
                                                <div className="relative z-10 mt-5 bg-white/15 border border-white/25 rounded-2xl px-5 py-3 text-center">
                                                    <p className="text-3xl font-black text-white leading-none">{faculty.experience}+</p>
                                                    <p className="text-white/70 text-xs font-semibold mt-0.5">Years Experience</p>
                                                </div>
                                            </div>

                                            {/* Right content */}
                                            <div className="flex-1 p-8 flex flex-col">
                                                <div className="flex flex-wrap items-start justify-between gap-4 mb-5 pb-5 border-b border-gray-100">
                                                    <div>
                                                        <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: accent }}>
                                                            {faculty.role}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-0.5">
                                                        {[...Array(5)].map((_, si) => (
                                                            <Star key={si} size={14} className="fill-amber-400 text-amber-400" />
                                                        ))}
                                                    </div>
                                                </div>

                                                <p className="text-gray-600 text-sm leading-relaxed mb-6">{faculty.bio}</p>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
                                                    <div>
                                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Specialisations</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {faculty.specializations.map((spec, si) => (
                                                                <span
                                                                    key={si}
                                                                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                                                                    style={{
                                                                        backgroundColor: `${accent}10`,
                                                                        border: `1px solid ${accent}30`,
                                                                        color: accent,
                                                                    }}
                                                                >
                                                                    {spec}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Key Achievements</p>
                                                        <ul className="space-y-2">
                                                            {faculty.achievements.map((ach, ai) => (
                                                                <li key={ai} className="flex items-start gap-2 text-xs text-gray-600">
                                                                    <CheckCircle size={12} className="mt-0.5 shrink-0" style={{ color: accent }} />
                                                                    {ach}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            }
                        })}
                    </div>

                </div>
            </section>

            {/* What makes our faculty different */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { title: 'Subject Mastery',  desc: 'Every teacher holds postgraduate qualifications in their subject, ensuring depth of knowledge beyond the syllabus.',               color: '#059669', num: '01' },
                            { title: 'Exam Expertise',   desc: 'Our faculty are intimately familiar with CBSE, ICSE, IGCSE, JEE, and NEET exam patterns, question types, and scoring strategies.',    color: '#2563EB', num: '02' },
                            { title: 'Proven Results',   desc: 'Our teachers have collectively guided 2,000+ students to board exam success and competitive exam qualifications.',                color: '#7C3AED', num: '03' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden group"
                            >
                                <p
                                    className="absolute top-5 right-6 text-6xl font-black opacity-5 group-hover:opacity-10 transition-opacity leading-none"
                                    style={{ color: item.color }}
                                >
                                    {item.num}
                                </p>
                                <div className="w-2 h-10 rounded-full mb-5" style={{ backgroundColor: item.color }} />
                                <h4 className="font-black text-[#0A1628] mb-2 text-lg">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </motion.div>
    );
};

export default Faculty;
