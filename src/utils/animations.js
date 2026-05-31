import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize fade-up animations for sections
 * @param {string} selector - CSS selector for elements to animate
 */
export const initFadeUpAnimations = (selector = '.fade-up-section') => {
    gsap.utils.toArray(selector).forEach(el => {
        gsap.fromTo(el,
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: 'power2.out'
            }
        );
    });
};

/**
 * Initialize staggered children animations
 * @param {string} containerSelector - CSS selector for container
 * @param {string} childSelector - CSS selector for children
 */
export const initStaggeredAnimations = (containerSelector = '.stagger-children', childSelector = '.stagger-item') => {
    gsap.utils.toArray(containerSelector).forEach(container => {
        const children = container.querySelectorAll(childSelector);
        gsap.fromTo(children,
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out'
            }
        );
    });
};

/**
 * Initialize parallax scrolling effect
 * @param {string} selector - CSS selector for elements
 * @param {number} speed - Parallax speed (default: 0.5)
 */
export const initParallaxEffect = (selector = '.parallax-element', speed = 0.5) => {
    gsap.utils.toArray(selector).forEach(el => {
        const yPercent = speed * 100;
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            yPercent: -yPercent,
            ease: 'none'
        });
    });
};

/**
 * Initialize counter animations
 * @param {string} selector - CSS selector for counter elements
 */
export const initCounterAnimations = (selector = '.counter') => {
    gsap.utils.toArray(selector).forEach(el => {
        const target = parseInt(el.getAttribute('data-target'));
        const obj = { value: 0 };
        
        gsap.to(obj, {
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            value: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
                el.textContent = Math.ceil(obj.value);
            }
        });
    });
};

/**
 * Cleanup all ScrollTrigger instances
 */
export const cleanupScrollTriggers = () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

/**
 * Refresh ScrollTrigger (useful after dynamic content loads)
 */
export const refreshScrollTrigger = () => {
    ScrollTrigger.refresh();
};
