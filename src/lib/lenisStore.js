// Global Lenis instance store so any component can trigger smooth scroll
let _lenis = null;

export const setLenis = (l) => { _lenis = l; };
export const scrollToTop = () => {
    if (_lenis) _lenis.scrollTo(0, { duration: 1.0 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
};
