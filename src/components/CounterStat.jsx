import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CounterStat = ({ target, label, suffix = '', prefix = '', textClass = 'text-gradient-primary', labelClass = 'text-[#4b5563]' }) => {
    const countRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(countRef.current, {
                scrollTrigger: {
                    trigger: countRef.current,
                    start: "top 85%",
                    once: true,
                },
                innerHTML: target,
                duration: 2.5,
                snap: { innerHTML: 1 },
                ease: "power2.out",
                onUpdate: function () {
                    if (countRef.current) {
                        countRef.current.innerHTML = prefix + Math.floor(this.targets()[0].innerHTML) + suffix;
                    }
                },
            });
        }, countRef);

        return () => ctx.revert();
    }, [target, suffix, prefix]);

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div
                ref={countRef}
                className={`text-4xl md:text-5xl font-bold font-accent mb-2 ${textClass}`}
            >
                {prefix}0{suffix}
            </div>
            <div className={`font-medium tracking-wide uppercase text-sm ${labelClass}`}>
                {label}
            </div>
        </div>
    );
};

export default CounterStat;
