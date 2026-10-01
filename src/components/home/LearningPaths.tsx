import React from 'react';
import { learningPaths } from '../../data/learningPaths';
import { LearningPathCard } from './LearningPathCard';
import { SectionHeading } from '../ui/SectionHeading';

interface LearningPathsProps {
  onSelectCategory?: (category: string) => void;
}

export const LearningPaths: React.FC<LearningPathsProps> = ({ onSelectCategory }) => {
  const handleSelect = (categoryQuery: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryQuery);
    }
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="px-1 lg:px-8 max-w-7xl mx-auto pb-[120px]">
      {/* Section Header */}
      <SectionHeading
        title="Explore Diverse Learning Paths at Bytespace"
        titleClassName="!text-[36px] sm:!text-[36px] md:!text-[36px] font-bold leading-tight"
        subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        align="center"
      />

      {/* 6 Category Cards: width and height 167px */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mx-auto">
        {learningPaths.map((path) => (
          <LearningPathCard
            key={path.id}
            path={path}
            onClick={() => handleSelect(path.categoryQuery)}
          />
        ))}
      </div>
    </section>
  );
};
