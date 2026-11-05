'use client';

import React, { useState } from 'react';
import type { EPCCapability } from '../types';
import { 
  Building2, 
  Radio, 
  Briefcase, 
  Truck, 
  FileSpreadsheet, 
  ArrowRight
} from 'lucide-react';

interface CapabilitiesSectionProps {
  onOpenTenderModal: (capability: EPCCapability) => void;
  selectedCategory?: 'all' | 'civil' | 'telecom' | 'turnkey';
  onCategoryChange?: (category: 'all' | 'civil' | 'telecom' | 'turnkey') => void;
}

export const EPC_CAPABILITIES: EPCCapability[] = [
  {
    id: 'civil-structural',
    title: 'Civil Engineering & Structural EPC',
    category: 'civil',
    subtitle: 'High-Rise Commercial Complexes, Institutional Buildings & Urban Redevelopment',
    description: 'Specializing in reinforced concrete structures, heavy foundations, deep basements, and post-tensioned slab casting with computerized batching systems for high-tolerance architectural specifications.',
    metric: '2.5M+ Sq.Ft.',
    metricLabel: 'Constructed Across UP',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?q=80&w=1200&auto=format&fit=crop',
    machinery: [
      'Schwing Stetter 30 m³/hr Automated Batching Plant',
      '4x 6m³ Transit Mixers (Ashok Leyland)',
      'Hydraulic Rotary Piling Rig (24m Depth capacity)',
      'Leica TS07 Total Station Survey Equipment',
      'Automated Cube Compression Testing Machine (2000 kN)'
    ],
    keyClients: ['State Public Works Department (PWD)', 'Purvanchal Industrial Development Authorities', 'Institutional Education Trusts'],
    specs: [
      { label: 'Quality Standard', value: 'IS 456 & IRC Standards' },
      { label: 'Seismic Design', value: 'Zone IV & V Qualified' },
      { label: 'Safety Record', value: '0 LTI (Lost Time Injury)' },
      { label: 'Max Basements Executed', value: 'Double Basement with Diaphragm Walls' }
    ]
  },
  {
    id: 'telecom-utility',
    title: 'Telecom & Utility Infrastructure',
    category: 'telecom',
    subtitle: 'Tower Foundations, Optical Fiber Ducting & Municipal Utilities',
    description: 'Leveraging our legacy in NIC 64200 telecommunication contracting to deliver turnkey Ground-Based Towers (GBT), Roof-Top Towers (RTT), trenchless HDD fiber laying, and power feeder corridors.',
    metric: '150+ Sites',
    metricLabel: 'Telecom & Utility Installations',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    machinery: [
      'Vermeer D24x40 Series Horizontal Directional Drilling (HDD) Rigs',
      'Ditch Witch Cable & Duct Trenchers',
      'High-Precision Fusion Splicers & OTDR Testers',
      'Mobile DG Generating Sets (125 kVA & 250 kVA)',
      'Heavy-Duty Tower Erection Winches & Rigging Kits'
    ],
    keyClients: ['National Telecom Tower Infrastructure Promoters', 'Public Sector Undertaking (PSU) Fiber Networks', 'Smart City Smart-Poles Initiatives'],
    specs: [
      { label: 'NIC Industrial Code', value: 'NIC 64200 Heritage' },
      { label: 'OFC Ducting Executed', value: '850+ Route Kilometers' },
      { label: 'Foundation Types', value: 'Raft, Isolated & Micro-piling' },
      { label: 'Statutory RoW Clearance', value: 'Integrated Liaison Desk' }
    ]
  },
  {
    id: 'commercial-turnkey',
    title: 'Commercial & Turnkey Works',
    category: 'turnkey',
    subtitle: 'Government Works Contracts, Road Networks & Industrial Warehousing',
    description: 'Comprehensive EPC works execution from concept to commissioning: earthworks, storm drainage, heavy-duty industrial flooring, pre-engineered building (PEB) structural steel, and municipal asphalt pavements.',
    metric: '100%',
    metricLabel: 'On-Schedule Delivery Record',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    machinery: [
      'Komatsu PC210 Hydraulic Excavators & Backhoes',
      'Vögele Asphalt Paver & Hamm Soil Compactors (12 Ton)',
      'Steel Fabrication & Automated Submerged Arc Welding Units',
      'Concrete Laser Screeds for Industrial VDF Flooring',
      'Fleet of 10x 16-Ton Tippers & Dumpers'
    ],
    keyClients: ['Urban Local Bodies (ULBs)', 'Logistics & Warehousing Parks', 'Private Commercial Developers'],
    specs: [
      { label: 'Contract Modality', value: 'Turnkey EPC / Item Rate / BOT' },
      { label: 'Bank Guarantee Rating', value: 'High Solvency Certification' },
      { label: 'GST & MCA Adherence', value: '100% Tax Compliant Profile' },
      { label: 'Turnaround Time', value: 'Optimized Critical Path Method (CPM)' }
    ]
  }
];

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  onOpenTenderModal,
  selectedCategory = 'all',
  onCategoryChange,
}) => {
  const [filter, setFilter] = useState<'all' | 'civil' | 'telecom' | 'turnkey'>(selectedCategory);

  const currentFilter = onCategoryChange ? selectedCategory : filter;

  const handleFilterClick = (cat: 'all' | 'civil' | 'telecom' | 'turnkey') => {
    if (onCategoryChange) {
      onCategoryChange(cat);
    } else {
      setFilter(cat);
    }
  };

  const displayedCapabilities = EPC_CAPABILITIES.filter((cap) => {
    if (currentFilter === 'all') return true;
    return cap.category === currentFilter;
  });

  return (
    <section id="civil-epc" className="py-20 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F4ECE1] border border-[#D5BE9E] text-[#735025] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#8B6533]" />
            B2B &amp; Public Infrastructure Division
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Civil EPC &amp; Works Contract Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Equipped for municipal, state, and enterprise infrastructure execution with state-of-the-art plant, heavy machinery, and an unblemished safety record.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => handleFilterClick('all')}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all shadow-subtle cursor-pointer ${
                currentFilter === 'all'
                  ? 'bg-[#0B192C] text-white shadow-corporate'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
              }`}
            >
              All Divisions (3)
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => handleFilterClick('civil')}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 shadow-subtle cursor-pointer ${
                currentFilter === 'civil'
                  ? 'bg-[#0B192C] text-white shadow-corporate'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-[#8B6533]" />
              Civil Engineering
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => handleFilterClick('telecom')}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 shadow-subtle cursor-pointer ${
                currentFilter === 'telecom'
                  ? 'bg-[#0B192C] text-white shadow-corporate'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-[#8B6533]" />
              Telecom Works
            </button>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => handleFilterClick('turnkey')}
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 shadow-subtle cursor-pointer ${
                currentFilter === 'turnkey'
                  ? 'bg-[#0B192C] text-white shadow-corporate'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-[#8B6533]" />
              Commercial Turnkey
            </button>
          </div>
        </div>

        {/* 3-Column Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCapabilities.map((cap) => (
            <div
              key={cap.id}
              className="bg-white rounded-xl border border-slate-200 shadow-subtle hover:shadow-corporate hover:border-[#A37D4C]/60 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card Image Banner with Metric Overlay (Light Aesthetic) */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Overlaid Highlight Metric Badge */}
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div className="bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-lg shadow-subtle">
                    <div className="text-xl font-extrabold text-[#0B192C] leading-none">
                      {cap.metric}
                    </div>
                    <div className="text-[10px] text-[#8B6533] uppercase font-bold tracking-wider mt-0.5">
                      {cap.metricLabel}
                    </div>
                  </div>

                  <span className="text-xs px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#0B192C] font-bold border border-slate-200 shadow-subtle">
                    {cap.category === 'civil' && 'Urban EPC'}
                    {cap.category === 'telecom' && 'NIC 64200'}
                    {cap.category === 'turnkey' && 'Tender Ready'}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#0B192C] group-hover:text-[#8B6533] transition-colors leading-snug">
                  {cap.title}
                </h3>
                
                <p className="text-xs font-semibold text-[#8B6533] mt-1 mb-3">
                  {cap.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {cap.description}
                </p>

                {/* Plant & Machinery Tech Section */}
                <div className="mt-auto border-t border-slate-100 pt-4 mb-5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B192C] uppercase tracking-wider mb-2.5">
                    <Truck className="w-3.5 h-3.5 text-[#8B6533]" />
                    <span>Key Plant &amp; Machinery Specs:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {cap.machinery.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B6533] mt-1.5 flex-shrink-0"></span>
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                    {cap.machinery.length > 3 && (
                      <li className="text-[11px] font-semibold text-[#8B6533] pl-3.5">
                        + {cap.machinery.length - 3} additional heavy rigs &amp; lab testing units
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pre-Qualification Button */}
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => onOpenTenderModal(cap)}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-[#0B192C] text-[#0B192C] hover:text-white font-bold py-2.5 px-4 rounded-md text-sm transition-all duration-200 border border-slate-300 hover:border-[#0B192C] shadow-subtle cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#8B6533] group-hover:text-white" />
                  <span>View Tender Pre-Qualification</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Equipment & Fleet Highlights Ribbon */}
        <div className="mt-14 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-subtle">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-extrabold text-[#0B192C]">100%</div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1">
                Owned Fleet &amp; Rig Inventory
              </div>
            </div>
            <div className="pt-4 md:pt-0 md:pl-4">
              <div className="text-3xl font-extrabold text-[#0B192C]">Zero</div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1">
                Lost-Time Incidents (LTI)
              </div>
            </div>
            <div className="pt-4 md:pt-0 md:pl-4">
              <div className="text-3xl font-extrabold text-[#0B192C]">Class-A</div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1">
                PWD Works Registration Status
              </div>
            </div>
            <div className="pt-4 md:pt-0 md:pl-4">
              <div className="text-3xl font-extrabold text-[#0B192C]">₹ 50+ Cr</div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1">
                Tender Bidding Capacity
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
