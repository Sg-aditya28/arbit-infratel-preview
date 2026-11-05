'use client';

import React, { useState } from 'react';
import { ArrowRight, Building2, HardHat, Radio, ShieldCheck, Check, Layers, Cpu, Award } from 'lucide-react';

interface Pillar {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
  image: string;
  tag: string;
  ctaText: string;
}

const PILLARS: Pillar[] = [
  {
    id: 'commercial',
    num: '01',
    title: 'REAL ESTATE & COMMERCIAL LANDMARKS',
    subtitle: 'Signature Mixed-Use & Corporate Destinations',
    description: 'Developing landmark commercial destinations with high visibility, column-free corporate suites, double-height retail atriums, and multi-tier basement parking.',
    capabilities: [
      'Double-height ground floor retail atriums (18-ft slab)',
      'Column-free Grade-A office floor plates',
      'Double-glazed low-E energy efficient glass facade',
      'Multi-level basement parking & 100% DG backup',
      '100% UP-RERA registered with escrow bank governance',
    ],
    metrics: [
      { label: 'Built Footprint', value: '2.5M+ Sq.Ft.' },
      { label: 'Flagship RERA', value: 'UPRERAPRJ218427' },
      { label: 'Promoter Status', value: 'UPRERAPRM160411' },
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    tag: 'DEVELOPMENT DIVISION',
    ctaText: 'Enquire Commercial Spaces',
  },
  {
    id: 'civil-epc',
    num: '02',
    title: 'CIVIL ENGINEERING & TURNKEY EPC',
    subtitle: 'Class-A PWD Heavy Infrastructure & Public Works',
    description: 'Class-A licensed civil engineering contractor executing state highways, institutional complexes, municipal stormwater networks, and industrial pre-engineered buildings.',
    capabilities: [
      'Computerized mobile batching plants (120 m³/hr output)',
      'Hydraulic rotary piling rigs and deep foundation engineering',
      'Pre-engineered industrial steel buildings (PEB)',
      'Reinforced concrete (RCC) flyovers, bridges, and culverts',
      'Zero-accident HSE compliance and audited bank guarantees',
    ],
    metrics: [
      { label: 'Contractor Rating', value: 'Class-A PWD' },
      { label: 'Bidding Solvency', value: '₹50+ Cr' },
      { label: 'Batching Capacity', value: '120 m³/hr' },
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=1600&q=85',
    tag: 'EPC DIVISION',
    ctaText: 'Enquire EPC Works',
  },
  {
    id: 'telecom',
    num: '03',
    title: 'TELECOM & UTILITY INFRASTRUCTURE',
    subtitle: 'Telecom Infrastructure O&M (IME) – Altius Network',
    description: 'Authorized Operations & Maintenance (IME) partner for Altius Network, engineering and maintaining subterranean horizontal directional drilling (HDD), optical fiber ducting, and structural telecom towers across Eastern UP.',
    capabilities: [
      '850+ km trenchless directional drilling (HDD)',
      'Subterranean HDPE ducting and optical fiber laying',
      'Structural ground-based telecom towers (GBT) & rooftop masts',
      'Turnkey utility corridor civil works',
      'NIC Code 64200 passive infrastructure classification',
    ],
    metrics: [
      { label: 'HDD Trenchless', value: '850+ km' },
      { label: 'Tower Deployments', value: '150+ Sites' },
      { label: 'Telecom Partner', value: 'Altius Network' },
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
    tag: 'UTILITY INFRASTRUCTURE',
    ctaText: 'Enquire Telecom Services',
  },
];

interface ThreePillarsShowcaseProps {
  onOpenEnquiry?: (category?: string) => void;
}

export const ThreePillarsShowcase: React.FC<ThreePillarsShowcaseProps> = ({ onOpenEnquiry }) => {
  const [activeId, setActiveId] = useState('commercial');

  const activePillar = PILLARS.find((p) => p.id === activeId) || PILLARS[0];

  return (
    <section id="three-pillars" className="py-16 sm:py-24 bg-[#F6F5F2] text-[#0B131E] relative border-b border-stone-200 select-none">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200 gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#9B7C44] mb-2">
              CORE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-normal tracking-tight">
              The Three Pillars of Arbit Infratel
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md font-normal leading-relaxed">
            Specialized engineering and execution units delivering commercial real estate, heavy civil EPC, and utility networks.
          </p>
        </div>

        {/* Tab Selector Strip (Clean Light Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {PILLARS.map((p) => {
            const isSelected = p.id === activeId;
            return (
              <button
                key={p.id}
                type="button"
                suppressHydrationWarning
                onClick={() => setActiveId(p.id)}
                className={`p-5 text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0B131E] text-white border-[#0B131E] shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold tracking-wider ${isSelected ? 'text-[#B8965A]' : 'text-[#9B7C44]'}`}>
                    {p.num} // {p.tag}
                  </span>
                  <span className={`text-[10px] font-bold tracking-wider uppercase ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>
                    SELECT
                  </span>
                </div>
                <h3 className={`text-base font-serif font-bold ${isSelected ? 'text-white' : 'text-[#0B131E]'}`}>
                  {p.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Pane (Clean Light White Container) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-stone-200 bg-white p-8 sm:p-10 shadow-sm">
          
          {/* Left 6 Columns: Editorial Content, Capabilities & Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Pillar Index */}
              <div className="text-xs font-mono tracking-wider text-[#9B7C44] font-bold uppercase mb-1">
                {activePillar.num} // SPECIFICATIONS
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-serif text-[#0B131E] mb-1 font-bold">
                {activePillar.title}
              </h3>
              <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-4">
                {activePillar.subtitle}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                {activePillar.description}
              </p>

              {/* Capabilities List with Clean Checkmarks */}
              <div className="space-y-2.5 mb-6">
                <div className="text-[11px] uppercase font-bold tracking-wider text-stone-700 font-mono mb-1">
                  CORE HIGHLIGHTS:
                </div>
                {activePillar.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700">
                    <span className="w-4 h-4 bg-stone-100 border border-stone-300 text-[#9B7C44] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#9B7C44]" />
                    </span>
                    <span className="leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Ribbon & Action */}
            <div className="pt-5 border-t border-stone-200">
              <div className="grid grid-cols-3 gap-3 mb-5">
                {activePillar.metrics.map((m, idx) => (
                  <div key={idx} className="border-l-2 border-[#9B7C44] pl-2.5">
                    <div className="text-base font-serif font-bold text-[#0B131E]">{m.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-stone-500 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                suppressHydrationWarning
                onClick={() => onOpenEnquiry?.(activePillar.title)}
                className="w-full sm:w-auto bg-[#0B131E] hover:bg-[#B8965A] text-white px-7 py-3.5 text-xs tracking-wider uppercase font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{activePillar.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right 6 Columns: High-Quality Photo */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full overflow-hidden border border-stone-200 bg-stone-100">
            <img
              src={activePillar.image}
              alt={activePillar.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 bg-[#0B131E]/85 text-white px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider">
              DIVISION // {activePillar.num}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

