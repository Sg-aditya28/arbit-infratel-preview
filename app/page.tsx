'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/src/components/Navbar';
import { ArchitecturalHeroSlider } from '@/src/components/ArchitecturalHeroSlider';
import { ProjectsGallery } from '@/src/components/ProjectsGallery';
import { Footer } from '@/src/components/Footer';
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
  Layers, 
  Award,
  Sparkles,
  Camera
} from 'lucide-react';

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerCategory, setDrawerCategory] = useState('Commercial Retail Space & Leasing');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description: string, type: 'success' | 'download' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, description, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenDrawer = (category = 'Commercial Retail Space & Leasing') => {
    setDrawerCategory(category);
    setIsDrawerOpen(true);
  };

  const handleDrawerSuccess = (ticket: string, name: string) => {
    addToast(
      'Enquiry Registered',
      `Reference code ${ticket} assigned for ${name}. Our Gorakhpur desk will contact you.`,
      'success'
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A] relative">
      
      {/* 2-Tier Header Styled with Logo Colors */}
      <Navbar onOpenEnquiry={handleOpenDrawer} />

      <main className="flex-1">
        
        {/* 1. Full-Viewport Architectural Hero with REAL BUILDING PHOTOS */}
        <ArchitecturalHeroSlider onOpenEnquiry={handleOpenDrawer} />

        {/* 2. Key Metrics Bar (High Contrast, Clean, Modern) */}
        <section className="bg-white border-b border-slate-200 py-8 select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#2C8FEA]">38+</div>
                <div className="text-xs text-slate-600 font-semibold mt-1">Landmark Projects Delivered</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Across Gorakhpur &amp; Eastern UP</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0F172A]">16+ Yrs</div>
                <div className="text-xs text-slate-600 font-semibold mt-1">Established Heritage (2010)</div>
                <div className="text-[11px] text-slate-400 mt-0.5">RoC Kanpur: U64200UP2010PTC041308</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0F172A]">2.8M+</div>
                <div className="text-xs text-slate-600 font-semibold mt-1">Sq.Ft. Real Estate Footprint</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Commercial Retail &amp; EPC</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-emerald-600">UP-RERA</div>
                <div className="text-xs text-slate-600 font-semibold mt-1">Registered Promoter</div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">UPRERAPRM160411</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Real Projects & Building Gallery (The Core User Demand) */}
        <ProjectsGallery onOpenEnquiry={handleOpenDrawer} limit={8} showFilters={true} />

        {/* 4. Real Commercial Anchor Destinations Showcase */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200 select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-slate-200 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C8FEA] uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>PREMIER RETAIL DESTINATIONS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F172A] tracking-tight">
                  Home to Eminent Retail Brands
                </h2>
                <p className="text-slate-600 mt-2 text-sm max-w-2xl">
                  Arbit Infratel develops and hosts Gorakhpur’s most successful retail flagships, providing prime locations with unmatched footfall and tenant success.
                </p>
              </div>

              <Link
                href="/gallery"
                className="text-xs font-bold text-[#2C8FEA] hover:text-[#1E75D8] uppercase tracking-wider flex items-center gap-1.5 self-start md:self-auto"
              >
                <span>View Full Photo Archive</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 2-Column Real Building Feature Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Feature 1: Arbit 34 (Westside) */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
                <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
                  <img
                    src="/arbit-infratel-preview/social/post_6.jpg"
                    alt="Arbit 34 Westside Store"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                  
                  <div className="absolute top-4 left-4 bg-[#2C8FEA] text-white px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase">
                    Arbit 34 &bull; Flagship
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1 text-xs text-slate-300 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#2C8FEA]" />
                      <span>Prime Commercial Corridor, Gorakhpur</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold">
                      Gorakhpur’s Biggest Westside Store
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    A milestone commercial development the whole city was waiting for. Featuring multi-story retail plates, grand modern facade, and high-visibility road frontage.
                  </p>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">Anchor Tenant: Westside</span>
                    <button
                      type="button"
                      onClick={() => handleOpenDrawer('Arbit 34 Commercial')}
                      className="text-xs font-bold text-[#2C8FEA] hover:text-[#1E75D8] inline-flex items-center gap-1"
                    >
                      <span>Enquire Property</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Feature 2: Arbit 36 (Reliance Fashion Factory) */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
                <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
                  <img
                    src="/arbit-infratel-preview/social/post_1.jpg"
                    alt="Arbit 36 Reliance Fashion Factory"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                  
                  <div className="absolute top-4 left-4 bg-[#0F172A] text-white px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase border border-white/20">
                    Arbit 36 &bull; Operational
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1 text-xs text-slate-300 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#2C8FEA]" />
                      <span>Gorakhnath, Gorakhpur</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold">
                      Reliance Fashion Factory Retail Center
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Operational large-format retail center in Gorakhnath. Rooted in traditions with the promise of enduring quality and maximum footfall for anchor brands.
                  </p>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">Anchor: Reliance Retail</span>
                    <button
                      type="button"
                      onClick={() => handleOpenDrawer('Arbit 36 Commercial')}
                      className="text-xs font-bold text-[#2C8FEA] hover:text-[#1E75D8] inline-flex items-center gap-1"
                    >
                      <span>Enquire Property</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 5. Core Capabilities: Real Estate, Civil EPC, Telecom */}
        <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-slate-200 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C8FEA] uppercase tracking-wider mb-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>DIVERSIFIED CAPABILITIES</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F172A] tracking-tight">
                  Three Pillar Divisions
                </h2>
              </div>

              <Link
                href="/civil-epc"
                className="text-xs font-bold text-[#2C8FEA] hover:text-[#1E75D8] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Explore EPC &amp; Infra Works</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Commercial Real Estate */}
              <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col justify-between hover:border-[#2C8FEA] hover:shadow-lg transition-all">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2C8FEA]/10 text-[#2C8FEA] flex items-center justify-center mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-mono text-[#2C8FEA] font-bold uppercase tracking-wider mb-1">
                    01 // COMMERCIAL
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-3">
                    Commercial Retail Centers
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Prime commercial retail centers, showrooms, and atriums including Arbit 34, Arbit 36, Arbit Vibhuti, and Arbit The 25 in Gorakhpur.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">38+ Delivered</span>
                  <Link
                    href="/projects"
                    className="text-xs font-bold text-[#2C8FEA] hover:text-[#1E75D8] inline-flex items-center gap-1"
                  >
                    <span>View Projects</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Civil EPC */}
              <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col justify-between hover:border-[#2C8FEA] hover:shadow-lg transition-all">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2C8FEA]/10 text-[#2C8FEA] flex items-center justify-center mb-6">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-mono text-[#2C8FEA] font-bold uppercase tracking-wider mb-1">
                    02 // CIVIL EPC
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-3">
                    Civil &amp; Municipal Works
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Class-A registered PWD contractor executing heavy structural frameworks, bridges, institutional campuses, and concrete roadways.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Class-A PWD</span>
                  <Link
                    href="/civil-epc"
                    className="text-xs font-bold text-[#2C8FEA] hover:text-[#1E75D8] inline-flex items-center gap-1"
                  >
                    <span>View EPC Works</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Telecom */}
              <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col justify-between hover:border-[#2C8FEA] hover:shadow-lg transition-all">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2C8FEA]/10 text-[#2C8FEA] flex items-center justify-center mb-6">
                    <Radio className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-mono text-[#2C8FEA] font-bold uppercase tracking-wider mb-1">
                    03 // UTILITY GRIDS
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-3">
                    Telecom Infrastructure
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Telecom Infrastructure O&M partner for Altius Network, engineering 850+ km optical fiber ducting and 150+ telecom towers across Eastern UP.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">850+ km OFC</span>
                  <Link
                    href="/civil-epc"
                    className="text-xs font-bold text-[#2C8FEA] hover:text-[#1E75D8] inline-flex items-center gap-1"
                  >
                    <span>View Telecom</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 6. Corporate Heritage & Small-Town Roots (Real CM Meeting Photo) */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200 select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left 5 Cols: Real CM Meeting Photo */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900">
                  <img
                    src="/arbit-infratel-preview/social/post_5.jpg"
                    alt="Director with Hon'ble CM Yogi Adityanath Ji"
                    className="w-full h-[360px] sm:h-[420px] object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#0F172A]/90 backdrop-blur-sm text-white px-5 py-3 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-[#2C8FEA] font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      Civic Leadership &bull; Est. 2010
                    </span>
                    <span className="text-slate-300">Gorakhpur, UP</span>
                  </div>
                </div>
              </div>

              {/* Right 7 Cols: Slogan & Narrative */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C8FEA] uppercase tracking-wider mb-3">
                  <Award className="w-3.5 h-3.5" />
                  <span>FOUNDER ROOTS &bull; GORAKHPUR</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F172A] leading-tight mb-4">
                  Building with Purpose. Leading with Pride.
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                  Incorporated in 2010 in Gorakhpur, <strong className="text-[#0F172A]">Arbit Infratel Private Limited</strong> has expanded from local foundation works into Eastern Uttar Pradesh’s trusted developer for commercial retail and public infrastructure.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Led by founding directors <strong className="text-[#0F172A]">Abhishek Agrawal</strong> and <strong className="text-[#0F172A]">Anand Kumar Mishra</strong>, we take immense pride in delivering spaces that elevate the city&apos;s commercial landscape while maintaining 100% statutory escrow compliance.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/about"
                    className="bg-[#0F172A] hover:bg-[#2C8FEA] text-white px-6 py-3 rounded-lg text-xs tracking-wider uppercase font-bold transition-colors inline-flex items-center gap-2 shadow"
                  >
                    <span>Read Group Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/gallery"
                    className="border border-slate-300 hover:border-[#2C8FEA] hover:text-[#2C8FEA] bg-white px-6 py-3 rounded-lg text-xs tracking-wider uppercase font-bold text-slate-700 transition-colors inline-flex items-center gap-2"
                  >
                    <Camera className="w-4 h-4" />
                    <span>View Building Photos</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Statutory Assurance Strip */}
        <section className="py-14 bg-slate-50 border-b border-slate-200 select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 architectural-grid opacity-25 pointer-events-none"></div>
              <div className="space-y-1.5 relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2C8FEA] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>STATUTORY INTEGRITY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
                  UP-RERA Escrow &amp; RoC Kanpur Compliant
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  Promoter Code: <strong className="text-[#0F172A] font-mono">UPRERAPRM160411</strong>. All commercial bookings and advances are routed through designated scheduled commercial bank escrow accounts per statutory guidelines.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto relative z-10">
                <Link
                  href="/compliance"
                  className="bg-[#2C8FEA] hover:bg-[#1E75D8] text-white py-3 px-6 rounded-lg text-xs font-bold tracking-wider uppercase text-center transition-colors shadow-md shadow-[#2C8FEA]/20 whitespace-nowrap"
                >
                  Statutory Records
                </Link>
                <Link
                  href="/contact"
                  className="border border-slate-300 hover:border-[#0F172A] bg-white text-slate-800 py-3 px-6 rounded-lg text-xs font-bold tracking-wider uppercase text-center transition-colors whitespace-nowrap"
                >
                  Contact Desk
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer styled with Deep Slate Navy & Azure Blue */}
      <Footer onOpenEnquiry={() => handleOpenDrawer('General Inquiry')} />

      {/* Slide-out Enquiry Drawer */}
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
