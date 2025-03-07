import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";
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
    <div className="min-h-screen pt-20 pb-16" style={{ backgroundColor: colors.background.main }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.text.primary }}>
            Get in <span style={{ color: colors.primary.light }}>Touch</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text.secondary }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {/* Location Card */}
              <div className="p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
                   style={{ 
                     backgroundColor: colors.background.secondary,
                     border: '1px solid rgba(255, 255, 255, 0.1)'
                   }}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: colors.primary.main }}>
                    <FaMapMarkerAlt className="w-6 h-6" style={{ color: colors.text.primary }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.primary }}>Our Location</h3>
                    <p style={{ color: colors.text.secondary }}>123 Education Street, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
                   style={{ 
                     backgroundColor: colors.background.secondary,
                     border: '1px solid rgba(255, 255, 255, 0.1)'
                   }}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: colors.primary.main }}>
                    <FaPhone className="w-6 h-6" style={{ color: colors.text.primary }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.primary }}>Phone Number</h3>
                    <p style={{ color: colors.text.secondary }}>+880 1234-567890</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
                   style={{ 
                     backgroundColor: colors.background.secondary,
                     border: '1px solid rgba(255, 255, 255, 0.1)'
                   }}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: colors.primary.main }}>
                    <FaEnvelope className="w-6 h-6" style={{ color: colors.text.primary }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.primary }}>Email Address</h3>
                    <p style={{ color: colors.text.secondary }}>info@actech.edu.bd</p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
                   style={{ 
                     backgroundColor: colors.background.secondary,
                     border: '1px solid rgba(255, 255, 255, 0.1)'
                   }}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: colors.primary.main }}>
                    <FaClock className="w-6 h-6" style={{ color: colors.text.primary }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.primary }}>Working Hours</h3>
                    <p style={{ color: colors.text.secondary }}>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-xl shadow-lg"
                 style={{ 
                   backgroundColor: colors.background.secondary,
                   border: '1px solid rgba(255, 255, 255, 0.1)'
                 }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-offset-2 transition-all duration-300"
                      style={{ 
                        backgroundColor: colors.background.main,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: colors.text.primary
                      }}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-offset-2 transition-all duration-300"
                      style={{ 
                        backgroundColor: colors.background.main,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: colors.text.primary
                      }}
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-offset-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: colors.background.main,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: colors.text.primary
                    }}
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-offset-2 transition-all duration-300 resize-none"
                    style={{ 
                      backgroundColor: colors.background.main,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: colors.text.primary
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                      submitted ? 'bg-green-600' : ''
                    }`}
                    style={{ 
                      backgroundColor: submitted ? undefined : colors.primary.main,
                      color: colors.text.primary
                    }}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                    ) : submitted ? (
                      <span>Message Sent Successfully!</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </>
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
          box-shadow: 0 0 0 2px ${colors.primary.main};
        }
      `}</style>
    </div>
  );
};

export default Contact;
