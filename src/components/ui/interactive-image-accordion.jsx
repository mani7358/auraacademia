import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Users, Brain, Star, CheckCircle, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShinyText from '../text/ShinyText';
import hero2 from '../../assets/hero 2.png';
import classroomLearning from '../../assets/classroom-learning.png';

const FloatingOrbs = lazy(() => import('../FloatingOrbs'));

const accordionItems = [
    {
        id: 1,
        title: 'Classroom Learning',
        description: 'Small batches for CBSE, ICSE & IGCSE boards ensure every student gets personal attention and thorough concept clarity.',
        imageUrl: classroomLearning,
        objectPosition: 'right center',
        icon: <GraduationCap size={18} />,
        accent: '#059669',
    },
    {
        id: 2,
        title: 'Expert Mentors',
        description: 'Our qualified teachers bring deep subject expertise — guiding students through CBSE, ICSE, JEE, NEET & IGCSE with clarity.',
        imageUrl: hero2,
        objectPosition: 'right center',
        icon: <Users size={18} />,
        accent: '#2563EB',
    },
    {
        id: 3,
        title: 'Career Guidance',
        description: 'Professional psychometric testing helps students uncover their strengths and choose the right academic path with confidence.',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop',
        icon: <Brain size={18} />,
        accent: '#7C3AED',
    },
    {
        id: 4,
        title: 'Exam Success',
        description: 'From JEE ranks to NEET scores and board toppers — our students achieve outstanding results every single year.',
        imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop',
        icon: <Star size={18} />,
        accent: '#F59E0B',
    },
];

const AccordionItem = ({ item, isActive, onMouseEnter }) => (
    <div
        className={`relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-700 ease-in-out ${isActive ? 'flex-[4]' : 'flex-[0.6]'}`}
        style={{ minWidth: 0 }}
        onMouseEnter={onMouseEnter}
    >
        <img
            src={item.imageUrl}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
            style={{ transform: isActive ? 'scale(1.04)' : 'scale(1)', objectPosition: item.objectPosition || 'center center' }}
            onError={e => { e.target.onerror = null; e.target.src = `https://placehold.co/450x500/${item.accent.replace('#','')}/ffffff?text=${item.title}`; }}
        />
        {/* Gradient overlay */}
        <div
            className="absolute inset-0 transition-all duration-500"
            style={{
                background: isActive
                    ? `linear-gradient(to top, ${item.accent}EE 0%, ${item.accent}55 40%, transparent 70%)`
                    : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)',
            }}
        />

        {/* Active content at bottom */}
        <div className="absolute inset-0 p-5 flex flex-col justify-end">
            <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-2 mb-2.5">
                    <div className="p-1.5 rounded-lg text-white" style={{ backgroundColor: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' }}>
                        {item.icon}
                    </div>
                    <h3 className="text-white text-lg font-black leading-tight">{item.title}</h3>
                </div>
                <p className="text-white/85 text-sm leading-relaxed">{item.description}</p>
            </div>
            {/* Collapsed label */}
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-white/80 text-xs font-black whitespace-nowrap -rotate-90 uppercase tracking-widest">
                    {item.title}
                </span>
            </div>
        </div>

        {/* Active indicator dot */}
        {isActive && (
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white shadow-lg" />
        )}
    </div>
);

export function LandingAccordionItem() {
    const [activeIndex, setActiveIndex] = useState(0);

    const highlights = [
        'CBSE, ICSE, IGCSE & IB coaching in Sharjah',
        'Small batches — personalised attention',
        'JEE & NEET preparation since 2018',
    ];

    return (
        <section className="relative pt-28 pb-20 overflow-hidden bg-white">
            {/* Subtle dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#10B98115 1.5px, transparent 1.5px)',
                    backgroundSize: '28px 28px',
                }}
            />
            {/* Ambient blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.06) 0%, transparent 70%)', transform: 'translate(20%, -30%)' }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)', transform: 'translate(-20%, 30%)' }} />

            <Suspense fallback={null}>
                <FloatingOrbs className="opacity-30" />
            </Suspense>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-10">

                    {/* ── Left: Text ── */}
                    <motion.div
                        className="w-full lg:w-[46%] flex-shrink-0"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-8 shadow-sm"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                            </span>
                            An academic hub to gear up beyond block excellence
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#0A1628] leading-[1.08] tracking-tight mb-6">
                            Creating an Aura of{' '}
                            <ShinyText text="Excellence" color="#059669" shineColor="#60A5FA" speed={3} spread={120} />
                            {' '}in Education
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed mb-7 max-w-lg">
                            Expert coaching for CBSE, ICSE, IGCSE &amp; IB boards. Personalised learning, small batches, and a proven track record of results since 2018.
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-2.5 mb-9">
                            {highlights.map((h, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-2.5 text-gray-700 text-sm font-medium"
                                >
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                        <CheckCircle size={12} className="text-emerald-600" />
                                    </div>
                                    {h}
                                </motion.li>
                            ))}
                        </ul>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-wrap gap-3 mb-11"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-[#0A1628] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-emerald-600 transition-all duration-300 group shadow-lg shadow-gray-900/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5"
                            >
                                Book Free Trial
                                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link
                                to="/courses"
                                className="inline-flex items-center gap-2 border-2 border-gray-200 text-[#0A1628] px-7 py-3.5 rounded-full font-bold text-sm hover:border-[#0A1628] transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <PlayCircle size={15} className="text-emerald-600" />
                                Explore Courses
                            </Link>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            className="flex flex-wrap items-center gap-5 pt-6 border-t border-gray-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2.5">
                                    {[11, 12, 13, 14, 15].map(i => (
                                        <img
                                            key={i}
                                            className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover"
                                            src={`https://i.pravatar.cc/80?img=${i}`}
                                            alt="Student"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <p className="font-black text-[#0A1628] text-sm">2,000+ Students</p>
                                    <p className="text-gray-500 text-xs">Mentored since 2018</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-gray-200 hidden sm:block" />
                            <div className="text-center">
                                <p className="font-black text-[#0A1628] text-2xl leading-none">7+</p>
                                <p className="text-gray-500 text-xs mt-0.5">Years of excellence</p>
                            </div>
                            <div className="w-px h-10 bg-gray-200 hidden sm:block" />
                            <div className="text-center">
                                <p className="font-black text-[#0A1628] text-2xl leading-none">100%</p>
                                <p className="text-gray-500 text-xs mt-0.5">Pass rate</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ── Right: Image Accordion ── */}
                    <motion.div
                        className="w-full lg:w-[54%]"
                        initial={{ opacity: 0, scale: 0.94, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Floating badges above accordion */}
                        <div className="flex justify-between items-end mb-3 px-1">
                            {accordionItems.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: -12 }}
                                    animate={{ opacity: activeIndex === i ? 1 : 0.4, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.08 }}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-500"
                                    style={{
                                        background: activeIndex === i ? `${item.accent}15` : 'transparent',
                                        color: activeIndex === i ? item.accent : '#9CA3AF',
                                        border: `1.5px solid ${activeIndex === i ? item.accent + '30' : 'transparent'}`,
                                    }}
                                >
                                    {React.cloneElement(item.icon, { size: 12 })}
                                    <span className="hidden sm:inline">{item.title}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex gap-2.5 h-[340px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/20">
                            {accordionItems.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    item={item}
                                    isActive={index === activeIndex}
                                    onMouseEnter={() => setActiveIndex(index)}
                                />
                            ))}
                        </div>

                        {/* Dot indicators */}
                        <div className="flex justify-center gap-2 mt-4">
                            {accordionItems.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className="transition-all duration-300 rounded-full"
                                    style={{
                                        width: activeIndex === i ? '24px' : '8px',
                                        height: '8px',
                                        backgroundColor: activeIndex === i ? item.accent : '#D1D5DB',
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
