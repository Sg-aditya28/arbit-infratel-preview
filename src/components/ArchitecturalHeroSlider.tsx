'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, ChevronLeft, ArrowUpRight, Building2, MapPin, Sparkles } from 'lucide-react';

interface HeroSlide {
  id: string;
  tag: string;
  badge: string;
  project: string;
  location: string;
  titlePart1: string;
  titlePart2: string;
  subtext: string;
  image: string;
  targetHref: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'arbit-34-westside',
    tag: 'FLAGSHIP COMMERCIAL RETAIL',
    badge: 'ARBIT 34',
    project: 'Gorakhpur’s Biggest Westside Store',
    location: 'Gorakhpur, UP',
    titlePart1: 'Building with Purpose.',
    titlePart2: 'Leading with Pride.',
    subtext:
      'Home to Gorakhpur’s largest Westside store at Arbit 34. Delivering 38+ landmark commercial retail centers and civil infrastructure projects across Eastern Uttar Pradesh.',
    image: '/arbit-infratel-preview/social/post_6.jpg',
    targetHref: '/gallery',
  },
  {
    id: 'arbit-36-reliance',
    tag: 'COMMERCIAL RETAIL ANCHOR',
    badge: 'ARBIT 36',
    project: 'Reliance Fashion Factory',
    location: 'Gorakhnath, Gorakhpur',
    titlePart1: 'Prime Destinations for',
    titlePart2: 'Eminent National Brands.',
    subtext:
      'Operational retail landmark at Arbit 36 hosting Reliance Fashion Factory, engineered with large-format retail floorplates, high ceilings, and dedicated customer parking.',
    image: '/arbit-infratel-preview/social/post_1.jpg',
    targetHref: '/gallery',
  },
  {
    id: 'arbit-vibhuti-metro',
    tag: 'CENTRAL RETAIL DISTRICT',
    badge: 'ARBIT VIBHUTI',
    project: 'Metro Shoes Flagship Showroom',
    location: 'Golghar, Gorakhpur',
    titlePart1: '38+ Delivered Projects',
    titlePart2: '& Trusted Engineering.',
    subtext:
      'Prime commercial presence in Golghar at Arbit Vibhuti. Class-A registered contractor combining commercial real estate, civil EPC, and utility networks.',
    image: '/arbit-infratel-preview/social/post_3.jpg',
    targetHref: '/civil-epc',
  },
  {
    id: 'arbit-vmart-retail',
    tag: 'HIGH-FOOTFALL SHOPPING',
    badge: 'ARBIT PREMISES',
    project: 'V-Mart Commercial Store',
    location: 'Commercial Corridor, Gorakhpur',
    titlePart1: 'Transforming Skylines,',
    titlePart2: 'Redefining Retail Spaces.',
    subtext:
      'V-Mart flagship megastore at Arbit Infratel premises — built with high-grade structural engineering, double-height retail slabs, and UP-RERA registered compliance.',
    image: '/arbit-infratel-preview/social/post_4.jpg',
    targetHref: '/projects',
  },
];

interface ArchitecturalHeroSliderProps {
  onOpenEnquiry?: (category?: string) => void;
}

export const ArchitecturalHeroSlider: React.FC<ArchitecturalHeroSliderProps> = ({
  onOpenEnquiry,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic cycling every 5 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeSlide]);

  const slide = HERO_SLIDES[activeSlide];

  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] lg:h-[calc(100vh-130px)] max-h-[820px] bg-[#0A1128] text-white flex flex-col justify-center overflow-hidden select-none">
      
      {/* REAL BUILDING BACKGROUND PHOTO with dynamic smooth crossfade - Clearly Visible */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((s, idx) => (
          <img
            key={s.id}
            src={s.image}
            alt={s.project}
            className={`absolute inset-0 w-full h-full object-cover object-right lg:object-center transition-all duration-1000 ${
              idx === activeSlide ? 'opacity-70 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        ))}

        {/* Directional scrim: focused on the left for text legibility, transparent on the right so the real building is clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#070D18]/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18]/90 via-transparent to-black/30"></div>
        <div className="absolute inset-0 architectural-grid opacity-10 pointer-events-none"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          <div key={slide.id} className="animate-text-slide-up">
            
            {/* Live Project Location Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-[#2C8FEA] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-[#2C8FEA]/20">
                <Building2 className="w-3.5 h-3.5" />
                <span>{slide.badge}</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-md text-slate-200 border border-white/20 px-3 py-1 rounded-full text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#2C8FEA]" />
                <span>{slide.location}</span>
              </span>
              <span className="text-slate-400 text-xs font-semibold tracking-wider hidden sm:inline">
                &bull; {slide.tag}
              </span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal leading-[1.08] tracking-tight mb-4">
              <span className="block text-white font-serif">{slide.titlePart1}</span>
              <span className="block text-[#2C8FEA] font-serif italic font-light">{slide.titlePart2}</span>
            </h1>

            {/* Subtitle with real project note */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-sans font-normal leading-relaxed mb-8 max-w-2xl border-l-2 border-[#2C8FEA] pl-4">
              {slide.subtext}
            </p>

          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/gallery"
              className="bg-[#2C8FEA] hover:bg-[#1E75D8] text-white px-6 sm:px-7 py-3.5 rounded-lg text-xs tracking-wider uppercase font-bold transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#2C8FEA]/30 cursor-pointer"
            >
              <span>Explore Real Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              suppressHydrationWarning
              onClick={() => onOpenEnquiry?.(slide.project)}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 sm:px-7 py-3.5 rounded-lg text-xs tracking-wider uppercase font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <span>Enquire Space</span>
              <ArrowUpRight className="w-4 h-4 text-[#2C8FEA]" />
            </button>

            {/* Manual Controls & Indicator */}
            <div className="flex items-center gap-1.5 ml-auto sm:ml-2 bg-black/50 border border-white/20 rounded-lg p-1 backdrop-blur-md">
              <button
                type="button"
                suppressHydrationWarning
                onClick={handlePrev}
                className="p-2 hover:bg-white/10 rounded text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Previous Project"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-[#2C8FEA] px-2 font-bold">
                0{activeSlide + 1} / 0{HERO_SLIDES.length}
              </span>
              <button
                type="button"
                suppressHydrationWarning
                onClick={handleNext}
                className="p-2 hover:bg-white/10 rounded text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Next Project"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2 mt-8">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  if (timerRef.current) clearInterval(timerRef.current);
                  setActiveSlide(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeSlide
                    ? 'w-8 bg-[#2C8FEA]'
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};
