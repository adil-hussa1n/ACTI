import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-blue-950 to-slate-950">
      <div className="relative flex items-center justify-center gap-3">
        {['A', 'C', 'T', 'I'].map((letter, index) => (
          <div
            key={letter}
            className="w-16 h-16 flex items-center justify-center relative"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full animate-[outerGlow_4s_ease-in-out_infinite]"
              style={{
                animationDelay: `${index * 0.3}s`,
                background: `radial-gradient(circle at center, ${
                  index === 0 ? 'rgba(147, 197, 253, 0.15)' :
                  index === 1 ? 'rgba(191, 219, 254, 0.15)' :
                  index === 2 ? 'rgba(147, 197, 253, 0.15)' :
                  'rgba(186, 230, 253, 0.15)'
                } 0%, transparent 70%)`
              }}
            ></div>

            {/* Inner glow */}
            <div
              className="absolute inset-2 rounded-lg animate-[innerGlow_2s_ease-in-out_infinite] blur-[2px]"
              style={{
                animationDelay: `${index * 0.2}s`,
                background: `radial-gradient(circle at center, ${
                  index === 0 ? 'rgba(147, 197, 253, 0.3)' :
                  index === 1 ? 'rgba(191, 219, 254, 0.3)' :
                  index === 2 ? 'rgba(147, 197, 253, 0.3)' :
                  'rgba(186, 230, 253, 0.3)'
                } 0%, transparent 60%)`
              }}
            ></div>

            {/* Letter container */}
            <div
              className="relative animate-[float_4s_ease-in-out_infinite]"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Main letter */}
              <span className={`
                text-5xl font-bold
                inline-block
                relative
                animate-[pulse_3s_ease-in-out_infinite]
                ${index === 0 ? 'text-blue-300' : ''}
                ${index === 1 ? 'bg-gradient-to-br from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent' : ''}
                ${index === 2 ? 'text-blue-400' : ''}
                ${index === 3 ? 'text-blue-200' : ''}
              `}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                textShadow: '0 0 15px rgba(147, 197, 253, 0.3)'
              }}
              >
                {letter}
                
                {/* Shine effect */}
                <span 
                  className="absolute inset-0 animate-[shine_3s_ease-in-out_infinite]"
                  style={{ 
                    animationDelay: `${index * 0.4}s`,
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transform: 'skewX(-45deg)',
                  }}>
                  {letter}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Loading dots */}
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full animate-[dots_2s_ease-in-out_infinite]"
              style={{
                animationDelay: `${i * 0.3}s`,
                backgroundColor: `rgba(147, 197, 253, ${0.9 - i * 0.2})`,
                boxShadow: '0 0 10px rgba(147, 197, 253, 0.5)'
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-4px) rotate(-1deg);
          }
          75% {
            transform: translateY(4px) rotate(1deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(0.98);
            filter: brightness(1.1);
          }
        }

        @keyframes shine {
          0% {
            opacity: 0;
            left: -100%;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 0;
            left: 100%;
          }
        }

        @keyframes innerGlow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes outerGlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        @keyframes dots {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.5;
            filter: blur(0px);
          }
          50% {
            transform: translateY(-6px);
            opacity: 1;
            filter: blur(0.5px);
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
