'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { Navbar } from '@/src/components/Navbar';
import { ThreePillarsShowcase } from '@/src/components/ThreePillarsShowcase';
import { ExecutionPortfolioGrid } from '@/src/components/ExecutionPortfolioGrid';
import { CorporateEnquiryDrawer } from '@/src/components/CorporateEnquiryDrawer';
import { Footer } from '@/src/components/Footer';
import { Toast, type ToastMessage } from '@/src/components/Toast';
import { HardHat, ShieldCheck, CheckCircle2, Truck, Cpu, Layers, ArrowRight, Download, Building2 } from 'lucide-react';

const MACHINERY_FLEET = [
  { item: 'Computerized Mobile Concrete Batching Plants (CP-30 / CP-60)', qty: '2 Units', cap: '120 m³/hr combined output' },
  { item: 'Hydraulic Rotary Piling Rigs (Bauer / Soilmec equivalent)', qty: '3 Units', cap: 'Up to 32m depth foundation piles' },
  { item: 'Horizontal Directional Drilling (HDD) Trenchless Rigs (Vermeer)', qty: '4 Units', cap: '850+ km optical ducting capability' },
  { item: 'Transit Concrete Mixers (6 m³ & 7 m³ high-payload)', qty: '8 Fleet', cap: 'Continuous monolithic pour logistics' },
  { item: 'Mobile Telescopic Cranes & Tower Cranes', qty: '4 Units', cap: '40T to 75T structural steel & precast hoisting' },
  { item: 'Laser-Guided Concrete Screeders & Heavy Road Rollers', qty: '6 Units', cap: 'High-tolerance industrial PEB flooring' },
];

function CivilEpcMain() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerCategory, setDrawerCategory] = useState('Civil EPC & Turnkey Works');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description: string, type: 'success' | 'download' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, description, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenDrawer = (category = 'Civil EPC & Turnkey Works') => {
    setDrawerCategory(category);
    setIsDrawerOpen(true);
  };

  const handleDownloadMachineryDossier = () => {
    const content = `ARBIT INFRATEL PRIVATE LIMITED\nTECHNICAL EPC DOSSIER: PLANT, EQUIPMENT & MACHINERY INVENTORY\n\n1. CONCRETE & FOUNDATION PLANT:\n- 2x Computerized Mobile Batching Plants (Combined 120 m3/hr)\n- 3x Hydraulic Rotary Piling Rigs (Seismic Zone-IV Pile Caps)\n- 8x Transit Mixers (Monolithic Pour Management)\n\n2. TRENCHLESS UTILITY & TELECOM (NIC 64200):\n- 4x Vermeer Horizontal Directional Drilling (HDD) Rigs\n- 850+ km Subterranean HDPE Conduit Execution Capability\n- 150+ Passive Telecommunication Tower Deployments\n\n3. CONTRACTOR REGISTRATION & SOLVENCY:\n- Registration: Class-A PWD Registered Civil Works Contractor\n- Bidding Capacity: ₹50+ Crore Institutional Packages\n- Zero Litigation Record • Audited Bank Guarantees\n\nCorporate Office: Hariom Nagar, Civil Lines, Gorakhpur, UP - 273001`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Arbit-Infratel-EPC-Machinery-Dossier.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    addToast('Dossier Downloaded', 'Technical plant & equipment inventory downloaded.', 'download');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <Navbar onOpenEnquiry={handleOpenDrawer} />

      <main className="flex-1">
        {/* Executive Banner */}
        <section className="bg-gradient-to-b from-slate-900 via-[#0F172A] to-slate-900 text-white py-14 sm:py-18 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2C8FEA]/20 text-[#2C8FEA] rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border border-[#2C8FEA]/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>Class-A PWD Contractor &bull; NIC 64200</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight">
                Civil EPC &amp; Infrastructure
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-2xl font-normal">
                Class-A PWD registered contractor delivering heavy structural frameworks, bridges, institutional campuses, and optical fiber utility networks across Uttar Pradesh.
              </p>
            </div>
          </div>
        </section>

        {/* 3 Pillars of Division Strength (Interactive Tabs) */}
        <ThreePillarsShowcase onOpenEnquiry={handleOpenDrawer} />

        {/* Heavy Plant & Machinery Fleet Technical Table */}
        <section className="py-24 sm:py-32 bg-white border-b border-stone-300 select-none">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-stone-300 gap-4">
              <div>
                <div className="text-xs font-mono tracking-widest text-[#B8965A] uppercase font-bold mb-2">
                  IN-HOUSE CAPEX INVENTORY
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-normal">
                  Heavy Plant &amp; Computerized Machinery
                </h2>
              </div>

              <button
                type="button"
                suppressHydrationWarning
                onClick={handleDownloadMachineryDossier}
                className="rounded-none bg-[#0B131E] hover:bg-[#B8965A] text-white px-6 py-3 text-xs tracking-widest uppercase font-bold transition-colors inline-flex items-center gap-2 self-start md:self-auto"
              >
                <Download className="w-4 h-4 text-[#B8965A]" />
                <span>DOWNLOAD PLANT AUDIT DOSSIER</span>
              </button>
            </div>

            <div className="bg-[#F6F5F2] border border-stone-300 shadow-elevated overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-sans">
                <thead>
                  <tr className="bg-[#0B131E] text-white font-mono uppercase text-[11px] tracking-wider border-b border-white/20">
                    <th className="py-4 px-6">Equipment Description &amp; Model</th>
                    <th className="py-4 px-6">Fleet Strength</th>
                    <th className="py-4 px-6">Operational Output / Technical Specification</th>
                    <th className="py-4 px-6 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {MACHINERY_FLEET.map((mach, i) => (
                    <tr key={i} className="hover:bg-white transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#0B131E]">{mach.item}</td>
                      <td className="py-4 px-6 font-mono text-[#B8965A] font-bold">{mach.qty}</td>
                      <td className="py-4 px-6 text-stone-600">{mach.cap}</td>
                      <td className="py-4 px-6 text-right font-mono text-emerald-700 font-bold">100% OPERATIONAL</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 font-mono text-xs">
              <div className="bg-[#F6F5F2] p-4 border border-stone-300">
                <span className="text-stone-500 uppercase text-[10px] block">Contractor Rating</span>
                <strong className="text-[#0B131E] text-sm block mt-0.5">Class-A PWD Registered</strong>
              </div>
              <div className="bg-[#F6F5F2] p-4 border border-stone-300">
                <span className="text-stone-500 uppercase text-[10px] block">Tender Bidding Solvency</span>
                <strong className="text-[#0B131E] text-sm block mt-0.5">₹50+ Crore Guaranteed</strong>
              </div>
              <div className="bg-[#F6F5F2] p-4 border border-stone-300">
                <span className="text-stone-500 uppercase text-[10px] block">Telecom Classification</span>
                <strong className="text-[#0B131E] text-sm block mt-0.5">NIC Code 64200 (Passive Infra)</strong>
              </div>
            </div>

          </div>
        </section>

        {/* Selected Works Portfolio */}
        <ExecutionPortfolioGrid onOpenEnquiry={handleOpenDrawer} />
      </main>

      <Footer onOpenEnquiry={() => handleOpenDrawer('Civil EPC Contracting Desk')} />

      <CorporateEnquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialCategory={drawerCategory}
        onSuccess={(ticket, name) => {
          addToast('Tender Submission Queued', `Ticket ${ticket} logged for ${name}.`, 'success');
        }}
      />

      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}

export default function CivilEpcPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0B131E] text-white flex items-center justify-center font-mono">LOADING CIVIL EPC DOSSIER...</div>}>
      <CivilEpcMain />
    </Suspense>
  );
}
