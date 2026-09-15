import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Award, Target, Sparkles, GraduationCap, ArrowRight, Clock, Users, Briefcase } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
};

const Partners = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.fade-up-section').forEach(section => {
                gsap.fromTo(section,
                    { y: 50, opacity: 0 },
                    { scrollTrigger: { trigger: section, start: 'top 80%', once: true }, y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
                );
            });
        }, scrollRef);
        return () => ctx.revert();
    }, []);

    const leadership = [
        {
            name: 'B. Jaikumar ChristhuRajan',
            qualification: 'B.E., MBA (UK)',
            role: 'Chairman, Jeppiaar Academy of Psychology and Research',
            bio: 'A visionary second-generation entrepreneur and Chairman & Managing Director of the Jeppiaar Group. With a strong academic foundation in Engineering and an MBA from the UK, he brings strategic leadership and a people-centric approach to all Jeppiaar institutions. An educationalist since 2010, he has mentored hundreds of students across diverse disciplines and is widely respected for his community service and youth development initiatives.',
            accent: '#0A1628',
            gradFrom: '#0A1628',
            gradTo: '#162d55',
        },
        {
            name: 'Dr. Saranya Jaikumar',
            qualification: 'B.Tech., M.Sc., Ph.D.',
            role: 'Founder & Director, Jeppiaar Academy of Psychology and Research',
            bio: 'One of India\'s first Doctorates in Educational Psychology, Dr. Saranya has tutored and mentored more than 7,000 psychology students across the globe. She serves as an Independent Expert to the Ministry of Women & Child Development, Government of India, and is a former Member of the Tamil Nadu Commission for Protection of Child Rights, widely acknowledged as a leading advocate for child safety and mental health education.',
            accent: '#059669',
            gradFrom: '#059669',
            gradTo: '#10B981',
        },
    ];

    const programHighlights = [
        { icon: <Clock size={22} />, label: 'Duration', value: '6 Months / 120 Hours' },
        { icon: <Users size={22} />, label: 'Format', value: 'Hybrid — Offline & Online' },
        { icon: <GraduationCap size={22} />, label: 'Entry', value: 'Bachelor Degree, Any Discipline' },
        { icon: <Briefcase size={22} />, label: 'Batches', value: 'Weekday & Weekend Available' },
    ];

    const careerPaths = [
        'Child Counsellor',
        'Educational Counsellor',
        'Rehabilitation & Behavioural Counsellor',
        'School Counsellor',
    ];

    return (
        <motion.div
            initial="initial" animate="in" exit="out"
            variants={pageVariants} transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
            className="bg-white"
            ref={scrollRef}
        >
            <SEO
                title="Our Partners - Aura Academia | Jeppiaar Academy of Psychology and Research"
                description="Aura Academia proudly partners with Jeppiaar Academy of Psychology and Research to bring the Diploma in Counselling and Child Psychology to Sharjah, UAE."
                keywords="aura academia partners, jeppiaar academy, counselling psychology diploma sharjah, child psychology course UAE"
            />

            <PageHero
                title={["Our Trusted", "Partnerships"]}
                subtitle="Aura Academia is proud to collaborate with institutions that share our commitment to excellence in education."
                badge="Our Partners"
            />

            {/* ── Partner Introduction ─────────────────────── */}
            <section className="py-20 bg-white fade-up-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-5">
                                <span className="w-6 h-px bg-emerald-500" />
                                In Collaboration With
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] mb-6" style={{ letterSpacing: '-0.02em' }}>
                                Jeppiaar Academy of Psychology and Research
                            </h2>
                            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    The Jeppiaar Group of Institutions is a well-established educational group with over three decades of excellence in higher education, consistently providing quality, value-based, and future-oriented education across Tamil Nadu.
                                </p>
                                <p>
                                    Within this ecosystem, the Jeppiaar Academy of Psychology and Research was established to bridge the gap between academic learning in psychology and real-world application — offering advanced, practice-focused programmes aligned with global mental health standards.
                                </p>
                                <p>
                                    Aura Academia is honoured to bring this expertise to Sharjah, UAE, through a dedicated collaboration that combines Jeppiaar's academic depth with our on-ground teaching excellence.
                                </p>
                            </div>
                            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 bg-[#0A1628] hover:bg-emerald-600 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 group shadow-lg shadow-gray-900/20">
                                Enquire About the Programme <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="bg-[#0A1628] rounded-3xl p-10 text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                                    style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.2) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                                <div className="relative z-10">
                                    <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-3">Joint Programme</p>
                                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-snug">
                                        Diploma in Counselling and Child Psychology
                                    </h3>
                                    <p className="text-gray-400 mb-6">Offered in Sharjah, UAE at Aura Academia</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {['Counselling Psychology', 'Child Development', 'Ethical Practice'].map((tag, i) => (
                                            <span key={i} className="px-4 py-2 bg-white/10 border border-white/15 rounded-full text-sm font-bold text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Leadership ─────────────────────────────────── */}
            <section className="py-20 fade-up-section" style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        label="Leadership"
                        title="The Minds Behind the Partnership"
                        subtitle="Meet the leadership of Jeppiaar Academy of Psychology and Research."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {leadership.map((person, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400"
                            >
                                <div className="h-3" style={{ background: `linear-gradient(135deg, ${person.gradFrom} 0%, ${person.gradTo} 100%)` }} />
                                <div className="p-8">
                                    <h4 className="text-xl font-black text-[#0A1628] mb-1">{person.name}</h4>
                                    <p className="text-sm text-gray-400 font-semibold mb-1">{person.qualification}</p>
                                    <p className="text-sm font-bold mb-4" style={{ color: person.accent }}>{person.role}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{person.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Vision & Mission ─────────────────────────── */}
            <section className="py-20 bg-white fade-up-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-110 transition-transform">
                                <Target size={26} />
                            </div>
                            <h3 className="text-xl font-black text-[#0A1628] mb-3">Their Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be India's most trusted and innovative centre of excellence in psychology, setting national standards in education, research, and practice, transforming mental health across communities through ethical leadership and lifelong learning.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5 group-hover:scale-110 transition-transform">
                                <Sparkles size={26} />
                            </div>
                            <h3 className="text-xl font-black text-[#0A1628] mb-3">Their Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To deliver transformative learning experiences in counselling psychology, nurturing skilled professionals dedicated to holistic wellbeing, and advancing accessible mental health care through research and inclusive outreach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Programme Details ─────────────────────────── */}
            <section className="py-20 fade-up-section" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0f2245 100%)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5">
                            <Award size={12} />
                            Joint Diploma Programme
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                            Diploma in Counselling and Child Psychology
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            A strong foundation in counselling theories and skills, with emphasis on child and adolescent populations — delivered right here at Aura Academia, Sharjah.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
                        {programHighlights.map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-3">
                                    {item.icon}
                                </div>
                                <p className="text-white font-black text-sm mb-1">{item.value}</p>
                                <p className="text-gray-500 text-xs">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h4 className="text-white font-black text-lg mb-4">Skill-Based Training Includes</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>• Learning Disabilities</li>
                                <li>• Family & Child Counselling</li>
                                <li>• Handling Children with Special Needs</li>
                                <li>• School Counselling</li>
                                <li>• Effective Parenting</li>
                            </ul>
                        </div>
                        <div className="bg-emerald-500 rounded-2xl p-8">
                            <h4 className="text-white font-black text-lg mb-4">Career Opportunities</h4>
                            <ul className="space-y-2 text-white/90 text-sm">
                                {careerPaths.map((c, i) => (
                                    <li key={i}>• {c}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────────────── */}
            <section className="py-20 bg-white fade-up-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)' }}>
                        <h2 className="text-2xl md:text-3xl font-black text-[#0A1628] mb-4">Interested in the Diploma Programme?</h2>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">Get in touch to learn more about admissions, batch timings, and how to enrol.</p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
                        >
                            Contact Us <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Partners;
