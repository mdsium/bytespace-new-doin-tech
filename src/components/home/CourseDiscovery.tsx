import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { categories } from '../../data/categories';
import { courses } from '../../data/courses';
import { CourseCard } from './CourseCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const CourseDiscovery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Determine categories to show
  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, 18);

  // Filter courses based on active category
  const filteredCourses = useMemo(() => {
    if (activeCategory === 'Featured') {
      return courses.slice(0, 6);
    }
    const matching = courses.filter((c) => c.category === activeCategory);
    return matching.length > 0 ? matching : courses.slice(0, 6);
  }, [activeCategory]);

  return (
    <section id="courses" className="py-20 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <SectionHeading
        title="Discover Your Passion, Build Your Skills"
        subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        align="center"
      />
      <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto mb-14">
        {displayedCategories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <Button
              key={category}
              variant={isActive ? 'pill-filter' : 'pill-filter-inactive'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={isActive ? 'scale-105 shadow-sm' : ''}
            >
              {category}
            </Button>
          );
        })}

        <Button
          variant="ghost-dark"
          size="sm"
          onClick={() => setShowAllCategories(!showAllCategories)}
          className="text-[#0C4AEB] hover:text-[#0a3ec6] hover:bg-blue-50 font-bold"
        >
          {showAllCategories ? 'Show Less' : '+ More'}
        </Button>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
