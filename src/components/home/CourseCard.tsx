import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Course } from '../../data/courses';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group bg-white rounded-[28px] sm:rounded-[32px] border border-slate-200/90 p-3.5 sm:p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        <Link to={`/course/${course.id}`} className="block relative aspect-[16/10] w-full rounded-[20px] sm:rounded-[22px] overflow-hidden bg-slate-100 cursor-pointer">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between gap-1 sm:gap-1.5 z-10">
            <span className="bg-white/55 backdrop-blur-md text-slate-800 text-[11px] sm:text-[12px] font-medium px-2.5 sm:px-3 py-1 rounded-full shadow-sm text-center truncate">
              {course.lessons} Lessons
            </span>
            <span className="bg-white/55 backdrop-blur-md text-slate-800 text-[11px] sm:text-[12px] font-medium px-2.5 sm:px-3 py-1 rounded-full shadow-sm text-center truncate">
              {course.duration}
            </span>
            <span className="bg-white/55 backdrop-blur-md text-slate-800 text-[11px] sm:text-[12px] font-medium px-2.5 sm:px-3 py-1 rounded-full shadow-sm text-center truncate">
              {course.comments} Comments
            </span>
          </div>
        </Link>

        {/* Title & Rating */}
        <div className="mt-4 flex items-start justify-between gap-2 px-1">
          <Link to={`/course/${course.id}`} className="hover:text-[#003BE2] transition-colors">
            <h3 className="text-lg sm:text-[21px] font-bold text-slate-950 tracking-tight leading-snug line-clamp-1">
              {course.title}
            </h3>
          </Link>
          <div className="flex items-center gap-1 shrink-0 mt-0.5">
            <span className="text-base sm:text-lg font-medium text-slate-500">
              {course.rating.toFixed(1)}
            </span>
            <Star className="w-4 h-4 fill-slate-300 text-slate-300" />
          </div>
        </div>

        {/* Instructor */}
        <p className="mt-1 text-xs sm:text-sm text-slate-500 px-1">
          by{' '}
          <Link
            to="/creator"
            className="text-[#0055FF] font-medium hover:underline cursor-pointer"
          >
            {course.instructor}
          </Link>
        </p>

        {/* Level & Student Avatars Row */}
        <div className="mt-5 flex items-center justify-between gap-2 px-1">
          {/* Signal Level Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F3F4F6] text-slate-700 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full">
            <svg className="w-3.5 h-3.5 text-slate-700" viewBox="0 0 16 16" fill="currentColor">
              <rect x="2" y="9" width="2.5" height="5" rx="0.5" />
              <rect x="6.5" y="6" width="2.5" height="8" rx="0.5" />
              <rect x="11" y="2" width="2.5" height="12" rx="0.5" />
            </svg>
            <span>{course.level}</span>
          </div>

          {/* Overlapping Student Avatars + Lime Badge */}
          <div className="flex items-center -space-x-2">
            {course.studentAvatars.slice(0, 4).map((avatar, idx) => (
              <img
                key={idx}
                src={avatar}
                alt="Student"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-white object-cover shrink-0"
              />
            ))}
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D4FC02] text-slate-950 font-bold text-xs flex items-center justify-center ring-2 ring-white shrink-0">
              {course.studentCountBadge}
            </span>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-5 flex items-baseline px-1 pb-1">
        <span className="text-2xl sm:text-[26px] font-black text-[#0055FF] tracking-tight">
          {course.currency}{course.price}
        </span>
        <span className="text-xs sm:text-sm text-slate-500 font-normal ml-0.5">
          /{course.pricingType}
        </span>
      </div>
    </div>
  );
};
