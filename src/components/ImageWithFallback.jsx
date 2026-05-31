import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ImageWithFallback - Image component with error handling and fallback support
 * 
 * @param {string} src - Image source URL
 * @param {string} srcSet - Responsive image sources (e.g., "image-320w.jpg 320w, image-640w.jpg 640w")
 * @param {string} sizes - Image sizes for different viewports (e.g., "(max-width: 768px) 100vw, 50vw")
 * @param {string} alt - Image alt text
 * @param {string} fallback - Fallback image URL (default: placeholder)
 * @param {string} className - Additional CSS classes
 * @param {boolean} lazy - Enable lazy loading (default: true)
 * @param {function} onLoad - Callback when image loads
 * @param {function} onError - Callback when image fails to load
 */
const ImageWithFallback = ({ 
    src, 
    srcSet,
    sizes,
    alt, 
    fallback = 'https://placehold.co/600x400/f5f3ff/7c3aed?text=Image+Not+Found',
    className = '',
    lazy = true,
    onLoad,
    onError,
    ...props
}) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleError = (e) => {
        if (!hasError) {
            setImgSrc(fallback);
            setHasError(true);
            setIsLoading(false);
            if (onError) onError(e);
        }
    };

    const handleLoad = (e) => {
        setIsLoading(false);
        if (onLoad) onLoad(e);
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Loading skeleton */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
                    />
                )}
            </AnimatePresence>

            {/* Image */}
            <motion.img
                src={imgSrc}
                srcSet={srcSet}
                sizes={sizes}
                alt={alt}
                className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                onError={handleError}
                onLoad={handleLoad}
                loading={lazy ? 'lazy' : 'eager'}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                {...props}
            />

            {/* Error indicator (optional visual feedback) */}
            {hasError && (
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-red-500/80 text-white text-xs rounded-md backdrop-blur-sm">
                    Fallback
                </div>
            )}
        </div>
    );
};

export default ImageWithFallback;
