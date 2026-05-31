import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import GlassCard from './GlassCard';

/**
 * ContactInfoSection - Contact information and location section
 */
const ContactInfoSection = () => {
    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Visit Us',
            details: [
                'Centre 1: Tower A, 803, Al Rayyan Complex, Al-Nahda, Sharjah, UAE',
                'Centre 2: 16, First Floor, City Tower, Near Viva Super Market, Abushagara, Sharjah, UAE',
            ],
            color: '#7c3aed'
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Call Us',
            details: ['+971 585755286', '+971 65693738'],
            color: '#4338ca',
            links: ['tel:+971585755286', 'tel:+97165693738']
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email Us',
            details: ['aurafirstscience@gmail.com'],
            color: '#f97316',
            links: ['mailto:aurafirstscience@gmail.com']
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Working Hours',
            details: ['Mon – Sun: 3:30 PM – 9:00 PM'],
            color: '#3b82f6'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {contactInfo.map((info, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <GlassCard variant="elevated" hoverEffect className="p-6 h-full">
                                    <div 
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4"
                                        style={{ backgroundColor: info.color }}
                                    >
                                        {info.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                                    <div className="space-y-2">
                                        {info.details.map((detail, j) => (
                                            info.links && info.links[j] ? (
                                                <a
                                                    key={j}
                                                    href={info.links[j]}
                                                    className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                                                >
                                                    {detail}
                                                </a>
                                            ) : (
                                                <p key={j} className="text-sm text-gray-600">
                                                    {detail}
                                                </p>
                                            )
                                        ))}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <GlassCard variant="elevated" className="overflow-hidden h-full min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9434840956116!2d55.38272507538408!3d25.33557667749857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b66e57f2741%3A0x3e0f8e9fd1e6a0a!2sCity%20Tower%2C%20Abushagara%2C%20Sharjah!5e0!3m2!1sen!2sae!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Aura Academia Location"
                            ></iframe>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfoSection;
