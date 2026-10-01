import React from 'react';
import { Star, BarChart2 } from 'lucide-react';

interface AuthVisualCompositionProps {
  title: string;
  subtitle: string;
}

export const AuthVisualComposition: React.FC<AuthVisualCompositionProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col items-start text-left w-full max-w-xl select-none">
      <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-tight">
        {title}
      </h1>
      <p className="mt-3 text-sm sm:text-base text-white/90 font-normal leading-relaxed max-w-md">
        {subtitle}
      </p>

      {/* Floating Card Visual Cluster matching image.png EXACTLY */}
      <div className="relative mt-12 sm:mt-16 w-full max-w-[420px] sm:max-w-[450px] h-[400px] sm:h-[430px]">
        {/* Background Card 1 (Partially visible on left: Build Digit...) */}
        <div className="absolute top-24 left-6 sm:left-13 w-[270px] sm:w-[295px] bg-white rounded-[26px] p-3 shadow-xl border border-slate-100 z-10 pointer-events-none select-none">
          <div className="relative aspect-[16/10] rounded-[18px] overflow-hidden bg-slate-100 mb-2">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
              alt="Build Digit..."
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1.5 left-1.5 flex items-center">
              <span className="bg-white/80 backdrop-blur-xs text-[9px] font-semibold text-slate-900 px-2 py-0.5 rounded-full shadow-2xs">
                17 Lessons
              </span>
            </div>
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
            Build Digit...
          </h4>
          <p className="text-[10px] text-slate-500 mt-0.5">
            by <span className="text-[#003BE2] font-semibold">purepearl studio</span>
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-[9px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-700 font-semibold">
              <BarChart2 className="w-2.5 h-2.5 text-slate-600" />
              Beginner
            </span>
            <div className="flex items-center -space-x-1.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&h=60&q=80"
                alt="Student"
                className="w-5 h-5 rounded-full border border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&h=60&q=80"
                alt="Student"
                className="w-5 h-5 rounded-full border border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60&q=80"
                alt="Student"
                className="w-5 h-5 rounded-full border border-white object-cover"
              />
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-950 text-white font-bold text-[8px] border border-white">
                26+
              </span>
            </div>
          </div>
          <div className="mt-1.5 text-left">
            <span className="text-xs font-black text-[#003BE2]">$25<span className="text-[9px] font-normal text-slate-400">/lifetime</span></span>
          </div>
        </div>

        {/* 3D Ornament 1: Lime Donut / Ring (BEHIND Card 2 top-left corner, exactly as in image.png) */}
        <div className="absolute top-2 left-6 sm:left-10 z-15 pointer-events-none select-none animate-float-slow">
          <img
            src="/Login3dOrnament (1).svg"
            alt="3D Lime Torus Ring"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-300 -rotate-25"
          />
        </div>

        {/* Foreground Card 2: the Power of Big Data (matching image.png) */}
        <div className="absolute top-0 right-1 sm:right-3 w-[270px] sm:w-[295px] bg-white rounded-[28px] p-3.5 sm:p-4 shadow-2xl border border-slate-100 z-20 pointer-events-none select-none">
          <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-slate-950 mb-2.5">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
              alt="the Power of Big Data"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between gap-1">
              <span className="bg-white/60 backdrop-blur-xs text-[9px] font-semibold text-slate-950 px-2 py-0.5 rounded-full">
                17 Lessons
              </span>
              <span className="bg-white/60 backdrop-blur-xs text-[9px] font-semibold text-slate-950 px-2 py-0.5 rounded-full">
                2 hours 16 mins
              </span>
              <span className="bg-white/60 backdrop-blur-xs text-[9px] font-semibold text-slate-950 px-2 py-0.5 rounded-full">
                59 Comments
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-1">
            <h3 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight truncate">
              the Power of Big Data
            </h3>
            <div className="flex items-center gap-0.5 text-xs sm:text-sm font-bold text-slate-700 shrink-0">
              <span>4.5</span>
              <Star className="w-3.5 h-3.5 fill-[#CBFC01] text-[#CBFC01]" />
            </div>
          </div>

          <p className="text-[10px] text-slate-500 mt-0.5">
            by <span className="text-[#003BE2] font-semibold">purepearl studio</span>
          </p>

          <div className="mt-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">
              <BarChart2 className="w-2.5 h-2.5 text-slate-700" />
              Beginner
            </span>

            <div className="flex items-center -space-x-1.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&h=60&q=80"
                alt="Student 1"
                className="w-5.5 h-5.5 rounded-full border border-white object-cover shadow-2xs"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&h=60&q=80"
                alt="Student 2"
                className="w-5.5 h-5.5 rounded-full border border-white object-cover shadow-2xs"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60&q=80"
                alt="Student 3"
                className="w-5.5 h-5.5 rounded-full border border-white object-cover shadow-2xs"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&h=60&q=80"
                alt="Student 4"
                className="w-5.5 h-5.5 rounded-full border border-white object-cover shadow-2xs"
              />
              <span className="inline-flex items-center justify-center w-5.5 h-5.5 rounded-full bg-slate-950 text-white font-bold text-[8px] border border-white shadow-2xs">
                26+
              </span>
            </div>
          </div>

          <div className="mt-2 text-left">
            <span className="text-sm sm:text-base font-black text-[#003BE2]">
              $25<span className="text-[10px] font-normal text-slate-400">/lifetime</span>
            </span>
          </div>
        </div>

        {/* 3D Ornament 2: Lime Tetrahedron Pyramid (Bottom-Left in front of Card 1, matching image.png) */}
        <div className="absolute -bottom-6 -left-6 sm:-left-8 z-30 pointer-events-none select-none animate-float-reverse">
          <img
            src="/Login3dOrnament (2).svg"
            alt="3D Lime Pyramid"
            className="w-28 h-28 sm:w-34 sm:h-34 object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* 3D Ornament 3: White Frosted Ribbon / Zig-Zag (Right side, overlapping Card 2 & Happy Students) */}
        <div className="absolute top-36 -right-5 sm:-right-7 z-25 pointer-events-none select-none animate-float-gentle">
          <img
            src="/Login3dOrnament (3).svg"
            alt="Frosted Ribbon Ornament"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-xl hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Card 3: Lime Happy Students Card (Bottom Center-Right matching image.png) */}
        <div className="absolute bottom-0 right-1 sm:right-3 bg-[#CBFC01] rounded-[22px] px-3.5 py-3 shadow-xl z-20 pointer-events-none select-none text-left">
          <div className="flex items-center justify-between gap-3 mb-1.5">
            <span className="text-xs font-bold text-slate-950">Happy Students</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-bold text-slate-900 mb-2">
            <span>4.5</span>
            <span className="text-slate-700 font-normal text-[10px]">(240)</span>
            <Star className="w-3 h-3 fill-slate-950 text-slate-950" />
          </div>
          <div className="flex items-center -space-x-1.5">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&h=60&q=80"
              alt="Avatar 1"
              className="w-5.5 h-5.5 rounded-full border border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&h=60&q=80"
              alt="Avatar 2"
              className="w-5.5 h-5.5 rounded-full border border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60&q=80"
              alt="Avatar 3"
              className="w-5.5 h-5.5 rounded-full border border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&h=60&q=80"
              alt="Avatar 4"
              className="w-5.5 h-5.5 rounded-full border border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=60&h=60&q=80"
              alt="Avatar 5"
              className="w-5.5 h-5.5 rounded-full border border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=60&h=60&q=80"
              alt="Avatar 6"
              className="w-5.5 h-5.5 rounded-full border border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=60&h=60&q=80"
              alt="Avatar 7"
              className="w-5.5 h-5.5 rounded-full border border-white object-cover"
            />
            <span className="inline-flex items-center justify-center w-5.5 h-5.5 rounded-full bg-slate-950 text-white font-bold text-[8px] border border-white shrink-0">
              2K+
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
