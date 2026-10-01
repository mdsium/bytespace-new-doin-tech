import React from 'react';

export interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  eyebrow?: string;
  align?: 'center' | 'left' | 'right';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  maxWidth?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  theme = 'light',
  size = 'md',
  maxWidth = 'max-w-3xl',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  const isDark = theme === 'dark';

  // Alignment configuration
  const alignmentStyles = {
    center: 'items-center text-center mx-auto',
    left: 'items-start text-left',
    right: 'items-end text-right ml-auto',
  };

  // Typography scale according to Figma design tokens
  const titleSizeStyles = {
    sm: 'text-2xl sm:text-3xl font-extrabold',
    md: 'text-3xl sm:text-4xl md:text-5xl font-extrabold sm:font-black leading-[1.15]',
    lg: 'text-4xl sm:text-5xl md:text-6xl lg:text-[54px] font-black leading-[1.10]',
  };

  return (
    <div
      className={`flex flex-col ${alignmentStyles[align]} ${maxWidth} mb-10 md:mb-14 ${className}`}
    >
      {/* Optional Eyebrow / Category badge */}
      {eyebrow && (
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            isDark
              ? 'bg-white/10 text-[#D4FC02] border border-white/10'
              : 'bg-[#D4FC02]/20 text-slate-900 border border-[#D4FC02]/40'
          }`}
        >
          {eyebrow}
        </span>
      )}

      {/* Main Section Title */}
      <h2
        className={`tracking-tight ${titleSizeStyles[size]} ${
          isDark ? 'text-white' : 'text-slate-900'
        } ${titleClassName}`}
      >
        {title}
      </h2>

      {/* Supporting Subtitle */}
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed max-w-2xl font-normal ${
            isDark ? 'text-white/80' : 'text-slate-600'
          } ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
