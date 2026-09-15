import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft, Clock, Users, GraduationCap,
    CheckCircle2, CheckCircle, BookOpen, MapPin, Phone, ArrowRight,
    Sparkles, Target, Star
} from 'lucide-react';
import SEO from '../components/SEO';
import coursesData from '../data/courses.json';
import facultyData from '../data/faculty.json';

const ease = [0.22, 1, 0.36, 1];

const teacherGrads = [
    { from: '#2563EB', to: '#3B82F6' },
    { from: '#7C3AED', to: '#A78BFA' },
    { from: '#059669', to: '#10B981' },
    { from: '#0891B2', to: '#22D3EE' },
    { from: '#D97706', to: '#F59E0B' },
];
const teacherAccents = ['#2563EB', '#7C3AED', '#059669', '#0891B2', '#D97706'];

const itemColors = [
    { bg: '#F0FDF4', border: '#86EFAC', icon: '#16A34A', text: '#15803D' },
    { bg: '#EFF6FF', border: '#93C5FD', icon: '#2563EB', text: '#1D4ED8' },
    { bg: '#FDF4FF', border: '#E879F9', icon: '#A21CAF', text: '#86198F' },
    { bg: '#FFF7ED', border: '#FDBA74', icon: '#EA580C', text: '#C2410C' },
    { bg: '#F5F3FF', border: '#C4B5FD', icon: '#7C3AED', text: '#6D28D9' },
    { bg: '#ECFEFF', border: '#67E8F9', icon: '#0891B2', text: '#0E7490' },
    { bg: '#FFF1F2', border: '#FDA4AF', icon: '#E11D48', text: '#BE123C' },
    { bg: '#F0FDF4', border: '#6EE7B7', icon: '#059669', text: '#047857' },
    { bg: '#FEFCE8', border: '#FDE047', icon: '#CA8A04', text: '#A16207' },
    { bg: '#EEF2FF', border: '#A5B4FC', icon: '#4F46E5', text: '#4338CA' },
];

const avatarGradients = [
    'from-emerald-400 to-teal-500',
    'from-blue-400 to-indigo-500',
    'from-violet-400 to-purple-500',
    'from-rose-400 to-pink-500',
    'from-amber-400 to-orange-500',
];

const CourseDetails = () => {
    const { courseId } = useParams();
    const course = coursesData.find(c => c.id === courseId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [courseId]);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
                    <Link to="/courses" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                        ← Back to Courses
                    </Link>
                </div>
            </div>
        );
    }

    const courseFaculty = course.faculty?.map(fid =>
        facultyData.find(f => f.id === fid)
    ).filter(Boolean) || [];

    return (
        <div className="min-h-screen bg-[#F8FAFB] overflow-x-hidden">
            <SEO
                title={`${course.title} - Aura Academia`}
                description={course.description}
                keywords={`${course.curriculum}, ${course.grade}, ${course.subjects?.join(', ')}`}
            />

            {/* ── HERO ─────────────────────────────────────────────── */}
            <section className="pt-24 pb-10 relative overflow-hidden bg-white border-b border-gray-100">
                {/* Soft background blobs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.07]"
                        style={{ background: `radial-gradient(circle, ${course.color}, transparent 70%)` }} />
                    <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-[0.05]"
                        style={{ background: 'radial-gradient(circle, #3B82F6, transparent 70%)', transform: 'translate(-30%, 40%)' }} />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/courses"
                        className="inline-flex items-center gap-1.5 text-gray-400 hover:text-emerald-600 text-sm font-medium mb-7 transition-colors group"
                    >
                        <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
                        All Courses
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease }}
                    >
                        {/* Curriculum + Grade tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-sm"
                                style={{ backgroundColor: course.color }}>
                                {course.curriculum}
                            </span>
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                                {course.grade}
                            </span>
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-violet-50 text-violet-700 border border-violet-200">
                                {course.mode}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0A1628] leading-[1.15] mb-4"
                            style={{ letterSpacing: '-0.025em' }}>
                            {course.title}
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl">
                            {course.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── BODY: 2-COLUMN ───────────────────────────────────── */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col lg:flex-row gap-7">

                    {/* ── LEFT: MAIN CONTENT ───────────────────────── */}
                    <div className="flex-1 min-w-0 space-y-6">

                        {/* Features */}
                        {course.features?.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease }}
                                className="bg-emerald-50 rounded-2xl overflow-hidden shadow-sm border border-emerald-100"
                            >
                                {/* Section header strip */}
                                <div className="flex items-center gap-3 px-6 py-4 bg-emerald-100/70 border-b border-emerald-200/60">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                                        <Sparkles size={15} className="text-emerald-600" />
                                    </div>
                                    <h2 className="text-base font-bold text-[#0A1628]">What You'll Get</h2>
                                </div>
                                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {course.features.map((feature, i) => {
                                        const c = itemColors[i % itemColors.length];
                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 12 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.05, duration: 0.35, ease }}
                                                className="flex items-start gap-3 rounded-xl px-4 py-3.5 border"
                                                style={{ backgroundColor: c.bg, borderColor: c.border }}
                                            >
                                                <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: c.icon }} />
                                                <span className="text-sm font-medium leading-relaxed" style={{ color: c.text }}>
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}

                        {/* Subjects */}
                        {course.subjects?.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease }}
                                className="bg-blue-50 rounded-2xl overflow-hidden shadow-sm border border-blue-100"
                            >
                                <div className="flex items-center gap-3 px-6 py-4 bg-blue-100/70 border-b border-blue-200/60">
                                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                        <BookOpen size={15} className="text-blue-600" />
                                    </div>
                                    <h2 className="text-base font-bold text-[#0A1628]">Subjects Covered</h2>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2.5">
                                        {course.subjects.map((subject, i) => {
                                            const c = itemColors[i % itemColors.length];
                                            return (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.85 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.06, duration: 0.3, ease }}
                                                    className="px-4 py-2 rounded-full text-sm font-bold border-2 cursor-default hover:-translate-y-0.5 hover:shadow-sm transition-all"
                                                    style={{ backgroundColor: c.bg, borderColor: c.border, color: c.text }}
                                                >
                                                    {subject}
                                                </motion.span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        )}


                        {/* Faculty */}
                        {courseFaculty.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease }}
                                className="bg-violet-50 rounded-2xl overflow-hidden shadow-sm border border-violet-100"
                            >
                                <div className="flex items-center gap-3 px-6 py-4 bg-violet-100/70 border-b border-violet-200/60">
                                    <div className="w-8 h-8 rounded-lg bg-violet-200/60 flex items-center justify-center">
                                        <GraduationCap size={15} className="text-violet-600" />
                                    </div>
                                    <h2 className="text-base font-bold text-[#0A1628]">Your Instructors</h2>
                                </div>
                                <div className="p-5 space-y-4">
                                    {courseFaculty.map((faculty, i) => {
                                        const grad = teacherGrads[i % teacherGrads.length];
                                        const accent = teacherAccents[i % teacherAccents.length];
                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 16 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1, duration: 0.5, ease }}
                                                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                                            >
                                                <div className="flex flex-col sm:flex-row">
                                                    {/* Left gradient panel with blobs */}
                                                    <div
                                                        className="sm:w-44 shrink-0 p-5 flex flex-col items-center justify-center text-center relative overflow-hidden"
                                                        style={{ background: `linear-gradient(160deg, ${grad.from} 0%, ${grad.to} 100%)` }}
                                                    >
                                                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
                                                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />

                                                        {/* Monogram */}
                                                        <div className="relative z-10 w-14 h-14 rounded-xl bg-white/20 border-2 border-white/40 flex items-center justify-center text-white text-2xl font-black mb-3 shadow-lg group-hover:scale-105 transition-transform duration-300">
                                                            {faculty.name?.charAt(0)}
                                                        </div>
                                                        <h3 className="relative z-10 text-base font-black text-white mb-0.5">{faculty.name}</h3>

                                                        {/* Subject tags */}
                                                        <div className="relative z-10 flex flex-wrap justify-center gap-1 mb-3">
                                                            {faculty.subjects?.slice(0, 2).map((s, si) => (
                                                                <span key={si} className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/25">
                                                                    {s}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {/* Experience badge */}
                                                        {faculty.experience ? (
                                                            <div className="relative z-10 bg-white/15 border border-white/25 rounded-xl px-4 py-2 text-center">
                                                                <p className="text-2xl font-black text-white leading-none">{faculty.experience}+</p>
                                                                <p className="text-white/70 text-[10px] font-semibold mt-0.5">Years Exp.</p>
                                                            </div>
                                                        ) : null}
                                                    </div>

                                                    {/* Right content */}
                                                    <div className="flex-1 p-5">
                                                        <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-gray-100">
                                                            <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: accent }}>
                                                                {faculty.role}
                                                            </p>
                                                            <div className="flex items-center gap-0.5 shrink-0">
                                                                {[...Array(5)].map((_, si) => (
                                                                    <Star key={si} size={11} className="fill-amber-400 text-amber-400" />
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <p className="text-gray-500 text-xs leading-relaxed mb-3">{faculty.bio}</p>
                                                        {faculty.achievements?.length > 0 && (
                                                            <ul className="space-y-1.5">
                                                                {faculty.achievements.map((ach, ai) => (
                                                                    <li key={ai} className="flex items-start gap-2 text-xs text-gray-600">
                                                                        <CheckCircle size={11} className="mt-0.5 shrink-0" style={{ color: accent }} />
                                                                        {ach}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* ── RIGHT: SIDEBAR ───────────────────────────── */}
                    <div className="w-full lg:w-[320px] shrink-0 space-y-4">
                        <div className="lg:sticky lg:top-24">

                            {/* CTA Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.1, ease }}
                                className="rounded-2xl overflow-hidden shadow-md mb-4"
                                style={{ background: 'linear-gradient(145deg, #0A1628 0%, #0f2245 100%)' }}
                            >
                                {/* Decorations */}
                                <div className="absolute pointer-events-none opacity-20 w-40 h-40 rounded-full"
                                    style={{ background: `radial-gradient(circle, ${course.color}, transparent 70%)`, top: '-20px', right: '-20px' }} />

                                <div className="p-6 relative">
                                    <div className="inline-flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold uppercase tracking-widest mb-3">
                                        <Star size={10} fill="currentColor" />
                                        Free Trial Available
                                    </div>
                                    <h3 className="text-white font-black text-lg mb-1.5 leading-snug">
                                        Start Your Journey
                                    </h3>
                                    <p className="text-gray-400 text-xs leading-relaxed mb-5">
                                        Book a free trial class and experience the Aura difference.
                                    </p>
                                    <Link to="/contact"
                                        className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5 mb-2.5 w-full"
                                    >
                                        Book Free Trial <ArrowRight size={14} />
                                    </Link>
                                    <a href="tel:+971585755286"
                                        className="flex items-center justify-center gap-2 border border-white/15 text-white/80 hover:bg-white/10 hover:text-white px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 w-full"
                                    >
                                        <Phone size={13} />
                                        +971 585755286
                                    </a>
                                </div>
                            </motion.div>

                            {/* Quick Facts */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.18, ease }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4"
                            >
                                <div className="px-5 py-3.5 border-b border-gray-100 bg-gray-50">
                                    <h3 className="text-sm font-bold text-[#0A1628]">Quick Facts</h3>
                                </div>
                                <div className="divide-y divide-gray-50">
                                    {[
                                        { icon: <Users size={14} />, label: 'Mode', value: course.mode, bg: '#DBEAFE', color: '#2563EB' },
                                        { icon: <BookOpen size={14} />, label: 'Curriculum', value: course.curriculum, bg: '#EDE9FE', color: '#7C3AED' },
                                        { icon: <GraduationCap size={14} />, label: 'Grade', value: course.grade, bg: '#FEF9C3', color: '#CA8A04' },
                                    ].map((fact, i) => (
                                        <div key={i} className="flex items-center gap-3 px-5 py-3.5">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: fact.bg, color: fact.color }}>
                                                {fact.icon}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{fact.label}</p>
                                                <p className="text-sm font-bold text-[#0A1628]">{fact.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Who Is This For */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.25, ease }}
                                className="bg-rose-50 rounded-2xl border border-rose-100 overflow-hidden mb-4"
                            >
                                <div className="px-5 py-3.5 border-b border-rose-100 flex items-center gap-2.5">
                                    <div className="w-7 h-7 rounded-lg bg-rose-100 flex items-center justify-center">
                                        <Target size={13} className="text-rose-600" />
                                    </div>
                                    <h3 className="text-sm font-bold text-[#0A1628]">Who Is This For?</h3>
                                </div>
                                <div className="px-5 py-4">
                                    <p className="text-gray-600 text-sm leading-relaxed">{course.targetAudience}</p>
                                </div>
                            </motion.div>

                            {/* Location */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.3, ease }}
                                className="bg-emerald-50 rounded-2xl border border-emerald-100 overflow-hidden"
                            >
                                <div className="px-5 py-3.5 border-b border-emerald-100 flex items-center gap-2.5">
                                    <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center">
                                        <MapPin size={13} className="text-emerald-600" />
                                    </div>
                                    <h3 className="text-sm font-bold text-[#0A1628]">Our Locations</h3>
                                </div>
                                <div className="px-5 py-4 space-y-2.5">
                                    {[
                                        { label: 'Centre 1', loc: 'Al-Nahda, Sharjah' },
                                        { label: 'Centre 2', loc: 'Abu Shagara, Sharjah' },
                                    ].map((b, i) => (
                                        <div key={i} className="flex items-start gap-2.5">
                                            <div className="w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-[9px] font-black text-emerald-700">{i + 1}</span>
                                            </div>
                                            <div>
                                                <span className="text-[11px] font-bold text-emerald-700">{b.label}</span>
                                                <p className="text-xs text-gray-600">{b.loc}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="pt-1.5 space-y-1">
                                        {['Mon–Sun: 3:30 PM – 9:00 PM'].map((t, i) => (
                                            <p key={i} className="text-[11px] text-gray-500 font-medium">{t}</p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
