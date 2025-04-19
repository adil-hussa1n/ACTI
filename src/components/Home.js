import React from 'react';
import { FaGraduationCap, FaBook, FaUsers, FaLaptopCode } from 'react-icons/fa';
import { colors } from '../constants/colors';

const Home = () => {
  return (
    <div id="home" className="min-h-screen bg-bg-main text-text-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden mt-20 py-6 lg:py-32 border-b border-brand-800/30">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-500/15 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-purple/15 blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl animate-pulse-slow"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjM0I4MkY2IiBmaWxsLW9wYWNpdHk9Ii4xMiIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBmaWxsPSIjM0I4MkY2IiBmaWxsLW9wYWNpdHk9Ii4xMiIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-800/60 to-brand-700/60 text-text-highlight text-xs font-semibold tracking-wider mb-4 animate-fade-in backdrop-blur-sm border border-brand-700/30 shadow-sm">
                Transforming Education
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up bg-gradient-to-r from-white via-brand-400 to-accent-blue bg-clip-text text-transparent">
                Welcome to <span className="text-accent-blue">AC Tech</span> <span className="text-text-primary">Institute</span>
              </h1>
              
              <p className="text-text-secondary text-lg md:text-xl animate-fade-in-up animation-delay-100">
                Empowering minds through quality education and innovative learning experiences
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6 animate-fade-in-up animation-delay-200">
                <button className="px-6 py-3 bg-gradient-to-r from-brand-600 to-accent-blue text-white rounded-lg shadow-lg hover:shadow-accent transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 font-medium">
                  Explore Courses
                </button>
                <button className="px-6 py-3 bg-bg-secondary/80 hover:bg-bg-tertiary text-white rounded-lg shadow-lg hover:shadow-brand/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 backdrop-blur-sm border border-brand-700/30">
                  Learn More
                </button>
              </div>
              
              {/* Feature Points */}
              <div className="space-y-4 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 flex items-center justify-center shadow-brand">
                    <FaGraduationCap className="text-white" />
                  </div>
                  <p className="text-text-secondary">Expert instructors with industry experience</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue flex items-center justify-center shadow-accent-purple">
                    <FaBook className="text-white" />
                  </div>
                  <p className="text-text-secondary">Comprehensive curriculum designed for success</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-blue to-accent-teal flex items-center justify-center shadow-accent">
                    <FaUsers className="text-white" />
                  </div>
                  <p className="text-text-secondary">Supportive community of learners and educators</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative animate-fade-in animation-delay-300">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-accent-purple rounded-2xl transform rotate-3 scale-105 opacity-30 blur-sm animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-brand-500 rounded-2xl transform -rotate-2 scale-105 opacity-20 blur-sm animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-bg-secondary to-bg-tertiary rounded-2xl overflow-hidden border border-brand-700/40 shadow-2xl">
                  <div className="aspect-w-4 aspect-h-3 bg-accent-blue/10">
                    <div className="p-6 flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-r from-brand-600 to-accent-blue rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        AC Tech Institute
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-bg-secondary to-bg-tertiary rounded-lg shadow-xl border border-brand-700/40 flex items-center justify-center p-2 transform rotate-6 backdrop-blur-sm">
                  <div className="w-full h-full bg-gradient-to-br from-accent-purple/30 to-accent-purple/10 rounded flex items-center justify-center">
                    <span className="text-white text-xl font-bold">500+</span>
                    <span className="text-xs text-white/70 absolute -bottom-1">Students</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-bg-secondary to-bg-tertiary rounded-lg shadow-xl border border-brand-700/40 flex items-center justify-center p-2 transform -rotate-6 backdrop-blur-sm">
                  <div className="w-full h-full bg-gradient-to-br from-accent-blue/30 to-accent-blue/10 rounded flex items-center justify-center">
                    <span className="text-white text-xl font-bold">95%</span>
                    <span className="text-xs text-white/70 absolute -bottom-1">Success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-bg-main to-bg-secondary border-b border-brand-800/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-brand-500/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-bg-main to-bg-secondary p-6 rounded-xl border border-brand-700/40 shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-accent-blue/20 group">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">500<span className="text-brand-400 text-3xl">+</span></div>
                <div className="text-text-secondary text-sm font-medium uppercase tracking-wider">Students Enrolled</div>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-bg-main to-bg-secondary p-6 rounded-xl border border-brand-700/40 shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-accent-purple/20 group">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-3 group-hover:text-accent-purple transition-colors duration-300">20<span className="text-brand-400 text-3xl">+</span></div>
                <div className="text-text-secondary text-sm font-medium uppercase tracking-wider">Expert Instructors</div>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-gradient-to-br from-bg-main to-bg-secondary p-6 rounded-xl border border-brand-700/40 shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-accent-teal/20 group">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-3 group-hover:text-accent-teal transition-colors duration-300">15<span className="text-brand-400 text-3xl">+</span></div>
                <div className="text-text-secondary text-sm font-medium uppercase tracking-wider">Courses Offered</div>
              </div>
            </div>
            
            {/* Stat 4 */}
            <div className="bg-gradient-to-br from-bg-main to-bg-secondary p-6 rounded-xl border border-brand-700/40 shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-accent-gold/20 group">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors duration-300">95<span className="text-brand-400 text-3xl">%</span></div>
                <div className="text-text-secondary text-sm font-medium uppercase tracking-wider">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-20 bg-bg-main border-b border-brand-800/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-accent-purple/10 blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-brand-400 bg-clip-text text-transparent">Featured Courses</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Explore our most popular courses designed to help you achieve your career goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-gradient-to-br from-bg-secondary to-bg-tertiary rounded-xl overflow-hidden border border-brand-700/40 shadow-xl group hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-brand-600 to-accent-blue relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaLaptopCode className="text-6xl text-white opacity-50" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-bg-main to-transparent">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-semibold backdrop-blur-sm border border-accent-blue/30">
                    Programming
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-blue transition-colors">Web Development Fundamentals</h3>
                <p className="text-text-secondary text-sm mb-4">Learn the core technologies that power the modern web: HTML, CSS, and JavaScript.</p>
                <div className="flex justify-between items-center">
                  <span className="text-brand-400 font-bold">$89.99</span>
                  <button className="px-3 py-1 bg-bg-main hover:bg-brand-600 text-text-secondary hover:text-white rounded transition-colors duration-300 text-sm border border-brand-700/40">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            
            {/* Course 2 */}
            <div className="bg-gradient-to-br from-bg-secondary to-bg-tertiary rounded-xl overflow-hidden border border-brand-700/40 shadow-xl group hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-accent-purple to-accent-pink relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaLaptopCode className="text-6xl text-white opacity-50" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-bg-main to-transparent">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple text-xs font-semibold backdrop-blur-sm border border-accent-purple/30">
                    Data Science
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-purple transition-colors">Machine Learning Essentials</h3>
                <p className="text-text-secondary text-sm mb-4">Master the fundamentals of machine learning algorithms and data analysis.</p>
                <div className="flex justify-between items-center">
                  <span className="text-brand-400 font-bold">$129.99</span>
                  <button className="px-3 py-1 bg-bg-main hover:bg-accent-purple text-text-secondary hover:text-white rounded transition-colors duration-300 text-sm border border-brand-700/40">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            
            {/* Course 3 */}
            <div className="bg-gradient-to-br from-bg-secondary to-bg-tertiary rounded-xl overflow-hidden border border-brand-700/40 shadow-xl group hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-accent-teal to-accent-blue relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaLaptopCode className="text-6xl text-white opacity-50" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-bg-main to-transparent">
                  <div className="inline-block px-3 py-1 rounded-full bg-accent-teal/20 text-accent-teal text-xs font-semibold backdrop-blur-sm border border-accent-teal/30">
                    Mobile
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-teal transition-colors">Mobile App Development</h3>
                <p className="text-text-secondary text-sm mb-4">Build cross-platform mobile applications using React Native and Flutter.</p>
                <div className="flex justify-between items-center">
                  <span className="text-brand-400 font-bold">$99.99</span>
                  <button className="px-3 py-1 bg-bg-main hover:bg-accent-teal text-text-secondary hover:text-white rounded transition-colors duration-300 text-sm border border-brand-700/40">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white rounded-lg shadow-lg hover:shadow-brand/30 transition-all duration-300 font-medium">
              View All Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
