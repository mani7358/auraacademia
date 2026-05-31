import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CourseCard from './CourseCard';
import { BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/**
 * CourseGrid - Responsive grid layout for course cards with animations
 * 
 * @param {Array} courses - Array of course objects
 * @param {function} onCourseClick - Callback when a course card is clicked
 * @param {function} onEnroll - Callback when enroll button is clicked
 * @param {string} className - Additional CSS classes
 */
const CourseGrid = ({ 
    courses = [], 
    onCourseClick, 
    onEnroll,
    className = '' 
}) => {
    const gridRef = useRef(null);

    useEffect(() => {
        if (gridRef.current && courses.length > 0) {
            const cards = gridRef.current.querySelectorAll('.course-card-item');
            
            gsap.fromTo(
                cards,
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: gridRef.current,
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
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [courses]);

    // Empty state
    if (!courses || courses.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
            >
                <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                    No Courses Available
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                    We're currently updating our course offerings. Please check back soon or contact us for more information.
                </p>
            </motion.div>
        );
    }

    return (
        <div
            ref={gridRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ${className}`}
        >
            {courses.map((course, index) => (
                <div key={course.id} className="course-card-item">
                    <CourseCard
                        course={course}
                        onClick={() => onCourseClick && onCourseClick(course)}
                        onEnroll={onEnroll}
                    />
                </div>
            ))}
        </div>
    );
};

export default CourseGrid;
