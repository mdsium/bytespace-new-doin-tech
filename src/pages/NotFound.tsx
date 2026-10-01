import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. 404 Hero Section: Exactly 957px height and Home Hero background matching user request */}
      <section
        style={{ height: '957px', minHeight: '957px' }}
        className="relative w-full bg-[#003BE2] overflow-hidden select-none flex flex-col justify-center items-center pt-24 pb-8"
      >
        {/* Subtle Graph Paper Grid Pattern Overlay matching Hero.tsx */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.12) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Center Content Composition matching 404 Not Found.png */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
          {/* Giant 404 with Lime Gradient */}
          <div className="text-[160px] xs:text-[220px] sm:text-[300px] md:text-[360px] lg:text-[400px] font-black leading-[0.8] tracking-tight font-poppins bg-gradient-to-b from-[#CBFC01] via-[#CBFC01]/80 to-[#CBFC01]/15 bg-clip-text text-transparent select-none drop-shadow-sm pointer-events-none">
            404
          </div>

          {/* Headline overlapping bottom of 404 */}
          <h1 className="-mt-14 xs:-mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 relative z-20 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black text-white tracking-tight leading-[1.12] font-poppins max-w-3xl pointer-events-none">
            The page you are looking <br className="hidden xs:inline" />
            for doesn’t exist
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/85 font-normal max-w-xl font-satoshi px-4 leading-relaxed relative z-20 pointer-events-none">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home CTA Button: guaranteed clickable & navigation */}
          <div className="mt-7 sm:mt-8 relative z-30">
            <button
              type="button"
              onClick={handleBackToHome}
              className="px-8 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#CBFC01] hover:bg-[#b8e400] text-slate-950 font-bold text-sm sm:text-base active:scale-95 transition-all shadow-lg hover:shadow-xl cursor-pointer font-poppins inline-flex items-center justify-center"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};
