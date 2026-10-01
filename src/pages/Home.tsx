import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/home/Hero';
import { TrustedBrands } from '../components/home/TrustedBrands';
import { CourseDiscovery } from '../components/home/CourseDiscovery';
import { LearningPaths } from '../components/home/LearningPaths';
import { ProfessionalGrowth } from '../components/home/ProfessionalGrowth';
import { CreatorCTA } from '../components/home/CreatorCTA';
import { Testimonials } from '../components/home/Testimonials';
import { Footer } from '../components/layout/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Content Sections in exact Figma ordering */}
      <main className="flex-1 w-full overflow-x-clip">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trusted Partner Logos */}
        <TrustedBrands />

        {/* 4 & 5. Course Discovery & Filtered Cards */}
        <CourseDiscovery />

        {/* 6. Learning Paths */}
        <LearningPaths />

        {/* 7 & 8. Unified Professional Growth & Course Creators Section */}
        <ProfessionalGrowth />

        {/* 9. Creator CTA (Full-Width Blue Banner) */}
        <CreatorCTA />

        {/* 10. Testimonials */}
        <Testimonials />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};
