import React, { useState, useEffect } from "react";
import image1 from "../images/1.JPG";
import image2 from "../images/2.JPG";
import image3 from "../images/3.JPG";

const images = [
  image1,
  image2,
  image3
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide functionality with smooth transitions
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection('right');
      setIsTransitioning(true);
      setCurrent((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 1000);
    }, 5000); // Increased interval for better viewing experience

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setSlideDirection('right');
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const handleImageError = () => {
    setImageError(true);
    console.error("Image failed to load:", images[current]);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main Image Container */}
      <div className="relative w-full h-full">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950">
            <p className="text-white text-xl animate-pulse">Image not available</p>
          </div>
        ) : (
          <div className="relative w-full h-full">
            {/* Current Image */}
            <img 
              key={current}
              src={images[current]} 
              alt={`Slide ${current + 1}`}
              className={`absolute w-full h-full object-cover transition-all duration-1000 ease-in-out
                ${isTransitioning ? 'scale-105 blur-sm' : 'scale-100 blur-0'}
                ${slideDirection === 'right' ? 'animate-slideZoomFadeRight' : 'animate-slideZoomFadeLeft'}
              `}
              onError={handleImageError}
            />
            {/* Preload next image */}
            <img
              src={images[(current + 1) % images.length]}
              alt="Preload next"
              className="hidden"
            />
          </div>
        )}
        {/* Enhanced Gradient Overlay with Dynamic Animation */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
          transition-opacity duration-1000 ${isTransitioning ? 'opacity-80' : 'opacity-60'}
          animate-gradientPulse
        `}></div>
      </div>

      {/* Navigation Buttons with Enhanced Effects */}
      <button 
        onClick={prevSlide} 
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md
        text-white p-5 rounded-full hover:bg-white/30 transition-all duration-300 
        shadow-lg hover:scale-110 group animate-floatSlow"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 transform group-hover:-translate-x-1 transition-transform duration-300" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md
        text-white p-5 rounded-full hover:bg-white/30 transition-all duration-300 
        shadow-lg hover:scale-110 group animate-floatSlow"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation Dots with Enhanced Effects */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setSlideDirection(index > current ? 'right' : 'left');
              setIsTransitioning(true);
              setCurrent(index);
              setTimeout(() => setIsTransitioning(false), 1000);
            }}
            className={`transform transition-all duration-500 ${
              current === index 
                ? "scale-125 animate-dotPulse" 
                : "scale-100 hover:scale-110"
            }`}
          >
            <div className={`w-3 h-3 rounded-full transition-all duration-500 
              ${current === index 
                ? "bg-white w-8 shadow-[0_0_15px_rgba(255,255,255,0.7)]" 
                : "bg-white/50 hover:bg-white/75 w-3"}
            `}/>
          </button>
        ))}
      </div>

      {/* Enhanced Slide Counter */}
      <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md text-white 
        px-6 py-3 rounded-full text-lg font-medium animate-floatSlow
        shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
        transition-shadow duration-300">
        {current + 1} / {images.length}
      </div>

      <style jsx>{`
        @keyframes slideZoomFadeRight {
          0% {
            transform: translateX(100%) scale(1.2);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideZoomFadeLeft {
          0% {
            transform: translateX(-100%) scale(1.2);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes gradientPulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          50% {
            transform: translateY(-50%) translateX(5px);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        .animate-slideZoomFadeRight {
          animation: slideZoomFadeRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-slideZoomFadeLeft {
          animation: slideZoomFadeLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-gradientPulse {
          animation: gradientPulse 3s ease-in-out infinite;
        }

        .animate-floatSlow {
          animation: floatSlow 3s ease-in-out infinite;
        }

        .animate-dotPulse {
          animation: dotPulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
