import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

/**
 * TestimonialCard - Redesigned with gradient background and elevated styling
 * 
 * @param {Object} testimonial - Testimonial data object
 * @param {string} className - Additional CSS classes
 */
const TestimonialCard = ({ testimonial, className = '' }) => {
    const { name, role, course, rating, text, photo } = testimonial;

    return (
        <motion.div
            whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative bg-gradient-to-br from-green-50 via-blue-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden ${className}`}
        >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl -z-0" />
            
            <div className="relative z-10">
                {/* Quote icon with green color */}
                <div className="mb-4">
                    <Quote className="w-10 h-10 text-green-600" />
                </div>

                {/* Rating - Gold stars */}
                <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${
                                i < rating
                                    ? 'fill-[#F59E0B] text-[#F59E0B]'
                                    : 'text-gray-300'
                            }`}
                        />
                    ))}
                </div>

                {/* Testimonial text with better spacing */}
                <p className="text-gray-700 text-sm mb-6 flex-grow leading-relaxed">
                    "{text}"
                </p>

                {/* Author info with photo in corner */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200/50">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative"
                    >
                        <img
                            src={photo}
                            alt={name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-green-200 shadow-md"
                            loading="lazy"
                        />
                        {/* Green dot indicator */}
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                    </motion.div>
                    <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-base">{name}</h4>
                        <p className="text-xs text-gray-600">{role}</p>
                        {course && (
                            <p className="text-xs text-green-600 font-semibold mt-1 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                {course}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
