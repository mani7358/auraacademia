import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ChevronDown } from 'lucide-react';
import Anthropic from '@anthropic-ai/sdk';

// ── Knowledge base built entirely from website content ───────────
const SYSTEM_PROMPT = `You are a friendly support assistant for Aura Academia, a tuition centre in Sharjah, UAE. Answer questions accurately using only the information below. Never invent information not listed here.

RESPONSE FORMATTING RULES:
- Write naturally and conversationally, like a helpful staff member would speak
- Use **bold** for key details: fees, phone numbers, names, important terms
- Use bullet points (start line with "- ") when listing 3 or more items
- Use a short header (start line with "## ") only when the answer has clearly separate sections
- For simple questions (location, hours, etc.), reply in 1–2 natural sentences — no bullets needed
- For complex questions (courses, fees, schedules), use structured formatting so it's easy to scan
- Always end responses about enrolment or pricing with a warm invitation to get in touch

ABOUT AURA ACADEMIA
- Founded: 2018 in Abushagara, Sharjah
- 2,000+ students mentored across 7+ years
- 100% pass rate across all boards
- Tagline: "Creating an Aura of Excellence in Education"
- Dedicated to personalised, high-quality tutoring for CBSE, ICSE/ISC, Cambridge (IGCSE/AS/A Level) and competitive entrance exams

CONTACT & LOCATION
- Centre 1: Tower A, 803, Al Rayyan Complex, Al-Nahda, Sharjah, UAE
- Centre 2: 16, First Floor, City Tower, Near Viva Super Market, Abushagara, Sharjah, UAE
- Phone: +971 585755286 | +971 65693738
- WhatsApp: +971 585755286
- Email: aurafirstscience@gmail.com
- Hours: Monday–Sunday 3:30 PM – 9:00 PM

COURSES (all classes are offline/in-person; contact us for fee details)

CBSE — Grade 8
  Mathematics: Mon & Wed 4:00–5:30 PM, Sat 10:00–11:30 AM
  Science (Physics, Chemistry, Biology): Tue & Thu 4:00–5:30 PM, Sat 2:00–3:30 PM
  Topics: Algebra, Geometry, Mensuration, Data Handling, Scientific Methods, Lab Experiments

CBSE — Grade 9
  Mathematics: Mon & Wed 5:45–7:15 PM, Sun 10:00–11:30 AM
  Science: Tue & Thu 5:45–7:15 PM, Sun 2:00–3:30 PM
  Topics: Polynomials, Coordinate Geometry, Trigonometry, Statistics, Motion & Force, Atoms & Molecules, Cell Structure

CBSE — Grade 10 (Board Exam Special)
  Mathematics: Mon, Wed & Fri 4:00–6:00 PM, Sat 10:00 AM–1:00 PM
  Science: Tue, Thu & Sat 4:00–6:00 PM, Sun 10:00 AM–12:00 PM
  Includes: previous 10 years papers, chapter-wise test series, scoring strategy sessions

CBSE — Grade 11
  Mathematics: Mon, Wed & Fri 6:15–8:15 PM, Sun 9:00 AM–12:00 PM
  Science (PCB/PCM): Tue, Thu & Sat 6:15–8:30 PM, Sun 2:00–5:00 PM
  Topics: Calculus, 3D Geometry, Complex Numbers, Physics, Chemistry, Biology/Computer Science

CBSE — Grade 12 (Board & JEE/NEET)
  Mathematics: Daily 3:00–5:30 PM, Sun 9:00 AM–1:00 PM
  Science: Daily 3:00–6:00 PM, Sun 2:00–6:00 PM

ICSE (Indian Certificate of Secondary Education, Grade 8–10) / ISC (Grade 11–12)
  Mathematics: Mon & Wed 4:00–5:30 PM (Grade 8–9), Mon/Wed/Fri 4:00–6:00 PM (Grade 10), Mon/Wed/Fri 6:15–8:15 PM (Grade 11–12)
  Science (Physics, Chemistry, Biology): Tue & Thu 4:00–5:30 PM (Grade 8–9), Tue/Thu/Sat 4:00–6:00 PM (Grade 10), Tue/Thu/Sat 6:15–8:30 PM (Grade 11–12)
  Focus: ICSE/ISC board syllabus, previous year papers, practical exam prep, Grade A strategies

IGCSE O Level (Cambridge, equivalent to Grade 9–10)
  Mathematics: Mon & Wed 4:30–6:00 PM, Sat 10:00–11:30 AM
  Sciences (Physics, Chemistry, Biology): Tue & Thu 4:30–6:00 PM, Sat 12:00–1:30 PM
  Focus: Cambridge syllabus, past papers, Grade A* strategies

AS Level (Cambridge, Grade 11)
  Mathematics: Mon, Wed & Fri 5:00–7:00 PM, Sun 9:00–11:00 AM
  Sciences: Tue, Thu & Sat 5:00–7:30 PM, Sun 2:00–5:00 PM

A Level (Cambridge, Grade 12 — university entry)
  Mathematics: Mon, Wed & Fri 3:00–5:30 PM, Sun 9:00 AM–12:00 PM
  Sciences: Daily 3:00–6:00 PM, Sun 2:00–6:00 PM

JEE Main & Advanced (engineering entrance)
  Daily 3:00–7:00 PM + weekend full-day test series
  Subjects: Physics, Chemistry, Mathematics
  Includes: daily practice problems, weekly mock tests, previous 15 years papers, college counselling

NEET (medical entrance)
  Daily 3:00–7:00 PM + weekend full-day test series
  Subjects: Physics, Chemistry, Biology (Botany & Zoology)
  Includes: NCERT-based teaching, biology diagram practice, previous year papers, medical college counselling

NEET Crash Course (3-month intensive for Class 12 & repeaters)
  Daily 3:00–7:00 PM + weekend full-day mock tests
  Focus: rapid high-yield revision, daily mock tests, NCERT mastery, time management strategies

KEAM (Kerala Engineering Architecture Medical entrance)
  Daily 3:00–7:00 PM + weekend full-day mock tests
  Subjects: Physics, Chemistry, Mathematics
  Includes: 15+ years previous papers, weekly mock tests, performance analysis, Kerala university admission counselling

FACULTY
- Sharanya Senthil Prabhu | Administrator & Student Counsellor
  First point of contact for all admissions, counselling, and parent communication. Guides students and families through every step of their Aura journey.
- Ishvarya | Medical Sciences & Chemistry | 15+ years experience | M.Sc. Chemistry, B.Ed.
  Expert in Organic Chemistry, Medical Sciences, and NEET Biology. Trained numerous NEET qualifiers with a concept-driven approach.
- Shaik Shafee | Physics | 15+ years experience | M.Sc. Physics
  Renowned for making complex Physics concepts clear and exam-ready. Expert in JEE and NEET Physics preparation.
- Raini Sreekanth | Mathematics | 15+ years experience | M.Sc. Mathematics
  Highly accomplished Mathematics educator. Expert in Calculus, Algebra, JEE Mathematics, and A-Level Mathematics.
- Meena | Science | 7 years experience | B.Sc., B.Ed.
  Enthusiastic Science educator specialising in foundational Physics, Chemistry, and Biology for Grades 8–10.
- Rithik Tatia | Support Teacher | 3+ years experience | Master's Degree in Pharmacology and Chemistry
  Works alongside the subject faculty on Chemistry and Biology: doubt-clearing sessions, guided practice papers, and board exam revision for Grades 8–12.

COMING SOON
- New subjects launching soon: French, Economics, Business Studies, and Accountancy. Batch dates and fees are not announced yet; invite interested families to register their interest by phone, WhatsApp, or the contact form.

PSYCHOMETRIC TESTING
- Free for all enrolled Aura Academia students
- 90-minute online assessment covering aptitude, interest, personality, and learning style
- Provides a 20+ page personalised report
- Followed by a 1-on-1 counselling session with certified career counsellors
- Helps with: stream selection (Science/Commerce/Arts), curriculum fit, subject choices, career clusters, study techniques, university mapping

MILESTONES
- 2018: Founded with 3 teachers and 15 students, CBSE Science focus
- 2019: Added Cambridge IGCSE & A-Level programmes
- 2020: Successfully transitioned to hybrid model during pandemic
- 2021: Crossed 100 active students, first 100% board topper record
- 2023: Launched dedicated psychometric and career counselling wing
- 2024: Serving 500+ students per year with state-of-the-art facilities

FREE TRIAL: Available for all new students. Encourage the user to book via the Contact page or WhatsApp/call +971 585755286.

RULES:
- If asked about something not covered above, say you don't have that information and suggest they call or WhatsApp.
- Never make up fees, schedules, or teacher details.
- For general enquiries, always end with an invitation to contact the team directly.
- Do not use triple backticks, code blocks, or markdown tables — plain text with bold and bullets only.`;

const client = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
});

const QUICK_REPLIES = [
    'What courses do you offer?',
    'What are the fees?',
    'Where are you located?',
    'How do I enrol?',
];

// ── Inline bold parser (**text** → <strong>) ─────────────────────
const parseInline = (text) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
        i % 2 === 1
            ? <strong key={i} className="font-semibold text-gray-900">{part}</strong>
            : part
    );
};

// ── Message renderer (handles ##, bullets, paragraphs) ────────────
const renderMessage = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let bulletBuffer = [];

    const flushBullets = (key) => {
        if (bulletBuffer.length === 0) return;
        elements.push(
            <ul key={`ul-${key}`} className="space-y-1 my-1">
                {bulletBuffer.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-[7px] shrink-0" />
                        <span className="leading-relaxed">{parseInline(b)}</span>
                    </li>
                ))}
            </ul>
        );
        bulletBuffer = [];
    };

    lines.forEach((raw, i) => {
        const line = raw.trim();
        if (!line) { flushBullets(i); return; }

        if (line.startsWith('## ')) {
            flushBullets(i);
            elements.push(
                <p key={i} className="font-bold text-[#0A1628] text-xs uppercase tracking-wide mt-3 mb-0.5 first:mt-0">
                    {line.slice(3)}
                </p>
            );
        } else if (line.startsWith('- ') || line.startsWith('• ')) {
            bulletBuffer.push(line.startsWith('- ') ? line.slice(2) : line.slice(2));
        } else {
            flushBullets(i);
            elements.push(
                <p key={i} className="leading-relaxed">
                    {parseInline(line)}
                </p>
            );
        }
    });
    flushBullets('end');

    return <div className="space-y-1 text-sm">{elements}</div>;
};

// ── Typing indicator ─────────────────────────────────────────────
const TypingIndicator = () => (
    <div className="flex items-end gap-2">
        <div className="w-6 h-6 rounded-full bg-[#0A1628] flex items-center justify-center text-white text-[10px] font-bold shrink-0">A</div>
        <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1">
            {[0, 0.15, 0.3].map((d, i) => (
                <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400"
                    animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: d }} />
            ))}
        </div>
    </div>
);

// ── Main component ───────────────────────────────────────────────
const Chatbot = () => {
    const [isOpen, setIsOpen]         = useState(false);
    const [messages, setMessages]     = useState([]);
    const [input, setInput]           = useState('');
    const [isLoading, setIsLoading]   = useState(false);
    const [hasError, setHasError]     = useState(false);
    const bottomRef = useRef(null);
    const inputRef  = useRef(null);
    const opened    = useRef(false);

    // Show greeting on first open
    useEffect(() => {
        if (isOpen && !opened.current) {
            opened.current = true;
            setMessages([{
                role: 'assistant',
                content: 'Hello! Welcome to Aura Academia. How can I help you today?',
            }]);
        }
        if (isOpen) setTimeout(() => inputRef.current?.focus(), 350);
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const send = async (text) => {
        const trimmed = text.trim();
        if (!trimmed || isLoading) return;
        setInput('');
        setHasError(false);

        const next = [...messages, { role: 'user', content: trimmed }];
        setMessages(next);
        setIsLoading(true);

        try {
            const res = await client.messages.create({
                model: 'claude-haiku-4-5-20251001',
                max_tokens: 600,
                system: SYSTEM_PROMPT,
                messages: next.map(m => ({ role: m.role, content: m.content })),
            });
            const reply = res.content[0]?.text ?? 'Sorry, something went wrong. Please call us on +971 585755286.';
            setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
        } catch {
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const showQuickReplies = messages.length <= 1 && !isLoading;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

            {/* ── Chat window ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.97 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-3 w-[420px] sm:w-[460px] flex flex-col rounded-2xl overflow-hidden"
                        style={{
                            maxHeight: 'min(680px, calc(100vh - 110px))',
                            boxShadow: '0 8px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.08)',
                            background: '#ffffff',
                        }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 shrink-0"
                            style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0f2245 100%)' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white font-black text-sm shrink-0">A</div>
                                <div>
                                    <p className="text-white font-bold text-sm leading-tight">Aura Academia</p>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        <p className="text-gray-400 text-[11px]">Support Team</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                                <ChevronDown size={15} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div data-lenis-prevent className="flex-1 overflow-y-auto px-5 py-5 space-y-4 min-h-[320px] bg-[#F7F8FA]">
                            {messages.map((msg, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="w-6 h-6 rounded-full bg-[#0A1628] flex items-center justify-center text-white text-[10px] font-bold shrink-0">A</div>
                                    )}
                                    <div className={`max-w-[82%] px-4 py-3 rounded-2xl ${
                                        msg.role === 'user'
                                            ? 'bg-[#0A1628] text-white text-sm leading-relaxed rounded-br-sm'
                                            : 'bg-white text-gray-700 border border-gray-200 rounded-bl-sm shadow-sm'
                                    }`}>
                                        {msg.role === 'user' ? msg.content : renderMessage(msg.content)}
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && <TypingIndicator />}

                            {hasError && (
                                <p className="text-center text-xs text-red-500 bg-red-50 border border-red-100 rounded-xl px-3 py-2 mx-2">
                                    Unable to connect. Please call +971 585755286 or WhatsApp us.
                                </p>
                            )}
                            <div ref={bottomRef} />
                        </div>

                        {/* Quick replies */}
                        <AnimatePresence>
                            {showQuickReplies && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="px-4 pt-3 pb-2 bg-white border-t border-gray-100 flex flex-wrap gap-1.5"
                                >
                                    {QUICK_REPLIES.map((q, i) => (
                                        <button key={i} onClick={() => send(q)}
                                            className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 bg-white hover:border-[#0A1628] hover:text-[#0A1628] transition-colors font-medium">
                                            {q}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Input */}
                        <form onSubmit={e => { e.preventDefault(); send(input); }}
                            className="flex items-center gap-2 px-4 py-3 bg-white border-t border-gray-100 shrink-0">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                placeholder="Type your message..."
                                disabled={isLoading}
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors disabled:opacity-50"
                            />
                            <button type="submit" disabled={!input.trim() || isLoading}
                                className="w-9 h-9 rounded-xl bg-[#0A1628] hover:bg-[#0f2245] flex items-center justify-center text-white shrink-0 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                                <Send size={14} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Toggle button ── */}
            <motion.button
                onClick={() => setIsOpen(o => !o)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-13 h-13 rounded-full bg-[#0A1628] hover:bg-[#0f2245] flex items-center justify-center text-white shadow-lg transition-colors"
                style={{ width: '52px', height: '52px' }}
                aria-label="Open chat"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                            <X size={20} />
                        </motion.div>
                    ) : (
                        <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                            <MessageCircle size={20} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default Chatbot;
