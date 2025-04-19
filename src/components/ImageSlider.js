import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";
import image1 from "../images/1.JPG";
import image2 from "../images/2.JPG";
import image3 from "../images/3.JPG";
import { colors } from "../constants/colors";

const images = [
  {
    src: image1,
    title: "Modern Campus",
    description: "State-of-the-art facilities designed for optimal learning"
  },
  {
    src: image2,
    title: "Innovative Learning",
    description: "Hands-on experience with cutting-edge technology"
  },
  {
    src: image3,
    title: "Student Success",
    description: "Building the future through quality education"
  }
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-slide functionality with smooth transitions
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 6000); // Slightly longer interval for better viewing experience
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  const nextSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setCurrent((prev) => (prev + 1) % images.length);
    setIsPaused(false);
  };

  const prevSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setIsPaused(false);
  };

  const handleDotClick = (index) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setCurrent(index);
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleImageError = () => {
    setImageError(true);
    console.error("Image failed to load:", images[current].src);
  };

  return (
    <div 
      className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-brand-700/30"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Image Container */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={current}
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-main to-bg-secondary">
              <p className="text-white text-xl animate-pulse">Image not available</p>
            </div>
          ) : (
            <>
              {/* Current Image */}
              <motion.img 
                src={images[current].src} 
                alt={images[current].title}
                className="absolute w-full h-full object-cover"
                initial={{ scale: 1.1, filter: "blur(8px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                onError={handleImageError}
              />
              
              {/* Preload next image */}
              <img
                src={images[(current + 1) % images.length].src}
                alt="Preload next"
                className="hidden"
              />
            </>
          )}
          
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Caption */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full p-8 z-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{images[current].title}</h3>
            <p className="text-white/80 text-sm md:text-base max-w-xl">{images[current].description}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons with Enhanced Effects */}
      <motion.button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-brand-600/80 to-brand-700/80 backdrop-blur-md
        text-white p-3 rounded-full transition-all duration-300 shadow-xl border border-white/10 z-20 group"
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous slide"
      >
        <FaChevronLeft className="h-5 w-5" />
      </motion.button>
      
      <motion.button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-brand-600/80 to-brand-700/80 backdrop-blur-md
        text-white p-3 rounded-full transition-all duration-300 shadow-xl border border-white/10 z-20 group"
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <FaChevronRight className="h-5 w-5" />
      </motion.button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${current === index ? 'bg-white' : 'bg-white/40'} transition-all duration-300`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Enhanced Slide Counter */}
      <motion.div 
        className="absolute bottom-8 right-8 bg-gradient-to-r from-brand-600/80 to-brand-700/80 backdrop-blur-md text-white 
        px-4 py-2 rounded-full text-sm font-medium shadow-xl border border-white/10 z-20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {current + 1} / {images.length}
      </motion.div>


    </div>
  );
};

export default ImageSlider;
