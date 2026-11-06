'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/src/components/Navbar';
import { GovernanceAndLeadershipVault } from '@/src/components/GovernanceAndLeadershipVault';
import { CorporateEnquiryDrawer } from '@/src/components/CorporateEnquiryDrawer';
import { Footer } from '@/src/components/Footer';
import { Toast, type ToastMessage } from '@/src/components/Toast';
import { ShieldCheck, CheckCircle2, Lock, Landmark, Scale, FileText, Download } from 'lucide-react';

export default function CompliancePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerCategory, setDrawerCategory] = useState('Investor Relations & Statutory Verification');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description: string, type: 'success' | 'download' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, description, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenDrawer = (category = 'Investor Relations & Statutory Verification') => {
    setDrawerCategory(category);
    setIsDrawerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <Navbar onOpenEnquiry={handleOpenDrawer} />

      <main className="flex-1">
        {/* Page Executive Hero with Real Background Image */}
        <section className="relative bg-[#0A1128] text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden select-none">
          {/* Real Background Image with Low Opacity */}
          <div className="absolute inset-0 z-0">
            <img
              src="/arbit-infratel-preview/social/post_5.jpg"
              alt="Arbit Governance & Civic Leadership"
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
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Statutory Compliance &bull; UP-RERA Escrow</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight">
                Governance, RERA &amp; Compliance Vault
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-2xl font-light">
                Official regulatory registrations, 100% UP-RERA escrow banking protocols, and statutory corporate filings of Arbit Infratel Private Limited (Gorakhpur, UP).
              </p>
            </div>
          </div>
        </section>

        {/* Governance & Leadership Vault (Light Coloured Background) */}
        <GovernanceAndLeadershipVault />

        {/* 100% Escrow Account Banking Assurance Protocol Section (Light Coloured Background) */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200 select-none">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-mono tracking-widest text-[#9B7C44] uppercase font-bold mb-1.5">
                FINANCIAL INTEGRITY &amp; STATUTORY CUSTODY
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-normal">
                Escrow Banking Protocols Under UP-RERA
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed font-normal">
                Arbit Infratel adheres to Section 4(2)(l)(D) of RERA Act 2016. Every commercial advance is secured in a scheduled commercial bank escrow account.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-[#F6F5F2] border border-stone-200 p-6 shadow-sm">
                <div className="w-10 h-10 bg-white border border-stone-200 text-[#9B7C44] flex items-center justify-center mb-4">
                  <Landmark className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0B131E] mb-1">
                  100% Escrow Banking
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  All customer advances for <em>Arbit The 25</em> are deposited in dedicated escrow accounts, eliminating fund diversion.
                </p>
              </div>

              <div className="bg-[#F6F5F2] border border-stone-200 p-6 shadow-sm">
                <div className="w-10 h-10 bg-white border border-stone-200 text-[#9B7C44] flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0B131E] mb-1">
                  Certified Withdrawals
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  Funds are withdrawn strictly in proportion to construction milestones certified by an independent architect and CA.
                </p>
              </div>

              <div className="bg-[#F6F5F2] border border-stone-200 p-6 shadow-sm">
                <div className="w-10 h-10 bg-white border border-stone-200 text-[#9B7C44] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0B131E] mb-1">
                  Zero Litigation Record
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  16-year corporate record with clean annual ROC filings and zero consumer or statutory disputes.
                </p>
              </div>

            </div>

            <div className="mt-8 p-5 bg-[#F6F5F2] border border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#0B131E] shadow-sm">
              <span className="font-semibold">STATUTORY AUDIT CONFIRMATION: UPRERAPRM160411</span>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => handleOpenDrawer('Statutory Banking Audit Query')}
                className="bg-[#0B131E] hover:bg-[#B8965A] text-white px-5 py-2 text-[11px] uppercase tracking-wider font-bold transition-colors"
              >
                Request Consortia Deck
              </button>
            </div>

          </div>
        </section>

      </main>

      <Footer onOpenEnquiry={() => handleOpenDrawer('Compliance & Legal Desk')} />

      <CorporateEnquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialCategory={drawerCategory}
        onSuccess={(ticket, name) => {
          addToast('Executive Query Logged', `Ticket ${ticket} logged for ${name}.`, 'success');
        }}
      />

      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
