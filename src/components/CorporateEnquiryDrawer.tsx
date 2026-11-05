'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Building2, HardHat, FileSpreadsheet, Lock } from 'lucide-react';

interface CorporateEnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  onSuccess?: (ticketRef: string, name: string) => void;
}

export const CorporateEnquiryDrawer: React.FC<CorporateEnquiryDrawerProps> = ({
  isOpen,
  onClose,
  initialCategory = 'Corporate Leasing & Flagship Developments',
  onSuccess,
}) => {
  const [category, setCategory] = useState(initialCategory);
  const [organization, setOrganization] = useState('');
  const [contactName, setContactName] = useState('');
  const [officialEmail, setOfficialEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [investmentScale, setInvestmentScale] = useState('₹1 Cr – ₹5 Cr');
  const [briefScope, setBriefScope] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  // Sync category if prop changes
  React.useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !mobileNumber) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const ticket = `ARB-EXE-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket(ticket);
      if (onSuccess) {
        onSuccess(ticket, contactName);
      }
    }, 700);
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    setOrganization('');
    setContactName('');
    setOfficialEmail('');
    setMobileNumber('');
    setBriefScope('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0B131E]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-[#F6F5F2] border-l border-[#B8965A]/40 shadow-2xl flex flex-col justify-between">
          
          {/* Header (Clean Light) */}
          <div className="bg-white text-[#0B131E] p-6 sm:p-8 border-b border-stone-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] tracking-wider uppercase font-bold text-[#9B7C44]">
                <ShieldCheck className="w-4 h-4 text-[#9B7C44]" />
                <span>DIRECT ENQUIRY DESK</span>
              </div>
              <button
                type="button"
                suppressHydrationWarning
                onClick={onClose}
                className="text-stone-500 hover:text-[#0B131E] p-1.5 border border-stone-200 hover:border-stone-400 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#0B131E] mt-2 font-normal">
              Corporate Enquiry
            </h3>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Direct liaison desk for <em>Arbit The 25</em> commercial leasing, civil EPC tenders, and partnerships.
            </p>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
            {submittedTicket ? (
              <div className="py-12 text-center animate-fadeIn">
                <div className="w-16 h-16 bg-[#0B131E] border border-[#B8965A] text-[#B8965A] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="text-[11px] font-mono tracking-widest text-[#B8965A] font-bold uppercase mb-2">
                  DISPATCH CONFIRMATION
                </div>
                <h4 className="text-2xl font-serif text-[#0B131E] mb-3">
                  Executive Dossier Queued
                </h4>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed mb-6 font-sans">
                  Thank you, <strong className="text-[#0B131E]">{contactName}</strong>. Your correspondence regarding <em>{category}</em> has been assigned directly to our Board Secretariat in Civil Lines, Gorakhpur.
                </p>

                <div className="bg-[#0B131E] text-white p-4 max-w-xs mx-auto border border-[#B8965A]/50 mb-8 font-mono text-xs">
                  <div className="text-stone-400 text-[10px] uppercase">Audit Tracking Code</div>
                  <div className="text-base text-[#B8965A] font-bold mt-1">{submittedTicket}</div>
                </div>

                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={handleReset}
                  className="rounded-none bg-[#0B131E] hover:bg-[#B8965A] text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold transition-colors"
                >
                  RETURN TO CORPORATE PORTAL
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Category Selector Tabs */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] font-bold text-stone-700 mb-2">
                    Engagement Nature <span className="text-rose-600">*</span>
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      'Corporate Leasing & Flagship Developments',
                      'EPC Tenders, Joint Ventures & Institutional Partnerships',
                      'Vendor & Subcontractor Empanelment',
                    ].map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        suppressHydrationWarning
                        onClick={() => setCategory(tab)}
                        className={`text-left p-3 text-xs tracking-wider font-semibold border transition-all ${
                          category === tab
                            ? 'bg-[#0B131E] text-[#B8965A] border-[#B8965A]'
                            : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Organization */}
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-bold text-stone-600 mb-1">
                      Organization / Entity Name
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Larsen &amp; Toubro / HDFC Bank / Private Trust"
                      className="w-full bg-white border border-stone-300 rounded-none p-3 text-xs text-stone-900 focus:outline-none focus:border-[#B8965A]"
                    />
                  </div>

                  {/* Representative Name */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-bold text-stone-600 mb-1">
                      Authorized Signatory / Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Rajeshwar Singhania"
                      className="w-full bg-white border border-stone-300 rounded-none p-3 text-xs text-stone-900 focus:outline-none focus:border-[#B8965A]"
                    />
                  </div>

                  {/* Official Mobile */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-bold text-stone-600 mb-1">
                      Official Mobile Phone <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="98765 43210"
                      className="w-full bg-white border border-stone-300 rounded-none p-3 text-xs text-stone-900 focus:outline-none focus:border-[#B8965A] font-mono"
                    />
                  </div>

                  {/* Corporate Email */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-bold text-stone-600 mb-1">
                      Corporate Work Email
                    </label>
                    <input
                      type="email"
                      value={officialEmail}
                      onChange={(e) => setOfficialEmail(e.target.value)}
                      placeholder="corporate@domain.com"
                      className="w-full bg-white border border-stone-300 rounded-none p-3 text-xs text-stone-900 focus:outline-none focus:border-[#B8965A]"
                    />
                  </div>

                  {/* Scale / Allocation */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-bold text-stone-600 mb-1">
                      Projected Capital / Scope
                    </label>
                    <select
                      value={investmentScale}
                      onChange={(e) => setInvestmentScale(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-none p-3 text-xs text-stone-900 focus:outline-none focus:border-[#B8965A]"
                    >
                      <option value="₹50 L – ₹1 Cr">Commercial Retail (₹50 L – ₹1 Cr)</option>
                      <option value="₹1 Cr – ₹5 Cr">Corporate Suite / Floor Plate (₹1 Cr – ₹5 Cr)</option>
                      <option value="₹5 Cr – ₹25 Cr">Civil EPC Package (₹5 Cr – ₹25 Cr)</option>
                      <option value="₹25 Cr+">Institutional EPC / JV (₹25 Cr+)</option>
                    </select>
                  </div>

                  {/* Scope Details */}
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-[0.16em] font-bold text-stone-600 mb-1">
                      Executive Brief &amp; Specifications
                    </label>
                    <textarea
                      rows={3}
                      value={briefScope}
                      onChange={(e) => setBriefScope(e.target.value)}
                      placeholder="Detail your space requirement, structural scope, or joint venture tender specifications..."
                      className="w-full bg-white border border-stone-300 rounded-none p-3 text-xs text-stone-900 focus:outline-none focus:border-[#B8965A]"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    suppressHydrationWarning
                    disabled={isSubmitting}
                    className="w-full bg-[#0B131E] hover:bg-[#B8965A] text-white py-3.5 px-6 rounded-md text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 flex items-center justify-center cursor-pointer shadow-sm hover:shadow"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Enquire'}</span>
                  </button>
                  <p className="text-[10px] text-stone-500 text-center mt-2.5 font-mono">
                    Secured under UP-RERA Escrow &amp; MCA Non-Disclosure Protocols.
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* Footer Bar */}
          <div className="bg-stone-200 p-4 border-t border-stone-300 flex items-center justify-between text-[11px] text-stone-600">
            <span className="font-mono">ROC KANPUR: 041308</span>
            <span className="font-mono">UP-RERA: UPRERAPRM160411</span>
          </div>

        </div>
      </div>
    </div>
  );
};

