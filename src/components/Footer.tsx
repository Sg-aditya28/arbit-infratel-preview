'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck, MapPin, Phone, Mail, ArrowUp, Camera } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070D18] text-white border-t border-slate-800 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Row: Brand & Statutory | Quick Navigation | HQ Contacts & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-800">
          
          {/* Column 1 (5 cols): Brand Identity, Motto & Statutory Credentials */}
          <div className="lg:col-span-5 space-y-3">
            <Link href="/" className="inline-block hover:opacity-95 transition-opacity">
              <BrandLogo variant="light" size="md" />
            </Link>

            <p className="text-xs text-[#2C8FEA] font-sans font-semibold tracking-wide">
              &ldquo;Building with Purpose. Leading with Pride.&rdquo;
            </p>

            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
              Eastern Uttar Pradesh&apos;s premier commercial real estate developer, civil EPC contractor, and passive telecom infrastructure O&amp;M partner.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2C8FEA]" />
                UP-RERA Promoter: <strong className="text-white">UPRERAPRM160411</strong>
              </span>
              <span className="text-slate-600">•</span>
              <span>CIN: <strong className="text-white">U64200UP2010PTC041308</strong></span>
              <span className="text-slate-600">•</span>
              <span className="text-[#2C8FEA]">Class-A PWD</span>
            </div>

            {/* Native Verified Community Footprint */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300 font-mono">
              <span className="text-slate-300">38+ Delivered Projects</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">6.4K+ Community</span>
              <span className="text-slate-600">•</span>
              <span className="text-[#2C8FEA]">Gorakhpur, UP</span>
            </div>
          </div>

          {/* Column 2 (3 cols): Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-[11px] font-mono tracking-wider uppercase text-[#2C8FEA] font-bold">
              NAVIGATION
            </div>
            <div className="grid grid-cols-1 gap-2 text-xs text-slate-300 font-sans font-medium">
              <Link href="/" className="hover:text-[#2C8FEA] transition-colors">
                Home Overview
              </Link>
              <Link href="/gallery" className="hover:text-[#2C8FEA] text-[#2C8FEA] font-bold transition-colors inline-flex items-center gap-1">
                <Camera className="w-3 h-3" />
                <span>Real Building Gallery</span>
              </Link>
              <Link href="/projects" className="hover:text-[#2C8FEA] transition-colors">
                Landmark Developments
              </Link>
              <Link href="/civil-epc" className="hover:text-[#2C8FEA] transition-colors">
                Civil EPC &amp; Telecom Grids
              </Link>
              <Link href="/compliance" className="hover:text-[#2C8FEA] transition-colors">
                Governance &amp; Statutory Vault
              </Link>
              <Link href="/about" className="hover:text-[#2C8FEA] transition-colors">
                Group Heritage &amp; Profile
              </Link>
              <Link href="/leadership" className="hover:text-[#2C8FEA] transition-colors">
                Board of Directors
              </Link>
            </div>
          </div>

          {/* Column 3 (4 cols): Corporate Headquarters Coordinates */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-[11px] font-mono tracking-wider uppercase text-[#2C8FEA] font-bold">
              CORPORATE HEADQUARTERS
            </div>

            <div className="space-y-2 text-xs text-slate-300 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2C8FEA] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Hariom Nagar, Civil Lines, Gorakhpur, UP – 273001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2C8FEA] flex-shrink-0" />
                <a href="tel:+915512204130" className="font-mono hover:text-[#2C8FEA] text-white">
                  +91 (0551) 220-4130
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2C8FEA] flex-shrink-0" />
                <a href="mailto:corporate@arbitinfratel.com" className="font-mono hover:text-[#2C8FEA] text-white">
                  corporate@arbitinfratel.com
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                suppressHydrationWarning
                onClick={onOpenEnquiry}
                className="w-full bg-[#2C8FEA] hover:bg-[#1E75D8] text-white rounded-lg py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#2C8FEA]/20"
              >
                Enquire
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, CIN & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Arbit Infratel Private Limited.</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>All Rights Reserved.</span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-500">Registered UP-RERA Promoter (UPRERAPRM160411)</span>
          </div>

          <button
            type="button"
            suppressHydrationWarning
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#2C8FEA] transition-colors uppercase font-mono text-[10px] tracking-wider"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#2C8FEA]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
