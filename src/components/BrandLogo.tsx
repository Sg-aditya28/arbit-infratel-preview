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

  // Sizes for the official brand logo emblem
  const imageSizes = {
    sm: 'h-8 sm:h-9 w-auto',
    md: 'h-10 sm:h-11 w-auto',
    lg: 'h-12 sm:h-14 w-auto',
  };

  const titleSizes = {
    sm: 'text-xs sm:text-sm tracking-[0.16em]',
    md: 'text-sm sm:text-base tracking-[0.18em]',
    lg: 'text-base sm:text-lg tracking-[0.20em]',
  };

  const subSizes = {
    sm: 'text-[8px] tracking-[0.22em]',
    md: 'text-[9px] tracking-[0.24em]',
    lg: 'text-[10px] tracking-[0.26em]',
  };

  // Official logo image assets extracted from verified social media profiles:
  // - Light background: transparent royal blue "arbit" wordmark with golden arrow
  // - Dark background: transparent crisp white "arbit" wordmark with golden arrow
  const logoSrc = isLight
    ? '/arbit-infratel-preview/arbit-logo-white.png'
    : '/arbit-infratel-preview/arbit-logo-transparent.png';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Corporate Logo Asset */}
      <div className="relative flex-shrink-0 flex items-center">
        <img
          src={logoSrc}
          alt="Arbit Infratel - We Are The Future"
          className={`${imageSizes[size]} object-contain transition-transform duration-200 hover:scale-105`}
          loading="eager"
        />
      </div>

      {/* Corporate Conglomerate Wordmark & Official Slogan */}
      <div className="flex flex-col justify-center">
        <div
          className={`font-extrabold uppercase leading-none font-sans ${titleSizes[size]} ${
            isLight ? 'text-white' : 'text-[#0B131E]'
          }`}
        >
          <span>ARBIT</span> <span className="text-[#B8965A]">INFRATEL</span>
        </div>
        {showSubtitle && (
          <div
            className={`font-semibold uppercase mt-1 font-sans ${subSizes[size]} ${
              isLight ? 'text-[#B8965A]' : 'text-[#9B7C44]'
            }`}
          >
            WE ARE THE FUTURE • EST. 2010
          </div>
        )}
      </div>
    </div>
  );
};
