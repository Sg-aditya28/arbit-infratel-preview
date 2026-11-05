'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Award, Building, HardHat, Radio, CheckCircle2 } from 'lucide-react';

interface ConglomerateStoryProps {
  onOpenEnquiry?: (category?: string) => void;
}

export const ConglomerateStory: React.FC<ConglomerateStoryProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="group-heritage" className="py-16 sm:py-24 bg-[#F6F5F2] border-b border-stone-200 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left 5 Columns: Clean Architectural Image */}
          <div className="lg:col-span-5">
            <div className="relative border border-stone-300 shadow-md bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85"
                alt="Arbit Infratel Architectural Landmark"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="bg-[#0B131E] text-white p-4 flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-[#B8965A]">
                  <ShieldCheck className="w-4 h-4" />
                  16+ Years Experience
                </span>
                <span className="text-stone-300">Gorakhpur, UP</span>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Simple, Clear Editorial Content */}
          <div className="lg:col-span-7">
            
            <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#9B7C44] mb-2">
              01 // CORPORATE HERITAGE
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-normal leading-tight mb-4">
              Pioneering Infrastructure &amp; Commercial Real Estate Since 2010
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-4 font-normal">
              Incorporated under RoC Kanpur in Gorakhpur, <strong className="text-[#0B131E]">Arbit Infratel Private Limited</strong> has expanded from utility telecommunications engineering into one of Eastern Uttar Pradesh&apos;s leading commercial real estate developers and turnkey civil EPC contractors.
            </p>

            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed mb-6 font-normal">
              Led by Directors <strong className="text-[#0B131E]">Abhishek Agrawal</strong> and <strong className="text-[#0B131E]">Anand Kumar Mishra</strong>, our operations adhere strictly to 100% UP-RERA escrow banking, institutional safety protocols, and computerized construction execution.
            </p>

            {/* 4 Clean Light Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-300">
              
              <div className="bg-white p-4 border border-stone-200 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B131E] mb-1 font-sans">
                  <Building className="w-3.5 h-3.5 text-[#9B7C44]" />
                  <span>Commercial Landmarks</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Flagship projects like <em>Arbit The 25</em> featuring double-height retail and Grade-A office plates.
                </p>
              </div>

              <div className="bg-white p-4 border border-stone-200 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B131E] mb-1 font-sans">
                  <HardHat className="w-3.5 h-3.5 text-[#9B7C44]" />
                  <span>Turnkey Civil EPC</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Class-A PWD registered contractor delivering bridges, institutions, and civic complexes.
                </p>
              </div>

              <div className="bg-white p-4 border border-stone-200 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B131E] mb-1 font-sans">
                  <Radio className="w-3.5 h-3.5 text-[#9B7C44]" />
                  <span>Telecom Utility Grids</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  850+ km of trenchless HDD optical fiber ducting and 150+ telecom tower foundations.
                </p>
              </div>

              <div className="bg-white p-4 border border-stone-200 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B131E] mb-1 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9B7C44]" />
                  <span>RERA &amp; Banking Trust</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Registered promoter <strong className="text-[#0B131E] font-mono">UPRERAPRM160411</strong> with nationalized bank approvals.
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => onOpenEnquiry?.('Corporate Heritage & Leadership Brief')}
                className="bg-[#0B131E] hover:bg-[#B8965A] text-white px-6 py-3 rounded-md text-xs tracking-wider uppercase font-bold transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Enquire Group Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <Link
                href="/compliance"
                className="text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-[#9B7C44] transition-colors"
              >
                View Statutory Filings &rarr;
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

