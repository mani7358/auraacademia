import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen, CheckCircle, Zap, GraduationCap } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import TiltCard from '../components/TiltCard';
import coursesData from '../data/courses.json';

const categories = ['All', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'JEE', 'NEET', 'KEAM', 'ICSE', 'IGCSE', 'AS Level', 'A Level', 'NIOS'];

const gradientMap = {
    '#10B981': 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    '#3B82F6': 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
    '#059669': 'linear-gradient(135deg, #047857 0%, #059669 100%)',
    '#2563EB': 'linear-gradient(135deg, #1d4ed8 0%, #2563EB 100%)',
    '#F97316': 'linear-gradient(135deg, #ea580c 0%, #F97316 100%)',
    '#DC2626': 'linear-gradient(135deg, #b91c1c 0%, #DC2626 100%)',
};

const categoryColorMap = {
    'All':      { active: '#0A1628', bg: '#0A1628' },
    'Grade 8':  { active: '#059669', bg: '#059669' },
    'Grade 9':  { active: '#2563EB', bg: '#2563EB' },
    'Grade 10': { active: '#7C3AED', bg: '#7C3AED' },
    'Grade 11': { active: '#D97706', bg: '#D97706' },
    'Grade 12': { active: '#DB2777', bg: '#DB2777' },
    'JEE':      { active: '#0891B2', bg: '#0891B2' },
    'NEET':     { active: '#059669', bg: '#059669' },
    'KEAM':     { active: '#7C3AED', bg: '#7C3AED' },
    'ICSE':     { active: '#0E7490', bg: '#0E7490' },
    'IGCSE':    { active: '#0E7490', bg: '#0E7490' },
    'AS Level': { active: '#7C3AED', bg: '#7C3AED' },
    'A Level':  { active: '#B91C1C', bg: '#B91C1C' },
    'NIOS':     { active: '#14B8A6', bg: '#14B8A6' },
};

const Courses = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredCourses = coursesData.filter(course => {
        if (activeCategory === 'All')      return true;
        if (activeCategory === 'JEE')      return course.curriculum === 'JEE';
        if (activeCategory === 'NEET')     return course.curriculum === 'NEET';
        if (activeCategory === 'KEAM')     return course.curriculum === 'KEAM';
        if (activeCategory === 'ICSE')     return course.curriculum === 'ICSE';
        if (activeCategory === 'IGCSE')    return course.curriculum === 'IGCSE';
        if (activeCategory === 'AS Level') return course.curriculum === 'AS Level';
        if (activeCategory === 'A Level')  return course.curriculum === 'A Level';
        if (activeCategory === 'NIOS')     return course.curriculum === 'NIOS';
        return course.grade.includes(activeCategory.replace('Grade ', 'Grade '));
    });

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white min-h-screen"
        >
            <SEO />

            <PageHero
                title={["Our", "Courses"]}
                subtitle="Expert coaching for Class 8–12 Mathematics & Science, and comprehensive JEE & NEET preparation."
                badge="Our Programmes"
            />

            {/* Quick stats banner */}
            <div className="bg-[#0A1628] py-5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
                        {[
                            { icon: <GraduationCap size={16} />, label: `${coursesData.length} Programmes`, sub: 'Available' },
                            { icon: <Zap size={16} />,            label: 'CBSE · ICSE · IGCSE · JEE · NEET', sub: 'Curricula' },
                            { icon: <CheckCircle size={16} />,    label: 'Free Trial Class', sub: 'Book Today' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <div className="text-emerald-400">{item.icon}</div>
                                <div>
                                    <p className="text-sm font-bold text-white">{item.label}</p>
                                    <p className="text-xs text-gray-500">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="py-16" style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2.5 mb-14">
                        {categories.map(cat => {
                            const isActive = activeCategory === cat;
                            const c = categoryColorMap[cat] || categoryColorMap['All'];
                            return (
                                <motion.button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300"
                                    style={{
                                        backgroundColor: isActive ? c.bg : 'white',
                                        color: isActive ? 'white' : '#374151',
                                        border: `2px solid ${isActive ? c.bg : '#E5E7EB'}`,
                                        boxShadow: isActive ? `0 4px 14px ${c.bg}40` : 'none',
                                    }}
                                >
                                    {cat}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Course Count */}
                    <div className="text-center mb-8">
                        <p className="text-sm text-gray-500 font-medium">
                            Showing <span className="font-black text-[#0A1628] text-base">{filteredCourses.length}</span> programmes
                            {activeCategory !== 'All' && <> for <span className="font-black text-[#0A1628]">{activeCategory}</span></>}
                        </p>
                    </div>

                    {/* Course Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredCourses.map((course, i) => {
                                const grad = gradientMap[course.color] || 'linear-gradient(135deg, #059669 0%, #10B981 100%)';
                                return (
                                    <TiltCard key={course.id} className="rounded-3xl" intensity={8}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 24 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.06 }}
                                            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 h-full flex flex-col group hover:-translate-y-1"
                                        >
                                            {/* Gradient header */}
                                            <div className="p-7 relative overflow-hidden" style={{ background: grad }}>
                                                <div className="absolute -right-6 -top-6 w-28 h-28 bg-white/10 rounded-full" />
                                                <div className="absolute right-6 -bottom-10 w-20 h-20 bg-white/10 rounded-full" />
                                                <div className="relative z-10">
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-black px-3 py-1 rounded-full border border-white/20">
                                                            {course.curriculum}
                                                        </span>
                                                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-black px-3 py-1 rounded-full border border-white/20">
                                                            {course.grade}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl font-black text-white leading-snug">{course.title}</h3>
                                                </div>
                                            </div>

                                            {/* Body */}
                                            <div className="p-6 flex-grow flex flex-col">
                                                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                                                    {course.description}
                                                </p>

                                                {/* Info pills */}
                                                <div className="flex flex-wrap gap-2.5 text-xs mb-5">
                                                    <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full text-gray-600 font-semibold">
                                                        <BookOpen size={11} className="text-emerald-500" /> {course.mode}
                                                    </span>
                                                </div>

                                                {/* Features */}
                                                <ul className="space-y-1.5 mb-5">
                                                    {course.features.slice(0, 3).map((f, fi) => (
                                                        <li key={fi} className="flex items-center gap-2 text-xs text-gray-600">
                                                            <CheckCircle size={12} className="text-emerald-500 shrink-0" /> {f}
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* CTA */}
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                    <Link
                                                        to={`/courses/${course.id}`}
                                                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A1628] hover:text-emerald-600 transition-colors group/link"
                                                    >
                                                        View Details <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                                    </Link>
                                                    <Link
                                                        to="/contact"
                                                        className="text-xs font-bold bg-[#0A1628] text-white hover:bg-emerald-600 px-4 py-2 rounded-full transition-all duration-300 hover:shadow-md"
                                                    >
                                                        Enroll Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </TiltCard>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    {filteredCourses.length === 0 && (
                        <div className="text-center py-24">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <GraduationCap size={32} className="text-gray-400" />
                            </div>
                            <p className="text-gray-400 text-lg font-medium">No courses found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0f2245 100%)' }}>
                <div className="absolute inset-0 pointer-events-none opacity-25"
                    style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} />
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-20"
                    style={{ background: 'radial-gradient(circle, #059669 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <Zap size={12} />
                        Get Started Today
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-0 mb-5" style={{ letterSpacing: '-0.02em' }}>
                        Ready to Start Your Learning Journey?
                    </h2>
                    <p className="text-gray-400 text-lg mb-9 max-w-xl mx-auto leading-relaxed">
                        Join hundreds of students achieving academic excellence with Aura Academia. Book your free trial class today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
                        >
                            Book Free Trial <ArrowRight size={16} />
                        </Link>
                        <a
                            href="tel:+971585755286"
                            className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all duration-300"
                        >
                            +971 585755286
                        </a>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Courses;
