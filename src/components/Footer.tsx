'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry?: () => void;
}

const FacebookIcon = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const InstagramIcon = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    />
  </svg>
);

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

            {/* Social Media Follower Strip */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/arbitinfratel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-stone-300 hover:text-[#1877F2] transition-colors font-mono"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />
                <span>6.4K+ Facebook</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://www.instagram.com/arbitinfratel/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-stone-300 hover:text-[#E4405F] transition-colors font-mono"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#E4405F]" />
                <span>2.5K+ Instagram</span>
              </a>
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
