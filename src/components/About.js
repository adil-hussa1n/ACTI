import React from "react";
import { FaGraduationCap, FaUsers, FaLaptopCode } from "react-icons/fa";
import { BsAward } from "react-icons/bs";
import { colors } from "../constants/colors";

const About = () => {
  return (
    <div className="min-h-screen py-16" style={{ backgroundColor: colors.background.main }}>
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-5xl font-bold mb-6" style={{ color: colors.text.primary }}>
            About <span style={{ color: colors.primary.light }}>AC Tech Institute</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: colors.text.secondary }}>
            We are a premier tech institute offering high-quality courses in technology. 
            Our mission is to train students with real-world skills.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
               style={{ 
                 backgroundColor: colors.background.secondary,
                 border: `1px solid rgba(255, 255, 255, 0.1)`
               }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                 style={{ backgroundColor: colors.primary.main }}>
              <FaGraduationCap className="text-3xl" style={{ color: colors.text.primary }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text.primary }}>Expert Faculty</h3>
            <p className="leading-relaxed" style={{ color: colors.text.secondary }}>Learn from industry professionals with years of experience.</p>
          </div>

          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
               style={{ 
                 backgroundColor: colors.background.secondary,
                 border: `1px solid rgba(255, 255, 255, 0.1)`
               }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                 style={{ backgroundColor: colors.primary.main }}>
              <FaUsers className="text-3xl" style={{ color: colors.text.primary }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text.primary }}>Diverse Community</h3>
            <p className="leading-relaxed" style={{ color: colors.text.secondary }}>Join a global network of learners and professionals.</p>
          </div>

          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
               style={{ 
                 backgroundColor: colors.background.secondary,
                 border: `1px solid rgba(255, 255, 255, 0.1)`
               }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                 style={{ backgroundColor: colors.primary.main }}>
              <FaLaptopCode className="text-3xl" style={{ color: colors.text.primary }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text.primary }}>Practical Learning</h3>
            <p className="leading-relaxed" style={{ color: colors.text.secondary }}>Hands-on projects and real-world applications.</p>
          </div>

          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
               style={{ 
                 backgroundColor: colors.background.secondary,
                 border: `1px solid rgba(255, 255, 255, 0.1)`
               }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                 style={{ backgroundColor: colors.primary.main }}>
              <BsAward className="text-3xl" style={{ color: colors.text.primary }} />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text.primary }}>Certificate</h3>
            <p className="leading-relaxed" style={{ color: colors.text.secondary }}>Industry-recognized certifications upon completion.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
