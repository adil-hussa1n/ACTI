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
              className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
              style={{ 
                backgroundColor: colors.background.secondary,
                border: `1px solid rgba(255, 255, 255, 0.1)`
              }}
            >
              <div className="p-8">
                <div className="flex flex-col items-center text-center">
                  {course.icon}
                  <h3 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>
                    {course.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: colors.text.secondary }}>
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
