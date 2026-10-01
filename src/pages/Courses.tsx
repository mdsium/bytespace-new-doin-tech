import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { CourseCard } from '../components/home/CourseCard';
import { courses, Course } from '../data/courses';
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  BarChart2,
  LayoutGrid,
  AlignLeft,
} from 'lucide-react';

export const Courses: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Cooking',
  ];

  const baseCourses = courses.slice(0, 6);

  const allCourses: Course[] = [
    ...baseCourses.map((c, i) => ({ ...c, id: `${c.id}-1-${i}` })),
    ...baseCourses.map((c, i) => ({ ...c, id: `${c.id}-2-${i}` })),
    ...baseCourses.map((c, i) => ({ ...c, id: `${c.id}-3-${i}` })),
  ];

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Blue Hero Header matching Hero.tsx background and 360px height */}
      <section className="relative w-full h-[360px] bg-[#003BE2] pt-16 flex flex-col justify-center items-center overflow-hidden text-white select-none">
        {/* Graph Paper Grid Pattern Overlay matching Hero.tsx */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Find Your Next Course
          </h1>

          <div className="mt-7 flex items-center justify-center gap-3 w-full max-w-xl mx-auto">
            {/* Search Input Pill */}
            <div className="relative flex items-center w-full bg-white rounded-full px-5 py-3 shadow-lg border border-white/20">
              <Search className="w-4 h-4 text-slate-400 shrink-0 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full text-sm sm:text-base text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
              />
            </div>

            {/* Courses Dropdown Button */}
            <button
              type="button"
              className="flex items-center gap-2 bg-[#CBFC01] text-slate-950 font-bold px-6 py-3 rounded-full text-sm sm:text-base hover:brightness-105 active:scale-95 transition-all shadow-md shrink-0 cursor-pointer"
            >
              <span>Courses</span>
              <ChevronDown className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Main Course Listing Section */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Top Control Bar: Filters on Left, Sort on Right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Filter Pills Group */}
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

          {/* Sort Button on Right */}
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

        {/* Category Horizontal Filter Pills */}
        <div className="mt-6 flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#CBFC01] text-slate-950 font-bold shadow-2xs'
                    : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200/80 border border-slate-200/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 18 Course Cards Grid matching Search Page.png */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Pagination matching Search Page.png */}
        <div className="mt-14 sm:mt-16 flex items-center justify-center gap-1.5 sm:gap-2 select-none">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3, 4, 5].map((page) => {
            const isActive = currentPage === page;
            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-full text-sm transition-colors cursor-pointer flex items-center justify-center ${
                  isActive
                    ? 'font-bold text-slate-950 bg-slate-100'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* 4. Footer matching Footer.png */}
      <Footer />
    </div>
  );
};
