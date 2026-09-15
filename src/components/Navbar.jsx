import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, ChevronRight, GraduationCap, BookOpen, FlaskConical, Calculator, Microscope, UserCog, Users, LogIn } from 'lucide-react';

import logo from '../assets/Aura-logo.png';
import logoText from '../assets/Aura-logo-text.png';

const courseCategories = [
    { label: 'CBSE', name: 'CBSE (Grade 8–12)', icon: <BookOpen size={13} />, color: '#059669', desc: 'Maths & Science, Grade 8–12' },
    { label: 'ICSE', name: 'ICSE / ISC (Grade 8–12)', icon: <GraduationCap size={13} />, color: '#0E7490', desc: 'ICSE & ISC Maths & Science, Grade 8–12' },
    { label: 'IGCSE', name: 'IGCSE O Level', icon: <GraduationCap size={13} />, color: '#0E7490', desc: 'Cambridge O Level Maths & Sciences' },
    { label: 'AS Level', name: 'AS Level', icon: <Calculator size={13} />, color: '#7C3AED', desc: 'Cambridge AS Maths & Sciences' },
    { label: 'A Level', name: 'A Level', icon: <FlaskConical size={13} />, color: '#B91C1C', desc: 'Cambridge A Level Maths & Sciences' },
    { label: 'JEE', name: 'JEE Main & Advanced', icon: <Calculator size={13} />, color: '#0891B2', desc: 'Engineering entrance preparation' },
    { label: 'NEET', name: 'NEET', icon: <Microscope size={13} />, color: '#DB2777', desc: 'Medical entrance preparation' },
];

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses', hasDropdown: true },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Partners', path: '/partners' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Psychometric Test', path: '/psychometric' },
    { name: 'Contact', path: '/contact' },
];

const loginOptions = [
    { name: 'Staffs', href: 'https://classpro.in/signin', icon: <UserCog size={14} />, desc: 'Access management portal' },
    { name: 'Students', href: 'https://auraacademia.classpro.in/people/sign_in', icon: <Users size={14} />, desc: 'View progress & attendance' },
];

const mobileNavIcons = {
    'Home': '🏠',
    'About': '📖',
    'Courses': '🎓',
    'Faculty': '👩‍🏫',
    'Partners': '🤝',
    'Gallery': '🖼️',
    'Testimonials': '⭐',
    'Psychometric Test': '🧠',
    'Contact': '📞',
};

const Navbar = ({ isSplashVisible, isContentVisible }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setMobileCoursesOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = e => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setActiveDropdown(null);
        };
        const handleEscapeKey = e => {
            if (e.key === 'Escape') { setIsMobileMenuOpen(false); setActiveDropdown(null); }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const handleMouseEnter = name => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(name);
    };
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
    };

    const isActive = path => location.pathname === path;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
                style={{
                    height: '36px',
                    background: 'linear-gradient(90deg, #0A1628 0%, #0f2245 100%)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
                initial={{ opacity: 0, y: -36 }}
                animate={{ opacity: isContentVisible ? 1 : 0, y: isContentVisible ? 0 : -36 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center h-full">
                    <div className="hidden sm:flex items-center gap-2 bg-emerald-600 px-4 h-full shrink-0 text-white text-xs font-black uppercase tracking-wider">
                        <Phone size={11} />
                        <a href="tel:+971585755286" className="whitespace-nowrap">+971 585755286</a>
                    </div>
                    <div className="relative flex-1 overflow-hidden h-full flex items-center">
                        <div className="flex animate-marquee items-center gap-0 whitespace-nowrap text-xs">
                            {[
                                'Abushagara, Sharjah, UAE',
                                '+971 585755286 | +971 65693738',
                                'aurafirstscience@gmail.com',
                                'Mon–Sun: 3:30 PM – 9:00 PM',
                                'CBSE · ICSE · IGCSE · AS & A Levels · JEE · NEET',
                                '2,000+ Students | 7+ Years of Excellence',
                                'Free Trial Class Available — Enroll Today!',
                            ].flatMap((item, i) => [
                                <span key={i} className="inline-flex items-center gap-6 px-8 text-gray-400">{item}<span className="text-emerald-600 text-xs">◆</span></span>,
                                <span key={`d-${i}`} className="inline-flex items-center gap-6 px-8 text-gray-400">{item}<span className="text-emerald-600 text-xs">◆</span></span>,
                            ])}
                        </div>
                    </div>
                </div>
            </motion.div>

            <nav
                className={`fixed left-0 right-0 z-40 transition-all duration-300 ${isContentVisible ? 'top-[36px]' : 'top-0'} ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-900/8 py-3 border-b border-gray-100'
                    : 'bg-white py-4 border-b border-gray-100/80'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center z-[60] group">
                            <div className="h-11 relative flex items-center justify-start shrink-0">
                                {!isSplashVisible && !isContentVisible && (
                                    <motion.img
                                        layoutId="aura-logo-animation"
                                        src={logo}
                                        alt="Aura Academia"
                                        className="h-11 w-auto object-contain absolute left-0"
                                        style={{ mixBlendMode: 'multiply' }}
                                        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                                    />
                                )}
                                <motion.img
                                    src={logoText}
                                    alt="Aura Academia"
                                    className="h-11 max-w-none w-auto object-contain"
                                    style={{ mixBlendMode: 'multiply' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isContentVisible ? 1 : 0 }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                />
                            </div>
                        </Link>

                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isContentVisible ? 1 : 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
                                {navLinks.map(link => (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${isActive(link.path)
                                                ? 'text-emerald-600 bg-emerald-50'
                                                : 'text-gray-600 hover:text-[#0A1628] hover:bg-gray-50'
                                                }`}
                                        >
                                            {link.name}
                                            {link.hasDropdown && (
                                                <ChevronDown
                                                    size={12}
                                                    className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                                                />
                                            )}
                                        </Link>

                                        <AnimatePresence>
                                            {link.hasDropdown && activeDropdown === link.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                                    transition={{ duration: 0.18 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                                                >
                                                    <div className="px-3 pt-3 pb-1">
                                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2 mb-2">Our Programmes</p>
                                                    </div>
                                                    <div className="px-3 pb-3 space-y-0.5">
                                                        {courseCategories.map((item, i) => (
                                                            <Link
                                                                key={i}
                                                                to="/courses"
                                                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                                                            >
                                                                <div
                                                                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white"
                                                                    style={{ backgroundColor: item.color }}
                                                                >
                                                                    {item.icon}
                                                                </div>
                                                                <div className="min-w-0">
                                                                    <p className="text-sm font-bold text-gray-800 group-hover:text-[#0A1628] leading-tight">{item.name}</p>
                                                                    <p className="text-[11px] text-gray-400 truncate">{item.desc}</p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                    <div className="px-3 pb-3">
                                                        <Link
                                                            to="/courses"
                                                            className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-[#0A1628] text-white text-xs font-bold hover:bg-emerald-600 transition-colors"
                                                        >
                                                            View All Courses <ChevronRight size={12} />
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}

                                <div
                                    className="relative ml-2"
                                    onMouseEnter={() => handleMouseEnter('Login')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -1 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md ${activeDropdown === 'Login'
                                            ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                                            : 'bg-[#0A1628] text-white shadow-gray-900/20 hover:bg-emerald-600 hover:shadow-emerald-600/30'
                                            } cursor-pointer`}
                                    >
                                        <LogIn size={15} />
                                        Login
                                        <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'Login' ? 'rotate-180' : ''}`} />
                                    </motion.div>

                                    <AnimatePresence>
                                        {activeDropdown === 'Login' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                                transition={{ duration: 0.18 }}
                                                className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                                            >
                                                <div className="px-3 pt-3 pb-1">
                                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-2 mb-2">Portal Access</p>
                                                </div>
                                                <div className="px-3 pb-3 space-y-0.5">
                                                    {loginOptions.map((option, i) => (
                                                        
                                                            <a
                                                            key={i}
                                                            href={option.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                                                        >
                                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-gray-100 text-gray-600 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                                                                {option.icon}
                                                            </div>
                                                            <div className="min-w-0">
                                                                <p className="text-sm font-bold text-gray-800 group-hover:text-emerald-600 leading-tight transition-colors">{option.name}</p>
                                                                <p className="text-[11px] text-gray-400 truncate">{option.desc}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <button
                                className="lg:hidden z-[60] text-gray-900 p-2 rounded-xl hover:bg-gray-100 transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            >
                                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </motion.div>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed top-[36px] left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm z-[45] lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 32, stiffness: 300 }}
                            className="fixed top-[36px] right-0 bottom-0 w-[88%] max-w-[340px] z-[46] shadow-2xl lg:hidden flex flex-col overflow-hidden"
                            style={{ background: 'linear-gradient(160deg, #0A1628 0%, #0f2245 100%)' }}
                        >
                            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black shrink-0"
                                        style={{ background: 'linear-gradient(135deg, #059669, #2563EB)' }}>A</div>
                                    <span className="text-white font-black text-base tracking-tight">Aura Academia</span>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                >
                                    <X size={18} className="text-white" />
                                </button>
                            </div>

                            <div className="flex gap-2 px-5 py-3 border-b border-white/10">
                                
                                    <a
                                    href="tel:+971585755286"
                                    className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600/20 border border-emerald-500/30 rounded-xl py-2 text-emerald-400 text-xs font-bold"
                                >
                                    <Phone size={11} /> Call Us
                                </a>
                                
                                    <a
                                    href="https://wa.me/971585755286"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366]/15 border border-[#25D366]/30 rounded-xl py-2 text-[#25D366] text-xs font-bold"
                                >
                                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.083.534 4.043 1.468 5.75L0 24l6.395-1.676A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.882 9.882 0 01-5.038-1.382l-.361-.214-3.737.979 1.005-3.643-.235-.374A9.861 9.861 0 012.118 12C2.118 6.51 6.51 2.118 12 2.118c5.49 0 9.882 4.392 9.882 9.882 0 5.49-4.392 9.882-9.882 9.882z" /></svg>
                                    WhatsApp
                                </a>
                                
                                    <a
                                    href="mailto:aurafirstscience@gmail.com"
                                    className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600/15 border border-blue-500/30 rounded-xl py-2 text-blue-400 text-xs font-bold"
                                >
                                    <Mail size={11} /> Email
                                </a>
                            </div>

                            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04, duration: 0.3 }}
                                    >
                                        {link.hasDropdown ? (
                                            <>
                                                <button
                                                    onClick={() => setMobileCoursesOpen(o => !o)}
                                                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${isActive(link.path)
                                                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                                        : 'text-white/80 hover:bg-white/8 hover:text-white border border-transparent'
                                                        }`}
                                                >
                                                    <span className="flex items-center gap-3">
                                                        <span className="text-base">{mobileNavIcons[link.name]}</span>
                                                        {link.name}
                                                    </span>
                                                    <ChevronDown
                                                        size={15}
                                                        className={`text-gray-400 transition-transform duration-300 ${mobileCoursesOpen ? 'rotate-180' : ''}`}
                                                    />
                                                </button>

                                                <AnimatePresence>
                                                    {mobileCoursesOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="ml-4 mt-1.5 mb-1 space-y-0.5 border-l border-white/10 pl-4">
                                                                {courseCategories.map((course, j) => (
                                                                    <motion.div
                                                                        key={j}
                                                                        initial={{ opacity: 0, x: 10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: j * 0.04 }}
                                                                    >
                                                                        <Link
                                                                            to="/courses"
                                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/8 transition-colors group"
                                                                        >
                                                                            <div
                                                                                className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-white"
                                                                                style={{ backgroundColor: course.color }}
                                                                            >
                                                                                {course.icon}
                                                                            </div>
                                                                            <div>
                                                                                <p className="text-sm font-bold text-white/90 group-hover:text-white leading-tight">{course.name}</p>
                                                                                <p className="text-[10px] text-gray-500">{course.desc}</p>
                                                                            </div>
                                                                        </Link>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${isActive(link.path)
                                                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                                    : 'text-white/80 hover:bg-white/8 hover:text-white border border-transparent'
                                                    }`}
                                            >
                                                <span className="text-base">{mobileNavIcons[link.name]}</span>
                                                {link.name}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <div className="px-5 py-5 border-t border-white/10 space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                    
                                        <a
                                        href="https://classpro.in/signin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3.5 rounded-2xl font-bold text-xs transition-colors border border-white/10"
                                    >
                                        <UserCog size={14} /> Staff
                                    </a>
                                    
                                        <a
                                        href="https://auraacademia.classpro.in/people/sign_in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3.5 rounded-2xl font-bold text-xs transition-colors shadow-lg shadow-emerald-600/20"
                                    >
                                        <Users size={14} /> Students
                                    </a>
                                </div>
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full bg-white/5 hover:bg-white/10 text-white text-center px-6 py-3 rounded-xl font-bold text-xs transition-colors border border-white/5"
                                >
                                    Book Free Trial Class
                                </Link>
                                <p className="text-center text-gray-600 text-[11px]">
                                    📍 Abushagara, Sharjah, UAE
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
