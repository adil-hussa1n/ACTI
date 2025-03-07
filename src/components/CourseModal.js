import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaLaptopCode, FaPalette, FaDesktop, FaLanguage, FaCut, FaArrowLeft, FaClock, FaUserGraduate, FaCheckCircle, FaTimes, FaCalendarAlt, FaChalkboardTeacher } from "react-icons/fa";
import { colors } from "../constants/colors";

const courseData = {
  "web-development": {
    title: "Web Development",
    icon: <FaLaptopCode className="text-5xl" style={{ color: colors.primary.main }} />,
    description: "Learn modern web development with HTML, CSS, JavaScript, and React.",
    details: [
      "HTML5 & CSS3 fundamentals",
      "JavaScript programming",
      "React.js framework",
      "Responsive design",
      "Web development best practices"
    ],
    duration: "3 months",
    level: "Beginner to Intermediate",
    price: "8000 BDT",
    schedule: "Monday & Wednesday",
    instructor: "ADIL HUSSAIN",
    highlights: [
      "Hands-on projects",
      "Industry expert guidance",
      "Certificate upon completion",
      "Job placement assistance",
      "Lifetime access to materials"
    ]
  },
  "graphics-design": {
    title: "Graphics Design",
    icon: <FaPalette className="text-5xl" style={{ color: colors.primary.main }} />,
    description: "Master digital design tools and create stunning visual content.",
    details: [
      "Adobe Photoshop & Illustrator",
      "Color theory and typography",
      "Logo design",
      "Digital illustration",
      "Brand identity design"
    ],
    duration: "2 months",
    level: "Beginner",
    price: "4000 BDT",
    schedule: "Tuesday & Thursday",
    instructor: "RAFID RAHMAN",
    highlights: [
      "Design portfolio building",
      "Industry-standard tools",
      "Creative project work",
      "Design principles",
      "Client project experience"
    ]
  },
  "basic-computer": {
    title: "Basic Computer",
    icon: <FaDesktop className="text-5xl" style={{ color: colors.primary.main }} />,
    description: "Essential computer skills and software applications for beginners.",
    details: [
      "Computer fundamentals",
      "Microsoft Office Suite",
      "Internet and email",
      "File management",
      "Basic troubleshooting"
    ],
    duration: "1 month",
    level: "Beginner",
    price: "1000 BDT",
    schedule: "Monday & Friday",
    instructor: "ADIL HUSSAIN & ASIFUR RAHMAN",
    highlights: [
      "Practical computer skills",
      "Office software mastery",
      "Internet safety",
      "Basic troubleshooting",
      "Digital literacy"
    ]
  },
  "basic-english": {
    title: "Basic English",
    icon: <FaLanguage className="text-5xl" style={{ color: colors.primary.main }} />,
    description: "Improve your English language skills for better communication.",
    details: [
      "Grammar fundamentals",
      "Vocabulary building",
      "Speaking practice",
      "Reading comprehension",
      "Writing skills"
    ],
    duration: "2 months",
    level: "Beginner",
    price: "1000 BDT",
    schedule: "Tuesday & Friday",
    instructor: "ASIFUR RAHMAN",
    highlights: [
      "Interactive speaking sessions",
      "Grammar workshops",
      "Writing practice",
      "Vocabulary building",
      "Pronunciation training"
    ]
  },
  "cloth-swing": {
    title: "Cloth Swing",
    icon: <FaCut className="text-5xl" style={{ color: colors.primary.main }} />,
    description: "Learn the art of clothing design and pattern making.",
    details: [
      "Pattern making basics",
      "Fabric selection",
      "Sewing techniques",
      "Garment construction",
      "Design principles"
    ],
    duration: "3 months",
    level: "Beginner",
    price: "5000 BDT",
    schedule: "Wednesday & Saturday",
    instructor: "SONIA AKHTER",
    highlights: [
      "Hands-on sewing practice",
      "Pattern making skills",
      "Fabric knowledge",
      "Design techniques",
      "Portfolio development"
    ]
  }
};

const CourseModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData[id];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16" style={{ backgroundColor: colors.background.main }}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>Course not found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-lg flex items-center mx-auto"
            style={{ 
              backgroundColor: colors.primary.main,
              color: colors.text.primary
            }}
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: colors.background.main }}>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Course Card */}
          <div className="rounded-xl shadow-lg overflow-hidden relative"
               style={{ 
                 backgroundColor: colors.background.secondary,
                 border: `1px solid rgba(255, 255, 255, 0.1)`
               }}>
            {/* Close Button */}
            <button
              onClick={() => navigate('/')}
              className="absolute top-4 right-4 z-10 p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
              style={{ 
                backgroundColor: colors.background.main,
                color: colors.text.primary,
                border: `1px solid rgba(255, 255, 255, 0.1)`
              }}
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Header Section */}
            <div className="p-8" style={{ backgroundColor: colors.background.secondary }}>
              <div className="flex flex-col items-center text-center">
                {course.icon}
                <h1 className="text-4xl font-bold mt-4" style={{ color: colors.text.primary }}>{course.title}</h1>
                <p className="text-lg mt-2 opacity-90 max-w-2xl" style={{ color: colors.text.secondary }}>{course.description}</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-8">
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-lg text-center hover:bg-opacity-50 transition-colors duration-300"
                     style={{ backgroundColor: colors.background.main }}>
                  <FaClock className="mx-auto mb-2 text-xl" style={{ color: colors.primary.main }} />
                  <p className="text-sm" style={{ color: colors.text.secondary }}>Duration</p>
                  <p className="font-semibold" style={{ color: colors.text.primary }}>{course.duration}</p>
                </div>
                <div className="p-4 rounded-lg text-center hover:bg-opacity-50 transition-colors duration-300"
                     style={{ backgroundColor: colors.background.main }}>
                  <FaUserGraduate className="mx-auto mb-2 text-xl" style={{ color: colors.primary.main }} />
                  <p className="text-sm" style={{ color: colors.text.secondary }}>Level</p>
                  <p className="font-semibold" style={{ color: colors.text.primary }}>{course.level}</p>
                </div>
                <div className="p-4 rounded-lg text-center hover:bg-opacity-50 transition-colors duration-300"
                     style={{ backgroundColor: colors.background.main }}>
                  <FaChalkboardTeacher className="mx-auto mb-2 text-xl" style={{ color: colors.primary.main }} />
                  <p className="text-sm" style={{ color: colors.text.secondary }}>Instructor</p>
                  <p className="font-semibold" style={{ color: colors.text.primary }}>{course.instructor}</p>
                </div>
                <div className="p-4 rounded-lg text-center hover:bg-opacity-50 transition-colors duration-300"
                     style={{ backgroundColor: colors.background.main }}>
                  <FaCalendarAlt className="mx-auto mb-2 text-xl" style={{ color: colors.primary.main }} />
                  <p className="text-sm" style={{ color: colors.text.secondary }}>Schedule</p>
                  <p className="font-semibold" style={{ color: colors.text.primary }}>{course.schedule}</p>
                </div>
              </div>

              {/* Course Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>Course Details</h2>
                  <ul className="space-y-3">
                    {course.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="mt-1 mr-3 flex-shrink-0 text-lg" style={{ color: colors.primary.main }} />
                        <span style={{ color: colors.text.secondary }}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column */}
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>Course Highlights</h2>
                  <ul className="space-y-3">
                    {course.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center p-4 rounded-lg hover:bg-opacity-50 transition-colors duration-300"
                          style={{ backgroundColor: colors.background.main }}>
                        <FaCheckCircle className="mr-3 text-lg" style={{ color: colors.primary.main }} />
                        <span style={{ color: colors.text.secondary }}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price and Enroll */}
              <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <p style={{ color: colors.text.secondary }}>Course Price</p>
                  <p className="text-3xl font-bold" style={{ color: colors.primary.main }}>{course.price}</p>
                </div>
                <button className="px-8 py-3 rounded-lg transition-colors duration-300 text-lg font-semibold w-full md:w-auto"
                        style={{ 
                          backgroundColor: colors.primary.main,
                          color: colors.text.primary
                        }}>
                  Enroll Now
                </button>
              </div>

              {/* Back Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => navigate('courses')}
                  className="inline-flex items-center transition-colors duration-300"
                  style={{ color: colors.primary.main }}
                >
                  <FaArrowLeft className="mr-2" />
                  Back to All Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
