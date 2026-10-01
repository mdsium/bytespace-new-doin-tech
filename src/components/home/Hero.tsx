import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Search } from 'lucide-react';
import { HeroStudentVisual } from './HeroStudentVisual';

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Performance-optimized MotionValues: zero React re-renders on pointer movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Organic spring physics for smooth, lag-free parallax
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 90 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 90 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Disable pointer parallax on touch/mobile devices
    if (e.pointerType === 'touch') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const element = document.getElementById('courses');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Parallax transforms for ornaments
  const pX12 = useTransform(smoothX, (v) => v * 12);
  const pY9 = useTransform(smoothY, (v) => v * 9);
  const pX14 = useTransform(smoothX, (v) => v * 14);
  const pY10 = useTransform(smoothY, (v) => v * 10);
  const pX11 = useTransform(smoothX, (v) => v * 11);
  const pY8 = useTransform(smoothY, (v) => v * 8);
  const pX10 = useTransform(smoothX, (v) => v * 10);
  const pY7 = useTransform(smoothY, (v) => v * 7);
  const pX13 = useTransform(smoothX, (v) => v * 13);
  const pX15 = useTransform(smoothX, (v) => v * 15);
  const pY11 = useTransform(smoothY, (v) => v * 11);

  return (
    <section
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full min-h-[660px] sm:min-h-[820px] lg:min-h-[980px] xl:min-h-[1024px] bg-[#003BE2] pt-24 sm:pt-32 pb-0 overflow-hidden flex flex-col justify-between items-center perspective-1200"
    >
      {/* 1. Subtle Graph Paper Grid Pattern Overlay: Line 2px #fff opacity 12% & distance 80px */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* 2. 3D Abstract Ornaments from /public (scaled and softened on mobile) */}
      <motion.div
        style={{ x: pX12, y: pY9 }}
        className="absolute top-[8%] sm:top-[14%] -left-12 sm:!-left-[90px] lg:!-left-[90px] z-10 pointer-events-none select-none rotate-0 opacity-30 sm:opacity-100"
      >
        <img
          src="/3dOrnamentLeft1.png"
          alt="Lime green coil ornament"
          className="w-24 h-24 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
        />
      </motion.div>

      <motion.div
        style={{ x: pX14, y: pY10 }}
        className="hidden sm:block absolute top-[46%] sm:top-[48%] left-[2%] sm:left-[6%] lg:left-[10%] z-10 pointer-events-none select-none rotate-12"
      >
        <img
          src="/3dOrnamentLeft2.png"
          alt="White coiled spring ornament"
          className="w-23 h-23 sm:w-28 sm:h-28 lg:w-36 lg:h-36 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]"
        />
      </motion.div>

      <motion.div
        style={{ x: pX11, y: pY8 }}
        className="absolute bottom-[2%] sm:bottom-[3%] -left-10 sm:left-[1%] lg:left-[3%] z-10 pointer-events-none select-none -rotate-[15deg] opacity-35 sm:opacity-100"
      >
        <img
          src="/3dOrnamentLeft3.png"
          alt="White torus donut ornament"
          className="w-28 h-28 sm:w-60 sm:h-60 lg:w-76 lg:h-76 xl:w-84 xl:h-84 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
        />
      </motion.div>

      <motion.div
        style={{ x: pX10, y: pY7 }}
        className="absolute top-[8%] sm:top-[10%] -right-12 sm:right-[-30px] lg:right-[-120px] z-10 pointer-events-none select-none -rotate-[0deg] opacity-30 sm:opacity-100"
      >
        <img
          src="/3dOrnamentRight1.png"
          alt="Lime green cylinder tube ornament"
          className="w-28 h-28 sm:w-60 sm:h-60 lg:w-76 lg:h-76 xl:w-88 xl:h-88 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
        />
      </motion.div>

      <motion.div
        style={{ x: pX13, y: pY9 }}
        className="hidden sm:block absolute top-[42%] sm:top-[44%] right-[4%] sm:right-[7%] lg:right-[10%] z-10 pointer-events-none select-none -rotate-6"
      >
        <img
          src="/3dOrnamentRight2.png"
          alt="White pyramid cone ornament"
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
        />
      </motion.div>

      <motion.div
        style={{ x: pX15, y: pY11 }}
        className="absolute bottom-[2%] sm:bottom-[5%] -right-8 sm:right-[2%] lg:right-[4%] z-10 pointer-events-none select-none -rotate-[10deg] opacity-35 sm:opacity-100"
      >
        <img
          src="/3dOrnamentRight3.png"
          alt="White coiled spring ornament"
          className="w-24 h-24 sm:w-40 sm:h-40 lg:w-52 lg:h-52 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
        />
      </motion.div>

      {/* 4. Main Center Content: Stable Headline & Search */}
      <div className="relative z-20 mx-auto text-center flex flex-col items-center w-full px-4 sm:px-6">
        {/* Main Headline: Poppins ~56–72px */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-extrabold text-white tracking-tight leading-[1.08] font-poppins">
          Get Access to Hundreds <br className="hidden sm:inline" />
          Courses Available
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl font-normal leading-relaxed font-satoshi px-2">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-6 sm:mt-8 w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 px-2"
        >
          {/* White rounded pill input */}
          <div className="w-full flex-1 flex items-center bg-white rounded-full px-5 py-3 sm:py-3.5 shadow-xl transition-all focus-within:ring-4 focus-within:ring-white/20">
            <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3 stroke-[2.2]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none font-satoshi"
            />
          </div>

          {/* Lime Green (#CBFC01) rounded Search button */}
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 sm:py-3.5 bg-[#CBFC01] hover:bg-[#b8e400] text-slate-950 font-bold text-sm sm:text-base rounded-full transition-all duration-150 shrink-0 cursor-pointer shadow-lg hover:shadow-xl active:scale-95 font-poppins tracking-wide"
          >
            Search
          </button>
        </form>
      </div>

      {/* 5. Dedicated Responsive Bottom Stage: Anchors HeroEllipse background & Student cutout */}
      <div className="relative w-full max-w-[1440px] mx-auto mt-4 sm:mt-8 lg:mt-10 flex-1 flex items-end justify-center min-h-[260px] sm:min-h-[380px] lg:min-h-[480px] xl:min-h-[540px] overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] xs:w-[580px] sm:w-[860px] lg:w-[1149px] max-w-none pointer-events-none select-none z-0 flex justify-center items-end">
          <img
            src="/HeroEllipse.svg"
            alt="Hero decorative ellipse arch"
            className="w-full h-auto max-h-[240px] xs:max-h-[280px] sm:max-h-[380px] lg:max-h-[442px] object-contain object-bottom pointer-events-none select-none block"
          />
        </div>

        {/* Foreground Student Visual & Floating Cards: bottom-0, relative z-10 */}
        <div className="relative z-10 w-full flex justify-center items-end px-2 sm:px-3">
          <HeroStudentVisual />
        </div>
      </div>
    </section>
  );
};
