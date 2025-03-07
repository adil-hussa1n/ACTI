import React from "react";
import { colors } from "../constants/colors";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.background.main }}>
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: colors.text.primary }}>
            Welcome to <span style={{ color: colors.primary.light }}>AC Tech Institute</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8" style={{ color: colors.text.secondary }}>
            Empowering minds through quality education and innovative learning experiences
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#courses" 
              className="px-8 py-3 rounded-md transition-colors duration-300"
              style={{ 
                backgroundColor: colors.primary.main,
                color: colors.text.primary
              }}
            >
              Explore Courses
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-md transition-colors duration-300"
              style={{ 
                border: `2px solid ${colors.primary.light}`,
                color: colors.primary.light
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
