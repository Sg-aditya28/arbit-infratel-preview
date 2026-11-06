'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060B12] text-white border-t border-[#B8965A]/30 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-10 sm:py-12">
        {/* Main Row: Brand & Statutory | Quick Navigation | HQ Contacts & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10 items-start">
          {/* Column 1 (5 cols): Official Brand Identity & Official Tagline */}
          <div className="lg:col-span-5 space-y-3">
            <Link href="/" className="inline-block hover:opacity-95 transition-opacity">
              <BrandLogo variant="light" size="sm" />
            </Link>

            {/* Official Tagline from Verified Social Presence */}
            <p className="text-xs text-[#B8965A] font-serif italic tracking-wide">
              &ldquo;Home to Eminent Retail Brands &amp; Luxury Living&rdquo;
            </p>

            <p className="text-xs text-stone-400 font-sans font-light leading-relaxed max-w-sm">
              ₹100+ Crore master real estate developer, civil EPC contractor, and passive telecom infrastructure O&amp;M conglomerate.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-stone-400 pt-1">
              <span className="flex items-center gap-1.5 text-stone-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8965A]" />
                UP-RERA Promoter: <strong className="text-white">UPRERAPRM160411</strong>
              </span>
              <span className="text-white/20">•</span>
              <span>CIN: <strong className="text-white">U64200UP2010PTC041308</strong></span>
              <span className="text-white/20">•</span>
              <span className="text-[#B8965A]">Class-A PWD</span>
            </div>

            {/* Native Verified Community Footprint */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-stone-300 font-mono">
              <span className="text-stone-300">6.4K+ Community</span>
              <span className="text-white/20">•</span>
              <span className="text-stone-300">2.5K+ Followers</span>
              <span className="text-white/20">•</span>
              <span className="text-[#B8965A]">Gorakhpur, UP</span>
            </div>
          </div>

          {/* Column 2 (3 cols): Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#B8965A] font-bold">
              NAVIGATION
            </div>
            <div className="grid grid-cols-1 gap-1.5 text-xs text-stone-300 font-sans font-light">
              <Link href="/about" className="hover:text-[#B8965A] transition-colors">
                The Group &amp; Heritage
              </Link>
              <Link href="/projects" className="hover:text-[#B8965A] transition-colors">
                Arbit The 25 • Commercial Landmark
              </Link>
              <Link href="/civil-epc" className="hover:text-[#B8965A] transition-colors">
                Civil EPC &amp; Telecom Grids
              </Link>
              <Link href="/compliance" className="hover:text-[#B8965A] transition-colors">
                Governance &amp; Statutory Vault
              </Link>
              <Link href="/leadership" className="hover:text-[#B8965A] transition-colors">
                Board of Directors &amp; HSE
              </Link>
            </div>
          </div>

          {/* Column 3 (4 cols): Corporate Headquarters Coordinates */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#B8965A] font-bold">
              CORPORATE HEADQUARTERS
            </div>

            <div className="space-y-1.5 text-xs text-stone-300 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B8965A] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Hariom Nagar, Civil Lines, Gorakhpur, UP – 273001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B8965A] flex-shrink-0" />
                <a href="tel:+915512204130" className="font-mono hover:text-[#B8965A] text-white">
                  +91 (0551) 220-4130
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B8965A] flex-shrink-0" />
                <a href="mailto:corporate@arbitinfratel.com" className="font-mono hover:text-[#B8965A] text-stone-300">
                  corporate@arbitinfratel.com
                </a>
              </div>
            </div>

            {onOpenEnquiry && (
              <div className="pt-1">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={onOpenEnquiry}
                  className="rounded-none border border-[#B8965A] hover:bg-[#B8965A] hover:text-[#0B131E] text-[#B8965A] px-4 py-1.5 text-[10px] font-mono tracking-widest uppercase font-bold transition-colors cursor-pointer"
                >
                  OPEN EXECUTIVE DESK
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Sub-Row: Concise Disclaimer, Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 font-mono gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-center sm:text-left">
            <span>&copy; 2026 Arbit Infratel Private Limited.</span>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <span className="text-stone-500">Registered UP-RERA Promoter (UPRERAPRM160411)</span>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <span className="text-stone-500">Arbit The 25 (UPRERAPRJ218427)</span>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <span className="text-stone-500">Civil Lines, Gorakhpur</span>
          </div>

          <button
            type="button"
            suppressHydrationWarning
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-300 hover:text-[#B8965A] transition-colors cursor-pointer text-xs"
            title="Back to Top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B8965A]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
