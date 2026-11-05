'use client';

import { useState } from 'react';
import { Navbar } from '@/src/components/Navbar';
import { ExecutiveEnquirySection } from '@/src/components/ExecutiveEnquirySection';
import { CorporateEnquiryDrawer } from '@/src/components/CorporateEnquiryDrawer';
import { Footer } from '@/src/components/Footer';
import { Toast, type ToastMessage } from '@/src/components/Toast';
import { Phone, ShieldCheck } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col bg-[#F6F5F2] text-[#181A1F]">
      <Navbar onOpenEnquiry={handleOpenDrawer} />

      <main className="flex-1">
        {/* Executive Header (Light & Simple) */}
        <section className="bg-white text-[#0B131E] py-12 sm:py-16 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="max-w-3xl">
              <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#9B7C44] mb-2">
                PROJECT DESK &amp; CORPORATE HQ
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif text-[#0B131E] font-normal tracking-tight">
                Enquire &amp; Contact Desk
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed max-w-2xl font-normal">
                Connect directly with Arbit Infratel Private Limited for commercial leasing at <em>Arbit The 25</em>, civil EPC tenders, or joint ventures in Gorakhpur and Uttar Pradesh.
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
