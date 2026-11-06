'use client';

import React, { useState } from 'react';
import { Download, ArrowRight, ShieldCheck, FileText, CheckCircle2, Building2, Layers, MapPin } from 'lucide-react';

interface SignatureDevelopmentMonographProps {
  onOpenEnquiry?: (subject?: string) => void;
  onDownloadMemo?: () => void;
}

export const SignatureDevelopmentMonograph: React.FC<SignatureDevelopmentMonographProps> = ({
  onOpenEnquiry,
  onDownloadMemo,
}) => {
  const [activeView, setActiveView] = useState<'exterior' | 'atrium' | 'floorplate' | 'blueprint'>('exterior');

  const VIEWS = [
    {
      id: 'exterior',
      label: 'Arbit 34 (Westside)',
      type: 'image',
      src: '/arbit-infratel-preview/social/post_6.jpg',
      caption: 'Arbit 34 • Gorakhpur’s Biggest Westside Store • Prime Commercial Facade',
    },
    {
      id: 'atrium',
      label: 'Arbit 36 (Reliance)',
      type: 'image',
      src: '/arbit-infratel-preview/social/post_1.jpg',
      caption: 'Arbit 36, Gorakhnath • Reliance Fashion Factory • Multi-Level Retail Center',
    },
    {
      id: 'floorplate',
      label: 'Arbit Vibhuti (Metro)',
      type: 'image',
      src: '/arbit-infratel-preview/social/post_3.jpg',
      caption: 'Arbit Vibhuti, Golghar Market • Metro Shoes Flagship Showroom',
    },
    {
      id: 'blueprint',
      label: 'Architectural Blueprint',
      type: 'cad',
      caption: 'CAD Structural Layout • 8.4m Modular Grid Axes [A-E / 1-6] • Dual Fire Core',
    },
  ];

  const currentView = VIEWS.find((v) => v.id === activeView) || VIEWS[0];

  const handleDownloadClick = () => {
    if (onDownloadMemo) {
      onDownloadMemo();
      return;
    }
    const memo = `ARBIT INFRATEL PRIVATE LIMITED\nCONFIDENTIAL INFORMATION MEMORANDUM & TECHNICAL SPECIFICATIONS\n\nPROJECT: ARBIT THE 25\nLOCATION: Hariom Nagar, Civil Lines, Gorakhpur, Uttar Pradesh - 273001\nUP-RERA PROMOTER: UPRERAPRM160411 | PROJECT: UPRERAPRJ218427\nCIN: U64200UP2010PTC041308\n\n1. ARCHITECTURAL SUMMARY:\n- Mixed-use Grade-A commercial landmark comprising ground + multi-level retail atriums and column-free corporate suites.\n- Seismic Zone-IV compliant RCC frame designed to IS 456 / IS 1893 codes.\n- Low-E double-glazed acoustic curtain wall system.\n- Dual fire-escape stairwells, automatic sprinkler networks, and NFPA compliant fire suppression.\n- 100% DG emergency power backup with automated changeover.\n- Multi-level automated & hydraulic basement parking.\n\n2. FINANCIAL & GOVERNANCE ASSURANCE:\n- Promoter: Arbit Infratel Private Limited (Directors: Abhishek Agrawal, Anand Kumar Mishra).\n- Escrow Account Governance: 100% project receivables routed through designated scheduled bank escrow account per UP-RERA guidelines.\n\nVerified via Board Secretariat, Civil Lines, Gorakhpur.`;
    const blob = new Blob([memo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Arbit-The-25-Information-Memorandum.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="signature-monograph" className="py-24 sm:py-32 bg-[#F6F5F2] border-b border-stone-300 relative select-none">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-12 border-b border-stone-300 gap-4">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-bold text-[#B8965A]">
            <span className="w-6 h-px bg-[#B8965A]"></span>
            <span>02 // SIGNATURE DEVELOPMENT MONOGRAPH</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 bg-[#0B131E] text-white px-3.5 py-1.5 text-[10px] tracking-widest font-mono font-bold uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B8965A]" />
              UP-RERA REGISTERED • GORAKHPUR
            </span>
          </div>
        </div>

        {/* Large Editorial Split Showcase (7 cols left / 5 cols right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left 7 Columns: Architectural Perspective / CAD Blueprint Switcher */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Viewport Frame */}
            <div className="relative min-h-[440px] sm:min-h-[500px] w-full bg-[#0B131E] border border-stone-300 shadow-elevated overflow-hidden flex items-center justify-center">
              
              {activeView === 'blueprint' ? (
                /* Crisp Dark-Mode CAD Structural Floor Plate SVG */
                <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-[#080E17] text-cyan-400 font-mono relative overflow-hidden">
                  <div className="absolute inset-0 cad-grid-fine opacity-25"></div>
                  
                  {/* CAD Title Block */}
                  <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3 relative z-10 text-[10px] tracking-widest">
                    <span>ARBIT THE 25 // TYPICAL STRUCTURAL PLATE</span>
                    <span className="text-[#B8965A]">SCALE 1:100 @ A1</span>
                  </div>

                  {/* CAD SVG Floor Plan with Dimension Lines & Cores */}
                  <div className="relative z-10 my-4 flex-1 flex items-center justify-center">
                    <svg viewBox="0 0 600 340" className="w-full h-full max-h-[300px]">
                      {/* Grid Lines Axes */}
                      <line x1="60" y1="30" x2="540" y2="30" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="3 3" />
                      <line x1="60" y1="170" x2="540" y2="170" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="3 3" />
                      <line x1="60" y1="310" x2="540" y2="310" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="3 3" />

                      <line x1="60" y1="30" x2="60" y2="310" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="3 3" />
                      <line x1="180" y1="30" x2="180" y2="310" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="3 3" />
                      <line x1="300" y1="30" x2="300" y2="310" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="3 3" />
                      <line x1="420" y1="30" x2="420" y2="310" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="3 3" />
                      <line x1="540" y1="30" x2="540" y2="310" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="3 3" />

                      {/* Main Perimeter Slab Envelope */}
                      <rect x="75" y="45" width="450" height="250" fill="none" stroke="#B8965A" strokeWidth="2.5" />
                      <rect x="80" y="50" width="440" height="240" fill="#0c1726" stroke="#38bdf8" strokeWidth="1" />

                      {/* Central Service Core & Lift Bank */}
                      <rect x="240" y="110" width="120" height="120" fill="#0B131E" stroke="#e0e7ff" strokeWidth="2" />
                      <line x1="300" y1="110" x2="300" y2="230" stroke="#e0e7ff" strokeWidth="1.5" />
                      <line x1="240" y1="170" x2="360" y2="170" stroke="#e0e7ff" strokeWidth="1.5" />
                      <text x="252" y="145" fill="#38bdf8" fontSize="10" fontFamily="monospace">LIFT 1</text>
                      <text x="312" y="145" fill="#38bdf8" fontSize="10" fontFamily="monospace">LIFT 2</text>
                      <text x="252" y="205" fill="#38bdf8" fontSize="10" fontFamily="monospace">LIFT 3</text>
                      <text x="312" y="205" fill="#38bdf8" fontSize="10" fontFamily="monospace">CORE / AHU</text>

                      {/* Fire Escape Staircase Shafts */}
                      <rect x="95" y="65" width="60" height="80" fill="#0B131E" stroke="#f43f5e" strokeWidth="1.5" />
                      <text x="105" y="110" fill="#f43f5e" fontSize="9" fontFamily="monospace">FIRE EGRESS</text>

                      <rect x="445" y="195" width="60" height="80" fill="#0B131E" stroke="#f43f5e" strokeWidth="1.5" />
                      <text x="455" y="240" fill="#f43f5e" fontSize="9" fontFamily="monospace">FIRE EGRESS</text>

                      {/* Modular Columns (8.4m Spans) */}
                      {[60, 180, 300, 420, 540].map((x) =>
                        [30, 170, 310].map((y, i) => (
                          <rect key={`${x}-${y}`} x={x - 6} y={y - 6} width="12" height="12" fill="#B8965A" stroke="#FFFFFF" strokeWidth="1" />
                        ))
                      )}

                      {/* Dimension Text Annotations */}
                      <text x="260" y="25" fill="#B8965A" fontSize="10" fontFamily="monospace">8.40m SPAN</text>
                      <text x="380" y="25" fill="#B8965A" fontSize="10" fontFamily="monospace">8.40m SPAN</text>
                      <text x="15" y="175" fill="#B8965A" fontSize="10" fontFamily="monospace" transform="rotate(-90 15 175)">8.40m SPAN</text>
                      <text x="180" y="325" fill="#38bdf8" fontSize="9" fontFamily="monospace">ZONE-IV SEISMIC RCC SLAB [540-2,400 SQ.FT. MODULES]</text>
                    </svg>
                  </div>

                  {/* CAD Footer Strip */}
                  <div className="flex items-center justify-between border-t border-cyan-500/30 pt-2 text-[9px] text-cyan-300/70">
                    <span>SANCTIONED PLAN: GDA / UP-RERA</span>
                    <span>100% ESCROW BANKING ALLOCATED</span>
                  </div>
                </div>
              ) : (
                /* High-Res Photographic Rendering */
                <img
                  src={currentView.src}
                  alt={currentView.label}
                  className="w-full h-full object-cover object-center filter contrast-[1.05]"
                />
              )}

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B131E] via-[#0B131E]/80 to-transparent p-4 text-[11px] text-stone-300 font-mono flex items-center justify-between">
                <span>{currentView.caption}</span>
                <span className="text-[#B8965A] font-bold">VIEW // {activeView.toUpperCase()}</span>
              </div>
            </div>

            {/* Interactive View Switcher Controls (0px Buttons) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              {VIEWS.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setActiveView(v.id as any)}
                  className={`p-3 text-center text-xs tracking-wider uppercase font-semibold border transition-all cursor-pointer ${
                    activeView === v.id
                      ? 'bg-[#0B131E] text-[#B8965A] border-[#B8965A]'
                      : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>

          </div>

          {/* Right 5 Columns: Architectural Fact Sheet & Executive Actions */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 border border-stone-300 shadow-elevated flex flex-col justify-between">
            <div>
              {/* Monograph Eyebrow */}
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase font-bold text-[#B8965A] mb-1">
                CIVIL LINES • GORAKHPUR
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-bold tracking-tight">
                ARBIT THE 25
              </h3>
              <p className="text-xs uppercase tracking-[0.16em] text-stone-500 font-sans font-semibold mt-1 mb-6">
                Home to Eminent Retail Brands &amp; Luxury Living
              </p>

              {/* Executive Overview */}
              <p className="text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed mb-6 border-b border-stone-200 pb-6">
                Engineered as Gorakhpur&apos;s definitive commercial address, <em>Arbit The 25</em> integrates double-height retail anchor showrooms, column-free corporate office floors, and state-of-the-art building management automation under strict UP-RERA escrow guidelines.
              </p>

              {/* Architectural Fact Sheet: Clean 2-Column Spec List with Hairline Dividers */}
              <div className="space-y-3 font-sans text-xs mb-8">
                
                <div className="flex justify-between items-start border-b border-stone-200 pb-2">
                  <span className="text-stone-500 uppercase tracking-wider text-[10px] font-bold">Development Type</span>
                  <span className="font-semibold text-[#0B131E] text-right">Grade-A Commercial Retail &amp; Corporate Suites</span>
                </div>

                <div className="flex justify-between items-start border-b border-stone-200 pb-2">
                  <span className="text-stone-500 uppercase tracking-wider text-[10px] font-bold">Strategic Location</span>
                  <span className="font-semibold text-[#0B131E] text-right">Hariom Nagar, Civil Lines, Gorakhpur</span>
                </div>

                <div className="flex justify-between items-start border-b border-stone-200 pb-2">
                  <span className="text-stone-500 uppercase tracking-wider text-[10px] font-bold">UP-RERA Promoter</span>
                  <span className="font-mono font-bold text-[#B8965A] text-right">UPRERAPRM160411</span>
                </div>

                <div className="flex justify-between items-start border-b border-stone-200 pb-2">
                  <span className="text-stone-500 uppercase tracking-wider text-[10px] font-bold">UP-RERA Project ID</span>
                  <span className="font-mono font-bold text-emerald-700 text-right">UPRERAPRJ218427</span>
                </div>

                <div className="flex justify-between items-start border-b border-stone-200 pb-2">
                  <span className="text-stone-500 uppercase tracking-wider text-[10px] font-bold">Structural Framework</span>
                  <span className="font-semibold text-[#0B131E] text-right">Seismic Zone-IV RCC • IS 456 Compliant</span>
                </div>

                <div className="flex justify-between items-start border-b border-stone-200 pb-2">
                  <span className="text-stone-500 uppercase tracking-wider text-[10px] font-bold">Power &amp; Utilities</span>
                  <span className="font-semibold text-[#0B131E] text-right">100% DG Backup • VRV AC Provision</span>
                </div>

                <div className="flex justify-between items-start border-b border-stone-200 pb-2">
                  <span className="text-stone-500 uppercase tracking-wider text-[10px] font-bold">Institutional Banking</span>
                  <span className="font-semibold text-emerald-800 text-right">Approved by Nationalized Consortia</span>
                </div>

              </div>
            </div>

            {/* 2 Executive Actions */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <button
                type="button"
                suppressHydrationWarning
                onClick={handleDownloadClick}
                className="w-full rounded-md bg-[#0B131E] hover:bg-[#B8965A] text-white p-3.5 text-xs tracking-wider uppercase font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
              >
                <Download className="w-4 h-4 text-[#B8965A]" />
                <span>Download Project Memorandum</span>
              </button>

              <button
                type="button"
                suppressHydrationWarning
                onClick={() => onOpenEnquiry?.('Arbit The 25 Commercial Space & Site Visit')}
                className="w-full rounded-md border border-stone-300 hover:border-[#0B131E] bg-white hover:bg-stone-50 text-[#0B131E] p-3.5 text-xs tracking-wider uppercase font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enquire Leasing &amp; Site Visit</span>
                <ArrowRight className="w-4 h-4 text-[#B8965A]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

