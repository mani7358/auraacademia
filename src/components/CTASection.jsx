import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    AnimatedPhone, 
    AnimatedArrowRight, 
    AnimatedSparkles 
} from './AnimatedIcons';
import AnimatedBackground from './AnimatedBackground';

/**
 * CTASection - Call-to-action section
 */
const CTASection = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-600 to-blue-700">
                <AnimatedBackground variant="blobs" intensity="medium" />
            </div>

            {/* Blur effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6"
                    >
                        <AnimatedSparkles className="w-8 h-8 text-white" size={32} />
                    </motion.div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display">
                        Ready to Excel in Your Studies?
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join hundreds of successful students at Aura Academia. Book your free trial class today and experience the difference.
                    </p>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-white/80 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            500+ Students
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            100% Pass Rate
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            15+ Expert Faculty
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-green-600 font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all"
                            >
                                <AnimatedPhone className="w-5 h-5" size={20} />
                                Book Free Trial
                                <AnimatedArrowRight className="w-5 h-5" size={20} />
                            </motion.button>
                        </Link>

                        <Link to="/courses">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all"
                            >
                                Explore Courses
                                <AnimatedArrowRight className="w-5 h-5" size={20} />
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
