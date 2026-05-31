import React from 'react';
import { motion } from 'framer-motion';
import { 
    AnimatedArrowRight, 
    AnimatedClock, 
    AnimatedUsers, 
    AnimatedBookOpen 
} from './AnimatedIcons';
import ImageWithFallback from './ImageWithFallback';

/**
 * CourseCard - Clean white card component (PW Gulf style)
 * 
 * @param {Object} course - Course data object
 * @param {function} onEnroll - Callback when enroll button is clicked
 * @param {function} onClick - Callback when card is clicked
 */
const CourseCard = ({ course, onEnroll, onClick }) => {
    const {
        title,
        description,
        curriculum,
        grade,
        mode,
        subjects,
        color,
        image,
        duration
    } = course;

    const handleEnrollClick = (e) => {
        e.stopPropagation();
        if (onEnroll) onEnroll(course);
    };

    return (
        <motion.div
            whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white border-2 border-transparent hover:border-green-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col overflow-hidden"
            onClick={onClick}
        >
            {/* Image with gradient overlay */}
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <ImageWithFallback
                    src={image}
                    alt={title}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Dark overlay for text contrast */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Mode badge with green background */}
                <div className="absolute top-4 right-4">
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm bg-green-600"
                    >
                        {mode}
                    </motion.span>
                </div>

                {/* Duration badge with icon */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <AnimatedClock className="w-4 h-4" size={16} />
                    <span className="text-sm font-medium">{duration}</span>
                </div>
            </div>
            
            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                {/* Curriculum & Grade with green accent */}
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-green-600">
                        {curriculum}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        {grade}
                    </span>
                </div>
                
                {/* Title with green hover */}
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow leading-relaxed">
                    {description}
                </p>
                
                {/* Subjects tags with green accent */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {subjects.slice(0, 3).map((subject, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium"
                        >
                            {subject}
                        </span>
                    ))}
                    {subjects.length > 3 && (
                        <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                            +{subjects.length - 3} more
                        </span>
                    )}
                </div>

                {/* Footer CTA */}
                <div className="flex items-center justify-end mt-auto pt-4 border-t border-gray-200/50">
                    {/* Enroll Button with green gradient */}
                    <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleEnrollClick}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all shadow-lg hover:shadow-xl bg-gradient-to-r from-green-600 to-green-500"
                    >
                        Enroll
                        <AnimatedArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" size={16} />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;
