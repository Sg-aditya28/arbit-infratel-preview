'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, MapPin, Building2, HardHat, Radio, Layers } from 'lucide-react';

interface Commission {
  id: string;
  title: string;
  category: 'commercial' | 'epc' | 'telecom';
  categoryLabel: string;
  location: string;
  scale: string;
  status: string;
  statusColor: 'emerald' | 'amber' | 'blue';
  image: string;
  year: string;
  wide?: boolean; // 7-col wide card vs 5-col card
  scopeSummary: string;
}

const COMMISSIONS: Commission[] = [
  {
    id: 'arbit-the-25',
    title: 'Arbit The 25',
    category: 'commercial',
    categoryLabel: 'COMMERCIAL REAL ESTATE',
    location: 'Civil Lines, Gorakhpur (UP)',
    scale: '185,000 Sq.Ft. Commercial G+5',
    status: 'ACTIVE EXECUTION • RERA APPROVED',
    statusColor: 'emerald',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85',
    year: '2023–2026',
    wide: true,
    scopeSummary: 'Flagship commercial complex featuring double-height retail anchors, Grade-A office floor plates, and automated double basement car park.',
  },
  {
    id: 'purvanchal-civic-complex',
    title: 'Purvanchal Institutional & Civic Complex',
    category: 'epc',
    categoryLabel: 'CIVIL & MUNICIPAL EPC',
    location: 'Gorakhpur District Corridor',
    scale: '₹42.5 Cr Civil EPC Commission',
    status: 'DELIVERED & COMMISSIONED',
    statusColor: 'blue',
    image: 'https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=1200&q=85',
    year: '2021–2024',
    wide: false,
    scopeSummary: 'Multi-block administrative and public assembly facility with seismic-resistant RCC structural envelope and automated HVAC conduits.',
  },
  {
    id: 'regional-telecom-grid',
    title: 'Regional Optical & Tower Grid (Phase I–IV)',
    category: 'telecom',
    categoryLabel: 'TELECOM INFRASTRUCTURE',
    location: 'Eastern UP (Gorakhpur, Deoria, Basti)',
    scale: '850+ km HDD Trenchless / 150+ Towers',
    status: 'OPERATIONAL INFRASTRUCTURE',
    statusColor: 'blue',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    year: '2015–Present',
    wide: false,
    scopeSummary: 'Extensive subterranean optical fiber ducting and high-capacity ground-based telecommunication towers built under NIC 64200.',
  },
  {
    id: 'gorakhpur-urban-arterial',
    title: 'Gorakhpur Urban Arterial & Utility Corridor',
    category: 'epc',
    categoryLabel: 'CIVIL & MUNICIPAL EPC',
    location: 'Gorakhpur Metro Ring Corridor',
    scale: '14.2 km Heavy Concrete Road & Stormwater',
    status: 'PHASE II IN PROGRESS',
    statusColor: 'amber',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
    year: '2022–2025',
    wide: true,
    scopeSummary: 'Heavy-load reinforced concrete carriageways, stormwater drainage conduits, and municipal utility ducting executed under Class-A PWD tender.',
  },
  {
    id: 'deoria-peb-logistics',
    title: 'Eastern UP Pre-Engineered Logistics Park',
    category: 'epc',
    categoryLabel: 'CIVIL & MUNICIPAL EPC',
    location: 'Gorakhpur-Deoria Industrial Belt',
    scale: '320,000 Sq.Ft. Industrial Warehouse',
    status: 'COMMISSIONED',
    statusColor: 'blue',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
    year: '2020–2022',
    wide: true,
    scopeSummary: 'High-clearance PEB structural steel logistics facility with laser-screeded heavy industrial flooring for FMCG and retail freight.',
  },
  {
    id: 'arbit-imperial-commercial',
    title: 'Arbit Imperial Commercial Suites',
    category: 'commercial',
    categoryLabel: 'COMMERCIAL REAL ESTATE',
    location: 'Medical College Road, Gorakhpur',
    scale: '110,000 Sq.Ft. Corporate Suites',
    status: 'SANCTION IN PROGRESS',
    statusColor: 'amber',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    year: '2025–2028',
    wide: false,
    scopeSummary: 'Upcoming boutique commercial landmark designed for medical clinics, private equity branches, and high-end retail studios.',
  },
];

interface ExecutionPortfolioGridProps {
  onOpenEnquiry?: (projectTitle?: string) => void;
}

export const ExecutionPortfolioGrid: React.FC<ExecutionPortfolioGridProps> = ({
  onOpenEnquiry,
}) => {
  const [filter, setFilter] = useState<'ALL' | 'commercial' | 'epc' | 'telecom'>('ALL');

  const filtered = COMMISSIONS.filter((item) => {
    if (filter === 'ALL') return true;
    return item.category === filter;
  });

  return (
    <section className="py-24 sm:py-32 bg-[#F6F5F2] border-b border-stone-300 relative select-none">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-12 border-b border-stone-300 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-bold text-[#B8965A] mb-3">
              <span className="w-6 h-px bg-[#B8965A]"></span>
              <span>03 // EXECUTION TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B131E] font-normal tracking-tight">
              Landmark Projects &amp; Infrastructure Commissions
            </h2>
          </div>

          {/* Interactive Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'ALL', label: 'ALL COMMISSIONS' },
              { id: 'commercial', label: 'COMMERCIAL REAL ESTATE' },
              { id: 'epc', label: 'CIVIL & MUNICIPAL EPC' },
              { id: 'telecom', label: 'TELECOM INFRASTRUCTURE' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                suppressHydrationWarning
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase font-semibold border transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#0B131E] text-[#B8965A] border-[#B8965A]'
                    : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Staggered Grid (Wide 7-col paired with 5-col) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {filtered.map((item, idx) => {
            const isWide = item.wide;
            const colSpan = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={item.id}
                className={`${colSpan} group bg-white border border-stone-300 shadow-elevated flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#B8965A]`}
              >
                {/* Visual Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0B131E]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B131E]/90 via-[#0B131E]/30 to-transparent"></div>

                  {/* Badges on Visual */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-[#0B131E]/90 backdrop-blur-sm text-[#B8965A] text-[10px] font-mono tracking-widest px-3 py-1 border border-[#B8965A]/40 uppercase">
                      {item.categoryLabel}
                    </span>
                    <span className="bg-white text-[#0B131E] text-[10px] font-mono font-bold px-2.5 py-1">
                      {item.year}
                    </span>
                  </div>

                  {/* Status Tag on Bottom Left of Image */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-[10px] font-mono tracking-widest text-emerald-400 font-bold uppercase">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{item.status}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 font-sans mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#B8965A]" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B131E] mb-2 group-hover:text-[#9B7C44] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed mb-4">
                      {item.scopeSummary}
                    </p>
                  </div>

                  {/* Scale & Action Footer */}
                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Execution Scale</div>
                      <div className="text-xs sm:text-sm font-bold font-mono text-[#0B131E]">{item.scale}</div>
                    </div>

                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => onOpenEnquiry?.(`Inquiry: ${item.title}`)}
                      className="rounded-none border border-stone-300 group-hover:border-[#0B131E] bg-stone-50 group-hover:bg-[#0B131E] group-hover:text-white px-4 py-2.5 text-[11px] font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B8965A]" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

