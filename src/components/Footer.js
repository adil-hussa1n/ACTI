import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaGithub, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center space-x-2">
              <span className="bg-blue-300 text-blue-950 px-2 py-1 rounded-lg">AC</span>
              <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">Tech Institute</span>
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Empowering minds through quality education and innovative learning experiences.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="w-4 h-4 mr-2 text-blue-400" />
                123 Education Street, City
              </li>
              <li className="flex items-center text-gray-300">
                <FaEnvelope className="w-4 h-4 mr-2 text-blue-400" />
                info@actech.edu
              </li>
              <li className="flex items-center text-gray-300">
                <FaPhone className="w-4 h-4 mr-2 text-blue-400" />
                +1 234 567 890
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Newsletter</h4>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-lg bg-blue-800/30 border border-blue-800/50 focus:outline-none focus:border-blue-400 text-sm text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/30 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} AC Tech Institute. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-300 text-xs transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-blue-300 text-xs transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
          
          {/* Credit Section */}
          <div className="flex items-center justify-center mt-4 space-x-2">
            <FaCode className="w-3 h-3 text-blue-400" />
            <p className="text-gray-400 text-xs">
              Designed & Developed by{' '}
              <a 
                href="https://graffixinnovation.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 transition-colors duration-300 font-medium"
              >
                Graffix Innovation
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
