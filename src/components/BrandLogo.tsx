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

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-sm tracking-[0.16em]',
    md: 'text-base sm:text-lg tracking-[0.18em]',
    lg: 'text-xl sm:text-2xl tracking-[0.20em]',
  };

  const subSizes = {
    sm: 'text-[8px] tracking-[0.22em]',
    md: 'text-[9px] tracking-[0.24em]',
    lg: 'text-[11px] tracking-[0.26em]',
  };

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Bespoke 3D Isometric Structural Monogram: Interlocking Twin Towers forming 'A' */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Sharp 0px Architectural Outer Brass Frame */}
          <rect
            x="1.5"
            y="1.5"
            width="51"
            height="51"
            fill={isLight ? '#0B131E' : '#0B131E'}
            stroke="#B8965A"
            strokeWidth="1.5"
          />

          {/* Hairline Inner Inset Guide */}
          <rect
            x="4"
            y="4"
            width="46"
            height="46"
            stroke="rgba(184, 150, 90, 0.3)"
            strokeWidth="0.75"
          />

          {/* Left Tower - Facet A (Light Brass) */}
          <polygon
            points="14,44 14,24 23,12 23,44"
            fill="#B8965A"
          />

          {/* Left Tower - Isometric Top Chamfer */}
          <polygon
            points="14,24 23,12 27,17 18,28"
            fill="#CDB17E"
          />

          {/* Right Tower - Facet B (Deep Obsidian Contrast) */}
          <polygon
            points="40,44 40,24 31,12 31,44"
            fill="#9B7C44"
          />

          {/* Right Tower - Isometric Top Chamfer */}
          <polygon
            points="40,24 31,12 27,17 36,28"
            fill="#CDB17E"
          />

          {/* Apex Interlocking Keystone ('A' Crossbeam & Crown) */}
          <polygon
            points="23,12 27,7 31,12 27,17"
            fill="#FFFFFF"
          />

          {/* Structural Suspended Skybridge / Crossbeam forming the 'A' crossbar */}
          <polygon
            points="18,28 36,28 36,33 18,33"
            fill="#FFFFFF"
          />
          <line
            x1="18"
            y1="30.5"
            x2="36"
            y2="30.5"
            stroke="#0B131E"
            strokeWidth="1"
          />

          {/* Vertical Architectural Glazing Slits */}
          <line x1="18.5" y1="36" x2="18.5" y2="44" stroke="#0B131E" strokeWidth="1.25" />
          <line x1="23" y1="20" x2="23" y2="44" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
          <line x1="31" y1="20" x2="31" y2="44" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
          <line x1="35.5" y1="36" x2="35.5" y2="44" stroke="#0B131E" strokeWidth="1.25" />

          {/* Foundation Ground Horizon */}
          <line x1="9" y1="44" x2="45" y2="44" stroke="#B8965A" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Corporate Conglomerate Wordmark */}
      <div className="flex flex-col justify-center">
        <div className={`font-extrabold uppercase leading-none font-sans ${titleSizes[size]} ${isLight ? 'text-white' : 'text-[#0B131E]'}`}>
          <span>ARBIT</span>{' '}
          <span className="text-[#B8965A]">INFRATEL</span>
        </div>
        {showSubtitle && (
          <div className={`font-semibold uppercase text-stone-500 mt-1 font-sans ${subSizes[size]} ${isLight ? 'text-stone-400' : 'text-stone-500'}`}>
            GROUP OF COMPANIES • EST. 2010
          </div>
        )}
      </div>
    </div>
  );
};
