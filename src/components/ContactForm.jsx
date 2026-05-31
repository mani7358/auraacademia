import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import GlassCard from './GlassCard';
import LoadingSpinner from './LoadingSpinner';
import { validateForm } from '../utils/validation';

/**
 * ContactForm - Contact form component with validation
 * 
 * @param {function} onSubmit - Callback when form is submitted
 * @param {string} variant - Form variant: 'contact' | 'enrollment' | 'psychometric'
 * @param {string} className - Additional CSS classes
 */
const ContactForm = ({ 
    onSubmit, 
    variant = 'contact',
    className = '' 
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        courseInterest: '',
        gradeLevel: '',
        preferredMode: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    // Validation rules based on variant
    const getValidationRules = () => {
        const baseRules = {
            name: { required: true, minLength: 2 },
            email: { required: true, email: true },
            phone: { required: true, phone: true }
        };

        if (variant === 'enrollment') {
            return {
                ...baseRules,
                courseInterest: { required: true },
                gradeLevel: { required: true }
            };
        }

        if (variant === 'psychometric') {
            return {
                ...baseRules,
                message: { required: true, minLength: 10 }
            };
        }

        return {
            ...baseRules,
            message: { required: true, minLength: 10 }
        };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        // Validate form
        const validation = validateForm(formData, getValidationRules());
        
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            if (onSubmit) {
                await onSubmit(formData);
            }
            setSubmitStatus('success');
            // Reset form after success
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    courseInterest: '',
                    gradeLevel: '',
                    preferredMode: ''
                });
                setSubmitStatus(null);
            }, 3000);
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = "w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 transition-all outline-none text-gray-900 placeholder-gray-500";
    const labelClasses = "block text-sm font-bold text-gray-700 mb-2";
    const errorClasses = "text-red-500 text-xs mt-1";

    return (
        <GlassCard variant="elevated" className={`p-8 ${className}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className={labelClasses}>
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Enter your full name"
                    />
                    {errors.name && <p className={errorClasses}>{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className={labelClasses}>
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="your.email@example.com"
                    />
                    {errors.email && <p className={errorClasses}>{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className={labelClasses}>
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="+971 XX XXX XXXX"
                    />
                    {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
                </div>

                {/* Enrollment specific fields */}
                {variant === 'enrollment' && (
                    <>
                        <div>
                            <label htmlFor="courseInterest" className={labelClasses}>
                                Course Interest *
                            </label>
                            <select
                                id="courseInterest"
                                name="courseInterest"
                                value={formData.courseInterest}
                                onChange={handleChange}
                                className={inputClasses}
                            >
                                <option value="">Select a course</option>
                                <option value="cbse-10">CBSE Grade 10</option>
                                <option value="cbse-12">CBSE Grade 12</option>
                                <option value="jee-neet">JEE & NEET</option>
                                <option value="igcse-o">IGCSE O Level</option>
                                <option value="igcse-a">IGCSE A Level</option>
                                <option value="math-foundation">Math Foundation</option>
                                <option value="nios">NIOS</option>
                            </select>
                            {errors.courseInterest && <p className={errorClasses}>{errors.courseInterest}</p>}
                        </div>

                        <div>
                            <label htmlFor="gradeLevel" className={labelClasses}>
                                Current Grade *
                            </label>
                            <input
                                type="text"
                                id="gradeLevel"
                                name="gradeLevel"
                                value={formData.gradeLevel}
                                onChange={handleChange}
                                className={inputClasses}
                                placeholder="e.g., Grade 10"
                            />
                            {errors.gradeLevel && <p className={errorClasses}>{errors.gradeLevel}</p>}
                        </div>

                        <div>
                            <label htmlFor="preferredMode" className={labelClasses}>
                                Preferred Mode
                            </label>
                            <select
                                id="preferredMode"
                                name="preferredMode"
                                value={formData.preferredMode}
                                onChange={handleChange}
                                className={inputClasses}
                            >
                                <option value="">Select mode</option>
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </div>
                    </>
                )}

                {/* Message */}
                <div>
                    <label htmlFor="message" className={labelClasses}>
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={inputClasses}
                        placeholder={
                            variant === 'psychometric'
                                ? 'Tell us about your interest in psychometric testing...'
                                : 'How can we help you?'
                        }
                    />
                    {errors.message && <p className={errorClasses}>{errors.message}</p>}
                </div>

                {/* Submit button */}
                <motion.button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold shadow-lg shadow-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                >
                    {isSubmitting ? (
                        <>
                            <LoadingSpinner size="sm" color="border-white" />
                            Submitting...
                        </>
                    ) : submitStatus === 'success' ? (
                        <>
                            <CheckCircle className="w-5 h-5" />
                            Submitted Successfully!
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Submit
                        </>
                    )}
                </motion.button>

                {/* Success/Error messages */}
                {submitStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-green-100 text-green-700 text-sm flex items-center gap-2"
                    >
                        <CheckCircle className="w-5 h-5" />
                        Thank you! We'll get back to you soon.
                    </motion.div>
                )}

                {submitStatus === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-100 text-red-700 text-sm flex items-center gap-2"
                    >
                        <AlertCircle className="w-5 h-5" />
                        Something went wrong. Please try again.
                    </motion.div>
                )}
            </form>
        </GlassCard>
    );
};

export default ContactForm;
