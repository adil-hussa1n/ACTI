/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Blue
        'brand': {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Text Colors
        'text': {
          'primary': '#FFFFFF',
          'secondary': '#E2E8F0',
          'tertiary': '#94A3B8',
          'dark': '#0F172A',
        },
        // Background Colors
        'bg': {
          'main': '#0F172A',
          'secondary': '#1E293B',
          'tertiary': '#334155',
          'light': '#F8FAFC',
        },
        // Accent Colors
        'accent': {
          'blue': '#60A5FA',
          'purple': '#A855F7',
          'amber': '#F59E0B',
          'green': '#10B981',
          'red': '#EF4444',
          'pink': '#EC4899',
          'teal': '#14B8A6',
          'indigo': '#6366F1',
        },
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-in-out',
        'fade-in-down': 'fadeInDown 0.6s ease-in-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-in-out',
        'fade-in-right': 'fadeInRight 0.6s ease-in-out',
        'slide-in-up': 'slideInUp 0.5s ease-in-out',
        'slide-in-down': 'slideInDown 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.5s ease-in-out',
        'rotate-in': 'rotateIn 0.5s ease-in-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-10deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(59, 130, 246, 0.3)',
        'brand-lg': '0 10px 25px -3px rgba(59, 130, 246, 0.35)',
        'brand-sm': '0 2px 6px 0 rgba(59, 130, 246, 0.25)',
        'accent': '0 4px 14px 0 rgba(96, 165, 250, 0.3)',
        'accent-purple': '0 4px 14px 0 rgba(168, 85, 247, 0.3)',
        'accent-red': '0 4px 14px 0 rgba(239, 68, 68, 0.3)',
        'accent-amber': '0 4px 14px 0 rgba(245, 158, 11, 0.3)',
        'accent-green': '0 4px 14px 0 rgba(16, 185, 129, 0.3)',
        'accent-pink': '0 4px 14px 0 rgba(236, 72, 153, 0.3)',
        'accent-teal': '0 4px 14px 0 rgba(20, 184, 166, 0.3)',
        'accent-indigo': '0 4px 14px 0 rgba(99, 102, 241, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(to right, #1E40AF, #3B82F6)',
        'gradient-brand-to-purple': 'linear-gradient(to right, #1E40AF, #A855F7)',
        'gradient-dark': 'linear-gradient(to right, #0F172A, #1E293B)',
        'gradient-primary': 'linear-gradient(to right, #2563EB, #60A5FA)',
        'gradient-secondary': 'linear-gradient(to right, #2563EB, #A855F7)',
        'gradient-accent': 'linear-gradient(to right, #3B82F6, #A855F7)',
        'gradient-cta': 'linear-gradient(to right, #3B82F6, #10B981)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
}
