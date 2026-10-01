import React from 'react';
import { Link } from 'react-router-dom';

interface ByteSpaceLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ByteSpaceLogo: React.FC<ByteSpaceLogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  const sizeClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-7 sm:h-8',
    lg: 'h-9 sm:h-10',
  };

  const textClasses = {
    sm: 'text-lg font-black',
    md: 'text-xl sm:text-2xl font-black',
    lg: 'text-2xl sm:text-3xl font-black',
  };

  if (isLight) {
    return (
      <Link
        to="/"
        className={`inline-flex items-center select-none transition-transform hover:opacity-95 active:scale-95 ${className}`}
        aria-label="ByteSpace Home"
      >
        <img
          src="/Header_Logo.png"
          alt="ByteSpace"
          className={`${sizeClasses[size]} w-auto object-contain`}
        />
      </Link>
    );
  }

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 select-none transition-transform hover:opacity-95 active:scale-95 ${className}`}
      aria-label="ByteSpace Home"
    >
      <img
        src="/ByteSpaceIcon.png"
        alt="ByteSpace Icon"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
      <span className={`tracking-tight text-slate-950 font-poppins font-black ${textClasses[size]}`}>
        ByteSpace
      </span>
    </Link>
  );
};
