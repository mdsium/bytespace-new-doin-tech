import React from 'react';
import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';

export const ProfessionalGrowth: React.FC = () => {
  const stats = [
    { value: '12K', label: 'Students' },
    { value: '70+', label: 'Courses' },
    { value: '16', label: 'Creators' },
  ];

  const benefits = [
    'Share Your Expertise',
    'Monetize Your Passion',
    'Flexibility and Autonomy',
    'Build a Community',
  ];

  return (
    <section id="creators" className="relative w-full py-20 sm:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Position 1: Lime Yellow (#CBFC01) - Top Left / Heading Area */}
        <div
          className="absolute -top-24 left-0 sm:left-[2%] lg:left-[5%] w-[550px] sm:w-[850px] lg:w-[1000px] h-[500px] sm:h-[750px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(203, 252, 1, 0.52) 0%, rgba(203, 252, 1, 0.18) 45%, rgba(203, 252, 1, 0.03) 70%, transparent 100%)',
            filter: 'blur(80px)',
            transform: 'translate3d(0, 0, 0)',
          }}
        />

        {/* Position 2: Soft Blue (#003BE2) - Top Right / Behind Student Visual */}
        <div
          className="absolute top-4 right-0 sm:-right-12 lg:right-0 w-[550px] sm:w-[800px] lg:w-[950px] h-[550px] sm:h-[800px] lg:h-[950px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 59, 226, 0.28) 0%, rgba(0, 59, 226, 0.10) 45%, rgba(0, 59, 226, 0.02) 70%, transparent 100%)',
            filter: 'blur(85px)',
            transform: 'translate3d(0, 0, 0)',
          }}
        />

        {/* Position 5: Soft Blue (#003BE2) - Middle Left / Behind Creator Head & Revenue Cards */}
        <div
          className="absolute top-[44%] left-0 sm:-left-8 lg:left-[2%] w-[480px] sm:w-[700px] lg:w-[850px] h-[450px] sm:h-[650px] lg:h-[750px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 59, 226, 0.26) 0%, rgba(0, 59, 226, 0.09) 45%, rgba(0, 59, 226, 0.015) 70%, transparent 100%)',
            filter: 'blur(85px)',
            transform: 'translate3d(0, 0, 0)',
          }}
        />

        {/* Position 4: Lime Yellow (#CBFC01) - Bottom Left / Behind Creator Tablet & Happy Students */}
        <div
          className="absolute -bottom-16 left-0 sm:-left-12 lg:left-0 w-[500px] sm:w-[750px] lg:w-[900px] h-[500px] sm:h-[750px] lg:h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(203, 252, 1, 0.62) 0%, rgba(203, 252, 1, 0.22) 45%, rgba(203, 252, 1, 0.04) 70%, transparent 100%)',
            filter: 'blur(80px)',
            transform: 'translate3d(0, 0, 0)',
          }}
        />

        {/* Position 3: Soft Blue (#003BE2) - Bottom Right / Below Course Management & Checklist */}
        <div
          className="absolute bottom-0 right-0 sm:-right-10 lg:right-0 w-[500px] sm:w-[750px] lg:w-[900px] h-[500px] sm:h-[750px] lg:h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 59, 226, 0.26) 0%, rgba(0, 59, 226, 0.09) 45%, rgba(0, 59, 226, 0.015) 70%, transparent 100%)',
            filter: 'blur(85px)',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-36">
          {/* Left Column: Heading, Description, Metrics */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-950 leading-[1.15] tracking-tight">
              Your Path to Professional <br />
              Growth Starts Here!
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg font-normal">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Grid matching Figma (no divider line, bold blue numbers) */}
            <div className="mt-8 sm:mt-10 flex items-center gap-8 sm:gap-14 w-full">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#003BE2] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Composition with Student Cutout & Floating Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[480px] flex justify-center items-center py-4">
              {/* Lime 3D Spiral Coil Ornament behind top-right of student */}
              <div className="absolute -top-3 right-2 sm:right-4 lg:right-6 z-15 pointer-events-none select-none">
                <img
                  src="/3dOrnamentLeft1.png"
                  alt="3D Lime Ornament"
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-xl"
                />
              </div>

              {/* Floating Card 1: Learn Figma from Basic (Top Left - shifted left so all text & thumbnail are clearly visible) */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                className="absolute top-0 -left-6 sm:-left-14 lg:-left-20 bg-white p-2.5 sm:p-3 rounded-[22px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-slate-100 w-[195px] sm:w-[220px] z-10 text-left select-none"
              >
                <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden bg-slate-100 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80"
                    alt="Figma thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between gap-1">
                    <span className="bg-white/70 backdrop-blur-xs text-[9px] font-medium text-slate-800 px-1.5 py-0.5 rounded-full truncate">
                      17 Lessons
                    </span>
                    <span className="bg-white/70 backdrop-blur-xs text-[9px] font-medium text-slate-800 px-1.5 py-0.5 rounded-full truncate">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] font-bold text-slate-950 truncate">
                  Learn Figma from Basic
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  by <span className="text-[#003BE2] font-semibold">purepearl studio</span>
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">
                    <svg className="w-2.5 h-2.5 text-slate-700" viewBox="0 0 16 16" fill="currentColor">
                      <rect x="2" y="9" width="2.5" height="5" rx="0.5" />
                      <rect x="6.5" y="6" width="2.5" height="8" rx="0.5" />
                      <rect x="11" y="2" width="2.5" height="12" rx="0.5" />
                    </svg>
                    Beginner
                  </span>
                  <span className="text-xs font-black text-[#003BE2]">
                    $25<span className="text-[9px] font-normal text-slate-400">/lifetime</span>
                  </span>
                </div>
              </motion.div>

              {/* Student Photo Cutout (z-20 in front of Figma card, behind Progress card) */}
              <img
                src="/Image.png"
                alt="Student with laptop and headphones"
                className="relative z-20 w-full max-w-[410px] sm:max-w-[470px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)] pointer-events-none select-none"
              />

              {/* Floating Card 2: Learning Progress 55% (Middle Right - overlapping laptop lid & right arm) */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-[36%] sm:top-[34%] -right-4 sm:-right-12 lg:-right-16 bg-white/95 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 rounded-[22px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-slate-100 min-w-[160px] sm:min-w-[185px] z-30 text-left select-none"
              >
                <p className="text-[11px] font-medium text-slate-500">Learning Progress</p>
                <span className="text-2xl sm:text-3xl font-black text-slate-950 block my-1">55%</span>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#CBFC01] rounded-full w-[55%]" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. BOTTOM ROW: CREATE & MANAGE COURSES EASILY                            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Creator Cutout & Floating Financial/Student Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-[480px] flex justify-center items-center py-4">
              {/* Lime 3D Spiral Coil Ornament beside girl's left arm */}
              <div className="absolute top-20 sm:top-24 right-1 sm:right-4 lg:right-6 z-10 pointer-events-none select-none">
                <img
                  src="/3dOrnamentLeft1.png"
                  alt="3D Lime Ornament"
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-xl rotate-12"
                />
              </div>

              {/* Floating Card 1: Total Revenue (Top Left - z-10 behind girl) */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                className="absolute top-2 sm:top-4 -left-6 sm:-left-12 lg:-left-14 bg-[#003BE2] text-white p-3.5 sm:p-4 rounded-[22px] shadow-xl w-[155px] sm:w-[175px] z-10 text-left select-none"
              >
                <p className="text-[11px] text-white/90 font-medium leading-none">Total Revenue</p>
                <p className="text-[10px] text-white/70 mt-1 mb-1.5 leading-none">July 1-28</p>
                <p className="text-xl sm:text-2xl font-black tracking-tight mb-2.5">$120.29</p>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden flex items-center">
                  <div className="h-full bg-[#CBFC01] rounded-full w-[60%]" />
                </div>
              </motion.div>

              {/* Floating Card 2: Year to Date (Middle Left - z-10 behind girl) */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.4 }}
                className="absolute top-32 sm:top-36 -left-6 sm:-left-12 lg:-left-14 bg-[#003BE2] text-white p-3.5 sm:p-4 rounded-[22px] shadow-xl w-[155px] sm:w-[175px] z-10 text-left select-none"
              >
                <p className="text-[11px] text-white/90 font-medium leading-none">Year to Date</p>
                <p className="text-[10px] text-white/70 mt-1 mb-1.5 leading-none">2023</p>
                <p className="text-xl sm:text-2xl font-black tracking-tight">$1,200.38</p>
                <div className="mt-2">
                  <span className="inline-block bg-[#CBFC01] text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full">
                    +12%
                  </span>
                </div>
              </motion.div>

              {/* Female Creator Cutout (CreatorFeaturesImg.png - z-20 in front of revenue cards and coil) */}
              <img
                src="/CreatorFeaturesImg.png"
                alt="ByteSpace Educator and Course Creator"
                className="relative z-20 w-full max-w-[380px] sm:max-w-[430px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)] pointer-events-none select-none"
              />

              {/* Floating Card 3: Happy Students (Bottom Right - z-30 in front of girl overlapping tablet/jeans) */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.8 }}
                className="absolute bottom-8 sm:bottom-12 -right-4 sm:-right-8 lg:-right-10 bg-white/95 backdrop-blur-md px-4 py-3 sm:px-4.5 sm:py-3.5 rounded-[22px] shadow-[0_16px_36px_rgba(0,0,0,0.14)] border border-slate-100 z-30 text-left select-none"
              >
                <p className="text-xs font-bold text-slate-800 leading-none">Happy Students</p>
                <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700 mt-1 mb-2">
                  <span>4.5</span>
                  <span className="text-slate-400 font-normal">(240)</span>
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline -mt-0.5" />
                </div>
                <div className="flex items-center -space-x-1.5">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&h=60&q=80"
                    alt="Student avatar 1"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&h=60&q=80"
                    alt="Student avatar 2"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60&q=80"
                    alt="Student avatar 3"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&h=60&q=80"
                    alt="Student avatar 4"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=60&h=60&q=80"
                    alt="Student avatar 5"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=60&h=60&q=80"
                    alt="Student avatar 6"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#CBFC01] text-slate-950 font-black text-[9px] border border-white shrink-0">
                    2K+
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Heading, Description, Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-950 leading-[1.15] tracking-tight">
              Create & Manage <br />
              Courses Easily.
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg font-normal">
              <span className="font-bold text-slate-950">ByteSpace</span> supports individuals or
              entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist with signature blue check circles matching Figma */}
            <div className="mt-8 flex flex-col gap-4 w-full">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
