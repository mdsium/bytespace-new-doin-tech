import React from 'react';
import { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-slate-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.025)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col text-left">
      {/* 1. Stacked Avatar */}
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover mb-5 shadow-xs select-none"
      />

      {/* 2. Name & Role */}
      <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight leading-snug">
        {testimonial.name}
      </h3>
      <p className="text-xs sm:text-sm font-semibold text-[#0055FF] mt-0.5 mb-4">
        {testimonial.role}
      </p>

      {/* 3. Quote */}
      <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-normal">
        "{testimonial.content}"
      </p>
    </div>
  );
};
