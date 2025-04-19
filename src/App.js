import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Courses from "./components/Courses";
import CourseModal from "./components/CourseModal";
import Contact from "./components/Contact";
import ImageSlider from "./components/ImageSlider";
import About from "./components/About";
import { FaArrowUp, FaGraduationCap } from 'react-icons/fa';
import { colors } from "./constants/colors";

function App() {
  const location = useLocation();
  const isCourseModal = location.pathname.includes('/courses/');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  
  const handleLoadingComplete = () => {
    setLoading(false);
  };
  
  // Scroll to top button and section detection functionality
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
      
      // Detect active section for navbar highlighting
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to section functionality
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };
  
  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-bg-main text-text-primary relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjM0I4MkY2IiBmaWxsLW9wYWNpdHk9Ii4wOCIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBmaWxsPSIjM0I4MkY2IiBmaWxsLW9wYWNpdHk9Ii4wOCIvPjwvZz48L3N2Zz4=')] opacity-30 pointer-events-none z-0"></div>
      
      {loading ? (
        <Preloader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
          
          <div>
            <Routes>
              <Route path="/" element={
                <div className="overflow-hidden">
                  {/* Home Section */}
                  <section id="home" className="relative bg-bg-main">
                    <Home />
                  </section>
                  
                  {/* Slider Section - with subtle background */}
                  <section id="slider" className="relative py-16 bg-gradient-to-b from-bg-main to-bg-secondary border-t border-brand-800/30">
                    <div className="container mx-auto px-4 animate-fade-in">
                      <div className="mb-10 text-center">
                        <div className="inline-block px-4 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 mb-4">
                          <p className="text-sm font-medium text-brand-400">Featured Highlights</p>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">Our <span className="text-brand-500">Campus Life</span></h2>
                        <p className="text-text-secondary max-w-2xl mx-auto font-medium">Explore our vibrant campus and student activities</p>
                      </div>
                      <ImageSlider />
                    </div>
                  </section>
                  
                  {/* About Section - with dark background for contrast */}
                  <section id="about" className="relative py-20 bg-bg-main border-t border-brand-800/30">
                    <About />
                  </section>
                  
                  {/* Courses Section - with subtle background */}
                  <section id="courses" className="relative py-20 bg-gradient-to-b from-bg-secondary to-bg-main border-t border-brand-800/30">
                    <Courses />
                  </section>
                  
                  {/* Contact Section */}
                  <section id="contact" className="relative py-20 bg-bg-main border-t border-brand-800/30">
                    <Contact />
                  </section>
                </div>
              } />
              <Route path="/courses/:id" element={<CourseModal />} />
            </Routes>
          </div>
          
          {!isCourseModal && <Footer />}
          
          {/* Scroll to top button */}
          <button 
            id="scroll-to-top"
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-gradient-to-r from-brand-600 to-accent-blue text-white p-3 rounded-full shadow-brand transition-all duration-300 hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-400 z-50 transform hover:-translate-y-1 ${showScrollButton ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-5 h-5" />
          </button>
          
          {/* Quick Contact Float Button */}
          <a 
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="fixed bottom-8 left-8 bg-gradient-to-r from-accent-purple to-accent-pink text-white p-3 rounded-full shadow-accent-purple transition-all duration-300 hover:shadow-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-purple z-50 transform hover:-translate-y-1 group"
            aria-label="Contact Us"
          >
            <FaGraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute left-full ml-2 px-2 py-1 rounded bg-accent-purple text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Contact Us</span>
          </a>
        </>
      )}
    </div>
  );
}



export default App;
