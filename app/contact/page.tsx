'use client';

import { useState } from 'react';
import { Navbar } from '@/src/components/Navbar';
import { ExecutiveEnquirySection } from '@/src/components/ExecutiveEnquirySection';
import { ProjectsGallery } from '@/src/components/ProjectsGallery';
import { CorporateEnquiryDrawer } from '@/src/components/CorporateEnquiryDrawer';
import { Footer } from '@/src/components/Footer';
import { Toast, type ToastMessage } from '@/src/components/Toast';
import { Building2 } from 'lucide-react';

export default function ContactPage() {
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

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <Navbar onOpenEnquiry={handleOpenDrawer} />

      <main className="flex-1">
        {/* Executive Header */}
        <section className="bg-gradient-to-b from-slate-900 via-[#0F172A] to-slate-900 text-white py-14 sm:py-18 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2C8FEA]/20 text-[#2C8FEA] rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-[#2C8FEA]/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>Building with Purpose &bull; Leading with Pride</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
                Enquire &amp; Contact Desk
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-2xl font-normal">
                Connect directly with Arbit Infratel Private Limited for commercial leasing at Arbit 34, Arbit 36, Arbit Vibhuti, Arbit The 25, or civil EPC tenders in Gorakhpur and Uttar Pradesh.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Correspondence Form & HQ Coordinates */}
        <ExecutiveEnquirySection
          onSuccess={(ticket) => {
            addToast('Enquiry Dispatched', `Reference code ${ticket} logged. We will contact you shortly.`, 'success');
          }}
        />

        {/* Real Landmark Building Gallery */}
        <ProjectsGallery limit={4} showFilters={false} onOpenEnquiry={handleOpenDrawer} />
      </main>

      <Footer onOpenEnquiry={() => handleOpenDrawer('General Corporate Inquiry')} />

      <CorporateEnquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialCategory={drawerCategory}
        onSuccess={(ticket, name) => {
          addToast('Enquiry Logged', `Reference code ${ticket} assigned for ${name}.`, 'success');
        }}
      />

      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
