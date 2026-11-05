'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/src/components/Navbar';
import { ConglomerateStory } from '@/src/components/ConglomerateStory';
import { CorporateEnquiryDrawer } from '@/src/components/CorporateEnquiryDrawer';
import { Footer } from '@/src/components/Footer';
import { Toast, type ToastMessage } from '@/src/components/Toast';
import { Users, ShieldCheck, ArrowRight, Award, Clock, Landmark, Building2, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerCategory, setDrawerCategory] = useState('Corporate Heritage & Leadership Brief');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description: string, type: 'success' | 'download' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, description, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenDrawer = (category = 'Corporate Heritage & Leadership Brief') => {
    setDrawerCategory(category);
    setIsDrawerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F2] text-[#181A1F]">
      <Navbar onOpenEnquiry={handleOpenDrawer} />

      <main className="flex-1">
        {/* Executive Page Hero (Light & Simple) */}
        <section className="bg-white text-[#0B131E] py-12 sm:py-16 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="max-w-3xl">
              <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#9B7C44] mb-2">
                WE ARE THE FUTURE • ESTABLISHED 2010 • GORAKHPUR, UP
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif text-[#0B131E] font-normal tracking-tight">
                Corporate Heritage &amp; Profile
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed max-w-2xl font-normal">
                Arbit Infratel Private Limited (Est. 2010, Gorakhpur) is a premier ₹100+ Crore Indian infrastructure engineering, civil EPC, and commercial real estate conglomerate registered under UP-RERA (UPRERAPRM160411).
              </p>
            </div>
          </div>
        </section>

        {/* The Conglomerate Story (Simple & Light) */}
        <ConglomerateStory onOpenEnquiry={handleOpenDrawer} />

        {/* 16-Year Heritage Timeline Section (Clean Light Grid) */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200 select-none">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-mono tracking-widest text-[#9B7C44] uppercase font-bold mb-1.5">
                MILESTONES (2010–2026)
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-normal">
                16-Year Track Record of Delivery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6">
              
              {/* Milestone 1 */}
              <div className="bg-[#F6F5F2] border border-stone-200 p-6 shadow-sm">
                <div className="text-2xl font-serif font-bold text-[#0B131E]">2010</div>
                <div className="text-xs font-mono font-bold text-[#9B7C44] uppercase mt-1 mb-2">
                  INCORPORATION
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  Incorporated at RoC Kanpur in Gorakhpur (CIN: U64200UP2010PTC041308), initiating passive telecom utility trenching and civil engineering works.
                </p>
              </div>

              {/* Milestone 2 */}
              <div className="bg-[#F6F5F2] border border-stone-200 p-6 shadow-sm">
                <div className="text-2xl font-serif font-bold text-[#0B131E]">2015</div>
                <div className="text-xs font-mono font-bold text-[#9B7C44] uppercase mt-1 mb-2">
                  TELECOM SCALE
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  Partnered with Altius Network for Telecom O&M (IME), expanding trenchless directional drilling to 850+ km of optical fiber ducting and erecting 150+ telecom towers.
                </p>
              </div>

              {/* Milestone 3 */}
              <div className="bg-[#F6F5F2] border border-stone-200 p-6 shadow-sm">
                <div className="text-2xl font-serif font-bold text-[#0B131E]">2018</div>
                <div className="text-xs font-mono font-bold text-[#9B7C44] uppercase mt-1 mb-2">
                  CLASS-A PWD &amp; RERA
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  Accredited as Class-A PWD contractor and obtained permanent UP-RERA promoter registration (UPRERAPRM160411) for commercial developments.
                </p>
              </div>

              {/* Milestone 4 */}
              <div className="bg-[#F6F5F2] border border-stone-200 p-6 shadow-sm">
                <div className="text-2xl font-serif font-bold text-[#0B131E]">2024–26</div>
                <div className="text-xs font-mono font-bold text-[#9B7C44] uppercase mt-1 mb-2">
                  ARBIT THE 25 &amp; ₹100+ CR
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  Developing flagship commercial landmark <em>Arbit The 25</em> (UPRERAPRJ218427) — "Home to Eminent Retail Brands & Luxury Living" in Gorakhpur while surpassing ₹100+ Crore in cumulative execution.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Board Leadership Gateway Banner (Light & Simple) */}
        <section className="py-14 sm:py-18 bg-[#F6F5F2] border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="text-xs font-mono tracking-widest text-[#9B7C44] uppercase font-bold">
                BOARD OF DIRECTORS
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#0B131E]">
                Directors Abhishek Agrawal &amp; Anand Kumar Mishra
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-normal max-w-xl">
                Explore our corporate governance, executive engineering leadership, and statutory credentials.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/leadership"
                className="bg-[#0B131E] hover:bg-[#B8965A] text-white py-3 px-6 text-xs font-bold tracking-wider uppercase transition-colors shadow-sm whitespace-nowrap"
              >
                Meet The Board
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenEnquiry={() => handleOpenDrawer('Corporate Heritage & Leadership Brief')} />

      <CorporateEnquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialCategory={drawerCategory}
        onSuccess={(ticket, name) => {
          addToast('Leadership Dossier Queued', `Ticket ${ticket} logged for ${name}.`, 'success');
        }}
      />

      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
