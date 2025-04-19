import React from "react";
import { FaLaptopCode, FaPalette, FaDesktop, FaLanguage, FaCut, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { colors } from "../constants/colors";

const courses = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Learn modern web development with HTML, CSS, JavaScript, and React.",
    features: ["Frontend & Backend", "Responsive Design", "API Integration"],
    level: "Beginner to Advanced",
    duration: "12 Weeks",
    icon: <FaLaptopCode className="text-4xl mb-4" />
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Master digital design tools and create stunning visual content.",
    features: ["Adobe Creative Suite", "UI/UX Design", "Brand Identity"],
    level: "All Levels",
    duration: "8 Weeks",
    icon: <FaPalette className="text-4xl mb-4" />
  },
  {
    id: "basic-computer",
    title: "Basic Computer",
    description: "Essential computer skills and software applications for beginners.",
    features: ["Office Applications", "Internet Skills", "File Management"],
    level: "Beginner",
    duration: "4 Weeks",
    icon: <FaDesktop className="text-4xl mb-4" />
  },
  {
    id: "basic-english",
    title: "Basic English",
    description: "Improve your English language skills for better communication.",
    features: ["Speaking Practice", "Business Writing", "Grammar Essentials"],
    level: "Beginner to Intermediate",
    duration: "6 Weeks",
    icon: <FaLanguage className="text-4xl mb-4" />
  },
  {
    id: "cloth-swing",
    title: "Cloth Swing",
    description: "Learn the art of clothing design and pattern making.",
    features: ["Pattern Creation", "Fabric Selection", "Sewing Techniques"],
    level: "All Levels",
    duration: "10 Weeks",
    icon: <FaCut className="text-4xl mb-4" />
  }
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: colors.background.main }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-bondi-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-bondi-blue-400/5 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjMDZhY2Q0IiBmaWxsLW9wYWNpdHk9Ii4wMiIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBmaWxsPSIjMDZhY2Q0IiBmaWxsLW9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-bondi-blue-500/20 border border-bondi-blue-500/30 mb-4">
            <p className="text-sm font-medium text-bondi-blue-200">Transform Your Skills</p>
          </div>
          
          <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-white to-bondi-blue-100 bg-clip-text text-transparent mb-4">
            Our Courses
          </h2>
          
          <p className="mt-4 text-xl max-w-3xl mx-auto text-bondi-blue-100">
            Discover our comprehensive range of courses designed to help you succeed in today's competitive world
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/courses/${course.id}`)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              style={{ 
                backgroundColor: colors.background.secondary,
                borderTop: `1px solid ${colors.border.light}20`,
                borderLeft: `1px solid ${colors.border.light}20`,
              }}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-bondi-blue-500/0 via-bondi-blue-500/0 to-bondi-blue-500/0 group-hover:from-bondi-blue-500/10 group-hover:via-bondi-blue-500/5 group-hover:to-bondi-blue-500/10 transition-all duration-500" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-bondi-blue-500/20 to-transparent blur-xl transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-l from-bondi-blue-500/20 to-transparent blur-xl transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Icon Container with Animation */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-bondi-blue-500/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                    <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-bondi-blue-600 to-bondi-blue-800 group-hover:from-bondi-blue-500 group-hover:to-bondi-blue-700 transition-colors duration-500 shadow-lg shadow-bondi-blue-600/20 transform group-hover:scale-110 transition-transform duration-500">
                      <div className="text-white">
                        {course.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title with Gradient Text */}
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-bondi-blue-300 to-bondi-blue-100 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-500">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed mb-4 text-bondi-blue-100 transform group-hover:translate-y-[-4px] transition-transform duration-500">
                    {course.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="w-full border-t border-bondi-blue-700/30 pt-4 mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-bondi-blue-200">Duration:</span>
                      <span className="text-white">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-bondi-blue-200">Level:</span>
                      <span className="text-white">{course.level}</span>
                    </div>
                  </div>
                  
                  <div className="w-full space-y-2 mb-4">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-bondi-blue-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-bondi-blue-400 mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-2 w-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <button className="w-full py-3 rounded-lg text-sm font-medium bg-bondi-blue-600 text-white hover:bg-bondi-blue-500 transition-colors duration-300 flex items-center justify-center">
                      View Course Details
                      <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-bondi-blue-500/30 rounded-xl transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .group:hover .icon-container {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Courses;
