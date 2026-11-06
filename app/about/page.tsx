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
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <Navbar onOpenEnquiry={handleOpenDrawer} />

      <main className="flex-1">
        {/* Executive Page Hero */}
        <section className="bg-gradient-to-b from-slate-900 via-[#0F172A] to-slate-900 text-white py-14 sm:py-18 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2C8FEA]/20 text-[#2C8FEA] rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-[#2C8FEA]/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>Building with Purpose &bull; Leading with Pride &bull; Est. 2010</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight">
                Corporate Heritage &amp; Profile
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-2xl font-normal">
                Arbit Infratel Private Limited (Est. 2010, Gorakhpur) has grown from local civil foundations into Eastern Uttar Pradesh’s trusted developer with 38+ landmark projects delivered. Registered UP-RERA Promoter (UPRERAPRM160411).
              </p>
            </div>
          </div>
        </section>

        {/* The Conglomerate Story */}
        <ConglomerateStory onOpenEnquiry={handleOpenDrawer} />

        {/* 16-Year Heritage Timeline Section */}
        <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C8FEA] uppercase tracking-wider mb-2">
                <span>16 YEARS OF PROVEN DELIVERY (2010–2026)</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0F172A]">
                Track Record &amp; Milestones
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-2">
              
              {/* Milestone 1 */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-[#2C8FEA] transition-all">
                <div className="text-3xl font-serif font-bold text-[#2C8FEA]">2010</div>
                <div className="text-xs font-bold text-[#0F172A] uppercase mt-1 mb-2">
                  INCORPORATION
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Incorporated at RoC Kanpur in Gorakhpur (CIN: U64200UP2010PTC041308), initiating telecom utility trenching and civil engineering works.
                </p>
              </div>

              {/* Milestone 2 */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-[#2C8FEA] transition-all">
                <div className="text-3xl font-serif font-bold text-[#2C8FEA]">2015</div>
                <div className="text-xs font-bold text-[#0F172A] uppercase mt-1 mb-2">
                  TELECOM SCALE
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Partnered with Altius Network for Telecom O&amp;M, expanding trenchless directional drilling to 850+ km of optical fiber and 150+ telecom towers.
                </p>
              </div>

              {/* Milestone 3 */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-[#2C8FEA] transition-all">
                <div className="text-3xl font-serif font-bold text-[#2C8FEA]">2018</div>
                <div className="text-xs font-bold text-[#0F172A] uppercase mt-1 mb-2">
                  CLASS-A PWD &amp; RERA
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Accredited as Class-A PWD contractor and obtained permanent UP-RERA promoter registration (UPRERAPRM160411) for commercial developments.
                </p>
              </div>

              {/* Milestone 4 */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:border-[#2C8FEA] transition-all">
                <div className="text-3xl font-serif font-bold text-[#2C8FEA]">2022–26</div>
                <div className="text-xs font-bold text-[#0F172A] uppercase mt-1 mb-2">
                  38+ DELIVERIES
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Delivered Arbit 34 (Westside), Arbit 36 (Reliance Fashion Factory), Arbit Vibhuti (Metro Shoes), V-Mart, and commercial development Arbit The 25.
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
