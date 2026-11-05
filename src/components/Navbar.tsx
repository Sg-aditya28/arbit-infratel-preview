'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry?: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  const handleCtaClick = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry('Corporate Leasing & Flagship Developments');
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-subtle select-none">
      {/* Tier 1: Top Utility Strip */}
      <div className="h-9 bg-[#0B131E] text-white/75 text-[11px] tracking-wider border-b border-white/10 px-4 sm:px-8 flex justify-between items-center">
        {/* Left Statutory Identification */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="font-mono text-white/90">
            CIN: <strong className="text-white font-semibold">U64200UP2010PTC041308</strong>
          </span>
          <span className="text-white/30 hidden md:inline">|</span>
          <span className="hidden md:inline font-mono">
            UP-RERA PROMOTER ID: <strong className="text-[#B8965A] font-semibold">UPRERAPRM160411</strong>
          </span>
        </div>

        {/* Right Corporate Desks */}
        <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] uppercase">
          <span className="hidden lg:inline text-white/70">
            HQ: <strong className="text-white">CIVIL LINES, GORAKHPUR</strong>
          </span>
          <span className="text-white/30 hidden lg:inline">|</span>
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => onOpenEnquiry?.('EPC Tenders, Joint Ventures & Institutional Partnerships')}
            className="hover:text-[#B8965A] transition-colors cursor-pointer text-white/80"
          >
            TENDER &amp; JV DESK
          </button>
          <span className="text-white/30 hidden sm:inline">|</span>
          <Link
            href="/compliance"
            className="hover:text-[#B8965A] transition-colors hidden sm:inline text-white/80"
          >
            INVESTOR RELATIONS
          </Link>
        </div>
      </div>

      {/* Tier 2: Main Architectural Navbar */}
      <nav className="h-24 bg-[#F6F5F2]/95 backdrop-blur-md border-b border-stone-300 px-4 sm:px-8 flex justify-between items-center">
        {/* Architectural Monogram & Wordmark */}
        <Link href="/" className="inline-block hover:opacity-95 transition-opacity">
          <BrandLogo variant="dark" size="md" />
        </Link>

        {/* Center Editorial Navigation Links (Desktop) */}
        <div className="hidden xl:flex items-center space-x-7 2xl:space-x-9 text-xs tracking-[0.16em] uppercase font-semibold text-stone-800">
          <Link
            href="/about"
            className={`py-2 transition-colors relative group ${
              isActive('/about') ? 'text-[#B8965A]' : 'hover:text-[#B8965A]'
            }`}
          >
            <span>THE GROUP</span>
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#B8965A] transition-all duration-300 ${
              isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>

          <Link
            href="/projects"
            className={`py-2 transition-colors relative group ${
              isActive('/projects') ? 'text-[#B8965A]' : 'hover:text-[#B8965A]'
            }`}
          >
            <span>LANDMARK DEVELOPMENTS</span>
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#B8965A] transition-all duration-300 ${
              isActive('/projects') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>

          <Link
            href="/civil-epc"
            className={`py-2 transition-colors relative group ${
              isActive('/civil-epc') ? 'text-[#B8965A]' : 'hover:text-[#B8965A]'
            }`}
          >
            <span>EPC &amp; INFRASTRUCTURE</span>
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#B8965A] transition-all duration-300 ${
              isActive('/civil-epc') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>

          <Link
            href="/compliance"
            className={`py-2 transition-colors relative group ${
              isActive('/compliance') ? 'text-[#B8965A]' : 'hover:text-[#B8965A]'
            }`}
          >
            <span>GOVERNANCE &amp; RERA</span>
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#B8965A] transition-all duration-300 ${
              isActive('/compliance') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>

          <Link
            href="/leadership"
            className={`py-2 transition-colors relative group ${
              isActive('/leadership') ? 'text-[#B8965A]' : 'hover:text-[#B8965A]'
            }`}
          >
            <span>LEADERSHIP</span>
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[#B8965A] transition-all duration-300 ${
              isActive('/leadership') ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </Link>
        </div>

        {/* Right Action CTA: Enquire with NO logo */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            suppressHydrationWarning
            onClick={handleCtaClick}
            className="bg-[#0B131E] hover:bg-[#B8965A] text-white px-6 py-2.5 rounded-md font-sans font-bold text-xs uppercase tracking-[0.16em] border border-[#0B131E] hover:border-[#B8965A] shadow-sm hover:shadow transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
          >
            Enquire
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center">
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 rounded-none text-[#0B131E] border border-stone-300 hover:bg-stone-200 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Luxury ThemeForest aesthetic) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B131E] text-white border-b border-[#B8965A]/30 px-6 py-8 shadow-elevated animate-fadeIn">
          <div className="flex flex-col space-y-4 text-xs tracking-[0.18em] uppercase font-medium">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#B8965A] transition-colors flex justify-between items-center"
            >
              <span>01 // THE GROUP</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B8965A]" />
            </Link>

            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#B8965A] transition-colors flex justify-between items-center"
            >
              <span>02 // LANDMARK DEVELOPMENTS</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B8965A]" />
            </Link>

            <Link
              href="/civil-epc"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#B8965A] transition-colors flex justify-between items-center"
            >
              <span>03 // EPC &amp; INFRASTRUCTURE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B8965A]" />
            </Link>

            <Link
              href="/compliance"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#B8965A] transition-colors flex justify-between items-center"
            >
              <span>04 // GOVERNANCE &amp; RERA</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B8965A]" />
            </Link>

            <Link
              href="/leadership"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#B8965A] transition-colors flex justify-between items-center"
            >
              <span>05 // LEADERSHIP &amp; BOARD</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B8965A]" />
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#B8965A] transition-colors flex justify-between items-center"
            >
              <span>06 // ENQUIRE &amp; CONTACT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B8965A]" />
            </Link>

            <div className="pt-4">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCtaClick();
                }}
                className="w-full bg-[#0B131E] hover:bg-[#B8965A] border border-white/20 hover:border-[#B8965A] rounded-md text-white py-3.5 text-center font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center"
              >
                <span>Enquire</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
