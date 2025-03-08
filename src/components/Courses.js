import React from "react";
import { FaLaptopCode, FaPalette, FaDesktop, FaLanguage, FaCut } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { colors } from "../constants/colors";

const courses = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Learn modern web development with HTML, CSS, JavaScript, and React.",
    icon: <FaLaptopCode className="text-4xl mb-4" style={{ color: colors.primary.main }} />
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Master digital design tools and create stunning visual content.",
    icon: <FaPalette className="text-4xl mb-4" style={{ color: colors.primary.main }} />
  },
  {
    id: "basic-computer",
    title: "Basic Computer",
    description: "Essential computer skills and software applications for beginners.",
    icon: <FaDesktop className="text-4xl mb-4" style={{ color: colors.primary.main }} />
  },
  {
    id: "basic-english",
    title: "Basic English",
    description: "Improve your English language skills for better communication.",
    icon: <FaLanguage className="text-4xl mb-4" style={{ color: colors.primary.main }} />
  },
  {
    id: "cloth-swing",
    title: "Cloth Swing",
    description: "Learn the art of clothing design and pattern making.",
    icon: <FaCut className="text-4xl mb-4" style={{ color: colors.primary.main }} />
  }
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.background.main }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold sm:text-5xl" style={{ color: colors.text.primary }}>
            Our Courses
          </h2>
          <p className="mt-4 text-xl" style={{ color: colors.text.secondary }}>
            Discover our comprehensive range of courses designed to help you succeed
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
                border: `1px solid rgba(255, 255, 255, 0.1)`
              }}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/10 transition-all duration-500" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent blur-xl transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 to-transparent blur-xl transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Icon Container with Animation */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                    <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                      {course.icon}
                    </div>
                  </div>

                  {/* Title with Gradient Text */}
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-500">
                    {course.title}
                  </h3>

                  {/* Description with Fade Effect */}
                  <p className="leading-relaxed transform group-hover:translate-y-[-4px] transition-transform duration-500" style={{ color: colors.text.secondary }}>
                    {course.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium" style={{ 
                      backgroundColor: colors.primary.main,
                      color: colors.text.primary
                    }}>
                      Learn More
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-colors duration-500" />
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
