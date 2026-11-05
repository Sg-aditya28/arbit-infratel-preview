'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/src/components/Navbar';
import { CorporateEnquiryDrawer } from '@/src/components/CorporateEnquiryDrawer';
import { Footer } from '@/src/components/Footer';
import { Toast, type ToastMessage } from '@/src/components/Toast';
import { ShieldCheck, Scale, Award, ArrowRight, Building, CheckCircle2, FileText, Check } from 'lucide-react';

export default function LeadershipPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerCategory, setDrawerCategory] = useState('Executive Leadership & Corporate Brief');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description: string, type: 'success' | 'download' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, description, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenDrawer = (category = 'Executive Leadership & Corporate Brief') => {
    setDrawerCategory(category);
    setIsDrawerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F2] text-[#181A1F]">
      <Navbar onOpenEnquiry={handleOpenDrawer} />

      <main className="flex-1">
        {/* Executive Header (Light & Simple) */}
        <section className="bg-white text-[#0B131E] py-12 sm:py-16 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="max-w-3xl">
              <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#9B7C44] mb-2">
                STRATEGIC VISION & GOVERNANCE • BOARD OF DIRECTORS
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif text-[#0B131E] font-normal tracking-tight">
                Executive Leadership
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed max-w-2xl font-normal">
                Founding directors combining over 16 years of hands-on civil engineering, fiscal discipline, and regulatory integrity across Uttar Pradesh.
              </p>
            </div>
          </div>
        </section>

        {/* Board of Directors Profiles */}
        <section className="py-16 sm:py-24 bg-[#F6F5F2] border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-mono tracking-widest text-[#9B7C44] uppercase font-bold mb-1.5">
                EXECUTIVE DIRECTORS
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-normal">
                Strategic Leadership &amp; Engineering Execution
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Director 1: Mr. Abhishek Agrawal */}
              <div className="bg-white border border-stone-200 shadow-sm p-8 flex flex-col justify-between hover:border-[#B8965A] transition-all">
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-stone-200 mb-5">
                    <div>
                      <div className="text-[10px] font-mono tracking-wider text-[#9B7C44] uppercase font-bold">
                        FOUNDING DIRECTOR
                      </div>
                      <h3 className="text-2xl font-serif text-[#0B131E] font-bold mt-1">
                        Mr. Abhishek Agrawal
                      </h3>
                      <div className="text-xs text-stone-500 font-sans mt-0.5">
                        Director, Arbit Infratel Private Limited (Since 2010)
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-stone-100 text-[#0B131E] flex items-center justify-center font-serif text-xl font-bold border border-stone-300">
                      AA
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                    Directs corporate financial structuring, commercial acquisitions, and banking consortia alliances. He champions 100% UP-RERA escrow governance and spearheads flagship developments like <em>Arbit The 25</em>.
                  </p>

                  <div className="space-y-2 text-xs text-stone-700 mb-6 border-t border-stone-100 pt-4 font-normal">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#9B7C44] flex-shrink-0 mt-0.5" />
                      <span>Commercial real estate acquisitions and Master Planning</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#9B7C44] flex-shrink-0 mt-0.5" />
                      <span>Tier-1 scheduled banking consortia and escrow management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#9B7C44] flex-shrink-0 mt-0.5" />
                      <span>Corporate investor relations and UP-RERA statutory filings</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-500">Civil Lines HQ</span>
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => handleOpenDrawer('Meeting Request: Mr. Abhishek Agrawal')}
                    className="text-[#0B131E] font-bold hover:text-[#9B7C44] underline uppercase tracking-wider"
                  >
                    Request Meeting
                  </button>
                </div>
              </div>

              {/* Director 2: Mr. Anand Kumar Mishra */}
              <div className="bg-white border border-stone-200 shadow-sm p-8 flex flex-col justify-between hover:border-[#B8965A] transition-all">
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-stone-200 mb-5">
                    <div>
                      <div className="text-[10px] font-mono tracking-wider text-[#9B7C44] uppercase font-bold">
                        TECHNICAL DIRECTOR
                      </div>
                      <h3 className="text-2xl font-serif text-[#0B131E] font-bold mt-1">
                        Mr. Anand Kumar Mishra
                      </h3>
                      <div className="text-xs text-stone-500 font-sans mt-0.5">
                        Director, Arbit Infratel Private Limited (Since 2010)
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-stone-100 text-[#0B131E] flex items-center justify-center font-serif text-xl font-bold border border-stone-300">
                      AM
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                    Oversees turnkey civil EPC contracts, site engineering, and plant &amp; machinery operations. With in-depth technical expertise across heavy batching plants and piling rigs, he ensures strict IRC and IS code adherence.
                  </p>

                  <div className="space-y-2 text-xs text-stone-700 mb-6 border-t border-stone-100 pt-4 font-normal">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#9B7C44] flex-shrink-0 mt-0.5" />
                      <span>Class-A PWD highway structural works &amp; municipal complexes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#9B7C44] flex-shrink-0 mt-0.5" />
                      <span>In-house fleet of computerized mobile batching plants</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#9B7C44] flex-shrink-0 mt-0.5" />
                      <span>850+ km of trenchless HDD optical fiber ducting and towers</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-500">Civil EPC Wing</span>
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => handleOpenDrawer('Technical Liaison: Mr. Anand Kumar Mishra')}
                    className="text-[#0B131E] font-bold hover:text-[#9B7C44] underline uppercase tracking-wider"
                  >
                    Technical Liaison
                  </button>
                </div>
              </div>

            </div>

            {/* Corporate HSE & Quality Governance Section (Light & Clean) */}
            <div className="mt-12 bg-white p-8 border border-stone-300 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#9B7C44] uppercase tracking-wider mb-1.5">
                    <Scale className="w-4 h-4" />
                    <span>HSE &amp; COMPLIANCE STANDARDS</span>
                  </div>
                  <h3 className="text-2xl font-serif text-[#0B131E] mb-2">
                    Commitment to Zero-Harm Safety &amp; Statutory Escrow
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    Arbit Infratel operates under audited Health, Safety, and Environment (HSE) protocols. Every batch of concrete is lab-certified, and all customer bookings are held securely in UP-RERA escrow accounts.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
                  <Link
                    href="/compliance"
                    className="bg-[#0B131E] hover:bg-[#B8965A] text-white py-3 px-5 text-xs font-bold tracking-wider uppercase text-center transition-colors shadow-sm"
                  >
                    View Statutory Vault
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-stone-300 hover:border-[#0B131E] bg-white text-stone-800 py-3 px-5 text-xs font-semibold tracking-wider uppercase text-center transition-colors"
                  >
                    Contact Secretariat
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer onOpenEnquiry={() => handleOpenDrawer('Executive Leadership Brief')} />

      <CorporateEnquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialCategory={drawerCategory}
        onSuccess={(ticket, name) => {
          addToast('Secretariat Meeting Requested', `Ticket ${ticket} logged for ${name}.`, 'success');
        }}
      />

      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}

