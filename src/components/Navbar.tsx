'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry?: (category?: string) => void;
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

        {/* Right Corporate Desks & Verified Socials */}
        <div className="flex items-center gap-3 sm:gap-5 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] uppercase">
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
            TENDER &amp; JV
          </button>
          <span className="text-white/30 hidden sm:inline">|</span>
          <Link
            href="/compliance"
            className="hover:text-[#B8965A] transition-colors hidden sm:inline text-white/80"
          >
            GOVERNANCE
          </Link>
          <span className="text-white/30 hidden sm:inline">|</span>

          {/* Direct Verified Social Profiles */}
          <div className="flex items-center gap-2.5 pl-0.5">
            <a
              href="https://www.facebook.com/arbitinfratel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arbit Infratel Facebook Profile (6.4K+ Community)"
              title="Arbit Infratel Facebook (6.4K+ Community)"
              className="text-white/75 hover:text-[#1877F2] hover:scale-110 transition-all p-0.5"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/arbitinfratel/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arbit Infratel Instagram Profile (2.5K+ Followers)"
              title="Arbit Infratel Instagram (2.5K+ Followers)"
              className="text-white/75 hover:text-[#E4405F] hover:scale-110 transition-all p-0.5"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Architectural Navbar */}
      <nav className="h-24 bg-[#F6F5F2]/95 backdrop-blur-md border-b border-stone-300 px-4 sm:px-8 flex justify-between items-center">
        {/* Authentic Corporate Logo & Wordmark */}
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
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#B8965A] transition-all duration-300 ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>

          <Link
            href="/projects"
            className={`py-2 transition-colors relative group ${
              isActive('/projects') ? 'text-[#B8965A]' : 'hover:text-[#B8965A]'
            }`}
          >
            <span>LANDMARK DEVELOPMENTS</span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#B8965A] transition-all duration-300 ${
                isActive('/projects') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>

          <Link
            href="/civil-epc"
            className={`py-2 transition-colors relative group ${
              isActive('/civil-epc') ? 'text-[#B8965A]' : 'hover:text-[#B8965A]'
            }`}
          >
            <span>EPC &amp; INFRASTRUCTURE</span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#B8965A] transition-all duration-300 ${
                isActive('/civil-epc') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>

          <Link
            href="/compliance"
            className={`py-2 transition-colors relative group ${
              isActive('/compliance') ? 'text-[#B8965A]' : 'hover:text-[#B8965A]'
            }`}
          >
            <span>GOVERNANCE &amp; RERA</span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#B8965A] transition-all duration-300 ${
                isActive('/compliance') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
          </Link>

          <Link
            href="/leadership"
            className={`py-2 transition-colors relative group ${
              isActive('/leadership') ? 'text-[#B8965A]' : 'hover:text-[#B8965A]'
            }`}
          >
            <span>LEADERSHIP</span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#B8965A] transition-all duration-300 ${
                isActive('/leadership') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            ></span>
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

      {/* Mobile Drawer */}
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

            {/* Social Channels in Mobile Drawer */}
            <div className="pt-2 flex items-center justify-between border-t border-white/10 text-stone-400">
              <span className="text-[10px] font-mono tracking-widest text-[#B8965A]">FOLLOW ARBIT</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/arbitinfratel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#1877F2] transition-colors text-white text-xs font-mono"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/arbitinfratel/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#E4405F] transition-colors text-white text-xs font-mono"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCtaClick();
                }}
                className="w-full bg-[#0B131E] hover:bg-[#B8965A] border border-white/20 hover:border-[#B8965A] rounded-md text-white py-3.5 text-center font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center cursor-pointer"
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
