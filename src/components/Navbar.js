import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-b from-blue-900/95 to-blue-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      style={{ 
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
            <Link to="/" className="text-2xl font-bold text-white flex items-center space-x-2">
              <span className="bg-blue-300 text-blue-950 px-2 py-1 rounded-lg">AC</span>
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">Tech Institute</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <button
                onClick={() => scrollToSection('home')}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-800/30 transition-all duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-800/30 transition-all duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-800/30 transition-all duration-300"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 bg-blue-600/20"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-blue-800/30 focus:outline-none transition-all duration-300"
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-blue-900/95 to-blue-950/95 backdrop-blur-md border-b border-blue-800/50">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-blue-800/30 transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-blue-800/30 transition-all duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-blue-800/30 transition-all duration-300"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 bg-blue-600/20 mb-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
