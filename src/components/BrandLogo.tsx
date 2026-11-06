'use client';

import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  // Proportional sizing for the single authentic brand logo from social media
  const imageSizes = {
    sm: 'h-7 sm:h-8 w-auto',
    md: 'h-9 sm:h-10 w-auto',
    lg: 'h-11 sm:h-12 w-auto',
  };

  const sloganSizes = {
    sm: 'text-[9px] tracking-tight font-medium',
    md: 'text-[10px] sm:text-[11px] tracking-tight font-semibold',
    lg: 'text-[11px] sm:text-[12px] tracking-tight font-semibold',
  };

  // Official clean brand logo extracted from social media:
  // - Light background: royal blue wordmark with golden upward arrow
  // - Dark background: crisp white wordmark with golden upward arrow
  const logoSrc = isLight
    ? '/arbit-infratel-preview/arbit-logo-white.png'
    : '/arbit-infratel-preview/arbit-logo-transparent.png';

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      {/* 1. The Single Official Brand Logo from Social Media */}
      <img
        src={logoSrc}
        alt="Arbit Infratel"
        className={`${imageSizes[size]} object-contain transition-transform duration-200 hover:scale-[1.02]`}
        loading="eager"
      />

      {/* 2. Official Brand Motto from Logo: Building with Purpose. Leading with Pride. */}
      {showSubtitle && (
        <span
          className={`font-sans mt-1 leading-tight ${sloganSizes[size]} ${
            isLight ? 'text-[#2C8FEA]' : 'text-[#1E293B]'
          }`}
        >
          Building with Purpose. Leading with Pride.
        </span>
      )}
    </div>
  );
};
