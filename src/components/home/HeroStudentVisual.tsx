import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Star } from 'lucide-react';

export const HeroStudentVisual: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-[760px] mx-auto flex justify-center items-end select-none">
     
      <div className="relative z-10 flex justify-center items-end w-full max-w-[320px] xs:max-w-[420px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[706px] h-[260px] xs:h-[300px] sm:h-[340px] lg:h-[380px]">
        <div className="relative w-full max-w-[340px] xs:max-w-[440px] sm:max-w-[580px] lg:max-w-[721px] h-[360px] xs:h-[440px] sm:h-[580px] lg:h-[741px] -mt-[100px] xs:-mt-[140px] sm:-mt-[180px] lg:-mt-[220px] flex justify-center items-end pointer-events-none">
          <img
            src="/Image.png"
            alt="ByteSpace student holding laptop with blue headphones"
            className="hero-student-image w-auto h-full object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)] pointer-events-none block select-none"
          />
        </div>

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [-6, 6, -6],
                  x: [-2, 2, -2],
                }
          }
          transition={{
            duration: 5.2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="absolute top-[2%] -left-2 xs:left-0 sm:-left-6 lg:-left-12 xl:-left-16 bg-white/95 backdrop-blur-md px-2.5 py-1.5 xs:px-3 xs:py-2 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.14)] border border-white/60 z-20 text-left pointer-events-none scale-75 xs:scale-85 sm:scale-100 origin-top-left w-[170px] sm:w-[202px]"
        >
          <p className="text-[13px] sm:text-base text-slate-900 font-poppins leading-snug font-bold">
            UI/UX Design
          </p>
          <p className="text-[9px] sm:text-[13px] text-slate-500 font-satoshi font-medium mt-0.5 whitespace-nowrap">
            200 Courses • 1000+ Students
          </p>
        </motion.div>

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [6, -6, 6],
                  x: [2, -2, 2],
                }
          }
          transition={{
            duration: 5.8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 0.4,
          }}
          className="absolute top-[8%] -right-2 xs:right-0 sm:-right-10 lg:-right-12 xl:-right-[-30px] bg-white/95 backdrop-blur-md px-2.5 py-2 xs:px-3.5 xs:py-2.5 sm:px-6 sm:py-5 rounded-xl sm:rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.14)] border border-white/60 min-w-[110px] xs:min-w-[130px] sm:min-w-[210px] z-20 text-left pointer-events-none scale-75 xs:scale-85 sm:scale-100 origin-top-right"
        >
          <p className="text-[9px] sm:text-sm font-medium text-slate-500 font-satoshi">
            Learning Progress
          </p>
          <p className="text-xl sm:text-4xl text-slate-900 font-poppins tracking-tight my-0.5 sm:my-1 font-bold">
            55%
          </p>
          <div className="w-full h-1 sm:h-2.5 bg-slate-100 rounded-full overflow-hidden mt-1 sm:mt-2">
            <div className="h-full bg-[#CBFC01] rounded-full w-[55%]" />
          </div>
        </motion.div>

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [-5, 5, -5],
                  x: [2, -2, 2],
                }
          }
          transition={{
            duration: 5.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 0.8,
          }}
          className="absolute bottom-[2%] -left-2 xs:left-0 sm:bottom-[8%] sm:-left-4 lg:-left-8 xl:-left-12 bg-white/95 backdrop-blur-md px-2.5 py-1.5 xs:px-3 xs:py-2 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.14)] border border-white/60 z-20 text-left pointer-events-none scale-75 xs:scale-85 sm:scale-100 origin-bottom-left"
        >
          <div className="flex items-center gap-1 sm:gap-1.5 mb-1 font-satoshi">
            <span className="text-[10px] sm:text-sm font-bold text-slate-900 font-poppins">
              Happy Students
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 mb-1 font-satoshi">
            <span className="text-[10px] sm:text-sm font-bold text-slate-800 ml-0.5">4.5</span>
            <span className="text-[9px] text-slate-400 font-normal">(240)</span>
            <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-[#CBFC01] text-[#CBFC01] ml-0.5" />
          </div>
          <div className="flex items-center -space-x-1 sm:-space-x-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
              alt="Avatar"
              className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border border-white sm:border-2 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
              alt="Avatar"
              className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border border-white sm:border-2 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80"
              alt="Avatar"
              className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border border-white sm:border-2 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80"
              alt="Avatar"
              className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border border-white sm:border-2 object-cover"
            />
            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[#CBFC01] text-slate-950 font-bold text-[8px] sm:text-xs border border-white sm:border-2 shadow-xs">
              2K+
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
