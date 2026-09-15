import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Clock, Send, CheckCircle, Facebook, Instagram, Youtube, Linkedin, MapPin, Zap, AlertCircle } from 'lucide-react';
import { AnimatedPhone, AnimatedMail, AnimatedMapPin } from '../components/AnimatedIcons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.fade-up-section').forEach(el => {
                gsap.fromTo(el, { y: 40, opacity: 0 }, {
                    scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
                    y: 0, opacity: 1, duration: 0.7, ease: 'power2.out'
                });
            });
        });
        return () => ctx.revert();
    }, []);

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsError(false);
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    course: formData.course,
                    message: formData.message,
                    to_email: 'aurafirstscience@gmail.com',
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setIsSuccess(true);
            setFormData({ name: '', email: '', phone: '', course: '', message: '' });
            setTimeout(() => setIsSuccess(false), 6000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setIsError(true);
            setTimeout(() => setIsError(false), 6000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-[#0A1628] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-sm font-medium";

    const contactItems = [
        {
            icon: <AnimatedMapPin size={18} className="text-emerald-400" />,
            label: 'Our Centres',
            content: (
                <div className="text-gray-400 text-sm leading-relaxed mt-1 space-y-3">
                    <div>
                        <p className="text-emerald-400 font-bold text-xs mb-0.5">Centre 1 — Al-Nahda</p>
                        <p>Tower A, 803, Al Rayyan Complex,<br />Al-Nahda, Sharjah, UAE</p>
                    </div>
                    <div>
                        <p className="text-emerald-400 font-bold text-xs mb-0.5">Centre 2 — Abushagara</p>
                        <p>16, First Floor, City Tower,<br />Near Viva Super Market,<br />Abushagara, Sharjah, UAE</p>
                    </div>
                </div>
            ),
            bg: '#059669',
        },
        {
            icon: <AnimatedPhone size={18} className="text-emerald-400" />,
            label: 'Call Us',
            content: (
                <div className="mt-1 space-y-1">
                    <a href="tel:+971585755286" className="block text-gray-400 hover:text-white text-sm transition-colors">+971 585755286</a>
                    <a href="tel:+97165693738" className="block text-gray-400 hover:text-white text-sm transition-colors">+971 65693738</a>
                </div>
            ),
            bg: '#2563EB',
        },
        {
            icon: <AnimatedMail size={18} className="text-emerald-400" />,
            label: 'Email Us',
            content: <a href="mailto:aurafirstscience@gmail.com" className="block text-gray-400 hover:text-white text-sm transition-colors mt-1">aurafirstscience@gmail.com</a>,
            bg: '#7C3AED',
        },
        {
            icon: <Clock size={18} className="text-emerald-400" />,
            label: 'Working Hours',
            content: <p className="text-gray-400 text-sm mt-1">Mon – Sun: 3:30 PM – 9:00 PM</p>,
            bg: '#D97706',
        },
    ];

    return (
        <motion.div
            initial="initial" animate="in" exit="out"
            variants={pageVariants} transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
            className="bg-white min-h-screen"
        >
            <SEO />

            <PageHero
                title={["Get In", "Touch"]}
                subtitle="Have questions about our programmes, fees, or schedules? Our admissions team is here to help."
                badge="Reach Out"
            />

            <section className="py-20 bg-white fade-up-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Left: Info Panel */}
                        <div className="w-full lg:w-5/12">
                            <div
                                className="rounded-3xl p-8 md:p-10 h-full text-white relative overflow-hidden"
                                style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0f2245 100%)' }}
                            >
                                {/* BG decoration */}
                                <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                                    style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.15) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                                <div className="absolute inset-0 pointer-events-none opacity-15"
                                    style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />

                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5">
                                        <Zap size={11} />
                                        Reach Out
                                    </div>
                                    <h3 className="text-2xl font-black mb-2">Contact Information</h3>
                                    <p className="text-gray-400 text-sm mb-8">Reach out through any of the channels below.</p>

                                    <div className="space-y-6 mb-8">
                                        {contactItems.map((item, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div
                                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                                                    style={{ backgroundColor: `${item.bg}30` }}
                                                >
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-white text-sm">{item.label}</h4>
                                                    {item.content}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* WhatsApp */}
                                    <a
                                        href="https://wa.me/971585755286"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5c] text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 w-full justify-center mb-8 shadow-lg shadow-[#25D366]/20 hover:-translate-y-0.5"
                                    >
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.083.534 4.043 1.468 5.75L0 24l6.395-1.676A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.882 9.882 0 01-5.038-1.382l-.361-.214-3.737.979 1.005-3.643-.235-.374A9.861 9.861 0 012.118 12C2.118 6.51 6.51 2.118 12 2.118c5.49 0 9.882 4.392 9.882 9.882 0 5.49-4.392 9.882-9.882 9.882z" /></svg>
                                        Chat on WhatsApp
                                    </a>

                                    <div className="border-t border-white/10 pt-6">
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Follow Us</p>
                                        <div className="flex gap-2">
                                            {[
                                                { icon: <Facebook size={15} />, href: 'https://www.facebook.com/auraacademia', label: 'Facebook' },
                                                { icon: <Instagram size={15} />, href: 'https://www.instagram.com/auraacademia', label: 'Instagram' },
                                                { icon: <Youtube size={15} />, href: 'https://www.youtube.com/@auraacademia', label: 'YouTube' },
                                                { icon: <Linkedin size={15} />, href: 'https://www.linkedin.com/company/auraacademia', label: 'LinkedIn' },
                                            ].map((s, i) => (
                                                <a
                                                    key={i} href={s.href} aria-label={s.label}
                                                    className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
                                                >
                                                    {s.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="w-full lg:w-7/12">
                            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm h-full">
                                <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-4">
                                    <Zap size={11} />
                                    Free Trial
                                </div>
                                <h3 className="text-2xl font-black text-[#0A1628] mb-1">Book Your Free Trial</h3>
                                <p className="text-gray-500 text-sm mb-8">Fill out the form and our team will reach out within 24 hours.</p>

                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center h-64 text-center p-8 bg-emerald-50 rounded-2xl border border-emerald-100"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                                            <CheckCircle size={32} className="text-emerald-600" />
                                        </div>
                                        <h4 className="text-xl font-black text-[#0A1628] mb-2">Message Sent!</h4>
                                        <p className="text-gray-500 text-sm max-w-xs">
                                            Thank you for reaching out. Our team will contact you shortly to confirm your free trial.
                                        </p>
                                    </motion.div>
                                ) : isError ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center h-40 text-center p-8 bg-red-50 rounded-2xl border border-red-100 mb-6"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                                            <AlertCircle size={24} className="text-red-500" />
                                        </div>
                                        <h4 className="text-base font-black text-[#0A1628] mb-1">Sending Failed</h4>
                                        <p className="text-gray-500 text-xs max-w-xs">
                                            Something went wrong. Please try WhatsApp or call us directly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="name" className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-2">Full Name *</label>
                                                <input type="text" id="name" name="name" required placeholder="Your full name" value={formData.name} onChange={handleChange} className={inputClass} />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-2">Phone Number *</label>
                                                <input type="tel" id="phone" name="phone" required placeholder="+971 5X XXX XXXX" value={formData.phone} onChange={handleChange} className={inputClass} />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="email" className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-2">Email Address *</label>
                                                <input type="email" id="email" name="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange} className={inputClass} />
                                            </div>
                                            <div>
                                                <label htmlFor="course" className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-2">Programme of Interest *</label>
                                                <select id="course" name="course" required value={formData.course} onChange={handleChange} className={inputClass + ' appearance-none cursor-pointer'}>
                                                    <option value="" disabled>Select a programme</option>
                                                    <optgroup label="CBSE">
                                                        <option value="CBSE Grade 8">CBSE — Grade 8</option>
                                                        <option value="CBSE Grade 9">CBSE — Grade 9</option>
                                                        <option value="CBSE Grade 10">CBSE — Grade 10</option>
                                                        <option value="CBSE Grade 11">CBSE — Grade 11</option>
                                                        <option value="CBSE Grade 12">CBSE — Grade 12</option>
                                                    </optgroup>
                                                    <optgroup label="IGCSE O Level">
                                                        <option value="IGCSE O Level Mathematics">IGCSE O Level — Mathematics</option>
                                                        <option value="IGCSE O Level Sciences">IGCSE O Level — Sciences</option>
                                                    </optgroup>
                                                    <optgroup label="AS Level">
                                                        <option value="AS Level Mathematics">AS Level — Mathematics</option>
                                                        <option value="AS Level Sciences">AS Level — Sciences</option>
                                                    </optgroup>
                                                    <optgroup label="A Level">
                                                        <option value="A Level Mathematics">A Level — Mathematics</option>
                                                        <option value="A Level Sciences">A Level — Sciences</option>
                                                    </optgroup>
                                                    <optgroup label="Competitive Exams">
                                                        <option value="JEE Preparation">JEE Main &amp; Advanced</option>
                                                        <option value="NEET Preparation">NEET Preparation</option>
                                                        <option value="NEET Crash Course">NEET Crash Course</option>
                                                        <option value="KEAM Preparation">KEAM Preparation</option>
                                                    </optgroup>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-xs font-black text-gray-600 uppercase tracking-wider mb-2">Message (Optional)</label>
                                            <textarea
                                                id="message" name="message" rows="4"
                                                placeholder="Tell us about your child's grade, specific requirements, or any questions..."
                                                value={formData.message} onChange={handleChange}
                                                className={inputClass + ' resize-none'}
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-emerald-600 text-white px-9 py-4 rounded-xl font-bold text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed group shadow-lg shadow-gray-900/20 hover:shadow-emerald-600/30"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
                                                </>
                                            )}
                                        </motion.button>
                                        <p className="text-xs text-gray-400">Your information is kept private and never shared.</p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Maps — two branches */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                            <div className="bg-emerald-50 border-b border-emerald-100 px-5 py-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                <p className="text-xs font-black text-emerald-700 uppercase tracking-wider">Centre 1 — Al-Nahda</p>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1847.835013249702!2d55.380821044959724!3d25.3011328360531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c0cec3dfe05%3A0xd967ded089940577!2sAl%20Rayyan%20Complex%20Home!5e0!3m2!1sen!2sus!4v1773833337672!5m2!1sen!2sus"
                                width="100%" height="320"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Aura Academia Centre 1 — Al-Nahda"
                            />
                        </div>
                        <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                            <div className="bg-blue-50 border-b border-blue-100 px-5 py-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                <p className="text-xs font-black text-blue-700 uppercase tracking-wider">Centre 2 — Abushagara</p>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.1162638485325!2d55.39135117520423!3d25.33387937762326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bdd11cd4525%3A0xc67fc9ee1015df8d!2sCity%20Tower!5e0!3m2!1sen!2sus!4v1773833083480!5m2!1sen!2sus"
                                width="100%" height="320"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Aura Academia Centre 2 — Abushagara"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
