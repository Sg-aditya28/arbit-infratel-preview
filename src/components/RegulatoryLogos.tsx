'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';

export const RegulatoryLogos: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Label / Trust Heading */}
          <div className="flex items-center gap-3 lg:border-r border-slate-300 lg:pr-8 flex-shrink-0 text-center lg:text-left">
            <div className="w-10 h-10 rounded-lg bg-[#0B192C] text-[#D5BE9E] flex items-center justify-center font-bold shadow-subtle flex-shrink-0 mx-auto lg:mx-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8B6533] block">
                Statutory Governance
              </span>
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0B192C] tracking-tight">
                Accredited &amp; Registered Entity
              </h4>
            </div>
          </div>

          {/* Logos & Emblems Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center w-full">
            
            {/* Logo 1: UP-RERA Official Insignia */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 w-full flex items-center gap-3 shadow-subtle hover:border-[#8B6533] transition-colors">
              <div className="w-10 h-10 rounded bg-[#0B192C] flex items-center justify-center flex-shrink-0 p-1.5 text-white">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <path d="M24 4L6 12V22C6 33.1 13.7 43.4 24 46C34.3 43.4 42 33.1 42 22V12L24 4Z" fill="#0B192C" stroke="#D5BE9E" strokeWidth="2" />
                  <path d="M24 12V34M16 20H32M18 27H30" stroke="#D5BE9E" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="24" cy="24" r="3" fill="#D5BE9E" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-extrabold text-[#0B192C] block uppercase leading-tight">
                  UP-RERA
                </span>
                <span className="text-[9px] text-[#8B6533] font-mono font-bold block truncate">
                  UPRERAPRM160411
                </span>
                <span className="text-[8px] text-emerald-700 font-semibold block">
                  Promoter Registered
                </span>
              </div>
            </div>

            {/* Logo 2: MCA - Ministry of Corporate Affairs (Govt. of India) */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 w-full flex items-center gap-3 shadow-subtle hover:border-[#8B6533] transition-colors">
              <div className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center flex-shrink-0 p-1.5 text-white">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <circle cx="24" cy="24" r="21" stroke="#D5BE9E" strokeWidth="2" />
                  <path d="M12 36L24 10L36 36M17 28H31" stroke="#D5BE9E" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="24" cy="20" r="2.5" fill="#D5BE9E" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-extrabold text-[#0B192C] block uppercase leading-tight">
                  MCA GOVT OF INDIA
                </span>
                <span className="text-[9px] text-[#8B6533] font-mono font-bold block truncate">
                  U64200UP2010PTC
                </span>
                <span className="text-[8px] text-slate-500 font-semibold block">
                  RoC Kanpur (2010)
                </span>
              </div>
            </div>

            {/* Logo 3: Public Works Department UP (Class-A PWD) */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 w-full flex items-center gap-3 shadow-subtle hover:border-[#8B6533] transition-colors">
              <div className="w-10 h-10 rounded bg-[#0B192C] flex items-center justify-center flex-shrink-0 p-1.5 text-white">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <rect x="6" y="8" width="36" height="32" rx="4" stroke="#D5BE9E" strokeWidth="2" />
                  <path d="M14 24L24 14L34 24M24 14V34" stroke="#D5BE9E" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M14 34H34" stroke="#D5BE9E" strokeWidth="2" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-extrabold text-[#0B192C] block uppercase leading-tight">
                  UP PWD EPC
                </span>
                <span className="text-[9px] text-[#8B6533] font-mono font-bold block">
                  CLASS-A WORKS
                </span>
                <span className="text-[8px] text-emerald-700 font-semibold block">
                  Highways &amp; Bridges
                </span>
              </div>
            </div>

            {/* Logo 4: ISO 9001:2015 Quality & Safety Standards */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 w-full flex items-center gap-3 shadow-subtle hover:border-[#8B6533] transition-colors">
              <div className="w-10 h-10 rounded bg-slate-900 flex items-center justify-center flex-shrink-0 p-1 text-white">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" stroke="#D5BE9E" strokeWidth="2" fill="#0B192C" />
                  <path d="M16 24L22 30L32 18" stroke="#D5BE9E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-extrabold text-[#0B192C] block uppercase leading-tight">
                  ISO 9001:2015
                </span>
                <span className="text-[9px] text-[#8B6533] font-bold block">
                  QUALITY ASSURED
                </span>
                <span className="text-[8px] text-slate-500 font-semibold block">
                  Civil &amp; EPC Standards
                </span>
              </div>
            </div>

            {/* Logo 5: Telecom Infrastructure & Utility Works (NIC 64200) */}
            <div className="bg-white border border-slate-200 rounded-lg p-3 w-full hidden lg:flex items-center gap-3 shadow-subtle hover:border-[#8B6533] transition-colors">
              <div className="w-10 h-10 rounded bg-[#0B192C] flex items-center justify-center flex-shrink-0 p-1 text-white">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <circle cx="24" cy="24" r="6" fill="#D5BE9E" />
                  <path d="M14 14C8.5 19.5 8.5 28.5 14 34M34 14C39.5 19.5 39.5 28.5 34 34" stroke="#D5BE9E" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9 9C1.5 16.5 1.5 31.5 9 39M39 9C46.5 16.5 46.5 31.5 39 39" stroke="#D5BE9E" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-extrabold text-[#0B192C] block uppercase leading-tight">
                  NIC 64200
                </span>
                <span className="text-[9px] text-[#8B6533] font-mono font-bold block">
                  TELECOM INFRA
                </span>
                <span className="text-[8px] text-slate-500 font-semibold block">
                  850+ km Duct Lines
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

