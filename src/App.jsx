import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { initPerformanceMonitoring } from './utils/webVitals';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetails = lazy(() => import('./pages/CourseDetails'));
const Faculty = lazy(() => import('./pages/Faculty'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Psychometric = lazy(() => import('./pages/Psychometric'));
const Contact = lazy(() => import('./pages/Contact'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Partner = lazy(() => import('./pages/Partner'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Components (not lazy loaded as they're needed immediately)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import SplashScreen from './components/SplashScreen';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Initialize performance monitoring
    initPerformanceMonitoring();

    // Keep splash screen centered for 2s (allows entry animation to finish and hold), then trigger animation to navbar
    const timer1 = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000);

    // Wait for the layout animation to complete before showing the content deeply
    const timer2 = setTimeout(() => {
      setIsContentVisible(true);
    }, 3200); // 2000 + 1200ms layout transition

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <LayoutGroup>
          <SplashScreen isVisible={isSplashVisible} />
          <div className="flex flex-col min-h-screen relative">
            <Navbar isSplashVisible={isSplashVisible} isContentVisible={isContentVisible} />

            <motion.main
              className="flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: isContentVisible ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center bg-white">
                  <div className="text-center">
                    <LoadingSpinner size="lg" />
                    <p className="mt-4 text-gray-600 font-medium">Loading...</p>
                  </div>
                </div>
              }>
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/partner" element={<Partner />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/courses/:courseId" element={<CourseDetails />} />
                    <Route path="/faculty" element={<Faculty />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/psychometric" element={<Psychometric />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/reviews" element={<Navigate to="/testimonials" replace />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </motion.main>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isContentVisible ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Footer />
              <Chatbot />
              <WhatsAppButton />
            </motion.div>
          </div>
        </LayoutGroup>
      </SmoothScroll>
    </Router>
  );
}

export default App;
