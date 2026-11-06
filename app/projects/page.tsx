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
    <div className="min-h-screen flex flex-col bg-[#F6F5F2] text-[#181A1F]">
      <Navbar onOpenEnquiry={handleOpenDrawer} />

      <main className="flex-1">
        {/* Executive Page Hero (Light & Clean) */}
        <section className="bg-white text-[#0B131E] py-12 sm:py-16 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="max-w-3xl">
              <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#9B7C44] mb-2">
                ROOTED IN TRUST • COMMERCIAL &amp; CIVIL PORTFOLIO
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif text-[#0B131E] font-normal tracking-tight">
                Landmark Projects &amp; Commissions
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed max-w-2xl font-normal">
                Explore our commercial retail landmarks in Gorakhpur — including Arbit The 25, Arbit 34 (Westside), Arbit 36 (Reliance Fashion Factory), and Arbit Vibhuti (Metro Shoes), alongside our civil and telecom infrastructure contracts.
              </p>
            </div>
          </div>
        </section>

        {/* Flagship Monograph: Arbit The 25 (with interactive CAD blueprint SVG) */}
        <SignatureDevelopmentMonograph
          onOpenEnquiry={handleOpenDrawer}
          onDownloadMemo={handleDownloadMemo}
        />

        {/* Selected Works Portfolio Grid */}
        <ExecutionPortfolioGrid onOpenEnquiry={handleOpenDrawer} />

        {/* Accompanied Site Inspection Callout Strip (Light & Clean) */}
        <section className="py-14 sm:py-18 bg-[#F6F5F2] border-b border-stone-200 select-none">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#9B7C44] uppercase font-bold mb-1">
                CIVIL LINES • GORAKHPUR
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#0B131E]">
                Schedule an Accompanied Site Inspection
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 font-normal">
                Inspect physical superstructure execution, retail frontage, and sanctioned architectural layout deeds.
              </p>
            </div>

            <button
              type="button"
              suppressHydrationWarning
              onClick={() => handleOpenDrawer('Accompanied Site Inspection: Arbit The 25')}
              className="bg-[#0B131E] hover:bg-[#B8965A] text-white px-7 py-3.5 text-xs tracking-wider uppercase font-bold transition-colors whitespace-nowrap shadow-sm"
            >
              Book Site Visit
            </button>
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
