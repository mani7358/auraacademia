import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Brain, Target, Map, Lightbulb, Compass, Award,
    ExternalLink, CheckCircle, BookOpen, Zap, ArrowRight,
    FlaskConical, Clock, BarChart2, Heart, Users,
    TrendingUp, Star, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

// ── All 13 assessment dimensions ─────────────────────────────────
const dimensions = [
    { num: '01', title: 'Aptitude',              desc: 'Your natural ability to learn',           color: '#059669' },
    { num: '02', title: 'Interest',              desc: 'What genuinely motivates you',            color: '#2563EB' },
    { num: '03', title: 'Personality',           desc: 'How you interact & work',                color: '#7C3AED' },
    { num: '04', title: 'Learning Style',        desc: 'How you absorb information',             color: '#D97706' },
    { num: '05', title: 'Academic Readiness',    desc: 'Subject-wise depth & clarity',           color: '#0891B2', star: true },
    { num: '06', title: 'Competitive Exam Skills', desc: 'JEE / NEET aptitude indicators',       color: '#DB2777' },
    { num: '07', title: 'Study Habits',          desc: 'Routine, consistency & time management', color: '#16A34A' },
    { num: '08', title: 'Focus & Attention',     desc: 'Concentration span & distraction level', color: '#6D28D9' },
    { num: '09', title: 'Test-Taking Skills',    desc: 'Speed, accuracy & pressure handling',    color: '#B45309' },
    { num: '10', title: 'Stress & Resilience',   desc: 'Exam anxiety & recovery ability',        color: '#E11D48', star: true },
    { num: '11', title: 'Learning Gaps',         desc: 'Weak chapters & foundation gaps',        color: '#047857' },
    { num: '12', title: 'Career Recommendation', desc: 'Stream match — JEE / NEET / Others',    color: '#0369A1' },
    { num: '13', title: 'Personalized Plan',     desc: 'Tailored study strategy for you',        color: '#9333EA' },
];

// ── Detailed 12-card breakdown ────────────────────────────────────
const detailCards = [
    {
        num: 1, color: '#059669',
        title: 'Academic Readiness',
        badge: 'Very Important',
        icon: <BookOpen size={20} />,
        points: ['Subject-wise strength (Maths, Physics, Chemistry, Biology)', 'Concept clarity level', 'Application vs rote learning'],
        outcome: 'Helps place students in the right batch (foundation / advanced)',
    },
    {
        num: 2, color: '#2563EB',
        title: 'Competitive Exam Aptitude',
        icon: <FlaskConical size={20} />,
        points: ['Logical reasoning', 'Numerical ability', 'Analytical thinking'],
        outcome: 'Crucial for JEE / NEET success',
    },
    {
        num: 3, color: '#D97706',
        title: 'Study Habits & Discipline',
        icon: <Clock size={20} />,
        points: ['Daily study routine', 'Consistency', 'Time management'],
        outcome: 'Directly impacts results more than intelligence',
    },
    {
        num: 4, color: '#7C3AED',
        title: 'Focus & Attention Span',
        icon: <Brain size={20} />,
        points: ['Ability to sit for long study hours', 'Distraction level (mobile, etc.)'],
        outcome: 'Important for long exam preparation',
    },
    {
        num: 5, color: '#0891B2',
        title: 'Test-Taking Skills',
        icon: <Target size={20} />,
        points: ['Speed vs accuracy', 'Exam pressure handling', 'Time allocation during exams'],
        outcome: 'Helps improve mock test performance',
    },
    {
        num: 6, color: '#DB2777',
        title: 'Motivation & Goal Clarity',
        icon: <Compass size={20} />,
        points: ['Why JEE / NEET?', 'Internal vs external motivation'],
        outcome: 'Helps identify serious vs unsure students',
    },
    {
        num: 7, color: '#E11D48',
        title: 'Stress Management & Resilience',
        badge: '⭐ Key Insight',
        icon: <Heart size={20} />,
        points: ['Handling failure (low marks)', 'Exam anxiety'],
        outcome: 'Very important for long-term preparation',
    },
    {
        num: 8, color: '#047857',
        title: 'Learning Gaps Analysis',
        icon: <BarChart2 size={20} />,
        points: ['Weak chapters', 'Foundation gaps from previous grades'],
        outcome: 'Highly valuable for coaching centres',
    },
    {
        num: 9, color: '#0369A1',
        title: 'Career Stream Recommendation',
        icon: <Map size={20} />,
        points: ['JEE (Engineering)', 'NEET (Medical)', 'Other options if mismatch'],
        outcome: 'Helps parents trust your system',
    },
    {
        num: 10, color: '#B45309',
        title: 'Personalized Study Plan',
        badge: 'Big Value Add',
        icon: <Lightbulb size={20} />,
        points: ['Suggested study hours', 'Subject priority', 'Revision strategy'],
        outcome: 'Makes your platform stand out',
    },
    {
        num: 11, color: '#6D28D9',
        title: 'Performance Prediction',
        badge: 'Powerful',
        icon: <TrendingUp size={20} />,
        points: ['Expected exam readiness level', 'Timeline to reach target'],
        outcome: 'Great for marketing your centre',
    },
    {
        num: 12, color: '#9333EA',
        title: 'Parent Guidance Section',
        icon: <Users size={20} />,
        points: ['How parents can support', 'Study environment tips'],
        outcome: 'Parents love this',
    },
];

const testHighlights = [
    { icon: <Brain size={20} />, title: '90-Minute Deep Dive', desc: 'Comprehensive adaptive assessment covering aptitude, personality, and interests.', color: '#059669' },
    { icon: <Map size={20} />, title: '20+ Page Report', desc: 'A detailed personalised profile with your strengths and ideal career pathways.', color: '#2563EB' },
    { icon: <Compass size={20} />, title: 'Expert Counselling', desc: '1-on-1 session to interpret your results and chart your academic next steps.', color: '#7C3AED' },
];

const whyPoints = [
    'Eliminate confusion when choosing between Science, Commerce, or Arts streams in Grade 11.',
    'Decide whether CBSE, ICSE, IGCSE, or IB is the right curriculum for your learning style.',
    'Identify your core strengths before applying to universities.',
    'Improve your study strategy and time management.',
    'Prevent mid-year curriculum switches which cause stress and lower grades.',
    'Reduce stress and gain clarity and confidence.',
    'Analyze your exam behaviour. (Speed + Accuracy).',
];

const Psychometric = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.fade-up-section').forEach(section => {
                gsap.fromTo(section, { y: 50, opacity: 0 }, {
                    scrollTrigger: { trigger: section, start: 'top 80%' },
                    y: 0, opacity: 1, duration: 0.8, ease: 'power2.out'
                });
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
            className="bg-white"
        >
            <SEO
                title="Psychometric Testing & Career Guidance | Aura Academia"
                description="Discover your true path with scientifically backed psychometric testing. Get personalised career guidance and make informed decisions about your academic future."
                keywords="psychometric testing UAE, career guidance sharjah, aptitude test, career counseling, stream selection"
            />

            <PageHero
                title="Discover Your True Path"
                subtitle="Make informed decisions about your curriculum, subjects, and future career with our scientifically backed Psychometric Testing."
                variant="primary"
            />

            {/* ── 1. What Is It ── */}
            <section className="py-20 bg-white fade-up-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-14 items-start">
                        <div className="w-full lg:w-3/5">
                            <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-5">
                                <span className="w-6 h-px bg-emerald-500" />
                                The Science of Success
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] mb-6" style={{ letterSpacing: '-0.02em' }}>
                                What Is a Psychometric Test?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-5">
                                A psychometric test is a standard, scientific method used to measure an individual's mental capabilities and behavioural style. It helps identify a student's underlying aptitudes, personality traits, and core interests.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                At Aura Academia, we believe that every student has a unique genius. The challenge isn't lacking ability — it's about finding the right environment where that specific ability can thrive.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: 'Aptitude', desc: 'Your natural ability to learn', color: '#059669' },
                                    { title: 'Interest', desc: 'What genuinely motivates you', color: '#2563EB' },
                                    { title: 'Personality', desc: 'How you interact & work', color: '#7C3AED' },
                                    { title: 'Learning Style', desc: 'How you absorb information', color: '#D97706' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-5 rounded-2xl border hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                                        style={{ backgroundColor: `${item.color}08`, borderColor: `${item.color}25` }}
                                    >
                                        <div className="w-3 h-3 rounded-full mb-3 group-hover:scale-125 transition-transform" style={{ backgroundColor: item.color }} />
                                        <h4 className="font-black text-[#0A1628] mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Why take it sidebar */}
                        <div className="w-full lg:w-2/5">
                            <div className="rounded-3xl p-8 h-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0f2245 100%)' }}>
                                <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                                    style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.15) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                                <h3 className="text-xl font-black text-white mb-6 relative z-10">Why Take This Test?</h3>
                                <ul className="space-y-4 relative z-10">
                                    {whyPoints.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle size={13} className="text-emerald-400" />
                                            </div>
                                            <span className="text-gray-400 text-sm leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. All 13 Dimensions Overview ── */}
            <section className="py-20 fade-up-section relative overflow-hidden"
                style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)' }}>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.06) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <SectionHeader
                        label="Complete Assessment"
                        title="13 Dimensions We Analyse"
                        subtitle="A holistic 360° view of every student — from aptitude to career fit."
                    />

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {dimensions.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                {/* Colored left accent */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ backgroundColor: item.color }} />

                                <div className="flex items-start gap-3 pl-2">
                                    {/* Number */}
                                    <span className="text-2xl font-black shrink-0 leading-none mt-0.5" style={{ color: `${item.color}60` }}>
                                        {item.num}
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-1.5 flex-wrap">
                                            <h4 className="font-black text-[#0A1628] text-sm leading-tight">{item.title}</h4>
                                            {item.star && (
                                                <Star size={11} className="fill-amber-400 text-amber-400 shrink-0" />
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                    style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${item.color}08, transparent)` }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. Detailed Breakdown Cards ── */}
            <section className="py-20 bg-white fade-up-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Deep Dive"
                        title="What Each Assessment Uncovers"
                        subtitle="Every dimension is analysed in depth to deliver actionable insights for students, parents, and educators."
                    />

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {detailCards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="group relative bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 flex flex-col overflow-hidden"
                            >
                                {/* Top color bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ backgroundColor: card.color }} />

                                {/* Header */}
                                <div className="flex items-start justify-between gap-3 mb-5 pt-2">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                                            style={{ backgroundColor: `${card.color}15`, color: card.color }}
                                        >
                                            {card.icon}
                                        </div>
                                        <div>
                                            <span className="text-xs font-black uppercase tracking-widest" style={{ color: `${card.color}99` }}>
                                                #{String(card.num).padStart(2, '0')}
                                            </span>
                                            <h3 className="font-black text-[#0A1628] text-base leading-tight">{card.title}</h3>
                                        </div>
                                    </div>
                                    {card.badge && (
                                        <span
                                            className="text-[10px] font-black uppercase tracking-wide px-2.5 py-1 rounded-full shrink-0 whitespace-nowrap"
                                            style={{ backgroundColor: `${card.color}15`, color: card.color }}
                                        >
                                            {card.badge}
                                        </span>
                                    )}
                                </div>

                                {/* Bullet points */}
                                <ul className="space-y-2.5 flex-1 mb-5">
                                    {card.points.map((pt, j) => (
                                        <li key={j} className="flex items-start gap-2.5">
                                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: card.color }} />
                                            <span className="text-gray-600 text-sm leading-relaxed">{pt}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Outcome callout */}
                                <div
                                    className="flex items-start gap-2 rounded-xl px-4 py-3 mt-auto"
                                    style={{ backgroundColor: `${card.color}0D`, borderLeft: `3px solid ${card.color}40` }}
                                >
                                    <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: card.color }} />
                                    <p className="text-sm font-semibold leading-snug" style={{ color: card.color }}>
                                        {card.outcome}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. Take the Test CTA ── */}
            <section className="py-20 relative overflow-hidden fade-up-section" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0f2245 100%)' }}>
                <div className="absolute inset-0 pointer-events-none opacity-20"
                    style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-25"
                    style={{ background: 'radial-gradient(circle, #059669 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-15"
                    style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-14 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5">
                                <Brain size={12} />
                                Get Started Today
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                                Ready to Map<br />Your Future?
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Take the first step towards a confident academic journey. Book your slot and let science guide your path.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
                                >
                                    Take the Test <ExternalLink size={16} />
                                </a>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Talk to a Counsellor <ArrowRight size={16} />
                                </Link>
                            </div>
                            <p className="mt-5 text-xs text-gray-600">*Link redirects to our partnered assessment platform.</p>
                        </div>

                        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {testHighlights.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300 cursor-default group"
                                    style={{ background: 'rgba(255,255,255,0.04)' }}
                                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                                >
                                    <div
                                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                                        style={{ backgroundColor: `${item.color}25`, color: item.color }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Psychometric;
