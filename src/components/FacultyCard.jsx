import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { AnimatedAward, AnimatedBookOpen } from './AnimatedIcons';
import ImageWithFallback from './ImageWithFallback';

/**
 * FacultyCard - Redesigned with gradient backgrounds and flip animation
 * 
 * @param {Object} faculty - Faculty data object
 * @param {string} className - Additional CSS classes
 * @param {number} index - Card index for gradient variation
 */
const FacultyCard = ({ faculty, className = '', index = 0 }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    const {
        name,
        subjects,
        photo,
        bio,
        experience,
        specializations,
        email,
        social
    } = faculty;

    // Gradient variations (green to blue)
    const gradients = [
        'from-green-500 to-teal-500',      // Green to teal
        'from-blue-500 to-indigo-500',     // Blue to indigo
        'from-teal-500 to-blue-500',       // Teal to blue
        'from-green-500 to-blue-500',      // Green to blue
    ];
    
    const gradient = gradients[index % gradients.length];

    return (
        <motion.div
            whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full cursor-pointer ${className}`}
            style={{ minHeight: '400px' }}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Front of card */}
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 backface-hidden"
                style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                }}
            >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
                    {/* Experience badge */}
                    <div className="absolute top-4 right-4">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1"
                        >
                            <AnimatedAward className="w-3 h-3" size={12} />
                            {experience}+ Years
                        </motion.div>
                    </div>
                    
                    {/* Circular photo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-xl mb-6"
                    >
                        <ImageWithFallback
                            src={photo}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    
                    {/* Name and title */}
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">{name}</h3>
                    
                    {/* Subjects */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {subjects.slice(0, 3).map((subject, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold"
                            >
                                {subject}
                            </span>
                        ))}
                    </div>
                    
                    {/* Click to flip hint */}
                    <p className="text-xs text-white/70 mt-auto">Click to see more</p>
                </div>
            </motion.div>

            {/* Back of card */}
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 0 : -180 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 backface-hidden"
                style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                }}
            >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col p-6 text-white overflow-y-auto">
                    <h3 className="text-xl font-bold mb-4">{name}</h3>
                    
                    {/* Bio */}
                    {bio && (
                        <p className="text-sm text-white/90 mb-4 leading-relaxed">
                            {bio}
                        </p>
                    )}
                    
                    {/* Specializations */}
                    {specializations && specializations.length > 0 && (
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <AnimatedBookOpen className="w-4 h-4" size={16} />
                                <h5 className="text-sm font-bold">Specializations</h5>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {specializations.map((spec, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium"
                                    >
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {/* Social media icons */}
                    <div className="mt-auto pt-4 border-t border-white/20">
                        <div className="flex gap-3 justify-center">
                            {email && (
                                <motion.a
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    href={`mailto:${email}`}
                                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                                >
                                    <Mail className="w-5 h-5" />
                                </motion.a>
                            )}
                            {social?.linkedin && (
                                <motion.a
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    href={social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </motion.a>
                            )}
                            {social?.twitter && (
                                <motion.a
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    href={social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                                >
                                    <Twitter className="w-5 h-5" />
                                </motion.a>
                            )}
                        </div>
                    </div>
                    
                    {/* Click to flip back hint */}
                    <p className="text-xs text-white/70 text-center mt-4">Click to flip back</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FacultyCard;
