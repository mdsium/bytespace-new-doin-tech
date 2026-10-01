import React from 'react';
import { Link } from 'react-router-dom';

export const CreatorCTA: React.FC = () => {
  return (
    <section className="relative min-h-[488px] h-auto lg:h-[488px] bg-[#003BE2] text-white overflow-hidden select-none flex items-center justify-center py-12 sm:py-16 lg:py-0">
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

      <div className="absolute -top-12 -left-12 sm:-top-16 sm:-left-14 z-10 pointer-events-none select-none animate-float-slow">
        <img
          src="/3dOrnamentLeft1.png"
          alt="Lime coil ornament"
          className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Inner Top Left: White Spring Coil */}
      <div className="absolute top-4 left-20 sm:top-6 sm:left-44 lg:left-56 z-10 pointer-events-none select-none animate-float-reverse">
        <img
          src="/3dOrnamentLeft2.png"
          alt="White spring ornament"
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 object-contain drop-shadow-xl"
        />
      </div>

      {/* Bottom Left: White Cone */}
      <div className="absolute bottom-8 -left-6 sm:bottom-10 sm:left-4 z-10 pointer-events-none select-none animate-float-gentle">
        <img
          src="/3dOrnamentRight3.png"
          alt="White cone ornament"
          className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain drop-shadow-xl"
        />
      </div>

      {/* Bottom Left: Lime Torus Ring */}
      <div className="absolute -bottom-20 left-10 sm:-bottom-24 sm:left-24 lg:left-36 z-10 pointer-events-none select-none animate-float-slow">
        <img
          src="/3dOrnamentLeft3.png"
          alt="Lime torus ornament"
          className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Top Right: Lime Tetrahedron Pyramid */}
      <div className="absolute top-4 right-24 sm:top-6 sm:right-56 lg:right-72 z-10 pointer-events-none select-none animate-float-reverse">
        <img
          src="/3dOrnamentRight2.png"
          alt="Lime pyramid ornament"
          className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain drop-shadow-xl rotate-12"
        />
      </div>

      {/* Top Right: White Cylinder */}
      <div className="absolute -top-12 -right-12 sm:-top-16 sm:-right-14 z-10 pointer-events-none select-none animate-float-slow">
        <img
          src="/3dOrnamentRight1.png"
          alt="White cylinder ornament"
          className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Bottom Right: Lime Ribbon Coil */}
      <div className="absolute -bottom-12 -right-8 sm:-bottom-16 sm:right-4 z-10 pointer-events-none select-none animate-float-gentle">
        <img
          src="/3dOrnamentLeft1.png"
          alt="Lime coil ornament"
          className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Main Center Content matching CTA_Frame.png */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black tracking-tight text-white leading-[1.2] max-w-3xl">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-[15px] text-white/90 max-w-2xl font-normal leading-relaxed">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and international
          creators. Utilize our Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link
          to="/creator"
          className="mt-7 sm:mt-8 px-8 py-3.5 rounded-full bg-[#CBFC01] text-slate-950 font-bold text-sm sm:text-base hover:brightness-105 active:scale-95 transition-all shadow-lg cursor-pointer inline-flex items-center justify-center"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
};
