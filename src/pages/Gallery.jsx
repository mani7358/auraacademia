import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PageHero from '../components/PageHero';
import GalleryItem from '../components/GalleryItem';
import SEO from '../components/SEO';
import galleryData from '../data/gallery.js';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'News', 'Events'];

const categoryColors = {
    'All':    '#059669',
    'News':   '#2563EB',
    'Events': '#D97706',
};

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredGallery = galleryData.filter(item =>
        activeCategory === 'All' || item.category === activeCategory.toLowerCase()
    );

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.gallery-item').forEach((el, i) => {
                gsap.fromTo(el, { y: 30, opacity: 0 }, {
                    scrollTrigger: { trigger: el, start: 'top 90%' },
                    y: 0, opacity: 1, duration: 0.5, delay: (i % 4) * 0.08, ease: 'power2.out'
                });
            });
        });
        ScrollTrigger.refresh();
        return () => ctx.revert();
    }, [activeCategory]);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    const goToPrevious = () => setCurrentIndex(p => (p === 0 ? filteredGallery.length - 1 : p - 1));
    const goToNext    = () => setCurrentIndex(p => (p === filteredGallery.length - 1 ? 0 : p + 1));

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape')      closeLightbox();
            if (e.key === 'ArrowLeft')   goToPrevious();
            if (e.key === 'ArrowRight')  goToNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentIndex]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
            className="bg-white min-h-screen"
        >
            <SEO
                title="Gallery - Campus Life & Success Stories | Aura Academia"
                description="Explore moments of learning, celebration, and achievement at Aura Academia. View photos from classrooms, success meets, events, and facilities."
                keywords="aura academia gallery, campus photos sharjah, student success stories, classroom facilities UAE"
            />

            <PageHero
                title="Our Gallery"
                subtitle="Explore moments of learning, celebration, and achievement at Aura Academia through our photo gallery."
                variant="soft"
            />

            {/* Category counts strip */}
            <section className="py-6 border-b border-gray-100 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm">
                            Showing <span className="font-bold text-[#0A1628]">{filteredGallery.length}</span> photos
                            {activeCategory !== 'All' && <> in <span className="font-bold text-[#0A1628]">{activeCategory}</span></>}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => {
                                const count = cat === 'All'
                                    ? galleryData.length
                                    : galleryData.filter(i => i.category === cat.toLowerCase()).length;
                                const color = categoryColors[cat];
                                const isActive = activeCategory === cat;
                                return (
                                    <motion.button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2"
                                        style={{
                                            backgroundColor: isActive ? color : 'transparent',
                                            color: isActive ? '#fff' : '#374151',
                                            border: `2px solid ${isActive ? color : '#E5E7EB'}`,
                                        }}
                                    >
                                        {cat}
                                        <span
                                            className="text-xs px-1.5 py-0.5 rounded-full font-bold"
                                            style={{
                                                backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : `${color}15`,
                                                color: isActive ? '#fff' : color,
                                            }}
                                        >
                                            {count}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16" style={{ background: 'linear-gradient(160deg, #f8fafc 0%, #eff6ff 50%, #f0fdf4 100%)' }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5"
                        >
                            {filteredGallery.map((item, index) => (
                                <div key={item.id} className="break-inside-avoid gallery-item">
                                    <GalleryItem
                                        item={item}
                                        onClick={() => openLightbox(index)}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredGallery.length === 0 && (
                        <div className="text-center py-24">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Images size={32} className="text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">No photos here yet</h3>
                            <p className="text-gray-500">Try selecting a different category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#0A1628] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-20"
                    style={{ backgroundImage: 'radial-gradient(rgba(16,185,129,0.4) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <span className="text-emerald-400 font-bold text-sm uppercase tracking-widest">Be Part of the Story</span>
                    <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">
                        Experience Aura Academia Firsthand
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                        Book a free trial class and see for yourself why hundreds of students choose Aura Academia every year.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold transition-colors"
                    >
                        Book a Free Trial
                    </a>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        >
                            <X size={24} />
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                            className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={(e) => { e.stopPropagation(); goToNext(); }}
                            className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        >
                            <ChevronRight size={24} />
                        </motion.button>

                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.25 }}
                            className="max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {filteredGallery[currentIndex]?.type === 'image' ? (
                                <img
                                    src={filteredGallery[currentIndex]?.src}
                                    alt={filteredGallery[currentIndex]?.alt}
                                    className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                                />
                            ) : (
                                <video
                                    src={filteredGallery[currentIndex]?.src}
                                    controls autoPlay
                                    className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                                />
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 text-white text-center max-w-lg"
                        >
                            <p className="font-semibold text-sm">{filteredGallery[currentIndex]?.alt}</p>
                            <p className="text-xs text-white/60 mt-0.5 capitalize">
                                {filteredGallery[currentIndex]?.category} &nbsp;·&nbsp; {currentIndex + 1} / {filteredGallery.length}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Gallery;
