'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

interface ExecutiveEnquirySectionProps {
  onSuccess?: (ticket: string) => void;
}

export const ExecutiveEnquirySection: React.FC<ExecutiveEnquirySectionProps> = ({ onSuccess }) => {
  const [activeType, setActiveType] = useState<string>('Commercial Real Estate (Arbit The 25)');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('');
  const [budget, setBudget] = useState('₹50 L – ₹1 Cr');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const ticket = `ARB-EXE-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(ticket);
      if (onSuccess) onSuccess(ticket);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setCompany('');
    setName('');
    setPhone('');
    setEmail('');
    setScope('');
  };

  return (
    <section id="corporate-enquiry" className="py-16 sm:py-24 bg-slate-50 text-[#0F172A] border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2C8FEA]/10 text-[#2C8FEA] rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Direct Commercial &amp; Tender Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#0F172A] tracking-tight">
            Corporate Enquiry &amp; Liaison Desk
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">
            Submit your commercial leasing query for Arbit 34, 36, Vibhuti, or The 25, civil EPC tender requirement, or partnership proposal directly to our management team in Gorakhpur.
          </p>
        </div>

        {/* 12-Column Split: Left 5 Cols HQ Coordinates / Right 7 Cols Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left 5 Columns: Official Corporate Address & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-stone-200 p-8 shadow-sm">
              <div className="text-[10px] font-mono tracking-wider text-[#9B7C44] uppercase font-bold mb-1">
                CORPORATE HEADQUARTERS
              </div>
              <h3 className="text-xl font-serif text-[#0B131E] font-bold mb-4">
                Arbit Infratel Private Limited
              </h3>

              <div className="space-y-4 text-xs font-sans text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#9B7C44] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Hariom Nagar, Civil Lines, Gorakhpur, Uttar Pradesh – 273001
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#9B7C44] flex-shrink-0" />
                  <a href="tel:+915512204130" className="font-mono text-[#0B131E] font-semibold hover:text-[#9B7C44]">
                    +91 (0551) 220-4130
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#9B7C44] flex-shrink-0" />
                  <a href="mailto:corporate@arbitinfratel.com" className="font-mono text-[#9B7C44] hover:underline">
                    corporate@arbitinfratel.com
                  </a>
                </div>
              </div>

              {/* Statutory Footnote */}
              <div className="mt-6 pt-5 border-t border-stone-200 text-[11px] font-mono text-stone-600 space-y-1">
                <div>CIN: <strong className="text-[#0B131E]">U64200UP2010PTC041308</strong></div>
                <div>UP-RERA PROMOTER: <strong className="text-[#9B7C44]">UPRERAPRM160411</strong></div>
                <div>ROC: <span className="text-[#0B131E]">Kanpur, Uttar Pradesh</span></div>
                <div>ARBIT THE 25 RERA: <strong className="text-[#9B7C44]">UPRERAPRJ218427</strong></div>
              </div>
            </div>

            
              {/* Verified Community Presence */}
              <div className="mt-5 pt-4 border-t border-stone-200">
                <div className="text-[10px] font-mono tracking-wider text-[#9B7C44] uppercase font-bold mb-2">
                  VERIFIED LOCAL PRESENCE
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-stone-50 border border-stone-200 flex items-center justify-between">
                    <span className="font-bold text-[#0B131E]">Community</span>
                    <span className="text-[10px] text-stone-500 font-mono">6.4K+</span>
                  </div>
                  <div className="p-2.5 bg-stone-50 border border-stone-200 flex items-center justify-between">
                    <span className="font-bold text-[#0B131E]">Followers</span>
                    <span className="text-[10px] text-stone-500 font-mono">2.5K+</span>
                  </div>
                </div>
              </div>

            {/* Escrow Guarantee Box */}
            <div className="bg-white border-l-4 border-[#9B7C44] border border-stone-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#9B7C44] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>100% ESCROW BANKING</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                All booking and contract advances for <em>Arbit The 25</em> and civil EPC projects are routed through scheduled commercial bank escrow accounts monitored under UP-RERA.
              </p>
            </div>
          </div>

          {/* Right 7 Columns: Interactive Engagement Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200 p-8 sm:p-10 shadow-sm">
            
            {/* Inquiry Track Tabs */}
            <div className="mb-6">
              <div className="text-[11px] font-mono tracking-wider text-stone-600 uppercase font-bold mb-2">
                SELECT ENQUIRY TYPE:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  'Commercial Real Estate (Arbit The 25)',
                  'Civil EPC & Infrastructure Tender',
                  'Vendor / General Inquiry',
                ].map((track) => (
                  <button
                    key={track}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setActiveType(track)}
                    className={`p-3 text-xs font-sans text-center border transition-all cursor-pointer ${
                      activeType === track
                        ? 'bg-[#0B131E] text-white border-[#0B131E] font-bold shadow-sm'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    {track}
                  </button>
                ))}
              </div>
            </div>

            {submittedRef ? (
              <div className="py-10 text-center animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#9B7C44] font-bold mb-1">
                  SUBMISSION SUCCESSFUL
                </div>
                <h4 className="text-2xl font-serif text-[#0B131E] mb-2">
                  Enquiry Received
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed mb-6 font-normal">
                  Thank you, <strong className="text-[#0B131E]">{name}</strong>. Your enquiry for <em>{activeType}</em> has been logged and assigned to our direct project desk.
                </p>

                <div className="bg-stone-100 border border-stone-300 p-3 max-w-xs mx-auto mb-6 font-mono text-xs text-[#0B131E] font-bold">
                  REFERENCE CODE: {submittedRef}
                </div>

                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={handleReset}
                  className="bg-[#0B131E] hover:bg-[#B8965A] text-white px-6 py-3 text-xs tracking-wider uppercase font-bold transition-colors shadow-sm"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Organization / Company Name
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Retail Brand / Company Name / Individual"
                      className="w-full bg-stone-50 border border-stone-300 p-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#9B7C44]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full bg-stone-50 border border-stone-300 p-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#9B7C44]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Mobile Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="10-digit Mobile Number"
                      className="w-full bg-stone-50 border border-stone-300 p-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#9B7C44] font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-stone-50 border border-stone-300 p-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#9B7C44]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Budget / Project Scale
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 p-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#9B7C44]"
                    >
                      <option value="₹50 L – ₹1 Cr">Commercial Retail (₹50 L – ₹1 Cr)</option>
                      <option value="₹1 Cr – ₹5 Cr">Corporate Suite / Floor Plate (₹1 Cr – ₹5 Cr)</option>
                      <option value="₹5 Cr – ₹25 Cr">Civil EPC Package (₹5 Cr – ₹25 Cr)</option>
                      <option value="₹25 Cr+">Institutional EPC / JV (₹25 Cr+)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Enquiry Details / Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      placeholder="Specify your space requirement, floor preference, or tender details..."
                      className="w-full bg-stone-50 border border-stone-300 p-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#9B7C44]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    suppressHydrationWarning
                    disabled={isSubmitting}
                    className="w-full bg-[#2C8FEA] hover:bg-[#1E75D8] text-white py-3.5 px-6 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center cursor-pointer shadow-md shadow-[#2C8FEA]/20"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Enquire'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
