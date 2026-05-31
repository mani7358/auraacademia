import React from 'react';
import { motion } from 'framer-motion';
import { Play, ZoomIn } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

/**
 * GalleryItem - Gallery item component with glass overlay
 * 
 * @param {Object} item - Gallery item data { src, alt, type, category }
 * @param {function} onClick - Callback when item is clicked
 * @param {string} className - Additional CSS classes
 */
const GalleryItem = ({ item, onClick, className = '' }) => {
    const { src, alt, type, category } = item;

    return (
        <motion.div
            className={`relative group cursor-pointer overflow-hidden rounded-2xl ${className}`}
            whileHover={{ scale: 1.02 }}
            onClick={onClick}
            layout
        >
            {/* Image/Video */}
            {type === 'image' ? (
                <ImageWithFallback
                    src={src}
                    alt={alt}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
            ) : (
                <video
                    src={src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                />
            )}
            
            {/* Glass overlay on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
            >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Category badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold mb-2 capitalize">
                        {category}
                    </span>
                    
                    {/* Caption */}
                    <p className="text-white font-medium text-sm">{alt}</p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                </div>
            </motion.div>
            
            {/* Play icon for videos */}
            {type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform"
                    >
                        <Play size={24} className="text-white ml-1" fill="white" />
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
};

export default GalleryItem;
