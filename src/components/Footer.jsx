import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Linkedin, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '../assets/Aura-logo.png';
import { LEGAL_NAME, LEGAL_NAME_AR, LICENSE_NO } from '../data/seo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Our Courses', path: '/courses' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'Partners', path: '/partners' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Psychometric Test', path: '/psychometric' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const courseLinks = [
        { name: 'CBSE Class 8 & 9', path: '/courses' },
        { name: 'CBSE Class 10 Boards', path: '/courses' },
        { name: 'CBSE Class 11 & 12', path: '/courses' },
        { name: 'JEE Preparation', path: '/courses/jee-preparation' },
        { name: 'NEET Preparation', path: '/courses/neet-preparation' },
        { name: 'KEAM Preparation', path: '/courses/keam' },
        { name: 'NEET Crash Course', path: '/courses/neet-crash-course' },
        { name: 'IGCSE & A-Levels', path: '/courses' },
    ];

    const socials = [
        { icon: <Facebook size={16} />, href: '#', label: 'Facebook' },
        { icon: <Instagram size={16} />, href: '#', label: 'Instagram' },
        { icon: <Youtube size={16} />, href: '#', label: 'YouTube' },
        { icon: <Linkedin size={16} />, href: '#', label: 'LinkedIn' },
    ];

    return (
        <footer className="relative" style={{ background: 'linear-gradient(180deg, #060E1D 0%, #0A1628 100%)' }}>
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #059669 0%, #3B82F6 50%, #7C3AED 100%)' }} />

            <div className="border-b border-white/8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Start Today</p>
                            <h3 className="text-xl md:text-2xl font-black text-white mb-1">
                                Start Your Journey Today
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Book a free trial class and experience the Aura difference firsthand.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <Link to="/contact">
                                <motion.div
                                    whileHover={{ scale: 1.03, y: -1 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 whitespace-nowrap"
                                >
                                    Book Free Trial <ArrowRight size={14} />
                                </motion.div>
                            </Link>
                            <Link to="/courses">
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center justify-center border border-white/15 text-white hover:bg-white/8 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap"
                                >
                                    Explore Courses
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div className="col-span-1">
                        <Link to="/" className="inline-flex items-center gap-2 mb-5">
                            <img
                                src={logo}
                                alt="Aura Academia"
                                className="h-9 w-auto object-contain"
                                style={{ mixBlendMode: 'lighten' }}
                            />
                            <span className="font-black text-white text-base tracking-tight">AURA ACADEMIA</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Sharjah's premier tuition centre, empowering students to achieve academic excellence through personalised learning since 2018.
                        </p>
                        <p className="text-gray-500 text-xs leading-relaxed mb-6 -mt-3">
                            Operated by <span className="text-gray-300 font-semibold">{LEGAL_NAME}</span>
                            <span dir="rtl" lang="ar" className="block w-fit text-gray-400 text-sm my-0.5">{LEGAL_NAME_AR}</span>
                            Sharjah SEDD Licence No. {LICENSE_NO}
                        </p>

                        <div className="flex gap-2">
                            {socials.map((s, i) => (
                                
                                    <a
                                    key={i}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-300"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-widest mb-5">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-2 group font-medium"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-emerald-500 transition-all duration-300 shrink-0" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-widest mb-5">Our Programmes</h4>
                        <ul className="space-y-2.5">
                            {courseLinks.map((course, i) => (
                                <li key={i}>
                                    <Link
                                        to={course.path}
                                        className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-2 group font-medium"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-emerald-500 transition-all duration-300 shrink-0" />
                                        {course.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-widest mb-5">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <div className="text-gray-500 text-sm leading-relaxed space-y-2">
                                    <p><span className="text-emerald-500 font-bold text-xs">Centre 1</span><br />Tower A, 803, Al Rayyan Complex,<br />Al-Nahda, Sharjah, UAE</p>
                                    <p><span className="text-emerald-500 font-bold text-xs">Centre 2</span><br />16, First Floor, City Tower,<br />Near Viva Super Market,<br />Abushagara, Sharjah, UAE</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <div>
                                    <a href="tel:+971585755286" className="block text-gray-500 hover:text-white text-sm transition-colors font-medium">+971 585755286</a>
                                    <a href="tel:+97165693738" className="block text-gray-500 hover:text-white text-sm transition-colors font-medium">+971 65693738</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <a href="mailto:aurafirstscience@gmail.com" className="text-gray-500 hover:text-white text-sm transition-colors font-medium">
                                    aurafirstscience@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <p className="text-gray-500 text-sm">
                                    Mon–Sun: 3:30 PM – 9:00 PM
                                </p>
                            </li>

                            <li>
                                
                                    <a
                                    href="https://wa.me/971585755286"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] hover:bg-[#25D366] hover:text-white px-4 py-2 rounded-full text-xs font-bold transition-all duration-300"
                                >
                                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.083.534 4.043 1.468 5.75L0 24l6.395-1.676A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.882 9.882 0 01-5.038-1.382l-.361-.214-3.737.979 1.005-3.643-.235-.374A9.861 9.861 0 012.118 12C2.118 6.51 6.51 2.118 12 2.118c5.49 0 9.882 4.392 9.882 9.882 0 5.49-4.392 9.882-9.882 9.882z" />
                                    </svg>
                                    WhatsApp Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-gray-600 text-xs">
                        &copy; {currentYear} Aura Academia, {LEGAL_NAME}. All rights reserved. Sharjah, UAE. Licence No. {LICENSE_NO}. Designed and Developed by{' '}
                        <a href="https://bluetickmedia.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            Bluetick Media
                        </a>
                    </p>
                    <div className="flex gap-5 text-xs text-gray-600">
                        <a href="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</a>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
