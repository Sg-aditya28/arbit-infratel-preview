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
    <div className={`group inline-flex flex-col items-start select-none ${className}`}>
      {/* 1. Remastered Authentic Brand Logo (Azure/White Gradient + Sculpted Solar Gold Spire) */}
      <img
        src={logoSrc}
        alt="Arbit Infratel"
        className={`${imageSizes[size]} object-contain transition-all duration-300 group-hover:scale-[1.02] group-hover:brightness-105`}
        loading="eager"
      />

      {/* 2. Official Brand Motto with Architectural Gold Diamond Accent */}
      {showSubtitle && (
        <span
          className={`font-sans mt-1 leading-tight flex items-center ${sloganSizes[size]} ${
            isLight ? 'text-slate-300' : 'text-[#1E293B]'
          }`}
        >
          <span>Building with Purpose</span>
          <span className={`mx-1.5 text-[7px] ${isLight ? 'text-[#F59E0B]' : 'text-[#D0B161]'}`}>◆</span>
          <span>Leading with Pride.</span>
        </span>
      )}
    </div>
  );
};
