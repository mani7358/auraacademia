import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { notFoundSeo } from '../data/seo';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#0A1628] flex items-center justify-center px-4 relative overflow-hidden">
            <SEO {...notFoundSeo} />

            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{ backgroundImage: 'radial-gradient(rgba(16,185,129,0.6) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-lg relative z-10"
            >
                {/* 404 */}
                <motion.p
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className="text-[120px] md:text-[160px] font-black leading-none text-white/5 select-none"
                >
                    404
                </motion.p>

                <div className="-mt-10 relative z-10">
                    <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl font-black text-emerald-400">?</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold transition-colors"
                        >
                            <Home size={18} />
                            Go to Homepage
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-colors"
                        >
                            <ArrowLeft size={18} />
                            Go Back
                        </button>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                        <p className="text-gray-500 text-sm mb-4">Quick links</p>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {[
                                { to: '/courses', label: 'Courses' },
                                { to: '/faculty', label: 'Faculty' },
                                { to: '/gallery', label: 'Gallery' },
                                { to: '/about', label: 'About' },
                                { to: '/contact', label: 'Contact' },
                            ].map(({ to, label }) => (
                                <Link key={to} to={to} className="text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
