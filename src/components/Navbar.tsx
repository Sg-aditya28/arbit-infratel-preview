'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, Camera } from 'lucide-react';

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
      onOpenEnquiry('Commercial Property & Leasing');
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm select-none">
      {/* Tier 1: Modern Corporate Utility Strip */}
      <div className="h-8 sm:h-9 bg-[#0F172A] text-slate-300 text-[11px] border-b border-slate-800 px-4 sm:px-8 flex justify-between items-center">
        {/* Left Statutory Identification */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="font-mono text-slate-300 text-[10px] sm:text-[11px]">
            CIN: <strong className="text-white font-medium">U64200UP2010PTC041308</strong>
          </span>
          <span className="text-slate-600 hidden md:inline">|</span>
          <span className="hidden md:inline font-mono text-[10px] sm:text-[11px]">
            UP-RERA PROMOTER: <strong className="text-[#2C8FEA] font-medium">UPRERAPRM160411</strong>
          </span>
        </div>

        {/* Right Corporate Desks & Credentials */}
        <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-medium tracking-wide uppercase">
          <span className="hidden lg:inline text-slate-300">
            HQ: <strong className="text-white">GORAKHPUR, UP</strong>
          </span>
          <span className="text-slate-600 hidden lg:inline">|</span>
          <Link
            href="/gallery"
            className="text-[#2C8FEA] hover:text-white transition-colors font-bold inline-flex items-center gap-1"
          >
            <Camera className="w-3 h-3" />
            <span>Real Gallery</span>
          </Link>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <Link
            href="/compliance"
            className="hover:text-[#2C8FEA] transition-colors hidden sm:inline text-slate-300"
          >
            Governance
          </Link>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="bg-[#2C8FEA]/20 text-[#2C8FEA] px-2 py-0.5 rounded text-[10px] font-bold hidden sm:inline">
            38+ Deliveries
          </span>
        </div>
      </div>

      {/* Tier 2: Clean Architectural Navbar */}
      <nav className="h-20 sm:h-22 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 flex justify-between items-center">
        {/* Brand Logo with Motto */}
        <Link href="/" className="inline-block hover:opacity-95 transition-opacity">
          <BrandLogo variant="dark" size="md" />
        </Link>

        {/* Center Editorial Navigation Links (Desktop) */}
        <div className="hidden xl:flex items-center space-x-7 2xl:space-x-8 text-xs tracking-wider uppercase font-bold text-slate-700">
          <Link
            href="/"
            className={`py-2 transition-colors relative group ${
              isActive('/') ? 'text-[#2C8FEA]' : 'hover:text-[#2C8FEA]'
            }`}
          >
            <span>Home</span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#2C8FEA] transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>

          <Link
            href="/gallery"
            className={`py-2 transition-colors relative group flex items-center gap-1.5 ${
              isActive('/gallery') ? 'text-[#2C8FEA]' : 'hover:text-[#2C8FEA]'
            }`}
          >
            <span>Real Gallery</span>
            <span className="px-1.5 py-0.2 bg-[#2C8FEA]/10 text-[#2C8FEA] text-[9px] font-extrabold rounded-full">
              Photos
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#2C8FEA] transition-all duration-300 ${
                isActive('/gallery') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>

          <Link
            href="/projects"
            className={`py-2 transition-colors relative group ${
              isActive('/projects') ? 'text-[#2C8FEA]' : 'hover:text-[#2C8FEA]'
            }`}
          >
            <span>Landmarks</span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#2C8FEA] transition-all duration-300 ${
                isActive('/projects') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>

          <Link
            href="/civil-epc"
            className={`py-2 transition-colors relative group ${
              isActive('/civil-epc') ? 'text-[#2C8FEA]' : 'hover:text-[#2C8FEA]'
            }`}
          >
            <span>Civil EPC &amp; Infra</span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#2C8FEA] transition-all duration-300 ${
                isActive('/civil-epc') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>

          <Link
            href="/about"
            className={`py-2 transition-colors relative group ${
              isActive('/about') ? 'text-[#2C8FEA]' : 'hover:text-[#2C8FEA]'
            }`}
          >
            <span>About Group</span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#2C8FEA] transition-all duration-300 ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>

          <Link
            href="/compliance"
            className={`py-2 transition-colors relative group ${
              isActive('/compliance') ? 'text-[#2C8FEA]' : 'hover:text-[#2C8FEA]'
            }`}
          >
            <span>Governance</span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#2C8FEA] transition-all duration-300 ${
                isActive('/compliance') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>
        </div>

        {/* Right Action CTA: Enquire with NO logo or icon */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            suppressHydrationWarning
            onClick={handleCtaClick}
            className="bg-[#2C8FEA] hover:bg-[#1E75D8] text-white px-6 py-2.5 rounded-lg font-sans font-bold text-xs uppercase tracking-wider shadow-md shadow-[#2C8FEA]/20 transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
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
            className="p-2.5 rounded-lg text-slate-700 border border-slate-200 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0F172A] text-white border-b border-slate-800 px-6 py-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-3 text-xs tracking-wider uppercase font-semibold">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-white/10 hover:text-[#2C8FEA] transition-colors flex justify-between items-center"
            >
              <span>01 // Home</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#2C8FEA]" />
            </Link>

            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-white/10 text-[#2C8FEA] font-bold transition-colors flex justify-between items-center"
            >
              <span>02 // Real Building Gallery</span>
              <span className="bg-[#2C8FEA] text-white text-[9px] px-2 py-0.5 rounded-full font-bold">Photos</span>
            </Link>

            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-white/10 hover:text-[#2C8FEA] transition-colors flex justify-between items-center"
            >
              <span>03 // Landmark Developments</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#2C8FEA]" />
            </Link>

            <Link
              href="/civil-epc"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-white/10 hover:text-[#2C8FEA] transition-colors flex justify-between items-center"
            >
              <span>04 // Civil EPC &amp; Infrastructure</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#2C8FEA]" />
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-white/10 hover:text-[#2C8FEA] transition-colors flex justify-between items-center"
            >
              <span>05 // About Group</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#2C8FEA]" />
            </Link>

            <Link
              href="/compliance"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-white/10 hover:text-[#2C8FEA] transition-colors flex justify-between items-center"
            >
              <span>06 // Governance &amp; RERA</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#2C8FEA]" />
            </Link>

            <div className="pt-2 flex items-center justify-between text-slate-400">
              <span className="text-[10px] font-mono tracking-widest text-[#2C8FEA]">MOTTO</span>
              <span className="text-white text-xs font-sans">
                Building with Purpose. Leading with Pride.
              </span>
            </div>

            <div className="pt-3">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCtaClick();
                }}
                className="w-full bg-[#2C8FEA] hover:bg-[#1E75D8] rounded-lg text-white py-3 text-center font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-[#2C8FEA]/20"
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
