import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaGithub, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCode, FaLinkedin, FaGraduationCap, FaArrowRight, FaFacebook, FaYoutube } from 'react-icons/fa';
import { colors } from '../constants/colors';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-bg-main to-bg-secondary text-white py-16 border-t border-brand-800/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-purple/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl animate-pulse-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjM0I4MkY2IiBmaWxsLW9wYWNpdHk9Ii4xMiIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBmaWxsPSIjM0I4MkY2IiBmaWxsLW9wYWNpdHk9Ii4xMiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        {/* Wave Decoration */}
        <div className="absolute top-0 left-0 w-full h-12 bg-brand-800" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 70%)' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 relative z-10">
          {/* About Section */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className="flex items-center bg-gradient-to-r from-brand-600 to-accent-blue rounded-lg p-2 text-white shadow-brand mr-3 group-hover:shadow-accent transition-all duration-300">
                <FaGraduationCap className="mr-1" />
                <span>AC</span>
              </div>
              <span className="bg-gradient-to-r from-white to-brand-400 bg-clip-text text-transparent font-extrabold">Tech Institute</span>
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Empowering minds through quality education and innovative learning experiences. Join our community of learners and transform your future with cutting-edge skills.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center hover:bg-accent-blue transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-accent">
                <FaTwitter className="w-4 h-4 text-brand-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center hover:bg-accent-purple transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-accent-purple">
                <FaInstagram className="w-4 h-4 text-brand-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center hover:bg-accent-blue transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-accent">
                <FaLinkedin className="w-4 h-4 text-brand-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center hover:bg-accent-pink transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-accent-pink">
                <FaFacebook className="w-4 h-4 text-brand-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center hover:bg-accent-red transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-accent-red">
                <FaYoutube className="w-4 h-4 text-brand-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-white font-semibold text-lg mb-4 pb-2 border-b border-white/30">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group">
                  <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mr-2 transition-all duration-300 group-hover:bg-brand-600 group-hover:shadow-brand">
                    <FaArrowRight className="w-3 h-3 text-brand-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="border-b border-transparent group-hover:border-white pb-1 transition-all duration-300">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group">
                  <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mr-2 transition-all duration-300 group-hover:bg-brand-600 group-hover:shadow-brand">
                    <FaArrowRight className="w-3 h-3 text-brand-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="border-b border-transparent group-hover:border-white pb-1 transition-all duration-300">About</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group">
                  <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mr-2 transition-all duration-300 group-hover:bg-brand-600 group-hover:shadow-brand">
                    <FaArrowRight className="w-3 h-3 text-brand-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="border-b border-transparent group-hover:border-white pb-1 transition-all duration-300">Courses</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group">
                  <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mr-2 transition-all duration-300 group-hover:bg-brand-600 group-hover:shadow-brand">
                    <FaArrowRight className="w-3 h-3 text-brand-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="border-b border-transparent group-hover:border-white pb-1 transition-all duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-white font-semibold text-lg mb-4 pb-2 border-b border-white/30">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center mr-3 transition-all duration-300 group-hover:bg-brand-600 group-hover:shadow-brand">
                  <FaMapMarkerAlt className="w-4 h-4 text-white group-hover:text-brand-700 transition-colors duration-300" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors duration-300 mt-1">123 Education St, Learning City, Knowledge Country</span>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center mr-3 transition-all duration-300 group-hover:bg-brand-600 group-hover:shadow-brand">
                  <FaEnvelope className="w-4 h-4 text-white group-hover:text-brand-700 transition-colors duration-300" />
                </div>
                <a href="mailto:info@actech.edu" className="text-white/80 group-hover:text-white transition-colors duration-300 mt-1 border-b border-transparent group-hover:border-white">info@actech.edu</a>
              </li>
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center mr-3 transition-all duration-300 group-hover:bg-brand-600 group-hover:shadow-brand">
                  <FaPhone className="w-4 h-4 text-white group-hover:text-brand-700 transition-colors duration-300" />
                </div>
                <a href="tel:+15551234567" className="text-white/80 group-hover:text-white transition-colors duration-300 mt-1 border-b border-transparent group-hover:border-white">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-white font-semibold text-lg mb-4 pb-2 border-b border-white/30">Newsletter</h4>
            <p className="text-white/80 text-sm mb-4">Subscribe to our newsletter to get the latest updates.</p>
            <form className="space-y-3">
              <div className="relative overflow-hidden rounded-lg shadow-brand group focus-within:shadow-accent transition-all duration-300">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg bg-bg-main border border-brand-700 text-white placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none"></div>
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-3 bg-brand-600 text-white hover:bg-accent-purple hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center shadow-brand hover:shadow-accent-purple transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 font-semibold"
              >
                Subscribe
                <FaArrowRight className="ml-2 w-3 h-3 animate-bounce-slow" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-brand-800/50 text-sm text-brand-400 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="mb-4 md:mb-0 animate-fade-in">
            &copy; {new Date().getFullYear()} AC Tech Institute. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 animate-fade-in">
            <a href="#" className="hover:text-white transition-colors duration-300 relative group">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300 relative group">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300 relative group">
              Sitemap
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300 relative group">
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
        
        {/* Credit Section */}
        <div className="flex items-center justify-center mt-8 space-x-2 animate-fade-in">
          <div className="p-1.5 rounded-md bg-gradient-to-r from-brand-600 to-accent-blue">
            <FaCode className="w-3 h-3 text-white" />
          </div>
          <p className="text-brand-400 text-sm">
            Designed & Developed by{' '}
            <a 
              href="https://graffixinnovation.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-blue hover:text-accent-purple transition-colors duration-300 font-medium"
            >
              Graffix Innovation
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
