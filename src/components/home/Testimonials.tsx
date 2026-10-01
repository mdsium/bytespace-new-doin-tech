import React from 'react';
import { testimonials } from '../../data/testimonials';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-white">
    
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Position 1: Top Center-Right Lime Radial Glow (Behind Subtitle Text) */}
        <div
          className="absolute -top-12 left-1/2 -translate-x-12 sm:left-[45%] w-[420px] sm:w-[560px] h-[340px] sm:h-[420px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(203, 252, 1, 0.45) 0%, rgba(203, 252, 1, 0.15) 53%, rgba(203, 252, 1, 0.03) 75%, transparent 100%)',
            filter: 'blur(90px)',
            transform: 'translate3d(0, 0, 0)',
          }}
        />

        {/* Position 2: Far Right Lime Radial Glow (Covers Card 3 and bleeds to far right edge) */}
        <div
          className="absolute top-1/4 -right-20 sm:-right-32 w-[500px] sm:w-[750px] lg:w-[950px] h-[500px] sm:h-[750px] lg:h-[950px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(203, 252, 1, 0.50) 0%, rgba(203, 252, 1, 0.18) 53%, rgba(203, 252, 1, 0.04) 75%, transparent 100%)',
            filter: 'blur(100px)',
            transform: 'translate3d(0, 0, 0)',
          }}
        />

        {/* Position 3: Bottom Left Soft Blue Radial Glow (Covers Card 1 and bleeds to far left edge) */}
        <div
          className="absolute -bottom-20 -left-20 sm:-left-32 w-[500px] sm:w-[750px] lg:w-[950px] h-[500px] sm:h-[750px] lg:h-[950px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.08) 53%, rgba(0, 59, 226, 0.01) 75%, transparent 100%)',
            filter: 'blur(100px)',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      </div>

    
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section: Split Headline + Clean Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-14 sm:mb-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-950 tracking-tight leading-[1.15]">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6 text-left">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we
              do. Hear directly from those who have experienced the transformative journey of
              learning and creating on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
