'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/src/components/Navbar';
import { SignatureDevelopmentMonograph } from '@/src/components/SignatureDevelopmentMonograph';
import { ExecutionPortfolioGrid } from '@/src/components/ExecutionPortfolioGrid';
import { CorporateEnquiryDrawer } from '@/src/components/CorporateEnquiryDrawer';
import { Footer } from '@/src/components/Footer';
import { Toast, type ToastMessage } from '@/src/components/Toast';
import { Building2, ShieldCheck, Download, ArrowRight, Layers, MapPin, CheckCircle2 } from 'lucide-react';

export default function ProjectsPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerCategory, setDrawerCategory] = useState('Arbit The 25 Commercial Space');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description: string, type: 'success' | 'download' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, description, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenDrawer = (category = 'Arbit The 25 Commercial Space') => {
    setDrawerCategory(category);
    setIsDrawerOpen(true);
  };

  const handleDownloadMemo = () => {
    addToast(
      'Downloading Information Memorandum',
      'Retrieving verified structural drawings, sanction approvals, and UP-RERA registration deeds...',
      'download'
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <Navbar onOpenEnquiry={handleOpenDrawer} />

      <main className="flex-1">
        {/* Executive Page Hero with Real Building Background Image */}
        <section className="relative bg-[#0A1128] text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden select-none">
          {/* Real Building Background Image with Low Opacity */}
          <div className="absolute inset-0 z-0">
            <img
              src="/arbit-infratel-preview/social/post_7.jpg"
              alt="Arbit The 25 Commercial Architecture"
              className="w-full h-full object-cover object-center opacity-20"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#0A1128]/95 to-[#0A1128]/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-black/40"></div>
            <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2C8FEA]/20 text-[#2C8FEA] rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-[#2C8FEA]/30 backdrop-blur-sm">
                <Building2 className="w-3.5 h-3.5" />
                <span>Building with Purpose &bull; Leading with Pride</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight">
                Landmark Projects &amp; Commissions
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-2xl font-light">
                Explore our real commercial retail landmarks in Gorakhpur — including Arbit 34 (Westside), Arbit 36 (Reliance Fashion Factory), Arbit Vibhuti (Metro Shoes), V-Mart, and Arbit The 25.
              </p>
            </div>
          </div>
        </section>

        {/* Flagship Monograph: Arbit The 25 */}
        <SignatureDevelopmentMonograph
          onOpenEnquiry={handleOpenDrawer}
          onDownloadMemo={handleDownloadMemo}
        />

        {/* Selected Works Portfolio Grid */}
        <ExecutionPortfolioGrid onOpenEnquiry={handleOpenDrawer} />

        {/* Accompanied Site Inspection Callout Strip */}
        <section className="py-14 sm:py-18 bg-slate-50 border-b border-slate-200 select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-[#0A1128] rounded-2xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
              <img
                src="/arbit-infratel-preview/social/post_6.jpg"
                alt="Arbit 34 Tour"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-20 pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#0A1128]/95 to-transparent pointer-events-none"></div>

              <div className="relative z-10 max-w-2xl">
                <div className="text-xs font-bold text-[#2C8FEA] uppercase tracking-wider mb-1">
                  CIVIL LINES &bull; GORAKHNATH &bull; GOLGHAR
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                  Schedule an Accompanied Site Inspection
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
                  Inspect physical superstructure execution, retail frontage, and sanctioned architectural layout deeds.
                </p>
              </div>

              <button
                type="button"
                suppressHydrationWarning
                onClick={() => handleOpenDrawer('Accompanied Site Inspection: Arbit The 25')}
                className="relative z-10 bg-[#2C8FEA] hover:bg-[#1E75D8] text-white px-7 py-3.5 rounded-lg text-xs tracking-wider uppercase font-bold transition-colors whitespace-nowrap shadow-md shadow-[#2C8FEA]/20 cursor-pointer"
              >
                Book Site Visit
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenEnquiry={() => handleOpenDrawer('General Real Estate Inquiry')} />

      <CorporateEnquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialCategory={drawerCategory}
        onSuccess={(ticket, name) => {
          addToast('Executive Dossier Queued', `Ticket ${ticket} logged for ${name}.`, 'success');
        }}
      />

      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
