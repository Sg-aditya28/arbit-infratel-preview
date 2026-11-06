'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { ProjectsGallery } from '@/src/components/ProjectsGallery';
import { CorporateEnquiryDrawer } from '@/src/components/CorporateEnquiryDrawer';
import { Toast, type ToastMessage } from '@/src/components/Toast';
import { Building2, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function GalleryPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerCategory, setDrawerCategory] = useState('Commercial Property Inquiry');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description: string, type: 'success' | 'download' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, description, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenDrawer = (category = 'Commercial Property Inquiry') => {
    setDrawerCategory(category);
    setIsDrawerOpen(true);
  };

  const handleDrawerSuccess = (ticket: string, name: string) => {
    addToast(
      'Enquiry Dispatched',
      `Reference ${ticket} registered for ${name}. Our Gorakhpur desk will contact you.`,
      'success'
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <Navbar onOpenEnquiry={handleOpenDrawer} />

      <main className="flex-1">
        {/* Gallery Header styled with Logo Azure Blue */}
        <div className="bg-gradient-to-b from-slate-900 via-[#0F172A] to-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2C8FEA]/20 text-[#2C8FEA] rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-[#2C8FEA]/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>38+ Real Deliveries • Gorakhpur, UP</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight">
                Real Building &amp; Project Gallery
              </h1>
              <p className="text-slate-300 mt-3 text-base sm:text-lg leading-relaxed">
                Authentic photographic record of Arbit Infratel&apos;s delivered commercial retail complexes, anchor store launches, and ongoing civil engineering projects in Gorakhpur.
              </p>
            </div>
          </div>
        </div>

        {/* The Full Gallery Grid */}
        <ProjectsGallery onOpenEnquiry={handleOpenDrawer} showFilters={true} />

        {/* Accompanied Site Inspection Callout */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-slate-900 to-[#0F172A] rounded-2xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#2C8FEA] mb-2">
                  CIVIL LINES &bull; GORAKHNATH &bull; GOLGHAR
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-white mb-2">
                  Schedule an Accompanied Site Inspection
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Visit any of our operational retail centers or tour our flagship commercial spaces under development in Gorakhpur.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={() => handleOpenDrawer('Accompanied Site Inspection')}
                  className="bg-[#2C8FEA] hover:bg-[#1E75D8] text-white px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-[#2C8FEA]/25 whitespace-nowrap text-center"
                >
                  Book Site Visit
                </button>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap text-center"
                >
                  Contact Desk
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenEnquiry={() => handleOpenDrawer('General Inquiry')} />

      <CorporateEnquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialCategory={drawerCategory}
        onSuccess={handleDrawerSuccess}
      />

      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}

