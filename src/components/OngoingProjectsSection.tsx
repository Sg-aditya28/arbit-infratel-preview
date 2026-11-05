'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  PhoneCall, 
  Download, 
  FileCheck2, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Layers, 
  HardHat, 
  Radio, 
  Calendar,
  ExternalLink
} from 'lucide-react';

export interface ProjectData {
  id: string;
  name: string;
  subtitle: string;
  category: 'ongoing' | 'commercial' | 'epc' | 'upcoming' | 'completed';
  categoryLabel: string;
  statusBadge: string;
  statusColor: 'emerald' | 'amber' | 'blue' | 'slate';
  registrationTag: string;
  location: string;
  territory: string;
  image: string;
  builtUpArea: string;
  configuration: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  completion: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
}

export const ARBIT_PROJECTS: ProjectData[] = [
  {
    id: 'arbit-the-25',
    name: 'Arbit The 25',
    subtitle: 'Flagship Commercial Landmark & Corporate Suites',
    category: 'ongoing',
    categoryLabel: 'Commercial Landmark',
    statusBadge: 'Ongoing • Superstructure Stage',
    statusColor: 'emerald',
    registrationTag: 'UP-RERA: UPRERAPRM160411',
    location: 'Civil Lines, Gorakhpur',
    territory: 'Prime City Centre Hub',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    builtUpArea: '2,50,000 Sq.Ft.',
    configuration: 'Double-Height Retail (18-Ft) & Corporate Suites',
    description: 'Purvanchal\'s premier Grade-A mixed-use commercial destination. High-visibility double-height anchor retail on Ground/First levels with column-free corporate offices above, built to Seismic Zone IV RCC standards.',
    highlights: ['Double-Height 18-Ft Slabs', '100% Escrow Banking', 'Otis High-Speed Elevators', 'Computerized M35 RCC'],
    specs: [
      { label: 'Built-up Area', value: '2,50,000 Sq.Ft.' },
      { label: 'Floorplates', value: '540 – 2,400 Sq.Ft.' },
      { label: 'Target Handover', value: 'Q4 2026' },
      { label: 'RERA Registration', value: 'UPRERAPRM160411' }
    ],
    completion: '72% Structural Execution',
    primaryCtaText: 'View CAD Blueprint & Units',
    primaryCtaLink: '/projects',
    secondaryCtaText: 'Enquire Commercial Space'
  },
  {
    id: 'telecom-corridors',
    name: 'Purvanchal Telecom & Optical Corridors',
    subtitle: 'Trenchless HDD Optical Fiber & Heavy Tower Foundations',
    category: 'ongoing',
    categoryLabel: 'Telecom Infrastructure',
    statusBadge: 'Ongoing • Active Corridor Deployment',
    statusColor: 'emerald',
    registrationTag: 'NIC 64200 Heritage',
    location: 'Eastern UP Network',
    territory: 'Gorakhpur – Varanasi – Kushinagar',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    builtUpArea: '850+ Route Kilometers',
    configuration: 'Ground-Based Towers (GBT) & Optical Fiber Ducts',
    description: 'High-precision utility deployment under NIC 64200 telecommunications heritage. Over 150 turnkey GBT/RTT sites and 850+ km of trenchless HDD ducting deployed using captive Vermeer drilling rigs with zero road disruption.',
    highlights: ['Vermeer D24x40 Rigs', '150+ GBT/RTT Sites', 'Zero Road Disruption', 'Govt & Enterprise SLAs'],
    specs: [
      { label: 'Duct Network', value: '850+ Route km' },
      { label: 'Tower Installations', value: '150+ Sites' },
      { label: 'Equipment Fleet', value: 'Captive HDD Rigs' },
      { label: 'Compliance Code', value: 'NIC 64200 Heritage' }
    ],
    completion: 'Continuous Utility Execution',
    primaryCtaText: 'Inspect Utility Fleet',
    primaryCtaLink: '/civil-epc?division=telecom',
    secondaryCtaText: 'Tender Pre-Qualification'
  },
  {
    id: 'civil-epc-works',
    name: 'Civil Lines Smart EPC & Structural Complex',
    subtitle: 'Heavy Foundations, Deep Basements & Public Works',
    category: 'ongoing',
    categoryLabel: 'Civil EPC Contracting',
    statusBadge: 'Ongoing • Basements & RCC Phase',
    statusColor: 'emerald',
    registrationTag: 'UP PWD CLASS-A',
    location: 'Civil Lines West, Gorakhpur',
    territory: 'Urban Infrastructure Zone',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?q=80&w=1200&auto=format&fit=crop',
    builtUpArea: '1,80,000 Sq.Ft.',
    configuration: 'Institutional & Commercial Structural Works',
    description: 'Turnkey civil contracting executing heavy structural concrete, deep diaphragm retention walls, and multi-tier basement excavation backed by company-owned computerized Schwing Stetter 30m³/hr batching plants.',
    highlights: ['Schwing Stetter 30m³ Plants', 'Bauer Rotary Piling', 'Zero LTI Safety Record', 'Class-A PWD Status'],
    specs: [
      { label: 'Contract Scope', value: 'Turnkey Structural EPC' },
      { label: 'Concrete Batching', value: '30m³/hr Captive' },
      { label: 'Piling Rig', value: 'Bauer Rotary BG-28' },
      { label: 'Authority Status', value: 'PWD Class-A Reg.' }
    ],
    completion: '65% Basement & Core',
    primaryCtaText: 'Inspect Machinery Schedule',
    primaryCtaLink: '/civil-epc',
    secondaryCtaText: 'Prequalify Works Contract'
  },
  {
    id: 'arbit-business-tower-2',
    name: 'Arbit Business Tower (Phase 2)',
    subtitle: 'Grade-A Corporate IT & Financial Services Park',
    category: 'upcoming',
    categoryLabel: 'Commercial Landmark',
    statusBadge: 'Sanctioned • Upcoming Q3 2026',
    statusColor: 'blue',
    registrationTag: 'UP-RERA Sanction Stage',
    location: 'Taramandal Corridor, Gorakhpur',
    territory: 'Lakeview Development Area',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    builtUpArea: '3,20,000 Sq.Ft.',
    configuration: 'Institutional IT Workspaces & Corporate Headquarters',
    description: 'Next-generation intelligent green building featuring double-glazed high-performance curtain walls, automated multi-tier vehicular stack parking, and high-efficiency VRV air handling designed for enterprise headquarters.',
    highlights: ['IGBC Green Standard', 'Automated Stack Parking', '100% Redundant Power', 'Executive Helipad Ready'],
    specs: [
      { label: 'Planned Area', value: '3,20,000 Sq.Ft.' },
      { label: 'Structure', value: '2B + G + 9 Floors' },
      { label: 'Project Launch', value: 'Q3 2026' },
      { label: 'Environmental', value: 'IGBC Gold Rated' }
    ],
    completion: 'Masterplan & Clearances Approved',
    primaryCtaText: 'Pre-Registration Dossier',
    primaryCtaLink: '/contact?subject=Arbit%20Business%20Tower%20Phase%202',
    secondaryCtaText: 'Register Interest'
  },
  {
    id: 'kushinagar-overpass',
    name: 'Kushinagar Highway Grade-Separated Bridges',
    subtitle: '4-Lane Pre-Stressed Concrete Highway Overpasses',
    category: 'completed',
    categoryLabel: 'Civil EPC & Highways',
    statusBadge: 'Delivered Milestone • 100% Handover',
    statusColor: 'slate',
    registrationTag: 'UP PWD Class-A Handover',
    location: 'NH-28 Highway Corridor',
    territory: 'Eastern Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    builtUpArea: '2.8 km Viaduct & Approaches',
    configuration: 'Pre-Stressed RCC Girder Bridges & Retaining Walls',
    description: 'Executed high-load highway grade separation and deep pile caps under strict state PWD supervision. Completed 45 calendar days ahead of contractual timeline with zero liquidated damages and unblemished quality audits.',
    highlights: ['Delivered 45 Days Early', 'Zero Defects Handover', 'Pre-stressed Girder RCC', 'Official PWD Commendation'],
    specs: [
      { label: 'Viaduct Length', value: '2.8 Kilometers' },
      { label: 'Foundation Piles', value: '1,200mm Dia Piling' },
      { label: 'Execution Period', value: 'Delivered 2023' },
      { label: 'Client Body', value: 'UP State Public Works' }
    ],
    completion: '100% Operational & Handed Over',
    primaryCtaText: 'Inspect Delivery Audit',
    primaryCtaLink: '/civil-epc',
    secondaryCtaText: 'Tender Case Study'
  }
];

interface OngoingProjectsProps {
  onOpenInquiry?: (projectName: string) => void;
  showAllInitially?: boolean;
}

export const OngoingProjectsSection: React.FC<OngoingProjectsProps> = ({
  onOpenInquiry,
  showAllInitially = false,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ongoing' | 'commercial' | 'epc' | 'upcoming' | 'completed'>(
    showAllInitially ? 'all' : 'ongoing'
  );

  const filteredProjects = ARBIT_PROJECTS.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'ongoing') return p.category === 'ongoing';
    if (activeTab === 'commercial') return p.id === 'arbit-the-25' || p.id === 'arbit-business-tower-2';
    if (activeTab === 'epc') return p.id === 'telecom-corridors' || p.id === 'civil-epc-works' || p.id === 'kushinagar-overpass';
    if (activeTab === 'upcoming') return p.category === 'upcoming';
    if (activeTab === 'completed') return p.category === 'completed';
    return true;
  });

  return (
    <section id="ongoing-projects-section" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Jayabharath Model) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F4ECE1] border border-[#D5BE9E] text-[#735025] text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#8B6533]" />
              ESTABLISHED PORTFOLIO &amp; ONGOING SITES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Ongoing &amp; Signature Developments
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Explore RERA-registered commercial landmarks, high-capacity telecom utility corridors, and Class-A civil EPC works contracts underway across Uttar Pradesh.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 shadow-subtle text-xs text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span><strong>3 Active Sites</strong> Under Live Construction in Gorakhpur &amp; Eastern UP</span>
          </div>
        </div>

        {/* Jayabharath Project Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200 overflow-x-auto">
          {[
            { id: 'all', label: 'All Developments (5)' },
            { id: 'ongoing', label: 'Ongoing Projects (3)' },
            { id: 'commercial', label: 'Commercial Landmarks (2)' },
            { id: 'epc', label: 'Civil EPC & Infrastructure (3)' },
            { id: 'upcoming', label: 'Upcoming Sanctions (1)' },
            { id: 'completed', label: 'Delivered Milestones (1)' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              suppressHydrationWarning
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-subtle ${
                activeTab === tab.id
                  ? 'bg-[#0B192C] text-white shadow-corporate'
                  : 'bg-white text-slate-700 hover:text-[#0B192C] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Jayabharath Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-subtle hover:shadow-elevated hover:border-[#8B6533]/60 transition-all flex flex-col group"
            >
              {/* Image Banner with Badges (Jayabharath Signature Model) */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.96]"
                />
                
                {/* Live Status Badge */}
                <div className="absolute top-3 left-3 bg-[#0B192C] text-white px-3 py-1.5 rounded-md text-[11px] font-bold shadow-subtle flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${
                    project.statusColor === 'emerald' ? 'bg-emerald-400 animate-pulse' :
                    project.statusColor === 'blue' ? 'bg-sky-400' : 'bg-slate-300'
                  }`}></span>
                  <span>{project.statusBadge}</span>
                </div>

                {/* Statutory Registration Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#0B192C] px-2.5 py-1 rounded text-[10px] font-mono font-bold shadow-subtle border border-slate-200">
                  {project.registrationTag}
                </div>

                {/* Bottom Overlay Coordinates Strip */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-black/65 backdrop-blur-md px-3 py-2 rounded-md">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-[#D5BE9E]" />
                    {project.location}
                  </span>
                  <span className="font-bold text-[#D5BE9E] text-[11px]">
                    {project.builtUpArea}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8B6533]">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[10px] font-medium text-slate-500">
                      {project.territory}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0B192C] group-hover:text-[#8B6533] transition-colors leading-snug mb-1">
                    {project.name}
                  </h3>
                  
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.highlights.map((hl) => (
                      <span 
                        key={hl} 
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold border border-slate-200"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>

                  {/* Specifications 2x2 Grid (Jayabharath Style) */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs mb-5">
                    {project.specs.map((sp) => (
                      <div key={sp.label} className="min-w-0">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block truncate">
                          {sp.label}
                        </span>
                        <strong className="text-[#0B192C] font-semibold block text-[11px] truncate">
                          {sp.value}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Dual Actions (Jayabharath Standard) */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <Link
                    href={project.primaryCtaLink}
                    className="bg-[#0B192C] hover:bg-[#A37D4C] text-white py-2.5 px-3 rounded-md text-xs font-bold text-center transition-colors shadow-subtle flex items-center justify-center gap-1.5"
                  >
                    <span>{project.primaryCtaText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  {onOpenInquiry ? (
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => onOpenInquiry(project.name)}
                      className="bg-white border border-slate-300 hover:border-[#0B192C] hover:bg-slate-50 text-[#0B192C] py-2.5 px-3 rounded-md text-xs font-bold text-center transition-colors cursor-pointer"
                    >
                      {project.secondaryCtaText}
                    </button>
                  ) : (
                    <Link
                      href={`/contact?project=${encodeURIComponent(project.name)}`}
                      className="bg-white border border-slate-300 hover:border-[#0B192C] hover:bg-slate-50 text-[#0B192C] py-2.5 px-3 rounded-md text-xs font-bold text-center transition-colors flex items-center justify-center"
                    >
                      {project.secondaryCtaText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

