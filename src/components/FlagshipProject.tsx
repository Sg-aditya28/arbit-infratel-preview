'use client';

import React, { useState } from 'react';
import type { UnitItem } from '../types';
import { 
  Building, 
  ShieldCheck, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Calendar, 
  User, 
  Check, 
  Send,
  Layers, 
  ArrowUpRight, 
  Info, 
  CheckCircle2, 
  Filter 
} from 'lucide-react';

interface FlagshipProjectProps {
  onScheduleVisitSubmit: (unitName?: string) => void;
  onInquireUnit: (unit: UnitItem) => void;
}

const DUMMY_UNITS: UnitItem[] = [
  {
    id: 'u-g101',
    unitNumber: 'Unit G-101',
    floor: 'Ground Floor',
    areaSqFt: 650,
    type: 'Commercial Retail',
    facing: 'Main Boulevard Frontage (North)',
    status: 'Available',
    priceEstimate: '₹ 1.45 Cr onwards',
    features: ['18 Ft Double-Height Slab', 'Full Glass Frontage', 'Provision for Mezzanine Floor']
  },
  {
    id: 'u-g102',
    unitNumber: 'Unit G-102',
    floor: 'Ground Floor',
    areaSqFt: 820,
    type: 'Anchor Showroom',
    facing: 'Corner Grand Atrium Frontage',
    status: 'Booked',
    priceEstimate: '₹ 1.85 Cr',
    features: ['Three-side Glazed Exposure', 'High Footfall Core Zone', 'Direct Service Loading Bay']
  },
  {
    id: 'u-g103',
    unitNumber: 'Unit G-103',
    floor: 'Ground Floor',
    areaSqFt: 540,
    type: 'Boutique Retail / Cafe',
    facing: 'East Promenade Courtyard',
    status: 'Available',
    priceEstimate: '₹ 1.15 Cr onwards',
    features: ['Outdoor Alfresco Seating Provision', 'Dedicated Kitchen Exhaust Shaft', '100% DG Backup']
  },
  {
    id: 'u-f201',
    unitNumber: 'Unit F-201',
    floor: 'First Floor',
    areaSqFt: 980,
    type: 'Corporate Office Suite',
    facing: 'Civil Lines Road Vista',
    status: 'Reserved',
    priceEstimate: '₹ 1.10 Cr',
    features: ['Acoustic DGU Glass Insulation', 'High-Speed Fiber Riser Access', 'Direct Concierge Lobby']
  },
  {
    id: 'u-f204',
    unitNumber: 'Unit F-204',
    floor: 'First Floor',
    areaSqFt: 1200,
    type: 'Corporate Executive Suite',
    facing: 'West Green Corridor View',
    status: 'Available',
    priceEstimate: '₹ 1.35 Cr onwards',
    features: ['Executive En-Suite Washroom', 'Dedicated Server Room Conduit', '2 Reserved Covered Car Bays']
  },
  {
    id: 'u-t301',
    unitNumber: 'Unit T-301',
    floor: 'Typical Floor',
    areaSqFt: 2400,
    type: 'Column-Free Workstation Plate',
    facing: 'Panoramic 360° Skyline View',
    status: 'Available',
    priceEstimate: '₹ 2.65 Cr onwards',
    features: ['8.4m Modular Column Grid', 'Central VRV Air-Conditioning Provision', 'Dual Fire Evacuation Staircases']
  }
];

export const FlagshipProject: React.FC<FlagshipProjectProps> = ({
  onScheduleVisitSubmit,
  onInquireUnit,
}) => {
  const [activeTab, setActiveTab] = useState<'Ground Floor' | 'First Floor' | 'Typical Floor'>('Ground Floor');
  const [selectedUnitId, setSelectedUnitId] = useState<string>('u-g101');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'Available' | 'Booked'>('ALL');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    unitType: 'Commercial Retail (Ground Floor)',
    date: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('ARB-VIS-928174');

  const filteredUnits = DUMMY_UNITS.filter((unit) => {
    const matchesFloor = activeTab === 'Typical Floor' ? true : unit.floor === activeTab;
    const matchesStatus = filterStatus === 'ALL' || unit.status === filterStatus;
    return matchesFloor && matchesStatus;
  });

  const selectedUnit = DUMMY_UNITS.find(u => u.id === selectedUnitId) || DUMMY_UNITS[0];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingRef(`ARB-VIS-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
      onScheduleVisitSubmit(formData.unitType);
    }, 600);
  };

  const handleUnitClick = (unit: UnitItem) => {
    setSelectedUnitId(unit.id);
    setFormData(prev => ({
      ...prev,
      unitType: `${unit.unitNumber} - ${unit.type} (${unit.floor})`
    }));
  };

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-slate-200 gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B192C] text-white text-xs font-semibold">
                <Building className="w-3.5 h-3.5 text-[#D5BE9E]" />
                FLAGSHIP MIXED-USE DEVELOPMENT
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 text-emerald-900 border border-emerald-300 text-xs font-bold font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                UP-RERA: UPRERAPRM160411
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Arbit The 25 • Civil Lines
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl leading-relaxed">
              Prime commercial address in Gorakhpur featuring double-height retail anchors, Grade-A corporate office suites, and central atrium architecture.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 hidden sm:inline">Execution Status:</span>
            <span className="px-3 py-1 bg-[#F4ECE1] text-[#735025] border border-[#D5BE9E] rounded text-xs font-semibold">
              Superstructure Complete • Interior Fit-outs Underway
            </span>
          </div>
        </div>

        {/* 2-Column Grid: CAD Blueprint & Live Table (Left 8 cols) + Site Visit Scheduler (Right 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (8 of 12 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Floor Tabs & Toolbar */}
            <div className="bg-slate-100 p-2.5 rounded-lg border border-slate-200 flex flex-wrap items-center justify-between gap-3">
              {/* Floor Tabs */}
              <div className="flex items-center gap-1 bg-white p-1 rounded border border-slate-200">
                {(['Ground Floor', 'First Floor', 'Typical Floor'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => {
                      setActiveTab(tab);
                      const firstUnit = DUMMY_UNITS.find(u => tab === 'Typical Floor' ? u.floor === 'Typical Floor' : u.floor === tab);
                      if (firstUnit) setSelectedUnitId(firstUnit.id);
                    }}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'bg-[#0B192C] text-white shadow-subtle'
                        : 'text-slate-700 hover:text-[#0B192C] hover:bg-slate-50'
                    }`}
                  >
                    {tab === 'Ground Floor' && 'Ground Floor (Retail)'}
                    {tab === 'First Floor' && 'First Floor (Corporate)'}
                    {tab === 'Typical Floor' && 'Typical Floor (Office)'}
                  </button>
                ))}
              </div>

              {/* Zoom & Reset Controls */}
              <div className="flex items-center border border-slate-300 rounded bg-white overflow-hidden shadow-subtle">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setZoomLevel(prev => Math.max(0.85, prev - 0.15))}
                  className="p-1.5 hover:bg-slate-100 text-slate-700 border-r border-slate-200 cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-mono px-2.5 text-slate-700 font-semibold">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setZoomLevel(prev => Math.min(1.3, prev + 0.15))}
                  className="p-1.5 hover:bg-slate-100 text-slate-700 border-r border-slate-200 cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setZoomLevel(1)}
                  className="p-1.5 hover:bg-slate-100 text-slate-700 cursor-pointer"
                  title="Reset Scale"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Architectural CAD Floor Plan Canvas */}
            <div className="relative rounded-lg border border-slate-300 bg-white overflow-hidden shadow-subtle">
              {/* Technical Drawing Stamps */}
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2 font-mono">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#0B192C]">DWG REF:</span>
                  <span>ARB-25-{activeTab === 'Ground Floor' ? 'GF-01' : activeTab === 'First Floor' ? 'FF-02' : 'TYP-03'}</span>
                  <span>•</span>
                  <span>SCALE: 1:100 @ A1</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <span>NORTH ORIENTED ⌖</span>
                  <span className="font-bold text-[#8B6533]">SANCTIONED ARCHITECTURAL LAYOUT</span>
                </div>
              </div>

              {/* Scalable Drawing Container */}
              <div className="p-6 md:p-8 flex items-center justify-center min-h-[360px] overflow-auto bg-[#FAFAFA]">
                <div 
                  className="w-full max-w-2xl transition-transform duration-200 select-none"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  {/* Realistic Architectural AutoCAD Style SVG Diagram */}
                  <svg
                    viewBox="0 0 700 420"
                    className="w-full h-auto drop-shadow-sm font-sans"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Architectural Grid Axis Bubbles (Top Numbers: 1, 2, 3, 4, 5) */}
                    {[80, 200, 350, 500, 620].map((x, idx) => (
                      <g key={idx}>
                        <line x1={x} y1="20" x2={x} y2="390" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="4 4" />
                        <circle cx={x} cy="14" r="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="1" />
                        <text x={x} y="17" textAnchor="middle" fill="#0B192C" fontSize="9" fontWeight="bold">{idx + 1}</text>
                      </g>
                    ))}

                    {/* Architectural Grid Axis Bubbles (Left Letters: A, B, C) */}
                    {[70, 200, 340].map((y, idx) => (
                      <g key={idx}>
                        <line x1="30" y1={y} x2="670" y2={y} stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="4 4" />
                        <circle cx="22" cy={y} r="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="1" />
                        <text x="22" y={y + 3} textAnchor="middle" fill="#0B192C" fontSize="9" fontWeight="bold">{String.fromCharCode(65 + idx)}</text>
                      </g>
                    ))}

                    {/* Main RCC Perimeter Wall */}
                    <rect
                      x="50"
                      y="40"
                      width="600"
                      height="330"
                      rx="2"
                      fill="#FFFFFF"
                      stroke="#0B192C"
                      strokeWidth="3"
                    />

                    {/* Structural Columns (Black RCC Piers) */}
                    {[80, 200, 350, 500, 620].map((x) =>
                      [70, 200, 340].map((y) => (
                        <rect key={`${x}-${y}`} x={x - 4} y={y - 4} width="8" height="8" fill="#0B192C" stroke="#0B192C" />
                      ))
                    )}

                    {/* Central Core & Elevators */}
                    <rect
                      x="260"
                      y="50"
                      width="180"
                      height="110"
                      fill="#F8FAFC"
                      stroke="#475569"
                      strokeWidth="1.5"
                    />
                    <line x1="350" y1="50" x2="350" y2="160" stroke="#CBD5E1" strokeWidth="1" />
                    <text x="305" y="95" textAnchor="middle" fill="#0B192C" fontSize="9" fontWeight="bold">PASSENGER LIFT</text>
                    <text x="395" y="95" textAnchor="middle" fill="#0B192C" fontSize="9" fontWeight="bold">SERVICE LIFT</text>
                    <text x="350" y="130" textAnchor="middle" fill="#64748B" fontSize="8">FIRE ESCAPE &amp; AHU SHAFT</text>

                    {/* Ground Floor Layout Elements */}
                    {activeTab === 'Ground Floor' && (
                      <>
                        {/* Unit G-101 (Available) */}
                        <g 
                          className="cursor-pointer"
                          onClick={() => handleUnitClick(DUMMY_UNITS[0])}
                        >
                          <rect
                            x="60"
                            y="50"
                            width="180"
                            height="120"
                            className={`transition-colors ${
                              selectedUnitId === 'u-g101'
                                ? 'fill-[#A37D4C]/20 stroke-[#A37D4C] stroke-2'
                                : 'fill-emerald-50/70 hover:fill-emerald-100/80 stroke-emerald-600 stroke-1.5'
                            }`}
                          />
                          <text x="150" y="100" textAnchor="middle" fill="#0B192C" fontSize="12" fontWeight="bold">Unit G-101 (Available)</text>
                          <text x="150" y="120" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">650 SQ.FT. (60.4 SQ.M.)</text>
                          <text x="150" y="138" textAnchor="middle" fill="#475569" fontSize="8">18-FT DOUBLE HEIGHT RETAIL</text>
                        </g>

                        {/* Unit G-102 (Anchor Showroom - BOOKED) */}
                        <g 
                          className="cursor-pointer"
                          onClick={() => handleUnitClick(DUMMY_UNITS[1])}
                        >
                          <rect
                            x="460"
                            y="50"
                            width="180"
                            height="180"
                            className={`transition-colors ${
                              selectedUnitId === 'u-g102'
                                ? 'fill-amber-100 stroke-amber-600 stroke-2'
                                : 'fill-amber-50/80 hover:fill-amber-100 stroke-amber-500 stroke-1.5'
                            }`}
                          />
                          <text x="550" y="125" textAnchor="middle" fill="#78350F" fontSize="12" fontWeight="bold">Unit G-102 (Booked)</text>
                          <text x="550" y="145" textAnchor="middle" fill="#92400E" fontSize="10" fontWeight="bold">820 SQ.FT. (76.2 SQ.M.)</text>
                          <text x="550" y="163" textAnchor="middle" fill="#B45309" fontSize="8">ANCHOR SHOWROOM</text>
                        </g>

                        {/* Unit G-103 (Courtyard Cafe - Available) */}
                        <g 
                          className="cursor-pointer"
                          onClick={() => handleUnitClick(DUMMY_UNITS[2])}
                        >
                          <rect
                            x="60"
                            y="220"
                            width="180"
                            height="140"
                            className={`transition-colors ${
                              selectedUnitId === 'u-g103'
                                ? 'fill-[#A37D4C]/20 stroke-[#A37D4C] stroke-2'
                                : 'fill-emerald-50/70 hover:fill-emerald-100/80 stroke-emerald-600 stroke-1.5'
                            }`}
                          />
                          <text x="150" y="280" textAnchor="middle" fill="#0B192C" fontSize="12" fontWeight="bold">Unit G-103 (Available)</text>
                          <text x="150" y="300" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">540 SQ.FT. (50.2 SQ.M.)</text>
                          <text x="150" y="318" textAnchor="middle" fill="#475569" fontSize="8">BOUTIQUE CAFE / OUTDOOR DECK</text>
                        </g>

                        {/* Main Portico & Drop-Off Axis */}
                        <rect x="260" y="220" width="180" height="140" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
                        <text x="350" y="280" textAnchor="middle" fill="#0B192C" fontSize="11" fontWeight="bold">MAIN ENTRANCE PORTICO</text>
                        <text x="350" y="300" textAnchor="middle" fill="#64748B" fontSize="9">12-METER WIDE APPROACH CORRIDOR</text>
                      </>
                    )}

                    {/* First Floor Layout Elements */}
                    {activeTab === 'First Floor' && (
                      <>
                        {/* Unit F-201 (Reserved) */}
                        <g 
                          className="cursor-pointer"
                          onClick={() => handleUnitClick(DUMMY_UNITS[3])}
                        >
                          <rect
                            x="60"
                            y="50"
                            width="180"
                            height="130"
                            className={`transition-colors ${
                              selectedUnitId === 'u-f201'
                                ? 'fill-[#A37D4C]/20 stroke-[#A37D4C] stroke-2'
                                : 'fill-slate-100 hover:fill-slate-200 stroke-slate-400 stroke-1.5'
                            }`}
                          />
                          <text x="150" y="105" textAnchor="middle" fill="#0B192C" fontSize="12" fontWeight="bold">Unit F-201 (Reserved)</text>
                          <text x="150" y="125" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">980 SQ.FT. (91.0 SQ.M.)</text>
                          <text x="150" y="143" textAnchor="middle" fill="#64748B" fontSize="8">CORPORATE OFFICE SUITE</text>
                        </g>

                        {/* Unit F-204 (Available Corporate Suite) */}
                        <g 
                          className="cursor-pointer"
                          onClick={() => handleUnitClick(DUMMY_UNITS[4])}
                        >
                          <rect
                            x="260"
                            y="180"
                            width="380"
                            height="180"
                            className={`transition-colors ${
                              selectedUnitId === 'u-f204'
                                ? 'fill-[#A37D4C]/20 stroke-[#A37D4C] stroke-2'
                                : 'fill-emerald-50/70 hover:fill-emerald-100/80 stroke-emerald-600 stroke-1.5'
                            }`}
                          />
                          <text x="450" y="255" textAnchor="middle" fill="#0B192C" fontSize="13" fontWeight="bold">Unit F-204 (Available)</text>
                          <text x="450" y="278" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">1,200 SQ.FT. (111.5 SQ.M.)</text>
                          <text x="450" y="298" textAnchor="middle" fill="#475569" fontSize="9">EXECUTIVE SUITE • PRIVATE RESTROOM • DEDICATED PARKING</text>
                        </g>

                        {/* Executive Lounge */}
                        <rect x="460" y="50" width="180" height="110" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
                        <text x="550" y="105" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold">CONFERENCE &amp; CONCIERGE</text>
                      </>
                    )}

                    {/* Typical Floor Layout Elements */}
                    {activeTab === 'Typical Floor' && (
                      <>
                        <g 
                          className="cursor-pointer"
                          onClick={() => handleUnitClick(DUMMY_UNITS[5])}
                        >
                          <rect
                            x="180"
                            y="50"
                            width="460"
                            height="310"
                            className={`transition-colors ${
                              selectedUnitId === 'u-t301'
                                ? 'fill-[#A37D4C]/20 stroke-[#A37D4C] stroke-2'
                                : 'fill-emerald-50/70 hover:fill-emerald-100/80 stroke-emerald-600 stroke-1.5'
                            }`}
                          />
                          <text x="410" y="190" textAnchor="middle" fill="#0B192C" fontSize="14" fontWeight="bold">Unit T-301: Typical Floor Plate (Available)</text>
                          <text x="410" y="215" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="bold">UP TO 2,400 SQ.FT. CONTIGUOUS • COLUMN-FREE 8.4M MODULAR SPAN</text>
                          <text x="410" y="235" textAnchor="middle" fill="#475569" fontSize="9">IDEAL FOR REGIONAL CORPORATE OFFICES, IT FIRMS &amp; FINANCIAL INSTITUTIONS</text>
                        </g>
                      </>
                    )}

                    {/* Compass Rose */}
                    <g transform="translate(635, 345)">
                      <circle cx="12" cy="12" r="12" fill="#FFFFFF" stroke="#0B192C" strokeWidth="1" />
                      <path d="M12 2L16 12H8L12 2Z" fill="#8B6533" />
                      <text x="12" y="21" textAnchor="middle" fill="#0B192C" fontSize="7" fontWeight="bold">N</text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Status Ribbon below Floor Plan */}
              <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-700 gap-2">
                <div className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#8B6533]" />
                  <span>Click any sector on the architectural drawing to inspect unit metrics &amp; pre-fill the inquiry desk.</span>
                </div>
                <div className="font-semibold text-[#0B192C]">
                  Currently Selected: <strong className="font-mono text-[#8B6533]">{selectedUnit.unitNumber}</strong>
                </div>
              </div>
            </div>

            {/* Live Unit Availability Matrix Table */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-subtle overflow-hidden">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-bold text-[#0B192C] uppercase tracking-wider">
                    Unit Inventory &amp; Availability Matrix
                  </h3>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold font-mono">
                    RERA Escrow Sync
                  </span>
                </div>

                {/* Filter Status */}
                <div className="flex items-center gap-1.5 text-xs">
                  <Filter className="w-3.5 h-3.5 text-slate-400 mr-1" />
                  {(['ALL', 'Available', 'Booked'] as const).map((st) => (
                    <button
                      key={st}
                      type="button"
                      suppressHydrationWarning
                      onClick={() => setFilterStatus(st)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                        filterStatus === st
                          ? 'bg-[#0B192C] text-white'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100 text-slate-700 text-xs uppercase font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Unit #</th>
                      <th className="py-3 px-4">Floor</th>
                      <th className="py-3 px-4">Area (Sq.Ft.)</th>
                      <th className="py-3 px-4">Classification</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Inquire</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {filteredUnits.map((unit) => {
                      const isSelected = selectedUnitId === unit.id;
                      return (
                        <tr
                          key={unit.id}
                          onClick={() => handleUnitClick(unit)}
                          className={`cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-[#F4ECE1]/60 font-medium'
                              : 'hover:bg-slate-50'
                          }`}
                        >
                          <td className="py-3 px-4 font-bold text-[#0B192C] font-mono">
                            {unit.unitNumber}
                          </td>
                          <td className="py-3 px-4 text-xs">
                            {unit.floor}
                          </td>
                          <td className="py-3 px-4 font-semibold text-slate-900">
                            {unit.areaSqFt} Sq.Ft.
                          </td>
                          <td className="py-3 px-4 text-slate-600 text-xs">
                            {unit.type}
                          </td>
                          <td className="py-3 px-4">
                            {unit.status === 'Available' && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-900 border border-emerald-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                                Available
                              </span>
                            )}
                            {unit.status === 'Booked' && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-950 border border-amber-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                                Booked
                              </span>
                            )}
                            {unit.status === 'Reserved' && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                                Reserved
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              type="button"
                              suppressHydrationWarning
                              onClick={(e) => {
                                e.stopPropagation();
                                onInquireUnit(unit);
                              }}
                              className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded bg-[#0B192C] text-white hover:bg-[#A37D4C] transition-colors cursor-pointer"
                            >
                              <span>Inquire</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Selected Unit Specs Ribbon */}
              <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-700 gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#0B192C]">Specifications ({selectedUnit.unitNumber}):</span>
                  <span>{selectedUnit.features.join(' • ')}</span>
                </div>
                <div className="font-semibold text-[#0B192C]">
                  Indicative Price: <span className="text-[#8B6533] font-mono font-bold">{selectedUnit.priceEstimate}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (4 of 12 cols): Schedule Site Visit Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 shadow-subtle sticky top-28">
              
              {/* Card Header */}
              <div className="border-b border-slate-200 pb-4 mb-4">
                <div className="text-xs font-bold text-[#8B6533] uppercase tracking-wider mb-1">
                  Promoter Relationship Desk
                </div>
                <h3 className="text-lg font-bold text-[#0B192C]">
                  Schedule Site Inspection
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Inspect the physical RCC superstructure, review sanctioned plans, and meet relationship managers at the site office.
                </p>
              </div>

              {/* Form State */}
              {submitted ? (
                <div className="bg-white border border-emerald-300 rounded p-5 text-center my-3 animate-fadeIn">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-2.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0B192C] mb-1">
                    Inspection Request Logged
                  </h4>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our Gorakhpur sales officer will call at <span className="text-[#0B192C] font-mono font-bold">{formData.phone}</span> within 2 business hours.
                  </p>
                  <div suppressHydrationWarning className="bg-slate-50 border border-slate-200 p-2 rounded text-[11px] font-mono text-slate-600 mb-3">
                    Booking Ref: {bookingRef}
                  </div>
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', unitType: 'Commercial Retail (Ground Floor)', date: '' });
                    }}
                    className="text-xs text-[#0B192C] hover:underline font-semibold cursor-pointer"
                  >
                    Schedule Another Visit
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                      <input
                        type="text"
                        required
                        suppressHydrationWarning
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full bg-white border border-slate-300 rounded pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0B192C] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-2.5 rounded-l border border-r-0 border-slate-300 bg-slate-100 text-slate-700 text-xs font-mono font-semibold">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        suppressHydrationWarning
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                        placeholder="98765 43210"
                        className="w-full bg-white border border-slate-300 rounded-r px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0B192C] transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Interested Space Category
                    </label>
                    <select
                      suppressHydrationWarning
                      value={formData.unitType}
                      onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0B192C] transition-colors"
                    >
                      <option value="Commercial Retail (Ground Floor)">Ground Floor • Commercial Retail</option>
                      <option value="Anchor Showroom (Ground Floor)">Ground Floor • Anchor Showroom</option>
                      <option value="Corporate Office Suite (First Floor)">First Floor • Corporate Office Suite</option>
                      <option value="Executive Floor Plate (Typical Level)">Typical Level • Column-Free Plate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                      <input
                        type="date"
                        suppressHydrationWarning
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#0B192C] transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    suppressHydrationWarning
                    disabled={isSubmitting}
                    className="w-full bg-[#0B192C] text-white hover:bg-[#A37D4C] font-semibold py-2.5 px-4 rounded text-xs transition-colors flex items-center justify-center gap-2 shadow-subtle disabled:opacity-50 mt-1 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Registering Appointment...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Request Inspection Callback</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Guarantees */}
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                  <span>Direct promoter dealing • Zero brokerage</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                  <span>Escrow account compliance under UP-RERA</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
