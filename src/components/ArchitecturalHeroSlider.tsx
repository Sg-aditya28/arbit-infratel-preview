'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, ChevronLeft, ArrowUpRight } from 'lucide-react';

interface TextSlide {
  id: string;
  index: string;
  navLabel: string;
  category: string;
  tag: string;
  titlePart1: string;
  titlePart2: string;
  subtext: string;
  badge: string;
  targetHref: string;
}

const TEXT_SLIDES: TextSlide[] = [
  {
    id: 'commercial',
    index: '01',
    navLabel: 'COMMERCIAL LANDMARKS',
    category: 'Commercial Real Estate',
    tag: 'ROOTED IN TRUST • GORAKHPUR',
    titlePart1: 'Home to Eminent Retail Brands',
    titlePart2: '& Commercial Landmarks.',
    subtext: '38+ projects delivered across Gorakhpur — home to Westside, Reliance Fashion Factory, Metro Shoes, and flagship commercial spaces.',
    badge: 'UP-RERA REGISTERED',
    targetHref: '/projects',
  },
  {
    id: 'civil-epc',
    index: '02',
    navLabel: 'CIVIL & EPC WORKS',
    category: 'Civil EPC & Infrastructure',
    tag: 'CLASS-A PWD CONTRACTOR • EST. 2010',
    titlePart1: 'Civil Engineering, Roads',
    titlePart2: '& Institutional Projects.',
    subtext: 'Constructing robust public infrastructure, bridges, institutional campuses, and high-grade concrete roadways across Eastern UP.',
    badge: 'CLASS-A CONTRACTOR',
    targetHref: '/civil-epc',
  },
  {
    id: 'telecom',
    index: '03',
    navLabel: 'TELECOM INFRASTRUCTURE',
    category: 'Telecom Infrastructure',
    tag: 'TELECOM O&M • ALTIUS NETWORK',
    titlePart1: 'Telecom Operations',
    titlePart2: '& Optical Fiber Networks.',
    subtext: 'Trusted operations partner for Altius Network — managing 850+ km optical fiber ducting and 150+ telecom towers.',
    badge: '850+ KM OFC • 150+ TOWERS',
    targetHref: '/civil-epc',
  },
];

// Single high-resolution architectural photograph
const HERO_BACKGROUND_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85';

interface ArchitecturalHeroSliderProps {
  onOpenEnquiry?: (category?: string) => void;
}

export const ArchitecturalHeroSlider: React.FC<ArchitecturalHeroSliderProps> = ({
  onOpenEnquiry,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic text scrolling: smoothly cycles every 4.5 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % TEXT_SLIDES.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeSlide]);

  const slide = TEXT_SLIDES[activeSlide];

  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveSlide((prev) => (prev + 1) % TEXT_SLIDES.length);
  };

  const handlePrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveSlide((prev) => (prev - 1 + TEXT_SLIDES.length) % TEXT_SLIDES.length);
  };

  return (
    <section 
      className="relative h-[calc(100vh-132px)] min-h-[540px] max-h-[820px] bg-[#0B131E] text-white flex flex-col justify-center overflow-hidden select-none"
    >
      
      {/* BACKGROUND IMAGE: Decreased Opacity (22%) for high contrast & elegance */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BACKGROUND_IMAGE}
          alt="Arbit Infratel Architectural Landmark"
          className="w-full h-full object-cover object-center opacity-22 filter brightness-90 contrast-110"
          loading="eager"
        />
        {/* Architectural Gradient Masks */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B131E] via-[#0B131E]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B131E] via-transparent to-black/30"></div>
        <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none"></div>
      </div>

      {/* Vertical Hairline Guide */}
      <div className="absolute top-0 bottom-0 left-8 sm:left-14 lg:left-20 w-px bg-[#B8965A]/25 z-10 pointer-events-none hidden md:block"></div>

      {/* Main Editorial Hero Content: Perfectly Centered on the First Screen */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-4 sm:py-6 lg:py-8 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-3xl pl-0 md:pl-8">
          
          {/* Animated Scrolling Text: Auto-cycling with 0.55s ease */}
          <div key={slide.id} className="animate-text-slide-up">
            
            {/* Micro-Index Tag */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs tracking-[0.2em] uppercase font-bold text-[#B8965A] mb-3 sm:mb-4">
              <span className="w-6 h-px bg-[#B8965A]"></span>
              <span>{slide.tag}</span>
              <span className="text-white/40 font-mono text-[11px]">[{slide.badge}]</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.12] tracking-tight mb-3 sm:mb-4">
              <span className="block text-white">{slide.titlePart1}</span>
              <span className="block text-[#B8965A] italic font-light">{slide.titlePart2}</span>
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-sm lg:text-base text-stone-300 font-sans font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl border-l-2 border-[#B8965A]/60 pl-3.5 sm:pl-4">
              {slide.subtext}
            </p>

          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href={slide.targetHref}
              className="bg-[#B8965A] hover:bg-[#CDB17E] text-[#0B131E] px-6 sm:px-7 py-3 sm:py-3.5 text-xs tracking-wider uppercase font-bold transition-all duration-200 flex items-center gap-2 group cursor-pointer shadow-md"
            >
              <span>Explore {slide.navLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              suppressHydrationWarning
              onClick={() => onOpenEnquiry?.(slide.category)}
              className="border border-white/30 hover:border-[#B8965A] bg-white/5 hover:bg-white/10 text-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs tracking-wider uppercase font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <span>Request Briefing</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B8965A]" />
            </button>

            {/* Manual Controls & Indicator */}
            <div className="flex items-center gap-1 ml-0 sm:ml-2 border border-white/20 bg-black/40 p-1">
              <button
                type="button"
                suppressHydrationWarning
                onClick={handlePrev}
                className="p-1.5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                title="Previous Vision"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[11px] text-[#B8965A] px-2 font-bold">
                0{activeSlide + 1} / 0{TEXT_SLIDES.length}
              </span>
              <button
                type="button"
                suppressHydrationWarning
                onClick={handleNext}
                className="p-1.5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                title="Next Vision"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
