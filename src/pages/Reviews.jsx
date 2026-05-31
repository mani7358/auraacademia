import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TestimonialsColumn } from '../components/ui/testimonials-columns';
import SEO from '../components/SEO';
import ShinyText from '../components/text/ShinyText';

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
    // From Google Reviews
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
    // Additional reviews from homepage
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

// Split reviews into 3 columns for the scrolling layout
const col1 = allReviews.filter((_, i) => i % 3 === 0);
const col2 = allReviews.filter((_, i) => i % 3 === 1);
const col3 = allReviews.filter((_, i) => i % 3 === 2);

const Reviews = () => {
    return (
        <div className="bg-[#F7F8FA] min-h-screen">
            <SEO
                title="Reviews - Aura Academia | What Our Students Say"
                description="Read genuine reviews from students and parents about their experience at Aura Academia. 4.9 star rating with 130+ verified Google reviews."
                keywords="aura academia reviews, tuition centre sharjah reviews, student testimonials, parent reviews"
            />

            {/* Hero Header */}
            <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)' }}>
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.07) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-600 text-sm font-medium mb-8 transition-colors">
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>

                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold mb-5 shadow-sm">
                            <Shield size={13} className="text-emerald-500" />
                            Verified Google Reviews
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A1628] mb-4" style={{ letterSpacing: '-0.02em' }}>
                            What Our Students &amp; Parents{' '}
                            <ShinyText text="Say About Us" color="#059669" shineColor="#60A5FA" speed={3} spread={120} />
                        </h1>
                        <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-lg leading-relaxed">
                            Real feedback from our community of students and parents. We're proud of our 4.9-star rating across 130+ Google reviews.
                        </p>

                        {/* Rating summary */}
                        <div className="flex items-center justify-center gap-6 mt-8">
                            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-6 py-3 shadow-sm">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <span className="font-black text-[#0A1628] text-lg ml-1">4.9</span>
                                <span className="text-gray-400 text-sm">/5</span>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl px-6 py-3 shadow-sm text-center">
                                <span className="font-black text-[#0A1628] text-lg">133+</span>
                                <span className="text-gray-500 text-sm ml-2">Google Reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Grid — same auto-scrolling columns as homepage */}
            <section className="py-16 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_4%,black_96%,transparent)] max-h-[1200px] overflow-hidden">
                        <TestimonialsColumn testimonials={col1} duration={35} />
                        <TestimonialsColumn testimonials={col2} className="hidden md:block" duration={40} />
                        <TestimonialsColumn testimonials={col3} className="hidden lg:block" duration={37} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-black text-[#0A1628] mb-4">
                        Ready to Join Our Community?
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto mb-8">
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
                </div>
            </section>
        </div>
    );
};

export default Reviews;
