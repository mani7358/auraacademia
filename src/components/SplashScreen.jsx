import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Aura-logo.png';

const SplashScreen = ({ isVisible }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <motion.img
                        layoutId="aura-logo-animation"
                        src={logo}
                        alt="Aura Academia Logo"
                        className="w-48 sm:w-64 md:w-80 max-w-[80%] h-auto object-contain"
                        style={{ mixBlendMode: 'multiply' }}
                        initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
                        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                            layout: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
