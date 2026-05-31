import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FacultyCard from './FacultyCard';

gsap.registerPlugin(ScrollTrigger);

/**
 * FacultyGrid - Responsive grid layout for faculty cards with animations
 * 
 * @param {Array} faculty - Array of faculty objects
 * @param {string} className - Additional CSS classes
 */
const FacultyGrid = ({ faculty = [], className = '' }) => {
    const gridRef = useRef(null);

    useEffect(() => {
        if (gridRef.current && faculty.length > 0) {
            const cards = gridRef.current.querySelectorAll('.faculty-card-item');
            
            gsap.fromTo(
                cards,
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.15,
                    ease: 'power2.out'
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [faculty]);

    return (
        <div
            ref={gridRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 ${className}`}
        >
            {faculty.map((member, index) => (
                <div key={member.id} className="faculty-card-item">
                    <FacultyCard faculty={member} index={index} />
                </div>
            ))}
        </div>
    );
};

export default FacultyGrid;
