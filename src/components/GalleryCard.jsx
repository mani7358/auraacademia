import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

/**
 * GalleryCard - Image card with hover overlay and zoom effect
 * 
 * @param {Object} item - Gallery item data
 * @param {function} onClick - Callback when card is clicked
 * @param {string} className - Additional CSS classes
 */
const GalleryCard = ({ item, onClick, className = '' }) => {
    const { image, title, category, alt } = item;

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer group ${className}`}
            onClick={onClick}
        >
            {/* Image */}
            <ImageWithFallback
                src={image}
                alt={alt || title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Hover overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    {/* Zoom icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-3"
                    >
                        <ZoomIn className="w-6 h-6" />
                    </motion.div>
                    
                    {/* Title */}
                    {title && (
                        <h4 className="text-lg font-bold text-center mb-2">{title}</h4>
                    )}
                    
                    {/* Category label */}
                    {category && (
                        <span className="px-3 py-1 rounded-full bg-green-600 text-white text-xs font-semibold">
                            {category}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default GalleryCard;
