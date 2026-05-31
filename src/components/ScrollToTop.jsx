import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../lib/lenisStore';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Small delay lets the new page mount before scrolling
        const t = setTimeout(() => scrollToTop(), 50);
        return () => clearTimeout(t);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
