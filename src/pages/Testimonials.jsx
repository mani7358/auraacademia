import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Star, X, ChevronLeft, ChevronRight, MessageCircle, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TestimonialsColumn } from '../components/ui/testimonials-columns';
import SEO from '../components/SEO';
import ShinyText from '../components/text/ShinyText';

// ─── WhatsApp testimonial images ───────────────────────────────
import wa1 from '../assets/Whatsapp-testimonals-1.jpeg';
import wa2 from '../assets/Whatsapp-testimonals-2.jpeg';
import wa3 from '../assets/Whatsapp-testimonals-3.jpeg';
import wa4 from '../assets/Whatsapp-testimonals-4.jpeg';
import wa5 from '../assets/Whatsapp-testimonals-5.jpeg';
import wa6 from '../assets/Whatsapp-testimonals-6.jpeg';
import wa7 from '../assets/Whatsapp-testimonals-7.jpeg';
import wa8 from '../assets/Whatsapp-testimonals-8.jpeg';
import wa9 from '../assets/Whatsapp-testimonals-9.jpeg';
import wa10 from '../assets/Whatsapp-testimonals-10.jpeg';
import wa11 from '../assets/Whatsapp-testimonals-11.jpeg';
import wa12 from '../assets/Whatsapp-testimonals-12.jpeg';
import wa13 from '../assets/Whatsapp-testimonals-13.jpeg';
import wa14 from '../assets/Whatsapp-testimonals-14.jpeg';
import wa15 from '../assets/Whatsapp-testimonals-15.jpeg';

const waImages = [wa1, wa2, wa3, wa4, wa5, wa6, wa7, wa8, wa9, wa10, wa11, wa12, wa13, wa14, wa15];

// ─── Gradient palette for avatars ──────────────────────────────
const gradients = [
    'linear-gradient(135deg, #059669, #34D399)',
    'linear-gradient(135deg, #2563EB, #60A5FA)',
    'linear-gradient(135deg, #7C3AED, #A78BFA)',
    'linear-gradient(135deg, #0891B2, #22D3EE)',
    'linear-gradient(135deg, #DB2777, #F472B6)',
    'linear-gradient(135deg, #D97706, #FBBF24)',
    'linear-gradient(135deg, #4338CA, #818CF8)',
    'linear-gradient(135deg, #0F766E, #5EEAD4)',
    'linear-gradient(135deg, #E11D48, #FB7185)',
    'linear-gradient(135deg, #6D28D9, #C4B5FD)',
    'linear-gradient(135deg, #EA580C, #FDBA74)',
    'linear-gradient(135deg, #16A34A, #86EFAC)',
    'linear-gradient(135deg, #0284C7, #7DD3FC)',
    'linear-gradient(135deg, #A21CAF, #E879F9)',
    'linear-gradient(135deg, #DC2626, #FCA5A5)',
    'linear-gradient(135deg, #0369A1, #38BDF8)',
    'linear-gradient(135deg, #B45309, #FCD34D)',
    'linear-gradient(135deg, #047857, #6EE7B7)',
    'linear-gradient(135deg, #7E22CE, #D8B4FE)',
    'linear-gradient(135deg, #BE185D, #FDA4AF)',
];

// ─── All Reviews ───────────────────────────────────────────────
const allReviews = [
    { text: "My son has had a wonderful experience with Aura Academia tuition center, and it has truly made a difference in his Grade 10 journey. The teachers are incredibly supportive, patient, and knowledgeable.", name: "Preethi Shankar", role: "Parent" },
    { text: "Aura Academy provides a positive, motivating, and disciplined learning environment that helped me focus better on my studies. The atmosphere is friendly yet structured, making learning comfortable and effective.", name: "Saira Sudhi", role: "Student" },
    { text: "I am really happy that my child is studying with Aura academics. The excellent faculty focus on each child individually rather than just teaching without attention.", name: "Antony Dsouza", role: "Parent" },
    { text: "Aura academia is an excellent institution with great facilities and resources. The teachers are very dedicated and hardworking and have great knowledge about the syllabus.", name: "Ayaasha Prakash", role: "Student" },
    { text: "I have no words to express how helpful the classes from this institution have been in my 12th studies. The teachers are very approachable, friendly and dedicated in helping us improve our grades.", name: "Badeehu", role: "Student" },
    { text: "My Grade 12 institute played a very important role in shaping my academic journey. The teachers were highly supportive, dedicated, and always ready to clear our doubts.", name: "Joy Samuel", role: "Student" },
    { text: "I studied at Aura Academia for two years, and it was a great learning experience. The teachers explain concepts clearly, are very supportive, and always help with doubts.", name: "Muatasim Khan", role: "Student" },
    { text: "The coaching here is excellent, and the teachers are very supportive and dedicated. They go above and beyond to help every student succeed.", name: "Julie Vergi", role: "Parent" },
    { text: "I am extremely grateful to Aura Academia for providing such a supportive and motivating learning environment for my child. A special thanks to Mrs. Ishvarya for her excellent teaching skills.", name: "Rajitha Shajikm", role: "Parent" },
    { text: "The teachers at Aura Academia are incredibly patient and take the time to ensure every student understands the concepts thoroughly before moving on.", name: "Abdul Hakkim", role: "Student" },
    { text: "Aura Academia Sharjah has really helped me improve both academically and in my confidence. Ishvarya Ma'am is very patient and supportive, taking the time to explain concepts clearly.", name: "Mahreen Hasan", role: "Student" },
    { text: "The teaching here is truly exceptional. Every concept is explained with clarity and simplicity, making even the most challenging topics easy to understand and apply.", name: "Manna Ann", role: "Parent" },
    { text: "I had a great experience at this academy! Being in 12th grade, I was really stressed about my finals, but the teachers here are incredibly friendly and approachable. My grades have improved significantly.", name: "Alen Kurichy", role: "Student" },
    { text: "Aura Academia has been a blessing for my child's education. The structured approach to teaching and regular assessments keep students on track and motivated.", name: "Stella Abraham", role: "Parent" },
    { text: "Personally, this academy has brought a lot of improvement for me. The teachers are patient and explain concepts clearly without rushing. The learning environment is supportive and comfortable.", name: "Ahamed Ansari", role: "Student" },
    { text: "As a parent, I am very happy with Aura Academia for CBSE Grade 10 Science and Maths. The tutor explains concepts clearly and patiently, helping my child gain confidence.", name: "Christy Packianathan", role: "Parent" },
    { text: "Aura academia has really helped my child grow very well in his studies. They have also helped in overall development of his personality. Teaching methodology is very practical.", name: "Moeena Taj", role: "Parent" },
    { text: "This Science and Maths tuition is really good. The teachers explain everything clearly, are very friendly, and make learning much easier and more interesting.", name: "Mona Patel", role: "Parent" },
    { text: "The faculty at Aura Academia are outstanding. They have a deep understanding of the subjects and use innovative methods to make learning engaging and effective.", name: "Naveen Elangovan", role: "Student" },
    { text: "Aura Academia has been instrumental in my child's academic success. The personalized attention and regular feedback have made a significant difference in performance.", name: "Devendhu Ranjit", role: "Parent" },
    { text: "My experience with this tuition has been really good. The concepts are explained clearly and in a way that is easy to understand. The teachers are very patient and supportive. Highly Recommended!", name: "Annlyne D'silva", role: "Student" },
    { text: "This tuition is outstanding! Better than all the tuitions my daughter has attended by far. The teachers here have utmost dedication and honestly strive to improve the performance of the child.", name: "Ins", role: "Parent" },
    { text: "As a student, I've had a really positive experience at this institution. The teachers are supportive and always willing to help when I have questions.", name: "Tvishula S", role: "Student" },
    { text: "The teachers genuinely care about each student's progress. I've seen remarkable improvement in my child's understanding of complex science concepts.", name: "Govind Rajan", role: "Parent" },
    { text: "Teachers are supportive. Ishwarya Ma'am and Suraj Sir explain concepts clearly and patiently. I feel much more prepared for my exams now.", name: "Neha", role: "Student" },
    { text: "Excellent learning environment with dedicated teachers, modern facilities, clean and supportive space. It's a great place for academic growth.", name: "Irene Jain", role: "Parent" },
    { text: "The teaching approach at Aura Academia stands out from other institutes. They focus on building conceptual understanding rather than rote memorization.", name: "Muhammad Saeed", role: "Student" },
    { text: "Teachers ensure everyone grasps concepts. They're friendly and make students feel like family. I always look forward to attending classes.", name: "Tharisha Srinivasan", role: "Student" },
    { text: "Aura Academia has exceeded our expectations. The quality of teaching and the care shown towards every student is truly commendable.", name: "Vikas Chavan", role: "Parent" },
    { text: "Teachers explain every concept with patience. I feel more confident after joining this tuition. The regular practice sessions are extremely helpful.", name: "Jeshwant Rajashekar", role: "Grade 11 Student" },
    { text: "The structured curriculum and regular mock tests at Aura Academia have prepared my child exceptionally well for board examinations.", name: "Parvez Mirza", role: "Parent" },
    { text: "Outstanding experience. Teachers are knowledgeable and committed. Atmosphere motivates daily improvement. One of the best decisions I've made.", name: "Mohammed Ashfaq", role: "Student" },
    { text: "The individual attention given to each student is what makes Aura Academia special. My grades have improved dramatically since joining.", name: "Nikhil", role: "Student" },
    { text: "Dedicated teachers with supportive environment. Teaching methods are clear, interactive, and easy to follow. Highly recommended for all students.", name: "Joy", role: "Student" },
    { text: "Both my children attend Aura Academia and have shown tremendous improvement. The teachers are extremely knowledgeable and approachable.", name: "Raghu Deepa", role: "Parent" },
    { text: "Aura Academia provides an excellent foundation for competitive exam preparation. The faculty's expertise in JEE and NEET subjects is impressive.", name: "MH Hasan", role: "Student" },
    { text: "The dedication of the teachers here is unmatched. They stay after hours to help students with doubts and ensure complete understanding.", name: "Ashlesh Sangle", role: "Student" },
    { text: "Aura Academia has transformed my approach to learning. The interactive teaching methods and supportive environment make studying enjoyable.", name: "Tommy Vercitti", role: "Student" },
    { text: "Love for science grew stronger here. Practice with many question papers helped me score well. The faculty's guidance has been invaluable.", name: "Bhadra Lenij", role: "Grade 10 Student" },
    { text: "Exceptional coaching institute with caring teachers. My child's academic performance and confidence have both improved significantly.", name: "Archana Brahmbhatt", role: "Parent" },
    { text: "Joining Aura Academia has been excellent for my academic development with highly knowledgeable tutors who genuinely care about student success.", name: "Arjun Ayyappan", role: "Student" },
    { text: "Faculty are phenomenal experts. Materials are excellent with extra classes ensuring no student falls behind. A truly exceptional institution.", name: "GDS Silvers", role: "Parent" },
    { text: "Fantastic learning environment with friendly atmosphere. Teaching methods are intellectual and engaging. My son has thrived here.", name: "Soumya Biju", role: "Parent" },
    { text: "Aishwarya Ma'am is one of Sharjah's best chemistry teachers. My daughter's exam confidence greatly improved after joining Aura.", name: "Harsha Annadurai", role: "Parent, Sharjah" },
    { text: "Best decision enrolling kids here. Teachers focus on genuine understanding. Kids enjoy attending sessions and look forward to every class.", name: "Bhuvana Prasath", role: "Parent" },
    { text: "Excellent tuition center that cares about students. Teachers are knowledgeable, patient, dedicated, and always ready to help.", name: "Bhuvan Raam", role: "Student" },
    { text: "Physics and math teachers are exceptional. Complex topics made easy. Curriculum well-structured and exam-focused for best results.", name: "Arjun Thayath", role: "Grade 11 Student" },
    { text: "Teachers genuinely care and inspire. Environment is positive and motivating for reaching goals. I've grown so much as a student here.", name: "Nikhil R", role: "Student" },
].map((r, i) => ({
    ...r,
    avatarGradient: gradients[i % gradients.length],
}));

const col1 = allReviews.filter((_, i) => i % 3 === 0);
const col2 = allReviews.filter((_, i) => i % 3 === 1);
const col3 = allReviews.filter((_, i) => i % 3 === 2);

// ─── Lightbox component ─────────────────────────────────────────
const Lightbox = ({ images, index, onClose, onPrev, onNext }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        onClick={onClose}
    >
        <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={onClose}
        >
            <X size={20} />
        </button>
        <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={e => { e.stopPropagation(); onPrev(); }}
        >
            <ChevronLeft size={20} />
        </button>
        <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={e => { e.stopPropagation(); onNext(); }}
        >
            <ChevronRight size={20} />
        </button>

        <motion.div
            key={index}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-sm w-full max-h-[90vh]"
            onClick={e => e.stopPropagation()}
        >
            <img
                src={images[index]}
                alt={`WhatsApp testimonial ${index + 1}`}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                {index + 1} / {images.length}
            </div>
        </motion.div>
    </motion.div>
);

// ─── Page ───────────────────────────────────────────────────────
const Testimonials = () => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = i => setLightboxIndex(i);
    const closeLightbox = () => setLightboxIndex(null);
    const prevImage = () => setLightboxIndex(i => (i - 1 + waImages.length) % waImages.length);
    const nextImage = () => setLightboxIndex(i => (i + 1) % waImages.length);

    return (
        <div className="bg-[#F7F8FA] min-h-screen">
            <SEO
                title="Testimonials - Aura Academia | Student & Parent Reviews"
                description="Read genuine reviews and WhatsApp testimonials from students and parents about their experience at Aura Academia. 4.9 star rating with 133+ verified Google reviews."
                keywords="aura academia testimonials, tuition centre sharjah reviews, student testimonials, parent reviews, whatsapp reviews"
            />

            {/* ── Hero ── */}
            <section
                className="pt-32 pb-20 relative overflow-hidden"
                style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)' }}
            >
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.07) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm"
                        >
                            <Shield size={13} className="text-emerald-500" />
                            Verified Student &amp; Parent Testimonials
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.08 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A1628] mb-5 leading-tight"
                            style={{ letterSpacing: '-0.02em' }}
                        >
                            Voices of Our{' '}
                            <ShinyText text="Community" color="#059669" shineColor="#60A5FA" speed={3} spread={120} />
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.14 }}
                            className="text-gray-500 text-lg leading-relaxed mb-10"
                        >
                            Real stories from real students and parents. See why Aura Academia has earned a 4.9-star rating with 133+ verified Google reviews.
                        </motion.p>

                        {/* Stats row */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-wrap items-center justify-center gap-4"
                        >
                            <div className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-2xl px-6 py-3.5 shadow-sm">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <span className="font-black text-[#0A1628] text-lg">4.9</span>
                                <span className="text-gray-400 text-sm">/5</span>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl px-6 py-3.5 shadow-sm">
                                <span className="font-black text-[#0A1628] text-lg">133+</span>
                                <span className="text-gray-500 text-sm ml-2">Google Reviews</span>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl px-6 py-3.5 shadow-sm">
                                <span className="font-black text-[#0A1628] text-lg">2,000+</span>
                                <span className="text-gray-500 text-sm ml-2">Students Taught</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── WhatsApp Testimonials ── */}
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Subtle green tint top */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(5,150,105,0.04) 0%, transparent 70%)' }} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/25 text-[#128C7E] px-4 py-2 rounded-full text-sm font-bold mb-5"
                        >
                            <MessageCircle size={14} className="fill-[#25D366] text-[#25D366]" />
                            Direct Messages from Students
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.07 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0A1628] mb-4"
                            style={{ letterSpacing: '-0.02em' }}
                        >
                            Messages <span className="text-[#25D366]"></span> from Our Students
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.12 }}
                            className="text-gray-500 max-w-xl mx-auto text-base"
                        >
                            Unfiltered moments of gratitude shared directly by our students and parents on WhatsApp.
                        </motion.p>
                    </div>

                    {/* Image grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 space-y-3"
                    >
                        {waImages.map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.04 }}
                                className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
                                onClick={() => openLightbox(i)}
                            >
                                <img
                                    src={src}
                                    alt={`WhatsApp testimonial ${i + 1}`}
                                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                    <span className="text-white text-xs font-semibold">View full message</span>
                                </div>
                                {/* WhatsApp icon badge */}
                                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.083.534 4.043 1.468 5.75L0 24l6.395-1.676A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.882 9.882 0 01-5.038-1.382l-.361-.214-3.737.979 1.005-3.643-.235-.374A9.861 9.861 0 012.118 12C2.118 6.51 6.51 2.118 12 2.118c5.49 0 9.882 4.392 9.882 9.882 0 5.49-4.392 9.882-9.882 9.882z" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mt-16">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                        <div className="flex items-center gap-2 text-gray-400 text-sm font-medium shrink-0">
                            <Quote size={14} />
                            And many more below
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                    </div>
                </div>
            </section>

            {/* ── Google Reviews ── */}
            <section
                className="py-20 relative overflow-hidden"
                style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)' }}
            >
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-white border border-amber-200 text-amber-700 px-4 py-2 rounded-full text-sm font-bold mb-5 shadow-sm"
                        >
                            <Star size={13} className="fill-amber-400 text-amber-400" />
                            133+ Verified Google Reviews
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.07 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0A1628] mb-4"
                            style={{ letterSpacing: '-0.02em' }}
                        >
                            What Our Students &amp; Parents{' '}
                            <ShinyText text="Say About Us" color="#059669" shineColor="#60A5FA" speed={3} spread={120} />
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.12 }}
                            className="text-gray-500 max-w-2xl mx-auto text-base"
                        >
                            Real feedback from our community across Sharjah and the UAE. Every review is genuine and unedited.
                        </motion.p>
                    </div>

                    {/* Scrolling columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_4%,black_96%,transparent)] max-h-[1200px] overflow-hidden">
                        <TestimonialsColumn testimonials={col1} duration={35} />
                        <TestimonialsColumn testimonials={col2} className="hidden md:block" duration={40} />
                        <TestimonialsColumn testimonials={col3} className="hidden lg:block" duration={37} />
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-black text-[#0A1628] mb-4" style={{ letterSpacing: '-0.02em' }}>
                            Ready to Join Our Community?
                        </h2>
                        <p className="text-gray-500 mb-8 text-base leading-relaxed">
                            Experience the Aura difference. Book a free trial class and see why hundreds of students and parents recommend us.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5"
                            >
                                Book Free Trial
                            </Link>
                            <a
                                href="https://www.google.com/search?sca_esv=231828c7d9589dfc&sxsrf=ANbL-n7BbGrDffHHklwHgw0IHz44OqWPiQ:1773737195157&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOa3byoy-HzAVI17JsKBRtxeFIbHrtJWEeYoEzU8LgNbCDMAdTc4OyYPbxhnGaho9Ios2ue1f4iL6s0kTRa0sbXFJwg5w&q=Aura+Academia+Reviews&sa=X&ved=2ahUKEwizvMT7xaaTAxXQUaQEHc8qBX8Q0bkNegQIPhAH&biw=1440&bih=736&dpr=2#lrd=0x3e5f5b3e4586eb77:0x8c5cdece7a140628,3,,,,"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-emerald-300 text-gray-700 hover:text-emerald-600 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <Star size={16} className="fill-amber-400 text-amber-400" />
                                Leave a Review
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Lightbox ── */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <Lightbox
                        images={waImages}
                        index={lightboxIndex}
                        onClose={closeLightbox}
                        onPrev={prevImage}
                        onNext={nextImage}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Testimonials;
