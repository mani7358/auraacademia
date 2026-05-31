import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setLenis } from '../lib/lenisStore';

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothHorizontal: false,
            mouseMultiplier: 1,
            smoothTouch: true,
            touchMultiplier: 2,
            infinite: false,
        });

        // Share instance globally for ScrollToTop
        setLenis(lenis);

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        const handleAnchorClick = (e) => {
            const target = e.target.closest('a');
            if (target && target.hash && target.origin === window.location.origin) {
                e.preventDefault();
                const element = document.querySelector(target.hash);
                if (element) {
                    lenis.scrollTo(element, { offset: 0 });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            lenis.destroy();
            setLenis(null);
            document.removeEventListener('click', handleAnchorClick);
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
