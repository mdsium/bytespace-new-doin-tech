import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CourseCard } from '../components/home/CourseCard';
import { courses } from '../data/courses';
import {
  SlidersHorizontal,
  BarChart2,
  LayoutGrid,
  AlignLeft,
} from 'lucide-react';

export const CreatorProfile: React.FC = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(12);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setFollowerCount((prev) => prev - 1);
      setIsFollowing(false);
    } else {
      setFollowerCount((prev) => prev + 1);
      setIsFollowing(true);
    }
  };

  const creatorCourses = courses.slice(0, 6);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* 1. Navbar */}
      <Navbar />

      {/*Blue Hero Creator Header matching Hero.tsx background and exact 592px height */}
      <section className="relative w-full lg:h-[592px] bg-[#003BE2] pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden text-white select-none flex flex-col justify-center">
        
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Avatar matching image.png */}
              <div className="w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] rounded-[22px] p-1 overflow-hidden shadow-lg shrink-0 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=240&h=240&q=80"
                  alt="PurePearl Studio Creator"
                  className="w-full h-full object-cover rounded-[18px]"
                />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight font-poppins">
                    PurePearl Studio
                  </h1>
                  <span className="bg-[#CBFC01] text-slate-950 font-bold text-xs px-3.5 py-1 rounded-full shadow-xs">
                    Creator
                  </span>
                </div>

                <p className="mt-1 text-xs sm:text-sm text-white/80 font-normal">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>

            {/* Creator Bio Copy matching image.png */}
            <div className="mt-6 sm:mt-7 max-w-[1197px] space-y-1.5 text-xs sm:text-[13px] text-white/85 leading-relaxed font-normal">
              <p>
                Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
              </p>
              <p>
                ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
              </p>
            </div>

        
            <div className="mt-7 sm:mt-8 flex items-center justify-between w-full flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="px-5 py-2.5 rounded-full bg-white text-slate-900 font-semibold text-xs sm:text-[13px] shadow-sm flex items-center">
                  <span className="text-[#003BE2] font-black mr-1.5 text-sm sm:text-base">3</span>
                  <span>Products</span>
                </div>

                <div className="px-5 py-2.5 rounded-full bg-white text-slate-900 font-semibold text-xs sm:text-[13px] shadow-sm flex items-center">
                  <span className="text-[#003BE2] font-black mr-1.5 text-sm sm:text-base">{followerCount}</span>
                  <span>Followers</span>
                </div>
              </div>

              {/* Follow Button on the right */}
              <button
                type="button"
                onClick={handleFollowToggle}
                className={`px-7 sm:px-8 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer ml-auto ${
                  isFollowing
                    ? 'bg-white text-[#003BE2] hover:bg-slate-100'
                    : 'bg-[#CBFC01] text-slate-950 hover:brightness-105 active:scale-95'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Filter & Sort Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-600" />
              <span>Filter</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
            >
              <BarChart2 className="w-3.5 h-3.5 text-slate-600" />
              <span>Level</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-slate-600" />
              <span>Category</span>
            </button>
          </div>

          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
            >
              <AlignLeft className="w-3.5 h-3.5 text-slate-600" />
              <span>Most relevant</span>
            </button>
          </div>
        </div>

       
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {creatorCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
};
