import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { colors } from "../constants/colors";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20 pb-16 relative overflow-hidden" style={{ backgroundColor: colors.background.main }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-bondi-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-bondi-blue-400/5 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjMDZhY2Q0IiBmaWxsLW9wYWNpdHk9Ii4wMiIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBmaWxsPSIjMDZhY2Q0IiBmaWxsLW9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <div className="inline-block px-4 py-1 rounded-full bg-bondi-blue-500/20 border border-bondi-blue-500/30 mb-4">
            <p className="text-sm font-medium text-bondi-blue-200">Contact Us</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-bondi-blue-100 bg-clip-text text-transparent">
            Get in <span className="text-bondi-blue-300">Touch</span>
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto text-bondi-blue-100">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {/* Location Card */}
              <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                   style={{ 
                     backgroundColor: colors.background.secondary,
                     borderTop: `1px solid ${colors.border.light}20`,
                     borderLeft: `1px solid ${colors.border.light}20`,
                   }}>
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-bondi-blue-500/0 to-bondi-blue-500/0 group-hover:from-bondi-blue-500/10 group-hover:to-bondi-blue-400/5 transition-all duration-500"></div>
                
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="p-3 rounded-full bg-gradient-to-br from-bondi-blue-600 to-bondi-blue-800 group-hover:from-bondi-blue-500 group-hover:to-bondi-blue-700 transition-colors duration-500 shadow-md">
                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-bondi-blue-200 transition-colors duration-300">Our Location</h3>
                    <p className="text-bondi-blue-100">123 Education Street, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                   style={{ 
                     backgroundColor: colors.background.secondary,
                     borderTop: `1px solid ${colors.border.light}20`,
                     borderLeft: `1px solid ${colors.border.light}20`,
                   }}>
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-bondi-blue-500/0 to-bondi-blue-500/0 group-hover:from-bondi-blue-500/10 group-hover:to-bondi-blue-400/5 transition-all duration-500"></div>
                
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="p-3 rounded-full bg-gradient-to-br from-bondi-blue-600 to-bondi-blue-800 group-hover:from-bondi-blue-500 group-hover:to-bondi-blue-700 transition-colors duration-500 shadow-md">
                    <FaPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-bondi-blue-200 transition-colors duration-300">Phone Number</h3>
                    <p className="text-bondi-blue-100">+880 1234-567890</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                   style={{ 
                     backgroundColor: colors.background.secondary,
                     borderTop: `1px solid ${colors.border.light}20`,
                     borderLeft: `1px solid ${colors.border.light}20`,
                   }}>
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-bondi-blue-500/0 to-bondi-blue-500/0 group-hover:from-bondi-blue-500/10 group-hover:to-bondi-blue-400/5 transition-all duration-500"></div>
                
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="p-3 rounded-full bg-gradient-to-br from-bondi-blue-600 to-bondi-blue-800 group-hover:from-bondi-blue-500 group-hover:to-bondi-blue-700 transition-colors duration-500 shadow-md">
                    <FaEnvelope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-bondi-blue-200 transition-colors duration-300">Email Address</h3>
                    <p className="text-bondi-blue-100">info@actech.edu.bd</p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                   style={{ 
                     backgroundColor: colors.background.secondary,
                     borderTop: `1px solid ${colors.border.light}20`,
                     borderLeft: `1px solid ${colors.border.light}20`,
                   }}>
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-bondi-blue-500/0 to-bondi-blue-500/0 group-hover:from-bondi-blue-500/10 group-hover:to-bondi-blue-400/5 transition-all duration-500"></div>
                
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="p-3 rounded-full bg-gradient-to-br from-bondi-blue-600 to-bondi-blue-800 group-hover:from-bondi-blue-500 group-hover:to-bondi-blue-700 transition-colors duration-500 shadow-md">
                    <FaClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-bondi-blue-200 transition-colors duration-300">Working Hours</h3>
                    <p className="text-bondi-blue-100">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-xl shadow-lg relative overflow-hidden"
                 style={{ 
                   backgroundColor: colors.background.secondary,
                   borderTop: `1px solid ${colors.border.light}20`,
                   borderLeft: `1px solid ${colors.border.light}20`,
                 }}>
              {/* Form Background Glow */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-bondi-blue-500/10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-bondi-blue-400/10 blur-3xl"></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-bondi-blue-200">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bondi-blue-500 focus:ring-offset-2 focus:ring-offset-bondi-blue-950 transition-all duration-300"
                      style={{ 
                        backgroundColor: colors.background.main,
                        border: `1px solid ${colors.border.light}30`,
                        color: colors.text.primary
                      }}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-bondi-blue-200">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bondi-blue-500 focus:ring-offset-2 focus:ring-offset-bondi-blue-950 transition-all duration-300"
                      style={{ 
                        backgroundColor: colors.background.main,
                        border: `1px solid ${colors.border.light}30`,
                        color: colors.text.primary
                      }}
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-bondi-blue-200">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bondi-blue-500 focus:ring-offset-2 focus:ring-offset-bondi-blue-950 transition-all duration-300"
                    style={{ 
                      backgroundColor: colors.background.main,
                      border: `1px solid ${colors.border.light}30`,
                      color: colors.text.primary
                    }}
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-bondi-blue-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bondi-blue-500 focus:ring-offset-2 focus:ring-offset-bondi-blue-950 transition-all duration-300 resize-none"
                    style={{ 
                      backgroundColor: colors.background.main,
                      border: `1px solid ${colors.border.light}30`,
                      color: colors.text.primary
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl ${submitted ? 'bg-bondi-blue-600' : 'bg-bondi-blue-600 hover:bg-bondi-blue-500'} text-white`}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                    ) : submitted ? (
                      <span className="flex items-center">
                        <FaCheckCircle className="mr-2" />
                        Message Sent Successfully!
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <span>Send Message</span>
                        <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        input:focus, textarea:focus {
          outline: none;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
