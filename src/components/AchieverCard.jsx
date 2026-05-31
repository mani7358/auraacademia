import React from 'react';
import { motion } from 'framer-motion';

/**
 * AchieverCard Component - PW Gulf Style
 * 
 * Features:
 * - White card with subtle border
 * - 3 horizontal color stripe bars at top-left (orange, blue, purple)
 * - Circular photo inside a YELLOW circle background
 * - Student name (bold, centered)
 * - Score badge (gray background)
 * - Achievement tag below
 * - Hover: shadow increase, 4px lift
 */
const AchieverCard = ({ name, score, exam, tag, img, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="group"
        >
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 w-full flex flex-col items-center h-full">
                {/* Color stripes decoration - 3 horizontal bars */}
                <div className="flex gap-1 mb-4 self-start">
                    <div className="w-6 h-1.5 rounded bg-orange-500"></div>
                    <div className="w-6 h-1.5 rounded bg-blue-500"></div>
                    <div className="w-6 h-1.5 rounded bg-green-600"></div>
                </div>

                {/* Circular photo with YELLOW background circle */}
                <div className="relative mb-5">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                        <img 
                            src={img} 
                            alt={name} 
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Student name - bold, centered */}
                <h4 className="font-bold text-gray-900 text-sm md:text-base mb-3 leading-tight text-center">
                    {name}
                </h4>

                {/* Score badge - gray background */}
                <div className="bg-gray-100 text-gray-700 text-xs md:text-sm font-bold px-3 py-1.5 rounded-md mb-2 w-full text-center">
                    {score} {exam}
                </div>

                {/* Achievement tag - small text */}
                <p className="text-xs text-gray-500 font-medium text-center">
                    {tag}
                </p>
            </div>
        </motion.div>
    );
};

export default AchieverCard;
