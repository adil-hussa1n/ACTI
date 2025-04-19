import React, { useState, useEffect } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { colors } from '../constants/colors';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';

const Preloader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Generate random particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 3 + 1,
    delay: Math.random() * 0.5,
    color: [
      colors.accent.blue,
      colors.accent.purple,
      colors.accent.teal,
      colors.primary.light,
      colors.accent.gold
    ][Math.floor(Math.random() * 5)]
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => {
          // Smoother progress simulation with variable increments
          const remainingProgress = 100 - prev;
          const increment = Math.min(
            Math.floor(Math.random() * (remainingProgress * 0.2)) + 1,
            10
          );
          return Math.min(prev + increment, 100);
        });
      } else {
        setLoading(false);
        setTimeout(() => {
          if (onLoadingComplete) onLoadingComplete();
        }, 800); // Slightly longer transition
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-700 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{
        background: `linear-gradient(135deg, ${colors.background.main}, ${colors.background.accent})`
      }}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
            }}
            animate={{
              x: [`${particle.x}%`, `${particle.x + (Math.random() * 20 - 10)}%`],
              y: [`${particle.y}%`, `${particle.y + (Math.random() * 20 - 10)}%`],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: particle.duration,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-purple/10 blur-3xl animate-pulse-slow"></div>
      
      <div className="relative w-full max-w-md px-8 py-12">
        {/* Logo Animation */}
        <motion.div 
          className="flex flex-col items-center justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="relative flex items-center justify-center w-28 h-28 mb-6"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {/* Glowing background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-purple opacity-20 blur-md animate-pulse-slow"></div>
            
            {/* Main logo container */}
            <motion.div 
              className="flex items-center justify-center w-20 h-20 rounded-full shadow-xl overflow-hidden"
              style={{ 
                background: colors.gradient.highlight
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={logo} alt="AC Tech Logo" className="w-16 h-16 object-contain" />
            </motion.div>
            
            {/* Orbiting Particles */}
            <motion.div 
              className="absolute w-5 h-5 rounded-full shadow-glow"
              style={{ background: colors.accent.blue }}
              animate={{
                rotate: [0, 360],
                x: [0, Math.cos(0) * 50, Math.cos(Math.PI/2) * 50, Math.cos(Math.PI) * 50, Math.cos(Math.PI*3/2) * 50, 0],
                y: [0, Math.sin(0) * 50, Math.sin(Math.PI/2) * 50, Math.sin(Math.PI) * 50, Math.sin(Math.PI*3/2) * 50, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-3 h-3 rounded-full shadow-glow"
              style={{ background: colors.accent.purple }}
              animate={{
                rotate: [0, 360],
                x: [0, Math.cos(Math.PI/4) * 60, Math.cos(Math.PI*3/4) * 60, Math.cos(Math.PI*5/4) * 60, Math.cos(Math.PI*7/4) * 60, 0],
                y: [0, Math.sin(Math.PI/4) * 60, Math.sin(Math.PI*3/4) * 60, Math.sin(Math.PI*5/4) * 60, Math.sin(Math.PI*7/4) * 60, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-4 h-4 rounded-full shadow-glow"
              style={{ background: colors.accent.teal }}
              animate={{
                rotate: [0, -360],
                x: [0, Math.cos(Math.PI/3) * 70, Math.cos(Math.PI*2/3) * 70, Math.cos(Math.PI*3/3) * 70, Math.cos(Math.PI*4/3) * 70, Math.cos(Math.PI*5/3) * 70, 0],
                y: [0, Math.sin(Math.PI/3) * 70, Math.sin(Math.PI*2/3) * 70, Math.sin(Math.PI*3/3) * 70, Math.sin(Math.PI*4/3) * 70, Math.sin(Math.PI*5/3) * 70, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-2xl font-bold text-white mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            AC Tech Institute
          </motion.h2>
          <motion.p 
            className="text-text-secondary text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Transforming Education
          </motion.p>
        </motion.div>
        
        {/* Progress Bar */}
        <motion.div 
          className="w-full bg-bg-secondary/30 rounded-full h-3 mb-4 overflow-hidden backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div 
            className="h-full rounded-full"
            style={{ 
              background: colors.gradient.goldBlue,
              width: `${progress}%` 
            }}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <motion.div 
          className="text-text-highlight text-sm text-center font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {progress}% Complete
        </motion.div>
      </div>
    </div>
  );
};

export default Preloader;
