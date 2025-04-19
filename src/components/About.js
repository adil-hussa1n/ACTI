import React from "react";
import { FaGraduationCap, FaUsers, FaLaptopCode, FaChalkboardTeacher, FaCertificate } from "react-icons/fa";
import { BsAward } from "react-icons/bs";
import { colors } from "../constants/colors";

const About = () => {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden" style={{ backgroundColor: colors.background.main }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-bondi-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-bondi-blue-400/5 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjMDZhY2Q0IiBmaWxsLW9wYWNpdHk9Ii4wMiIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBmaWxsPSIjMDZhY2Q0IiBmaWxsLW9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-bondi-blue-500/20 border border-bondi-blue-500/30 mb-4">
            <p className="text-sm font-medium text-bondi-blue-200">Our Story</p>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-bondi-blue-100 bg-clip-text text-transparent">
            About <span className="text-bondi-blue-300">AC Tech Institute</span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-bondi-blue-100">
            We are a premier tech institute dedicated to offering high-quality courses in technology. 
            Our mission is to empower students with real-world skills that drive innovation and success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
               style={{ 
                 backgroundColor: colors.background.secondary,
                 borderTop: `1px solid ${colors.border.light}30`,
                 borderLeft: `1px solid ${colors.border.light}30`,
               }}>
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-bondi-blue-500/0 to-bondi-blue-500/0 group-hover:from-bondi-blue-500/10 group-hover:to-bondi-blue-400/5 transition-all duration-500"></div>
            
            {/* Icon Container */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-bondi-blue-500/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center relative z-10 bg-gradient-to-br from-bondi-blue-600 to-bondi-blue-800 group-hover:from-bondi-blue-500 group-hover:to-bondi-blue-700 transition-colors duration-500 shadow-lg shadow-bondi-blue-600/20">
                <FaChalkboardTeacher className="text-3xl text-white" />
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-bondi-blue-200 transition-colors duration-300">Expert Faculty</h3>
            <p className="leading-relaxed text-bondi-blue-100">Learn from industry professionals with years of real-world experience who are passionate about teaching and mentoring the next generation of tech talent.</p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
               style={{ 
                 backgroundColor: colors.background.secondary,
                 borderTop: `1px solid ${colors.border.light}30`,
                 borderLeft: `1px solid ${colors.border.light}30`,
               }}>
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-bondi-blue-500/0 to-bondi-blue-500/0 group-hover:from-bondi-blue-500/10 group-hover:to-bondi-blue-400/5 transition-all duration-500"></div>
            
            {/* Icon Container */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-bondi-blue-500/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center relative z-10 bg-gradient-to-br from-bondi-blue-600 to-bondi-blue-800 group-hover:from-bondi-blue-500 group-hover:to-bondi-blue-700 transition-colors duration-500 shadow-lg shadow-bondi-blue-600/20">
                <FaUsers className="text-3xl text-white" />
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-bondi-blue-200 transition-colors duration-300">Diverse Community</h3>
            <p className="leading-relaxed text-bondi-blue-100">Join a vibrant and inclusive global network of learners and professionals where collaboration and knowledge sharing create opportunities for growth and innovation.</p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
               style={{ 
                 backgroundColor: colors.background.secondary,
                 borderTop: `1px solid ${colors.border.light}30`,
                 borderLeft: `1px solid ${colors.border.light}30`,
               }}>
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-bondi-blue-500/0 to-bondi-blue-500/0 group-hover:from-bondi-blue-500/10 group-hover:to-bondi-blue-400/5 transition-all duration-500"></div>
            
            {/* Icon Container */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-bondi-blue-500/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center relative z-10 bg-gradient-to-br from-bondi-blue-600 to-bondi-blue-800 group-hover:from-bondi-blue-500 group-hover:to-bondi-blue-700 transition-colors duration-500 shadow-lg shadow-bondi-blue-600/20">
                <FaLaptopCode className="text-3xl text-white" />
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-bondi-blue-200 transition-colors duration-300">Practical Learning</h3>
            <p className="leading-relaxed text-bondi-blue-100">Engage in hands-on projects and real-world applications that develop practical skills employers value, preparing you for immediate success in the workplace.</p>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
               style={{ 
                 backgroundColor: colors.background.secondary,
                 borderTop: `1px solid ${colors.border.light}30`,
                 borderLeft: `1px solid ${colors.border.light}30`,
               }}>
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-bondi-blue-500/0 to-bondi-blue-500/0 group-hover:from-bondi-blue-500/10 group-hover:to-bondi-blue-400/5 transition-all duration-500"></div>
            
            {/* Icon Container */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-bondi-blue-500/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center relative z-10 bg-gradient-to-br from-bondi-blue-600 to-bondi-blue-800 group-hover:from-bondi-blue-500 group-hover:to-bondi-blue-700 transition-colors duration-500 shadow-lg shadow-bondi-blue-600/20">
                <FaCertificate className="text-3xl text-white" />
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-bondi-blue-200 transition-colors duration-300">Industry Certification</h3>
            <p className="leading-relaxed text-bondi-blue-100">Earn industry-recognized certifications that validate your skills and knowledge, enhancing your credibility and marketability to potential employers.</p>
          </div>

          {/* Card 5 */}
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
               style={{ 
                 backgroundColor: colors.background.secondary,
                 borderTop: `1px solid ${colors.border.light}30`,
                 borderLeft: `1px solid ${colors.border.light}30`,
               }}>
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-bondi-blue-500/0 to-bondi-blue-500/0 group-hover:from-bondi-blue-500/10 group-hover:to-bondi-blue-400/5 transition-all duration-500"></div>
            
            {/* Icon Container */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-bondi-blue-500/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center relative z-10 bg-gradient-to-br from-bondi-blue-600 to-bondi-blue-800 group-hover:from-bondi-blue-500 group-hover:to-bondi-blue-700 transition-colors duration-500 shadow-lg shadow-bondi-blue-600/20">
                <FaGraduationCap className="text-3xl text-white" />
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-bondi-blue-200 transition-colors duration-300">Flexible Learning</h3>
            <p className="leading-relaxed text-bondi-blue-100">Access courses on your schedule with our flexible learning options, allowing you to balance education with work and personal commitments.</p>
          </div>

          {/* Card 6 */}
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
               style={{ 
                 backgroundColor: colors.background.secondary,
                 borderTop: `1px solid ${colors.border.light}30`,
                 borderLeft: `1px solid ${colors.border.light}30`,
               }}>
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-bondi-blue-500/0 to-bondi-blue-500/0 group-hover:from-bondi-blue-500/10 group-hover:to-bondi-blue-400/5 transition-all duration-500"></div>
            
            {/* Icon Container */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-bondi-blue-500/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center relative z-10 bg-gradient-to-br from-bondi-blue-600 to-bondi-blue-800 group-hover:from-bondi-blue-500 group-hover:to-bondi-blue-700 transition-colors duration-500 shadow-lg shadow-bondi-blue-600/20">
                <BsAward className="text-3xl text-white" />
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-bondi-blue-200 transition-colors duration-300">Career Support</h3>
            <p className="leading-relaxed text-bondi-blue-100">Benefit from career counseling, job placement assistance, and networking opportunities that help you transition from learning to earning in your chosen field.</p>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-bondi-blue-800/50 to-bondi-blue-900/50 p-8 rounded-2xl shadow-lg border border-bondi-blue-500/20 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -inset-1/2 bg-bondi-blue-500/5 blur-3xl rounded-full"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-bondi-blue-100 leading-relaxed mb-4">
              At AC Tech Institute, we are committed to providing accessible, high-quality education that empowers individuals to achieve their professional goals and contribute meaningfully to the technological advancement of society.
            </p>
            <p className="text-bondi-blue-100 leading-relaxed">
              Through innovative teaching methods, industry partnerships, and a supportive learning environment, we strive to be the bridge that connects aspiring professionals with the skills they need for the careers they want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
