import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import {
    Target, Users, BarChart3, Clock, Trophy, Brain,
    ArrowRight, MapPin, Star, Zap, Shield, GraduationCap,
    ChevronLeft, ChevronRight, Sun
} from 'lucide-react';
import { TestimonialsColumn } from '../components/ui/testimonials-columns';
import StatsSection from '../components/StatsSection';
import SEO from '../components/SEO';
import { LandingAccordionItem as InteractiveHero } from '../components/ui/interactive-image-accordion';
import CourseSectionV2 from '../components/CourseSectionV2';
import ShinyText from '../components/text/ShinyText';

import portfolio1 from '../assets/portfolio-1.jpeg';
import portfolio2 from '../assets/portfolio-2.jpeg';
import founderImg from '../assets/auraacademiafounder.jpeg';

gsap.registerPlugin(ScrollTrigger);


// ─── Achievers ──────────────────────────────────────────────────
const achievers = [
    { name: 'Tehreem', score: '98.8%', school: 'Our Own School', initials: 'TE' },
    { name: 'Mahaswin', score: '96.6%', school: 'Our Own Boys', initials: 'MA' },
    { name: 'Ishita Naresh', score: '96.16%', school: 'Our Own School', initials: 'IN' },
    { name: 'Shakti', score: '95%', school: 'Pace International', initials: 'SH' },
    { name: 'Karthika', score: '94.6%', school: 'GEMS Millennium, Sharjah', initials: 'KA' },
    { name: 'Safwan', score: '93.8%', school: 'Our Own Dubai', initials: 'SA' },
    { name: 'Sreehari', score: '93.4%', school: 'LPS', initials: 'SR' },
    { name: 'Anusha', score: '93%', school: 'Sharjah Indian School', initials: 'AN' },
    { name: 'Pranav Vijay', score: '93%', school: 'LPS', initials: 'PV' },
    { name: 'Fareed', score: '93%', school: 'Central School', initials: 'FA' },
];

const rankPalette = [
    { from: '#F59E0B', to: '#FBBF24', medal: '🥇' }, // 1 – Gold
    { from: '#9CA3AF', to: '#D1D5DB', medal: '🥈' }, // 2 – Silver
    { from: '#CD7F32', to: '#D97706', medal: '🥉' }, // 3 – Bronze
    { from: '#059669', to: '#10B981', medal: null }, // 4
    { from: '#2563EB', to: '#3B82F6', medal: null }, // 5
    { from: '#7C3AED', to: '#A78BFA', medal: null }, // 6
    { from: '#0891B2', to: '#22D3EE', medal: null }, // 7
    { from: '#DB2777', to: '#F472B6', medal: null }, // 8
    { from: '#D97706', to: '#FBBF24', medal: null }, // 9
    { from: '#4338CA', to: '#818CF8', medal: null }, // 10
];

// ─── Testimonials ────────────────────────────────────────────────
const testimonials = [
    { text: "Joining Aura Academia has been excellent for my academic development with highly knowledgeable tutors.", name: "Arjun Ayyappan", role: "Student", avatarGradient: 'linear-gradient(135deg, #059669, #34D399)' },
    { text: "My son excels in 12th grade NEET prep. The expert faculty in Physics, Chemistry, Biology is exceptional.", name: "Govind Rajan", role: "Parent", avatarGradient: 'linear-gradient(135deg, #2563EB, #60A5FA)' },
    { text: "Faculty are phenomenal experts. Materials are excellent with extra classes ensuring no student falls behind.", name: "GDS Silvers", role: "Parent", avatarGradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)' },
    { text: "Fantastic learning environment with friendly atmosphere. Teaching methods are intellectual and engaging.", name: "Soumya Biju", role: "Parent", avatarGradient: 'linear-gradient(135deg, #0891B2, #22D3EE)' },
    { text: "Teachers are supportive. Ishwarya Ma'am and Suraj Sir explain concepts clearly and patiently.", name: "Neha", role: "Student", avatarGradient: 'linear-gradient(135deg, #DB2777, #F472B6)' },
    { text: "Teachers ensure everyone grasps concepts. They're friendly and make students feel like family.", name: "Tharisha Srinivasan", role: "Student", avatarGradient: 'linear-gradient(135deg, #D97706, #FBBF24)' },
    { text: "Outstanding experience. Teachers are knowledgeable and committed. Atmosphere motivates daily improvement.", name: "Mohammed Ashfaq", role: "Student", avatarGradient: 'linear-gradient(135deg, #4338CA, #818CF8)' },
    { text: "Teachers explain every concept with patience. I feel more confident after joining this tuition.", name: "Jeshwant Rajashekar", role: "Grade 11 Student", avatarGradient: 'linear-gradient(135deg, #0F766E, #5EEAD4)' },
    { text: "Aishwarya Ma'am is one of Sharjah's best chemistry teachers. My daughter's exam confidence greatly improved.", name: "Harsha Annadurai", role: "Parent, Sharjah", avatarGradient: 'linear-gradient(135deg, #E11D48, #FB7185)' },
    { text: "Love for science grew stronger here. Practice with many question papers helped me score well.", name: "Bhadra Lenij", role: "Grade 10 Student", avatarGradient: 'linear-gradient(135deg, #6D28D9, #C4B5FD)' },
    { text: "Best decision enrolling kids here. Teachers focus on genuine understanding. Kids enjoy attending sessions.", name: "Bhuvana Prasath", role: "Parent", avatarGradient: 'linear-gradient(135deg, #EA580C, #FDBA74)' },
    { text: "Excellent tuition center that cares about students. Teachers are knowledgeable, patient, dedicated.", name: "Bhuvan Raam", role: "Student", avatarGradient: 'linear-gradient(135deg, #16A34A, #86EFAC)' },
    { text: "Physics and math teachers are exceptional. Complex topics made easy. Curriculum well-structured.", name: "Arjun Thayath", role: "Grade 11 Student", avatarGradient: 'linear-gradient(135deg, #0284C7, #7DD3FC)' },
    { text: "Excellent learning environment with dedicated teachers, modern facilities, clean and supportive space.", name: "Irene Jain", role: "Parent", avatarGradient: 'linear-gradient(135deg, #A21CAF, #E879F9)' },
    { text: "Teachers genuinely care and inspire. Environment is positive and motivating for reaching goals.", name: "Nikhil", role: "Student", avatarGradient: 'linear-gradient(135deg, #DC2626, #FCA5A5)' },
    { text: "Dedicated teachers with supportive environment. Teaching methods are clear, interactive, and easy to follow.", name: "Joy", role: "Student", avatarGradient: 'linear-gradient(135deg, #0369A1, #38BDF8)' },
];
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// ─── Schools ─────────────────────────────────────────────────────
const schools = [
    { name: 'GEMS Wellington', abbr: 'GW', color: '#1a56db' },
    { name: 'Sharjah Indian School', abbr: 'SIS', color: '#047857' },
    { name: 'Our Own High School', abbr: 'OO', color: '#7c3aed' },
    { name: 'Delhi Private School', abbr: 'DPS', color: '#b91c1c' },
    { name: 'Indian High School', abbr: 'IHS', color: '#d97706' },
    { name: 'JSS Private School', abbr: 'JSS', color: '#0891b2' },
    { name: 'The Millennium School', abbr: 'TMS', color: '#059669' },
    { name: 'Scholars International', abbr: 'SI', color: '#4338ca' },
    { name: 'Gulf Model School', abbr: 'GMS', color: '#be185d' },
    { name: 'DPS Sharjah', abbr: 'DPS', color: '#c2410c' },
    { name: 'Ambassador School', abbr: 'AS', color: '#0f766e' },
    { name: 'Gulf Asian', abbr: 'GA', color: '#d97706' },
    { name: 'Leaders Private School', abbr: 'LPS', color: '#c2410c' },
    { name: 'GEMS Our Own Indian School', abbr: 'GOIS', color: '#0891b2' },
    { name: 'Indian International School DSO', abbr: 'IIS', color: '#0891b2' },
    { name: 'Indian International School Sharjah', abbr: 'IIS', color: '#0891b2' },
    { name: 'Cresent English School', abbr: 'CES', color: '#0891b2' },
    { name: 'Abu Dhabi Indian School', abbr: 'ADIS', color: '#0891b2' },
    { name: 'Delhi Public School, Sharjah', abbr: 'DPS', color: '#0891b2' },
    { name: 'Al Ain Juniors', abbr: 'AAJ', color: '#0891b2' },
    { name: 'Habitat Ajman', abbr: 'HA', color: '#0891b2' },
    { name: 'Woodlem Park School', abbr: 'WPS', color: '#0891b2' },
    { name: 'Amity Dubai', abbr: 'AD', color: '#0891b2' },
    { name: 'Amity Sharjah', abbr: 'AS', color: '#0891b2' },
    { name: 'Al Diyafah School', abbr: 'ADS', color: '#0891b2' },
    { name: 'Ibin Seena English High School', abbr: 'ISEHS', color: '#0891b2' },
    { name: 'Dubai Scholars', abbr: 'DS', color: '#0891b2' },
    { name: 'St. Mary`s Catholic School', abbr: 'SMCS', color: '#0891b2' },
    { name: 'Cambridge International School', abbr: 'CIS', color: '#0891b2' },
    { name: 'GEMS Wellington Academy', abbr: 'GWA', color: '#0891b2' },
    { name: 'The Westminster School', abbr: 'TWS', color: '#0891b2' },


];

// ─── Why Aura features ───────────────────────────────────────────
const features = [
    { icon: <Target size={22} />, title: 'Personalised Batches', desc: 'Small class sizes ensure every student receives individual attention they need to excel.', color: '#059669', bg: '#ECFDF5' },
    { icon: <Users size={22} />, title: 'Expert Faculty', desc: '15+ qualified teachers with deep subject expertise and years of exam experience.', color: '#2563EB', bg: '#EFF6FF' },
    { icon: <BarChart3 size={22} />, title: 'Regular Assessments', desc: 'Structured mock tests, detailed progress reports, and continuous feedback to keep on track.', color: '#7C3AED', bg: '#F5F3FF' },
    { icon: <Clock size={22} />, title: 'Flexible Timings', desc: 'Evening and weekend batches designed around school and activity schedules.', color: '#D97706', bg: '#FFFBEB' },
    { icon: <Trophy size={22} />, title: '7+ Year Track Record', desc: 'Consistent toppers across CBSE, ICSE, JEE, NEET, and IGCSE examinations year after year.', color: '#DB2777', bg: '#FDF2F8' },
    { icon: <Brain size={22} />, title: 'Career Guidance', desc: 'Professional psychometric testing to help students identify strengths and find the right path.', color: '#0891B2', bg: '#F0F9FF' },
];

// ─── Founder Blob Carousel ───────────────────────────────────────
const founderSlides = [
    {
        src: founderImg,
        alt: 'Ishvarya Ramasubramanian – Founder of Aura Academia',
        caption: 'Ishvarya Ramasubramanian',
        sub: 'Founder & Executive Director',
    },
    {
        src: portfolio1,
        alt: 'Ishvarya Ramasubramanian receiving recognition',
        caption: 'Academic Excellence',
        sub: 'Founder\'s Achievement',
    },
    {
        src: portfolio2,
        alt: 'Ishvarya Ramasubramanian award',
        caption: 'Professional Recognition',
        sub: 'Excellence in Education',
    },
];

const FounderBlobCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goTo = useCallback((idx) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrent(idx);
            setIsAnimating(false);
        }, 350);
    }, [isAnimating]);

    const prev = () => goTo((current - 1 + founderSlides.length) % founderSlides.length);
    const next = () => goTo((current + 1) % founderSlides.length);

    // Auto-advance every 3 s, resets when 'current' changes manually
    useEffect(() => {
        const t = setTimeout(() => {
            setCurrent(c => (c + 1) % founderSlides.length);
        }, 3000);
        return () => clearTimeout(t);
    }, [current]);

    return (
        <motion.div
            className="w-full lg:w-5/12 relative flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Glowing bg blob */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(5,150,105,0.12) 0%, transparent 70%)',
                    filter: 'blur(24px)',
                }}
            />

            {/* Circle container */}
            <div className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: '1 / 1' }}>
                {/* The actual circle image area */}
                <div
                    className="w-full h-full relative overflow-hidden"
                    style={{
                        borderRadius: '50%',
                        background: '#fff',
                        boxShadow: '0 0 0 4px rgba(5,150,105,0.45), 0 8px 40px rgba(5,150,105,0.18)',
                    }}
                >
                    {founderSlides.map((slide, i) => (
                        <img
                            key={i}
                            src={slide.src}
                            alt={slide.alt}
                            className="absolute inset-0 w-full h-full transition-all duration-700"
                            style={{
                                objectFit: 'contain',
                                objectPosition: 'center',
                                padding: '12px',
                                opacity: i === current ? (isAnimating ? 0 : 1) : 0,
                                transform: i === current ? 'scale(1)' : 'scale(1.04)',
                                transition: 'opacity 0.6s ease, transform 0.6s ease',
                            }}
                        />
                    ))}

                    {/* Overlay gradient */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(10,22,40,0.55) 100%)' }}
                    />
                </div>

                {/* Navigation arrows */}
                <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center shadow-xl border border-white/30 transition-all duration-200 hover:scale-110 active:scale-95"
                    style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', color: '#059669' }}
                >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                </button>
                <button
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center shadow-xl border border-white/30 transition-all duration-200 hover:scale-110 active:scale-95"
                    style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', color: '#059669' }}
                >
                    <ChevronRight size={20} strokeWidth={2.5} />
                </button>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <p className="font-black text-[#0A1628] text-base">{founderSlides[current].caption}</p>
                    <p className="text-emerald-600 text-xs font-bold uppercase tracking-wider mt-0.5">{founderSlides[current].sub}</p>
                </motion.div>

                {/* Dot indicators */}
                <div className="flex items-center justify-center gap-2 mt-4">
                    {founderSlides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className="transition-all duration-300"
                            style={{
                                width: i === current ? 24 : 8,
                                height: 8,
                                borderRadius: 100,
                                background: i === current ? '#059669' : '#D1FAE5',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        />
                    ))}
                </div>
            </div>

        </motion.div>
    );
};

// ═══════════════════════════════════════════════════════════════════
const Home = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.fade-up-section').forEach(el => {
                gsap.fromTo(el,
                    { y: 40, opacity: 0 },
                    { scrollTrigger: { trigger: el, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">
            <SEO />

            {/* 1. HERO */}
            <div className="fade-up-section">
                <InteractiveHero />
            </div>

            {/* 2. ACHIEVERS ───────────────────────────────────── */}
            <section className="py-24 fade-up-section relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)' }}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.07) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-5">
                            <Star size={13} className="fill-emerald-500 text-emerald-500" />
                            Student Success Stories
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A1628] mb-4" style={{ letterSpacing: '-0.02em' }}>
                            Our Results Speak{' '}
                            <ShinyText text="for Themselves" color="#059669" shineColor="#60A5FA" speed={3} spread={120} />
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                            These are just a few of the students who achieved extraordinary results with Aura Academia's guidance.
                        </p>
                    </div>

                    {/* ── Achiever Cards ─────────────────────── */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                        {achievers.map((a, i) => {
                            const pal = rankPalette[i];
                            const cardBgs = [
                                '#FFF7ED', // warm orange tint
                                '#F0F9FF', // sky blue tint
                                '#FDF2F8', // pink tint
                                '#ECFDF5', // emerald tint
                                '#EEF2FF', // indigo tint
                                '#FFFBEB', // amber tint
                                '#F0FDFA', // teal tint
                                '#FFF1F2', // rose tint
                                '#F5F3FF', // violet tint
                                '#FEFCE8', // lime tint
                            ];
                            const stripeColors = [
                                ['#EF4444', '#3B82F6', '#FBBF24'],
                                ['#8B5CF6', '#10B981', '#F97316'],
                                ['#EC4899', '#0EA5E9', '#EAB308'],
                                ['#14B8A6', '#E11D48', '#6366F1'],
                                ['#F59E0B', '#7C3AED', '#059669'],
                            ];
                            const stripes = stripeColors[i % stripeColors.length];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    className="rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden text-center group"
                                    style={{ backgroundColor: cardBgs[i], borderColor: `${pal.from}20` }}
                                >
                                    {/* Card top — circle + stripes area */}
                                    <div className="relative pt-6 pb-4 overflow-hidden">
                                        {/* Decorative stripes */}
                                        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-[3px] pointer-events-none">
                                            {stripes.map((c, si) => (
                                                <div key={si} className="w-8 h-[3px] rounded-full" style={{ backgroundColor: c }} />
                                            ))}
                                        </div>

                                        {/* Colored circle with initials */}
                                        <div
                                            className="mx-auto w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: `${pal.from}20` }}
                                        >
                                            <span
                                                className="text-2xl md:text-3xl font-black"
                                                style={{ color: pal.from }}
                                            >
                                                {a.initials}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card body — name, score, school */}
                                    <div className="px-3 pb-5">
                                        <h4 className="font-bold text-[#0A1628] text-sm md:text-[15px] leading-tight truncate">
                                            {a.name}
                                        </h4>

                                        {/* Score pill */}
                                        <div
                                            className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold border"
                                            style={{
                                                color: pal.from,
                                                borderColor: `${pal.from}30`,
                                                backgroundColor: `${pal.from}08`,
                                            }}
                                        >
                                            {a.score}
                                        </div>

                                        {/* School */}
                                        <p className="text-[11px] text-gray-400 font-medium mt-2 truncate">
                                            {a.school}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. SCHOOLS MARQUEE ─────────────────────────────── */}
            <section className="py-16 bg-white fade-up-section overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Our Community</p>
                    <h2 className="text-2xl md:text-3xl font-black text-[#0A1628]">
                        Schools Our Students Come From
                    </h2>
                </div>
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                    <div className="flex overflow-hidden">
                        <div className="flex gap-4 animate-marquee">
                            {schools.map((school, i) => (
                                <Link
                                    key={i}
                                    to="/courses"
                                    className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm shrink-0 hover:shadow-md hover:border-emerald-400 transition-all duration-300 group"
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-black shrink-0 group-hover:scale-110 transition-transform duration-300"
                                        style={{ backgroundColor: school.color }}
                                    >
                                        {school.abbr}
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{school.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3.5 MORNING SESSIONS CTA ─────────────────────────────── */}
            <section className="py-12 bg-white fade-up-section relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto rounded-3xl p-6 md:p-8 shadow-xl flex flex-col sm:flex-row items-center gap-6 justify-between relative overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)' }}>

                        {/* Decorative background blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                        <div className="flex items-center gap-5 relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center shrink-0 shadow-inner">
                                <Sun size={32} className="text-white fill-white/80 animate-pulse-slow" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-black text-white mb-1 drop-shadow-sm">
                                    Morning Sessions Available
                                </h3>
                                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-lg font-medium">
                                    Flexible learning hours designed specifically for Evening School Students.
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/contact"
                            className="shrink-0 bg-white text-[#FF6B6B] hover:bg-gray-50 px-8 py-3.5 rounded-full font-black text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap relative z-10"
                        >
                            Inquire Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. STATS */}
            <div className="fade-up-section">
                <StatsSection />
            </div>

            {/* 5. ABOUT THE FOUNDER ─────────────────────────── */}
            <section className="py-24 overflow-hidden fade-up-section" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0fdf4 100%)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left: 3D Blob Carousel */}
                        <FounderBlobCarousel />

                        {/* Right: Text content */}
                        <div className="w-full lg:w-7/12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                                    <GraduationCap size={14} className="text-emerald-500" />
                                    Meet Our Visionary Founder
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black text-[#0A1628] leading-[1.1] mb-6">
                                    Guided by Passion,{' '}
                                    <ShinyText text="Fuelled by Excellence" color="#059669" shineColor="#60A5FA" speed={3} spread={120} />
                                </h2>

                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
                                    <p className="font-bold text-[#0A1628]">
                                        "At Aura Academia, we believe every child has the potential to touch the stars. Our mission is to provide the wings they need to get there."
                                    </p>
                                    <p>
                                        Founded by <span className="text-[#0A1628] font-black">Ishvarya Ramasubramanian</span>, a distinguished scholar with a
                                        <span className="text-emerald-700 font-bold"> PhD in Medical Sciences</span> and a recipient of multiple
                                        <span className="text-emerald-700 font-bold"> Gold Medals</span> for academic brilliance.
                                    </p>
                                    <p>
                                        With a profound understanding of educational psychology and subject mastery, Ishvarya Ramasubramanian established this hub to move beyond rote learning toward true academic brilliance. Her vision ensures that Aura Academia isn't just an academic hub, but a sanctuary for curious minds to flourish and excel.
                                    </p>
                                </div>

                                {/* Signature/Name Block */}
                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                    <div className="w-12 h-px bg-emerald-500 hidden sm:block" />
                                    <div>
                                        <p className="text-xl font-black text-[#0A1628]">Ishvarya Ramasubramanian</p>
                                        <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase">Founder & Executive Director</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. COURSES */}
            <div id="courses-section" className="fade-up-section">
                <CourseSectionV2 />
            </div>

            {/* 6. WHY AURA ─────────────────────────────────────── */}
            <section className="py-24 fade-up-section relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0f2245 100%)' }}>
                {/* Background patterns */}
                <div className="absolute inset-0 pointer-events-none opacity-30"
                    style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
                    style={{ background: 'radial-gradient(circle, #059669 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15"
                    style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Left */}
                        <div className="w-full lg:w-5/12">
                            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5">
                                <Zap size={12} />
                                Why Choose Us
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-0 mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                                The Aura{' '}
                                <ShinyText text="Advantage" color="#34D399" shineColor="#ffffff" speed={3} spread={120} />
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                                We don't just teach — we build examination-ready students with the skills, confidence, and mindset to excel in academics and beyond. Every student gets the individual attention they deserve.
                            </p>

                            {/* Three stat pills */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {[
                                    { label: '2,000+ Students', sub: 'Mentored' },
                                    { label: '100% Pass Rate', sub: 'All Boards' },
                                    { label: '7+ Years', sub: 'Of Excellence' },
                                ].map((s, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-center">
                                        <p className="font-black text-white text-sm">{s.label}</p>
                                        <p className="text-gray-500 text-xs">{s.sub}</p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 group shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 hover:-translate-y-0.5"
                            >
                                Our Story <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Right – feature cards */}
                        <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-start gap-4 p-5 rounded-2xl border border-white/8 hover:border-white/20 transition-all duration-300 group cursor-default"
                                    style={{ background: 'rgba(255,255,255,0.04)' }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                                >
                                    <div
                                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                                        style={{ backgroundColor: `${f.color}25`, color: f.color }}
                                    >
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1.5 text-sm">{f.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. TESTIMONIALS ─────────────────────────────────── */}
            <section className="py-24 bg-[#F7F8FA] fade-up-section overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm">
                            <Shield size={13} className="text-emerald-500" />
                            Verified Student Reviews
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A1628] mb-4" style={{ letterSpacing: '-0.02em' }}>
                            Stories of{' '}
                            <ShinyText text="Success" color="#059669" shineColor="#60A5FA" speed={3} spread={120} />
                        </h2>
                        <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-lg leading-relaxed">
                            See what our students and parents have to say about their experience at Aura Academia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] max-h-[680px] overflow-hidden">
                        <TestimonialsColumn testimonials={firstColumn} duration={15} />
                        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                    </div>

                    {/* View More Reviews */}
                    <div className="text-center mt-10">
                        <Link
                            to="/reviews"
                            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-emerald-400 text-gray-700 hover:text-emerald-600 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
                        >
                            View All 133+ Reviews
                            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 8. LOCATION CTA ─────────────────────────────────── */}
            <section className="py-20 bg-white fade-up-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0f2245 100%)' }}
                    >
                        {/* Decorations */}
                        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-25"
                            style={{ background: 'radial-gradient(circle, #059669 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-20"
                            style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
                        <div className="absolute inset-0 pointer-events-none opacity-20"
                            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
                                    <MapPin size={12} />
                                    Visit Us
                                </div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                                    Come See Us in Sharjah
                                </h2>
                                <div className="flex items-start gap-2.5 text-gray-400 mb-2">
                                    <MapPin size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                                    <div className="text-sm leading-relaxed space-y-1">
                                        <p><span className="text-emerald-400 font-bold text-xs">Centre 1</span> — Tower A, 803, Al Rayyan Complex, Al-Nahda, Sharjah</p>
                                        <p><span className="text-emerald-400 font-bold text-xs">Centre 2</span> — 16, First Floor, City Tower, Near Viva Super Market, Abushagara, Sharjah</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {['Mon–Sun: 3:30 PM – 9:00 PM'].map((t, i) => (
                                        <span key={i} className="text-xs font-semibold text-gray-400 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
                                >
                                    Book Free Trial <ArrowRight size={15} />
                                </Link>
                                
                                    <a
                                    href="tel:+971585755286"
                                    className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    +971 585755286
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
