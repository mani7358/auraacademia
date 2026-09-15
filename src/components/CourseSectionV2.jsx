import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen, CheckCircle, Sparkles, Languages, TrendingUp, Briefcase, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import coursesData from '../data/courses.json';

const cardColors = [
    { bg: 'from-emerald-500 to-teal-600',   text: 'text-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-100' },
    { bg: 'from-blue-500 to-indigo-600',     text: 'text-blue-600',   light: 'bg-blue-50',    border: 'border-blue-100' },
    { bg: 'from-violet-500 to-purple-600',   text: 'text-violet-600', light: 'bg-violet-50',  border: 'border-violet-100' },
    { bg: 'from-orange-500 to-red-500',      text: 'text-orange-600', light: 'bg-orange-50',  border: 'border-orange-100' },
];

// New subjects announced but not yet open for enrolment
const comingSoonSubjects = [
    { name: 'French',            icon: <Languages size={22} />,  color: '#2563EB', desc: 'Grammar, comprehension, and speaking practice for school French.' },
    { name: 'Economics',         icon: <TrendingUp size={22} />, color: '#059669', desc: 'Micro and macroeconomics concepts, graphs, and exam-focused answer writing.' },
    { name: 'Business Studies',  icon: <Briefcase size={22} />,  color: '#7C3AED', desc: 'Management, marketing, and business environment explained through real examples.' },
    { name: 'Accountancy',       icon: <Calculator size={22} />, color: '#D97706', desc: 'From journal entries to final accounts, with step-by-step board exam practice.' },
];

const CourseSectionV2 = () => {
    const filtered = coursesData.slice(0, 6);

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest">What We Offer</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] mt-2">
                            Our Programmes
                        </h2>
                    </div>
                </div>

                {/* Course Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6"
                    >
                        {filtered.map((course, i) => {
                            const color = cardColors[i % cardColors.length];
                            return (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                                >
                                    {/* Colored header */}
                                    <div className={`bg-gradient-to-br ${color.bg} p-6 relative overflow-hidden`}>
                                        <div className="absolute -right-6 -top-6 w-28 h-28 bg-white/10 rounded-full" />
                                        <div className="absolute -right-2 -bottom-8 w-20 h-20 bg-white/10 rounded-full" />
                                        <div className="relative z-10">
                                            <div className="flex gap-2 mb-3">
                                                <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/20">
                                                    {course.curriculum}
                                                </span>
                                                <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/20">
                                                    {course.grade}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-black text-white leading-tight">{course.title}</h3>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="p-6">
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{course.description}</p>

                                        {/* Key info row */}
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={12} className="text-emerald-500" />
                                                {course.duration}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <BookOpen size={12} className="text-emerald-500" />
                                                {course.mode}
                                            </span>
                                        </div>

                                        {/* Top features */}
                                        <ul className="space-y-1.5 mb-5">
                                            {course.features.slice(0, 3).map((f, fi) => (
                                                <li key={fi} className="flex items-center gap-2 text-xs text-gray-600">
                                                    <CheckCircle size={12} className="text-emerald-500 shrink-0" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            to={`/courses/${course.id}`}
                                            className={`inline-flex items-center gap-2 text-sm font-bold ${color.text} group-hover:gap-3 transition-all`}
                                        >
                                            View Details <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                {/* Coming soon subjects */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-14 rounded-3xl border border-amber-100 p-6 md:p-10 relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #FFFBEB 0%, #F0FDF4 100%)' }}
                >
                    <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)' }} />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                                <Sparkles size={12} />
                                Coming Soon
                            </span>
                            <h3 className="text-2xl md:text-3xl font-black text-[#0A1628] mt-3">
                                New Subjects Launching Soon
                            </h3>
                            <p className="text-gray-600 mt-2 max-w-2xl leading-relaxed">
                                We're expanding beyond Mathematics and Science. French, Economics, Business Studies, and Accountancy classes are coming soon to Aura Academia, Sharjah.
                            </p>
                        </div>
                        <Link
                            to="/contact"
                            className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-bold text-sm transition-colors duration-300 shadow-lg shadow-amber-500/20"
                        >
                            Register Your Interest <ArrowRight size={15} />
                        </Link>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {comingSoonSubjects.map((subject) => (
                            <div
                                key={subject.name}
                                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div
                                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${subject.color}15`, color: subject.color }}
                                    >
                                        {subject.icon}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-full">
                                        Coming Soon
                                    </span>
                                </div>
                                <h4 className="font-black text-[#0A1628] mb-1.5">{subject.name}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{subject.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <Link
                        to="/courses"
                        className="inline-flex items-center gap-2 bg-[#0A1628] hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-sm transition-colors duration-300 shadow-lg"
                    >
                        View All Courses <ArrowRight size={15} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CourseSectionV2;
