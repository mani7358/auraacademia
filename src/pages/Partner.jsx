import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Target, Sparkles, BookOpen, Heart, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
};

const Partner = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.timeline-item').forEach((item, i) => {
                gsap.fromTo(item,
                    { opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 },
                    {
                        scrollTrigger: { trigger: item, start: 'top 85%', once: true },
                        opacity: 1, x: 0, y: 0, duration: 0.8, ease: 'power2.out'
                    }
                );
            });
            gsap.utils.toArray('.fade-up-section').forEach(section => {
                gsap.fromTo(section,
                    { y: 50, opacity: 0 },
                    { scrollTrigger: { trigger: section, start: 'top 80%', once: true }, y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
                );
            });
        }, scrollRef);
        return () => ctx.revert();
    }, []);

    const milestones = [
        { year: '2018', title: 'The Inception', desc: 'Aura Academia opens its doors in Abushagara with 3 teachers and 15 students focusing on CBSE Science.', color: '#059669', pos: 'left' },
        { year: '2019', title: 'Curriculum Expansion', desc: 'Introduced British Curriculum (IGCSE & A-Levels) tutoring due to overwhelming parental demand.', color: '#2563EB', pos: 'right' },
        { year: '2020', title: 'Digital Resilience', desc: 'Successfully navigated the pandemic by transitioning to a hybrid model that maintained our high pass rates.', color: '#D97706', pos: 'left' },
        { year: '2021', title: 'The First 100', desc: 'Crossed the milestone of 100 active students and achieved our first 100% board topper record.', color: '#7C3AED', pos: 'right' },
        { year: '2023', title: 'Psychometric Integration', desc: 'Launched our dedicated psychometric and career counselling wing to provide holistic student guidance.', color: '#0891B2', pos: 'left' },
        { year: '2024', title: 'A New Era', desc: 'Serving 500+ students with state-of-the-art facilities, remaining steadfast in our commitment to personalised excellence.', color: '#DB2777', pos: 'right' },
    ];

    const faculty = [
        { name: 'Ishvarya', role: 'Medical Sciences & Chemistry', exp: '15+', bio: 'Expert in Medical Sciences and Chemistry. Her concept-driven approach has guided countless students to NEET and board exam success.', accent: '#2563EB', gradFrom: '#2563EB', gradTo: '#3B82F6' },
        { name: 'Usha', role: 'Administrator & Student Counsellor', exp: '16+', bio: 'The heart of Aura Academia — guiding every student and family through their academic journey with care and expertise.', accent: '#D97706', gradFrom: '#D97706', gradTo: '#F59E0B' },
        { name: 'Shaik Shafee', role: 'Physics', exp: '15+', bio: 'Seasoned Physics educator renowned for turning abstract concepts into clear, exam-winning strategies for JEE, NEET, and board exams.', accent: '#7C3AED', gradFrom: '#7C3AED', gradTo: '#A78BFA' },
        { name: 'Raini Sreekanth', role: 'Mathematics', exp: '15+', bio: 'Highly accomplished Mathematics educator with 15+ years of experience, guiding students through CBSE, JEE, and A-Level Mathematics.', accent: '#059669', gradFrom: '#059669', gradTo: '#10B981' },
        { name: 'Meena', role: 'Science', exp: '10+', bio: 'Enthusiastic Science educator known for engaging, interactive methods that build strong foundational science understanding in students.', accent: '#0891B2', gradFrom: '#0891B2', gradTo: '#22D3EE' },
    ];

    const coreValues = [
        { icon: <Trophy size={26} />, title: 'Excellence', desc: 'We never settle for good enough. We strive for mastery in every subject taught.', gradFrom: '#0A1628', gradTo: '#162d55' },
        { icon: <Heart size={26} />, title: 'Compassion', desc: 'We recognise that every student struggles differently. Patience is our priority.', gradFrom: '#059669', gradTo: '#10B981' },
        { icon: <BookOpen size={26} />, title: 'Integrity', desc: 'Honest feedback to parents and genuine commitment to student improvement.', gradFrom: '#2563EB', gradTo: '#3B82F6' },
        { icon: <Sparkles size={26} />, title: 'Innovation', desc: 'Using the latest ed-tech tools and data analysis to track and boost performance.', gradFrom: '#7C3AED', gradTo: '#A78BFA' },
    ];

    return (
        <motion.div
            initial="initial" animate="in" exit="out"
            variants={pageVariants} transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
            className="bg-white"
            ref={scrollRef}
        >
            <SEO
                title="About Aura Academia - Our Story & Mission | Sharjah Tuition"
                description="Discover how Aura Academia became Sharjah's premier tuition centre. Learn about our 10+ years of excellence, expert faculty, and commitment to student success."
                keywords="about aura academia, sharjah tuition centre history, expert faculty UAE, educational excellence"
            />

            <PageHero
                title={["Our Story,", "Your Success"]}
                subtitle="Discover how a small idea to provide premium tutoring in Sharjah blossomed into a proud tradition of academic excellence."
                badge="Our Story"
            />

            {/* ── Our Story ─────────────────────────────────── */}
            <section className="py-20 bg-white fade-up-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Text side */}
                        <div className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-5">
                                <span className="w-6 h-px bg-emerald-500" />
                                The Beginning
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] mb-6" style={{ letterSpacing: '-0.02em' }}>
                                Founded on a Simple Premise
                            </h2>
                            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Aura Academia was founded in 2018 by Ishvarya Ramasubramanian, a passionate educator with over 15 years of experience in Medical Science and Chemistry. Driven by a vision to transform the way students learn, she recognized a gap in the tutoring landscape, where many coaching centres relied heavily on rote learning instead of understanding each student's unique learning style and potential.
                                </p>
                                <p>
                                    It started with just 15 students in a small facility in Abushagara, Sharjah. From the very beginning, the academy focused on personalized learning, concept-based teaching, exam-oriented strategies, and building genuine confidence in every student. This student-first approach laid the foundation for what Aura Academia has become today.
                                </p>
                                {/* Pull quote */}
                                <div className="relative pl-5 border-l-4 border-emerald-500 my-6 py-2">
                                    <Quote size={20} className="text-emerald-500 mb-2 opacity-60" />
                                    <p className="text-[#0A1628] font-bold text-xl leading-snug italic">
                                        "Today, over <span className="text-emerald-600 not-italic">2,000 students</span> have trusted Aura Academia."
                                    </p>
                                </div>
                                <p>
                                    Despite our growth, we maintain our founding principle: absolute dedication to every single student's academic journey.
                                </p>
                            </div>
                            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 bg-[#0A1628] hover:bg-emerald-600 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 group shadow-lg shadow-gray-900/20">
                                Book a Free Trial <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Stat card side */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                {/* Main big card */}
                                <div className="bg-[#0A1628] rounded-3xl p-12 text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                                        style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.2) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                                    <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full pointer-events-none"
                                        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
                                    <div className="relative z-10">
                                        <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-3">Since 2018</p>
                                        <h2 className="text-8xl md:text-9xl font-black text-white mb-2 leading-none">7+</h2>
                                        <p className="text-xl font-bold text-gray-400 mb-8">Years of Excellence</p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {['CBSE', 'ICSE', 'IGCSE', 'IB Diploma', 'A-Levels', 'JEE', 'NEET'].map((tag, i) => (
                                                <span key={i} className="px-4 py-2 bg-white/10 border border-white/15 rounded-full text-sm font-bold text-gray-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Floating stat cards */}
                                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                                    <p className="text-2xl font-black text-[#0A1628]">2,000+</p>
                                    <p className="text-xs text-gray-500 font-medium">Students Mentored</p>
                                </div>
                                <div className="absolute -top-5 -right-5 bg-emerald-500 rounded-2xl p-4 shadow-xl">
                                    <p className="text-2xl font-black text-white">100%</p>
                                    <p className="text-xs text-white/80 font-medium">Pass Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mission & Vision ─────────────────────────── */}
            <section className="py-16 fade-up-section" style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"
                                style={{ background: 'linear-gradient(135deg, rgba(5,150,105,0.03) 0%, transparent 100%)' }} />
                            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform">
                                <Target size={26} />
                            </div>
                            <h3 className="text-xl font-black text-[#0A1628] mb-3">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To illuminate the academic path for every student by providing exceptional, personalised tutoring that combines proven pedagogy with innovative, data-driven insights.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"
                                style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.03) 0%, transparent 100%)' }} />
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5 group-hover:scale-110 transition-transform">
                                <Sparkles size={26} />
                            </div>
                            <h3 className="text-xl font-black text-[#0A1628] mb-3">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be the most trusted educational partner in the UAE, recognised for nurturing well-rounded achievers who are academically prepared and confident in their future endeavours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Timeline ─────────────────────────────────── */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Our Journey"
                        title="Our Journey So Far"
                        subtitle="How we grew from a small room to Sharjah's premier tuition centre."
                    />

                    <div className="relative mt-16 max-w-4xl mx-auto">
                        {/* Center line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-100 md:-translate-x-px" />
                        {/* Gradient line overlay */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
                            style={{ background: 'linear-gradient(to bottom, #059669, #2563EB, #7C3AED, #D97706, #0891B2, #DB2777)' }} />

                        <div className="space-y-10">
                            {milestones.map((item, i) => (
                                <div key={i} className={`timeline-item flex flex-col md:flex-row items-center gap-6 ${item.pos === 'left' ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={`w-full md:w-1/2 ${item.pos === 'left' ? 'md:pl-10' : 'md:pr-10'} pl-10`}>
                                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                            <span
                                                className="text-3xl font-black block mb-2"
                                                style={{ color: item.color }}
                                            >
                                                {item.year}
                                            </span>
                                            <h4 className="text-lg font-black text-[#0A1628] mb-2">{item.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                    {/* Dot */}
                                    <div
                                        className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        <div className="w-2.5 h-2.5 rounded-full bg-white" />
                                    </div>
                                    <div className="hidden md:block w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Faculty ──────────────────────────────────── */}
            <section className="py-20 fade-up-section" style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Expert Faculty"
                        title="The Minds Behind the Magic"
                        subtitle="Meet our department heads who dedicate their expertise to making complex concepts simple."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
                        {faculty.map((staff, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 group"
                            >
                                {/* Gradient header */}
                                <div className="h-28 relative overflow-hidden"
                                    style={{ background: `linear-gradient(135deg, ${staff.gradFrom} 0%, ${staff.gradTo} 100%)` }}>
                                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full" />
                                    <div className="absolute -left-4 -bottom-8 w-20 h-20 bg-white/10 rounded-full" />
                                    {/* Avatar */}
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                                        <div
                                            className="w-16 h-16 rounded-2xl border-4 border-white shadow-xl flex items-center justify-center text-white text-2xl font-black"
                                            style={{ backgroundColor: staff.accent }}
                                        >
                                            {staff.name.charAt(0)}
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-12 p-7 text-center">
                                    <h4 className="text-xl font-black text-[#0A1628] mb-1">{staff.name}</h4>
                                    <p className="text-sm font-bold mb-2" style={{ color: staff.accent }}>{staff.role}</p>
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                                        style={{ backgroundColor: `${staff.accent}12`, color: staff.accent }}>
                                        {staff.exp} Yrs Experience
                                    </span>
                                    <p className="text-gray-500 text-sm leading-relaxed">{staff.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Core Values ──────────────────────────────── */}
            <section className="py-20 bg-white fade-up-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader label="Core Values" title="What Drives Us Forward" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
                        {coreValues.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center p-8 rounded-3xl text-white shadow-xl hover:-translate-y-2 transition-all duration-400 relative overflow-hidden group"
                                style={{ background: `linear-gradient(135deg, ${value.gradFrom} 0%, ${value.gradTo} 100%)` }}
                            >
                                <div className="absolute inset-0 pointer-events-none opacity-10"
                                    style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform relative z-10">
                                    {value.icon}
                                </div>
                                <h4 className="text-lg font-black text-white mb-2 relative z-10">{value.title}</h4>
                                <p className="text-white/80 text-sm leading-relaxed relative z-10">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Partner;
