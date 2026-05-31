import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * VideoBackground - Video background component with fallback support
 * 
 * @param {string} src - Video source URL
 * @param {string} poster - Poster image URL (fallback)
 * @param {string} fallback - Fallback image URL if video fails
 * @param {string} className - Additional CSS classes
 * @param {number} opacity - Video opacity (0-1)
 */
const VideoBackground = ({ 
    src, 
    poster, 
    fallback, 
    className = '',
    opacity = 0.6 
}) => {
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            // Attempt to play the video
            const playPromise = videoRef.current.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Autoplay was prevented, show poster instead
                    setError(true);
                });
            }
        }
    }, []);

    const handleError = () => {
        setError(true);
    };

    const handleLoadedData = () => {
        setIsLoaded(true);
    };

    // If error or no video source, show fallback image
    if (error || !src) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${className}`}
            >
                <img
                    src={fallback || poster}
                    alt="Background"
                    className="w-full h-full object-cover"
                    style={{ opacity }}
                />
            </motion.div>
        );
    }

    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {/* Poster image shown while video loads */}
            {!isLoaded && poster && (
                <img
                    src={poster}
                    alt="Loading"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity }}
                />
            )}
            
            {/* Video element */}
            <motion.video
                ref={videoRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? opacity : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={poster}
                onError={handleError}
                onLoadedData={handleLoadedData}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </motion.video>
        </div>
    );
};

export default VideoBackground;
