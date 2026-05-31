import React from 'react';
import { motion } from 'framer-motion';

const BlobBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute inset-0 bg-dot-pattern opacity-30 mix-blend-multiply"></div>

            {/* Indigo Blob */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 bg-accent-indigo"
                style={{ background: 'var(--color-accent-indigo)' }}
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Coral Blob */}
            <motion.div
                className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 bg-accent-coral"
                style={{ background: 'var(--color-accent-coral)' }}
                animate={{
                    x: [0, -40, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Mint Blob */}
            <motion.div
                className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[100px] opacity-25 bg-accent-mint"
                style={{ background: 'var(--color-accent-mint)' }}
                animate={{
                    x: [0, 60, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                }}
            />
        </div>
    );
};

export default BlobBackground;
