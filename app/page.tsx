'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/src/components/Navbar';
import { ArchitecturalHeroSlider } from '@/src/components/ArchitecturalHeroSlider';
import { Footer } from '@/src/components/Footer';
import { OfficialSocialMediaHub } from '@/src/components/OfficialSocialMediaHub';
import { CorporateEnquiryDrawer } from '@/src/components/CorporateEnquiryDrawer';
import { Toast, type ToastMessage } from '@/src/components/Toast';
import { 
  Building2, 
  HardHat, 
  Radio, 
  ShieldCheck, 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  CheckCircle2, 
  Scale, 
  Layers, 
  Download 
} from 'lucide-react';

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerCategory, setDrawerCategory] = useState('Corporate Leasing & Flagship Developments');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description: string, type: 'success' | 'download' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, description, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenDrawer = (category = 'Corporate Leasing & Flagship Developments') => {
    setDrawerCategory(category);
    setIsDrawerOpen(true);
  };

  const handleDrawerSuccess = (ticket: string, name: string) => {
    addToast(
      'Executive Dossier Queued',
      `Ticket ${ticket} logged for ${name}. Liaison Secretariat will connect shortly.`,
      'success'
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F2] text-[#181A1F] relative">
      
      {/* 2-Tier Conglomerate Header */}
      <Navbar onOpenEnquiry={handleOpenDrawer} />

      <main className="flex-1">
        
        {/* 1. Full-Viewport Architectural Showcase Slider */}
        <ArchitecturalHeroSlider onOpenEnquiry={handleOpenDrawer} />

        {/* 2. Corporate Heritage & Group Narrative (Simple & Clean Light Layout) */}
        <section className="py-16 sm:py-24 bg-[#F6F5F2] border-b border-stone-200 select-none">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left 5 Cols: Clean Architectural Image */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden border border-stone-300 shadow-md bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85"
                    alt="Arbit Infratel Commercial Architecture"
                    className="w-full h-[380px] sm:h-[440px] object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#0B131E]/85 text-white px-5 py-3 flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-[#B8965A]">
                      <ShieldCheck className="w-4 h-4" />
                      16+ Years • Est. 2010
                    </span>
                    <span className="text-stone-300">Gorakhpur, UP</span>
                  </div>
                </div>
              </div>

              {/* Right 7 Cols: Clear & Concise Overview */}
              <div className="lg:col-span-7">
                <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#9B7C44] mb-2">
                  SHAPING SKYLINES • ABOUT ARBIT INFRATEL
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-normal leading-tight mb-4">
                  Building Premier Commercial Destinations &amp; Infrastructure
                </h2>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6 font-normal">
                  Incorporated in 2010 in Gorakhpur, <strong className="text-[#0B131E]">Arbit Infratel Private Limited</strong> is "Home to Eminent Retail Brands & Luxury Living", delivering landmark commercial developments, Class-A civil EPC projects, and passive telecom O&M infrastructure across Uttar Pradesh.
                </p>

                {/* 4 Simple Key Metric Cards (Light) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                  <div className="bg-white p-3.5 border border-stone-200 shadow-sm">
                    <div className="text-xl font-serif font-bold text-[#0B131E]">2010</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">Established</div>
                  </div>
                  <div className="bg-white p-3.5 border border-stone-200 shadow-sm">
                    <div className="text-xl font-serif font-bold text-[#0B131E]">₹100+ Cr</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">Scale Delivered</div>
                  </div>
                  <div className="bg-white p-3.5 border border-stone-200 shadow-sm">
                    <div className="text-xl font-serif font-bold text-[#0B131E]">2.8M+</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">Sq.Ft. Built</div>
                  </div>
                  <div className="bg-white p-3.5 border border-stone-200 shadow-sm">
                    <div className="text-xs font-mono font-bold text-emerald-700">UP-RERA</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">Reg. Promoter</div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/about"
                    className="bg-[#0B131E] hover:bg-[#B8965A] text-white px-6 py-3 text-xs tracking-wider uppercase font-bold transition-colors inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/leadership"
                    className="border border-stone-300 hover:border-[#0B131E] bg-white px-6 py-3 text-xs tracking-wider uppercase font-semibold text-stone-800 transition-colors"
                  >
                    Board of Directors
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 3. The Three Business Verticals (Light Background & Clean Cards) */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200 select-none">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-stone-200 gap-4">
              <div>
                <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#9B7C44] mb-2">
                  OUR CORE DIVISIONS
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-normal">
                  Three Monumental Capabilities
                </h2>
              </div>

              <Link
                href="/civil-epc"
                className="text-xs font-mono text-stone-700 hover:text-[#9B7C44] uppercase tracking-wider flex items-center gap-1.5 font-bold transition-colors"
              >
                <span>Explore All Works</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 3 Clean Light Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Real Estate */}
              <div className="bg-[#F6F5F2] border border-stone-200 p-7 flex flex-col justify-between hover:border-[#B8965A] hover:bg-white transition-all shadow-sm">
                <div>
                  <div className="w-10 h-10 bg-white border border-stone-200 flex items-center justify-center text-[#9B7C44] mb-4">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] font-mono text-[#9B7C44] font-bold uppercase tracking-wider mb-1">
                    01 // COMMERCIAL
                  </div>
                  <h3 className="text-xl font-serif text-[#0B131E] font-bold mb-2">
                    Landmark Real Estate
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                    Home to Eminent Retail Brands & Luxury Living. Master-planned commercial retail centers, flagship showrooms, and corporate suites including <em>Arbit The 25</em> in Gorakhpur.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-300/70 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-mono">Arbit The 25</span>
                  <Link
                    href="/projects"
                    className="text-xs font-bold text-[#0B131E] hover:text-[#9B7C44] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9B7C44]" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Civil EPC */}
              <div className="bg-[#F6F5F2] border border-stone-200 p-7 flex flex-col justify-between hover:border-[#B8965A] hover:bg-white transition-all shadow-sm">
                <div>
                  <div className="w-10 h-10 bg-white border border-stone-200 flex items-center justify-center text-[#9B7C44] mb-4">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] font-mono text-[#9B7C44] font-bold uppercase tracking-wider mb-1">
                    02 // CIVIL EPC
                  </div>
                  <h3 className="text-xl font-serif text-[#0B131E] font-bold mb-2">
                    Civil &amp; Municipal Works
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                    Class-A registered PWD contractor executing heavy structural frameworks, bridges, institutional campuses, and concrete roadways.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-300/70 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-mono">Class-A PWD</span>
                  <Link
                    href="/civil-epc"
                    className="text-xs font-bold text-[#0B131E] hover:text-[#9B7C44] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View EPC Works</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9B7C44]" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Telecom */}
              <div className="bg-[#F6F5F2] border border-stone-200 p-7 flex flex-col justify-between hover:border-[#B8965A] hover:bg-white transition-all shadow-sm">
                <div>
                  <div className="w-10 h-10 bg-white border border-stone-200 flex items-center justify-center text-[#9B7C44] mb-4">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div className="text-[11px] font-mono text-[#9B7C44] font-bold uppercase tracking-wider mb-1">
                    03 // UTILITY GRIDS
                  </div>
                  <h3 className="text-xl font-serif text-[#0B131E] font-bold mb-2">
                    Telecom Infrastructure
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                    Telecom Infrastructure O&M (IME) partner for Altius Network, engineering 850+ km of trenchless HDD optical fiber ducting and 150+ telecom towers across Eastern UP.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-300/70 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-mono">850+ km OFC</span>
                  <Link
                    href="/civil-epc"
                    className="text-xs font-bold text-[#0B131E] hover:text-[#9B7C44] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Telecom</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9B7C44]" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 4. Flagship Monograph Preview (Arbit The 25) */}
        <section className="py-20 sm:py-28 bg-[#F6F5F2] border-b border-stone-300 relative select-none">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-stone-300 gap-4">
              <div>
                <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-bold text-[#B8965A] mb-2">
                  <span className="w-6 h-px bg-[#B8965A]"></span>
                  <span>SIGNATURE COMMERCIAL ADDRESS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-normal tracking-tight">
                  Arbit The 25 • Civil Lines, Gorakhpur
                </h2>
              </div>

              <Link
                href="/projects"
                className="bg-[#0B131E] hover:bg-[#B8965A] text-white px-6 py-3 rounded-md text-xs tracking-wider uppercase font-bold transition-colors inline-flex items-center gap-2 group shadow-sm"
              >
                <span>View Full Project</span>
                <ArrowRight className="w-4 h-4 text-[#B8965A] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-stone-300 shadow-elevated p-8 sm:p-10">
              
              <div className="lg:col-span-7 relative h-72 sm:h-96 overflow-hidden bg-[#0B131E]">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85"
                  alt="Arbit The 25 Facade"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
                <div className="absolute top-4 left-4 bg-[#0B131E]/90 text-[#B8965A] text-[10px] font-mono tracking-widest px-3 py-1 border border-[#B8965A]/40 uppercase">
                  UP-RERA PROMOTER: UPRERAPRM160411 • PROJECT: UPRERAPRJ218427
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B131E]/85 backdrop-blur-sm p-3 text-[11px] font-mono text-stone-300 flex justify-between items-center">
                  <span>Double-Height Retail Showrooms &amp; Corporate Suites</span>
                  <span className="text-[#B8965A] font-bold">GORAKHPUR</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between py-2">
                <div>
                  <h3 className="text-2xl font-serif text-[#0B131E] font-bold mb-3">
                    Gorakhpur&apos;s Grade-A Landmark
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed mb-6">
                    Built to Seismic Zone-IV specifications with double-glazed low-E acoustic glass, column-free corporate plates, and 100% DG power backup.
                  </p>

                  <div className="space-y-2.5 text-xs font-sans text-stone-700 mb-6 border-t border-stone-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Location:</span>
                      <strong className="text-[#0B131E]">Civil Lines, Gorakhpur</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Retail Slab:</span>
                      <strong className="text-[#0B131E]">18-Ft Double Height</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Banking:</span>
                      <strong className="text-emerald-700">100% Escrow Protected</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/projects"
                    className="flex-1 rounded-md bg-[#B8965A] hover:bg-[#CDB17E] text-[#0B131E] py-3 text-center text-xs tracking-wider uppercase font-bold transition-colors shadow-sm"
                  >
                    View Blueprints
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleOpenDrawer('Arbit The 25 Commercial Space')}
                    className="flex-1 rounded-md border border-stone-300 hover:border-[#0B131E] py-3 text-center text-xs tracking-wider uppercase font-bold text-[#0B131E] transition-colors"
                  >
                    Enquire Leasing
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 5. Selected Works Portfolio Teaser (Linking to /projects) */}
        <section className="py-20 sm:py-28 bg-[#F6F5F2] border-b border-stone-300 relative select-none">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-stone-300 gap-4">
              <div>
                <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-bold text-[#B8965A] mb-2">
                  <span className="w-6 h-px bg-[#B8965A]"></span>
                  <span>EXECUTION TRACK RECORD</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-normal tracking-tight">
                  Selected Infrastructure Commissions
                </h2>
              </div>

              <Link
                href="/projects"
                className="text-xs font-mono text-[#0B131E] hover:text-[#B8965A] uppercase tracking-wider font-bold flex items-center gap-1.5 transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Project 1 */}
              <div className="bg-white border border-stone-300 shadow-elevated overflow-hidden group hover:border-[#B8965A] transition-all flex flex-col justify-between">
                <div>
                  <div className="relative h-56 overflow-hidden bg-[#0B131E]">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d09bb18086f6?auto=format&fit=crop&w=1200&q=85"
                      alt="Civic Complex"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B131E]/90 text-[#B8965A] text-[9px] font-mono tracking-widest px-2.5 py-1 uppercase">
                      CIVIL &amp; MUNICIPAL EPC
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-[#0B131E] mb-1">
                      Purvanchal Institutional &amp; Civic Complex
                    </h3>
                    <p className="text-xs text-stone-500 font-sans mb-3">₹42.5 Cr Turnkey Civil Package • Gorakhpur</p>
                    <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                      Multi-block administrative public facility with seismic-resistant RCC structural frame and HVAC conduits.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/projects"
                    className="text-xs font-mono font-bold text-[#0B131E] hover:text-[#B8965A] uppercase tracking-wider flex items-center gap-1"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B8965A]" />
                  </Link>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white border border-stone-300 shadow-elevated overflow-hidden group hover:border-[#B8965A] transition-all flex flex-col justify-between">
                <div>
                  <div className="relative h-56 overflow-hidden bg-[#0B131E]">
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
                      alt="Telecom Grid"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B131E]/90 text-[#B8965A] text-[9px] font-mono tracking-widest px-2.5 py-1 uppercase">
                      TELECOM INFRASTRUCTURE
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-[#0B131E] mb-1">
                      Regional Optical &amp; Tower Grid (Phase I–IV)
                    </h3>
                    <p className="text-xs text-stone-500 font-sans mb-3">850+ km HDD • 150+ Telecom Towers</p>
                    <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                      Trenchless optical fiber ducting and passive wireless communications towers powering Eastern Uttar Pradesh.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/projects"
                    className="text-xs font-mono font-bold text-[#0B131E] hover:text-[#B8965A] uppercase tracking-wider flex items-center gap-1"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B8965A]" />
                  </Link>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white border border-stone-300 shadow-elevated overflow-hidden group hover:border-[#B8965A] transition-all flex flex-col justify-between">
                <div>
                  <div className="relative h-56 overflow-hidden bg-[#0B131E]">
                    <img
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
                      alt="Arterial Corridor"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B131E]/90 text-[#B8965A] text-[9px] font-mono tracking-widest px-2.5 py-1 uppercase">
                      CIVIL &amp; MUNICIPAL EPC
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-[#0B131E] mb-1">
                      Gorakhpur Urban Arterial &amp; Utility Corridor
                    </h3>
                    <p className="text-xs text-stone-500 font-sans mb-3">14.2 km Heavy Concrete Carriage • Class-A PWD</p>
                    <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                      Reinforced concrete carriageways, stormwater drainage conduits, and municipal utility ducting networks.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/projects"
                    className="text-xs font-mono font-bold text-[#0B131E] hover:text-[#B8965A] uppercase tracking-wider flex items-center gap-1"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B8965A]" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 6. Official Social Media & Dispatches Hub */}
        <OfficialSocialMediaHub />

        {/* 7. Institutional Governance & Statutory Assurance Strip (Light & Clean) */}
        <section className="py-14 sm:py-18 bg-[#F6F5F2] border-b border-stone-200 select-none">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="bg-white border border-stone-300 p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#9B7C44] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>STATUTORY ASSURANCE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#0B131E]">
                  UP-RERA Escrow &amp; MCA RoC Kanpur Compliant
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed font-normal">
                  All commercial leasing and EPC operations adhere to strict statutory escrow account management and verified zero-litigation records.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link
                  href="/compliance"
                  className="bg-[#0B131E] hover:bg-[#B8965A] text-white py-3 px-6 text-xs font-bold tracking-wider uppercase text-center transition-colors shadow-sm whitespace-nowrap"
                >
                  Statutory Records
                </Link>
                <Link
                  href="/contact"
                  className="border border-stone-300 hover:border-[#0B131E] bg-white text-stone-800 py-3 px-6 text-xs font-semibold tracking-wider uppercase text-center transition-colors whitespace-nowrap"
                >
                  Contact Desk
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Grand Corporate Footer */}
      <Footer onOpenEnquiry={() => handleOpenDrawer('General Corporate Inquiry')} />

      {/* Slide-out Executive Enquiry Drawer */}
      <CorporateEnquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialCategory={drawerCategory}
        onSuccess={handleDrawerSuccess}
      />

      {/* Floating Notifications */}
      <Toast toasts={toasts} onDismiss={removeToast} />

    </div>
  );
}
