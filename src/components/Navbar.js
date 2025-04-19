import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGraduationCap, FaHome, FaInfoCircle, FaBook, FaEnvelope, FaUserPlus } from 'react-icons/fa';
import { colors } from '../constants/colors';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll event to change navbar appearance and hide on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Determine if scrolled past threshold for styling
      if (currentScrollPos > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide navbar when scrolling down, show when scrolling up
      const isScrolledDown = prevScrollPos < currentScrollPos;
      const isScrollingSignificantly = Math.abs(prevScrollPos - currentScrollPos) > 10;
      
      if (isScrollingSignificantly) {
        setVisible(!isScrolledDown || currentScrollPos < 100);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      
      if (isOpen && mobileMenu && !mobileMenu.contains(event.target) && 
          mobileMenuButton && !mobileMenuButton.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Function to handle navigation item click
  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  // Navigation items data
  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome className="mr-2" /> },
    { id: 'about', label: 'About', icon: <FaInfoCircle className="mr-2" /> },
    { id: 'courses', label: 'Courses', icon: <FaBook className="mr-2" /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope className="mr-2" /> },
  ];

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-bg-main/90 backdrop-blur-md border-b border-brand-800/30 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-600 to-accent-blue flex items-center justify-center shadow-brand group-hover:shadow-accent transition-all duration-300 transform group-hover:-translate-y-0.5">
                <div className="text-white font-bold text-lg">AC</div>
              </div>
            </div>
            <div className="ml-2 hidden sm:block">
              <span className="text-text-highlight text-xs uppercase tracking-wider font-medium">Tech Institute</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button 
                id={`desktop-nav-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center ${
                  activeSection === item.id 
                    ? 'bg-brand-600 text-white shadow-brand' 
                    : 'text-text-primary hover:bg-brand-500/20 hover:text-brand-400'
                }`}
              >
                {activeSection === item.id && <span className="mr-2">•</span>}
                {item.label}
              </button>
            ))}
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-accent-blue focus:outline-none transition-colors duration-300 hover:bg-brand-800/30"
              aria-label="Toggle menu"
            >
              <svg 
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} 
                stroke="currentColor" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} 
                stroke="currentColor" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-bg-secondary border-b border-brand-700/30 shadow-brand">
          {navItems.map((item, index) => (
            <button 
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 flex items-center animate-fade-in-left ${
                activeSection === item.id 
                  ? 'bg-brand-600 text-white' 
                  : 'text-text-primary hover:bg-brand-500/20 hover:text-brand-400'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.icon}
              {item.label}
              {activeSection === item.id && <span className="ml-auto text-white">•</span>}
            </button>
          ))}
          <button className="block w-full text-left px-4 py-3 bg-accent-purple text-white rounded-lg text-base font-semibold hover:bg-accent-pink transition-all duration-300 flex items-center animate-fade-in-up mt-2 shadow-accent-purple hover:shadow-accent-pink" style={{ animationDelay: '0.2s' }}>
            <FaUserPlus className="mr-2" />
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
