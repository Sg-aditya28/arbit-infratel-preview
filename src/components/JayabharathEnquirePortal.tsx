'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Calendar, 
  Layers, 
  Briefcase, 
  ChevronRight, 
  Navigation,
  FileCheck2,
  HardHat,
  ArrowRight
} from 'lucide-react';

interface EnquirePortalProps {
  onSuccess?: (name: string, ref: string) => void;
  initialInterest?: string;
}

export const JayabharathEnquirePortal: React.FC<EnquirePortalProps> = ({
  onSuccess,
  initialInterest
}) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [confirmMobile, setConfirmMobile] = useState('');
  const [propertyType, setPropertyType] = useState(
    initialInterest || 'Commercial Retail (Arbit The 25) – From ₹65 Lakhs*'
  );
  const [configuration, setConfiguration] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [financialStatus, setFinancialStatus] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    ref: string;
    name: string;
    phone: string;
    property: string;
    budget: string;
    timeline: string;
  } | null>(null);

  const [mobileMismatchError, setMobileMismatchError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !mobile || !confirmMobile || !propertyType || !configuration || !budget || !timeline || !financialStatus) {
      alert('Please fill out all required qualification fields.');
      return;
    }

    if (mobile !== confirmMobile) {
      setMobileMismatchError(true);
      return;
    }

    setMobileMismatchError(false);
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `ARB-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsSubmitting(false);
      setSubmittedData({
        ref: generatedRef,
        name: fullName,
        phone: mobile,
        property: propertyType,
        budget: budget,
        timeline: timeline,
      });

      if (onSuccess) {
        onSuccess(fullName, generatedRef);
      }
    }, 800);
  };

  return (
    <div className="w-full">
      
      {/* 2-Column Jayabharath Campaign Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (8 cols): The Exact Jayabharath Enquire Funnel Form */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border-2 border-slate-200 shadow-elevated">
          
          {/* Header Title Matching Jayabharath Model */}
          <div className="mb-6 pb-6 border-b border-slate-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F4ECE1] border border-[#D5BE9E] text-[#735025] text-xs font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5 text-[#8B6533]" />
              OFFICIAL LEAD QUALIFICATION &amp; SITE BOOKING DESK
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-tight">
              Premium Commercial Retail, Corporate Suites &amp; Civil EPC Contracts
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Arbit The 25 (Civil Lines, Gorakhpur) &amp; Purvanchal Infrastructure Corridors
            </p>
          </div>

          {/* Signature Jayabharath "Serious Buyers Only" Qualification Box */}
          <div className="bg-[#FAF7F2] border-2 border-[#D5BE9E] rounded-xl p-5 sm:p-6 mb-8 text-xs text-slate-800 shadow-subtle">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8B6533]"></span>
              <h3 className="text-sm font-extrabold text-[#0B192C] uppercase tracking-wider">
                This Enquiry Form is Strictly for Serious Buyers &amp; Tender Authorities:
              </h3>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Commercial Retail Showrooms</strong> start from <strong>₹65 Lakhs*</strong> (Arbit The 25, Civil Lines)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Corporate Office Suites</strong> start from <strong>₹45 Lakhs*</strong> (Grade-A Executive Spaces)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Anchor High-Street Flagships</strong> (18-Ft Double Height) start from <strong>₹1.80 Crores*</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Civil EPC &amp; Telecom Utility Contracts</strong> executed up to <strong>₹50 Crores+</strong> (PWD Class-A)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>For businesses, investors &amp; families planning to purchase/lease <strong>within 1–6 months</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>For authorized buyers ready for <strong>Civil Lines accompanied site inspection &amp; booking</strong></span>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-[#D5BE9E]/60 flex items-center gap-2 text-[11px] text-[#735025] font-semibold">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>If your allocation budget or timeline does not meet these criteria, please contact our general desk instead.</span>
            </div>
          </div>

          {/* Form Content / Success State */}
          {submittedData ? (
            <div className="bg-white border-2 border-emerald-400 rounded-xl p-8 text-center animate-fadeIn shadow-subtle">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <span className="text-xs uppercase font-mono font-extrabold text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
                Booking Pass: {submittedData.ref}
              </span>
              <h3 className="text-2xl font-extrabold text-[#0B192C] mt-4 mb-2">
                Executive Pre-Qualification Confirmed!
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed mb-6">
                Thank you, <strong className="text-slate-900">{submittedData.name}</strong>. Your requirement for <em>{submittedData.property}</em> has been assigned to our Senior Relationship Manager at Civil Lines, Gorakhpur.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-w-md mx-auto text-left text-xs text-slate-700 space-y-2 mb-6 font-mono">
                <div><span className="text-slate-500">Contact:</span> <strong>+91 {submittedData.phone}</strong></div>
                <div><span className="text-slate-500">Budget Range:</span> <strong>{submittedData.budget}</strong></div>
                <div><span className="text-slate-500">Target Timeline:</span> <strong>{submittedData.timeline}</strong></div>
                <div><span className="text-slate-500">Status:</span> <span className="text-emerald-700 font-bold">Scheduled for Immediate Priority Callback</span></div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setSubmittedData(null)}
                  className="px-6 py-2.5 rounded-md bg-[#0B192C] text-white hover:bg-[#8B6533] text-xs font-bold transition-all shadow-subtle cursor-pointer"
                >
                  Submit Another Lead
                </button>
                <Link
                  href="/projects"
                  className="px-6 py-2.5 rounded-md border border-slate-300 bg-white text-[#0B192C] hover:bg-slate-50 text-xs font-bold transition-all shadow-subtle"
                >
                  Explore Architectural CAD Blueprints
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Field 1: Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  suppressHydrationWarning
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Anand Kumar Singhania"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-[#8B6533] focus:ring-1 focus:ring-[#8B6533] transition-colors shadow-subtle"
                />
              </div>

              {/* Field 2: Primary Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Primary Mobile Number <span className="text-rose-600">*</span>
                </label>
                <div className="flex shadow-subtle">
                  <span className="inline-flex items-center px-3.5 rounded-l-lg border border-r-0 border-slate-300 bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    suppressHydrationWarning
                    pattern="[0-9]{10}"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98765 43210"
                    className="w-full bg-slate-50 border border-slate-300 rounded-r-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-[#8B6533] focus:ring-1 focus:ring-[#8B6533] transition-colors font-mono"
                  />
                </div>
              </div>

              {/* Field 3: Property Type Interested In (Matching Jayabharath Radio/Card Tiles) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Property / Asset Type Interested In <span className="text-rose-600">*</span>
                </label>
                <div className="space-y-2.5">
                  {[
                    {
                      id: 'retail',
                      title: 'Retail Showrooms (Arbit The 25) – Ground Floor',
                      price: 'From ₹65 Lakhs*',
                      desc: 'Double-height retail showrooms (18-Ft ceiling) facing prime Civil Lines commercial corridor.'
                    },
                    {
                      id: 'suites',
                      title: 'Corporate Office Suites (Arbit The 25) – First Floor',
                      price: 'From ₹45 Lakhs*',
                      desc: 'Grade-A column-free corporate suites from 540 to 2,400 Sq.Ft. with high-speed elevators.'
                    },
                    {
                      id: 'anchor',
                      title: 'Anchor Flagship Showroom – Double-Height Frontage',
                      price: 'From ₹1.80* Crores',
                      desc: 'Marquee 3,500+ Sq.Ft. anchor store with dedicated loading dock and maximum footfall exposure.'
                    },
                    {
                      id: 'epc',
                      title: 'Civil & Structural EPC Contracts (Class-A PWD)',
                      price: '₹2 Cr – ₹50 Cr+ Works',
                      desc: 'Highway bridges, institutional campuses, and deep basement retention executed with captive batching plants.'
                    },
                    {
                      id: 'telecom',
                      title: 'Telecom & Utility Infrastructure (NIC 64200)',
                      price: 'Turnkey SLAs',
                      desc: 'Trenchless Vermeer HDD optical fiber ducting and heavy ground-based towers (GBT/RTT).'
                    }
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-start gap-3 p-3.5 rounded-lg border-2 cursor-pointer transition-all ${
                        propertyType === item.title
                          ? 'bg-[#F4ECE1]/60 border-[#8B6533] shadow-subtle'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="property_type"
                        suppressHydrationWarning
                        checked={propertyType === item.title}
                        onChange={() => setPropertyType(item.title)}
                        className="mt-1 text-[#8B6533] focus:ring-[#8B6533] accent-[#8B6533]"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <strong className="text-xs sm:text-sm font-bold text-[#0B192C]">
                            {item.title}
                          </strong>
                          <span className="text-xs font-mono font-bold text-[#8B6533] bg-white px-2 py-0.5 rounded border border-[#D5BE9E] self-start sm:self-auto">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Field 4: Space / Configuration Preference (Jayabharath Dropdown) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Space / Configuration Preference <span className="text-rose-600">*</span>
                </label>
                <select
                  required
                  suppressHydrationWarning
                  value={configuration}
                  onChange={(e) => setConfiguration(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#8B6533] focus:ring-1 focus:ring-[#8B6533] transition-colors shadow-subtle"
                >
                  <option value="">--- Select Choice ---</option>
                  <option value="Retail - 650 Sq.Ft. Ground Floor">Retail Showroom – 650 Sq.Ft. (Ground Floor • Available)</option>
                  <option value="Retail - 820 Sq.Ft. Ground Floor Anchor">Retail Showroom – 820 Sq.Ft. (Prime Corridor Frontage)</option>
                  <option value="Retail - 1,200 Sq.Ft. Corner Showroom">Retail Showroom – 1,200 Sq.Ft. (Double-Height Corner)</option>
                  <option value="Office - 540 Sq.Ft. First Floor Suite">Corporate Office Suite – 540 Sq.Ft. (First Floor)</option>
                  <option value="Office - 1,200 Sq.Ft. Corporate Suite">Corporate Office Suite – 1,200 Sq.Ft. (Executive Wing)</option>
                  <option value="Office - 2,400 Sq.Ft. Entire Executive Plate">Corporate Office Suite – 2,400 Sq.Ft. (Full Plate)</option>
                  <option value="Anchor Showroom - 3,500+ Sq.Ft. Flagship">Anchor Flagship Store – 3,500+ Sq.Ft. (Ground / First)</option>
                  <option value="Civil EPC - Institutional Works Contract">Civil EPC Works Contract (PWD Class-A Specification)</option>
                  <option value="Telecom - Optical Fiber Trenchless Ducting">Telecom Optical Fiber / Tower Foundations (NIC 64200)</option>
                </select>
              </div>

              {/* Field 5: Your Budget Bracket (Jayabharath Dropdown Tiers) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Your Budget <span className="text-rose-600">*</span>
                </label>
                <select
                  required
                  suppressHydrationWarning
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#8B6533] focus:ring-1 focus:ring-[#8B6533] transition-colors shadow-subtle"
                >
                  <option value="">--- Select Choice ---</option>
                  <option value="Commercial Retail – ₹65L to ₹85L">Commercial Retail – ₹65L to ₹85L</option>
                  <option value="Commercial Retail – ₹85L to ₹1.25 Cr">Commercial Retail – ₹85L to ₹1.25 Cr</option>
                  <option value="Commercial Retail – ₹1.25 Cr to ₹1.80 Cr">Commercial Retail – ₹1.25 Cr to ₹1.80 Cr</option>
                  <option value="Anchor Retail Flagship – ₹1.80 Cr to ₹2.50 Cr+">Anchor Retail Flagship – ₹1.80 Cr to ₹2.50 Cr+</option>
                  <option value="Corporate Office – ₹45L to ₹65L">Corporate Office – ₹45L to ₹65L</option>
                  <option value="Corporate Office – ₹65L to ₹95L">Corporate Office – ₹65L to ₹95L</option>
                  <option value="Corporate Office – ₹95L to ₹1.50 Cr+">Corporate Office – ₹95L to ₹1.50 Cr+</option>
                  <option value="Commercial Whole Floorplate – Above ₹2.50 Cr+">Commercial Whole Floorplate – Above ₹2.50 Cr+</option>
                  <option value="Civil EPC Tender – ₹2 Cr to ₹10 Cr">Civil EPC Works Contract – ₹2 Cr to ₹10 Cr</option>
                  <option value="Civil EPC Tender – Above ₹10 Cr+">Civil EPC Works Contract – Above ₹10 Cr+</option>
                </select>
              </div>

              {/* Field 6: When Do You Plan to Buy? (Jayabharath Dropdown) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  When Do You Plan to Buy / Lease? <span className="text-rose-600">*</span>
                </label>
                <select
                  required
                  suppressHydrationWarning
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#8B6533] focus:ring-1 focus:ring-[#8B6533] transition-colors shadow-subtle"
                >
                  <option value="">--- Select Choice ---</option>
                  <option value="Immediately (Within 30 Days)">Immediately (Within 30 Days)</option>
                  <option value="1–3 Months">1–3 Months</option>
                  <option value="3–6 Months">3–6 Months</option>
                </select>
              </div>

              {/* Field 7: Are You Financially Prepared for the Project? (Jayabharath Dropdown) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Are You Financially Prepared for the Project? <span className="text-rose-600">*</span>
                </label>
                <select
                  required
                  suppressHydrationWarning
                  value={financialStatus}
                  onChange={(e) => setFinancialStatus(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#8B6533] focus:ring-1 focus:ring-[#8B6533] transition-colors shadow-subtle"
                >
                  <option value="">--- Select Choice ---</option>
                  <option value="Yes, I’m financially ready">Yes, I’m financially ready</option>
                  <option value="I need commercial loan / bank financing assistance">I need commercial loan / bank financing assistance</option>
                  <option value="Preliminary feasibility evaluation">Preliminary feasibility evaluation</option>
                </select>
              </div>

              {/* Field 8: Confirm Your ACTIVE Mobile Number (Jayabharath Anti-Spam Check) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Confirm Your ACTIVE Mobile Number <span className="text-rose-600">*</span>
                </label>
                <div className="flex shadow-subtle">
                  <span className="inline-flex items-center px-3.5 rounded-l-lg border border-r-0 border-slate-300 bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    suppressHydrationWarning
                    pattern="[0-9]{10}"
                    value={confirmMobile}
                    onChange={(e) => {
                      setConfirmMobile(e.target.value.replace(/\D/g, '').slice(0, 10));
                      setMobileMismatchError(false);
                    }}
                    placeholder="Re-enter 10-digit mobile number"
                    className={`w-full bg-slate-50 border rounded-r-lg p-3 text-sm text-slate-900 focus:outline-none focus:ring-1 transition-colors font-mono ${
                      mobileMismatchError 
                        ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500' 
                        : 'border-slate-300 focus:border-[#8B6533] focus:ring-[#8B6533]'
                    }`}
                  />
                </div>
                {mobileMismatchError && (
                  <p className="text-xs text-rose-600 mt-1 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Mobile numbers do not match. Please verify your active number.
                  </p>
                )}
              </div>

              {/* Optional Field: Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Corporate Email (Optional)
                </label>
                <input
                  type="email"
                  suppressHydrationWarning
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@enterprise.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-[#8B6533] focus:ring-1 focus:ring-[#8B6533] transition-colors shadow-subtle"
                />
              </div>

              {/* Big Solid Submit Button (Jayabharath Conversion Design) */}
              <button
                type="submit"
                suppressHydrationWarning
                disabled={isSubmitting}
                className="w-full bg-[#0B192C] hover:bg-[#8B6533] text-white font-extrabold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-corporate text-sm sm:text-base cursor-pointer mt-4"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Validating Pre-Qualification...</span>
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#D5BE9E]" />
                    <span>Submit Executive Pre-Qualification &amp; Book Site Visit</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>UP-RERA Registered Escrow Mechanism • Instant SMS Confirmation</span>
              </div>

            </form>
          )}

        </div>

        {/* Right Column (4 cols): Corporate Office, Current Projects & Transit Proximity */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Section A: Our Current Projects (Matching Jayabharath Right-Sidebar) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <h4 className="text-sm font-extrabold text-[#0B192C] uppercase tracking-wider">
                Our Current Projects
              </h4>
            </div>

            <ul className="space-y-3 text-xs">
              {[
                { name: 'Arbit The 25', status: 'Ongoing • Superstructure Stage', loc: 'Civil Lines, Gorakhpur', rera: 'UPRERAPRM160411' },
                { name: 'Purvanchal Telecom Corridors', status: 'Active Works • 850+ km', loc: 'Eastern UP Network', rera: 'NIC 64200' },
                { name: 'Civil Lines Smart EPC Complex', status: 'Deep Basements Phase', loc: 'Civil Lines West', rera: 'PWD CLASS-A' },
                { name: 'Arbit Business Tower (Phase 2)', status: 'Upcoming Q3 2026', loc: 'Taramandal Hub', rera: 'Sanction Stage' },
                { name: 'Kushinagar Highway Viaducts', status: 'Delivered Milestone', loc: 'NH-28 Corridor', rera: 'Handover 100%' }
              ].map((proj) => (
                <li key={proj.name} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#8B6533] transition-colors">
                  <div className="flex items-center justify-between">
                    <strong className="text-[#0B192C] font-bold block">{proj.name}</strong>
                    <span className="text-[9px] font-mono font-bold text-[#8B6533] bg-[#F4ECE1] px-1.5 py-0.5 rounded">
                      {proj.rera}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 flex items-center justify-between">
                    <span>{proj.loc}</span>
                    <span className="text-emerald-700 font-semibold">{proj.status}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/projects"
              className="mt-4 w-full py-2 bg-slate-100 hover:bg-slate-200 text-[#0B192C] rounded-md text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <span>View All Project Elevations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Section B: Corporate Office Coordinates (Matching Jayabharath) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle space-y-3.5">
            <h4 className="text-sm font-extrabold text-[#0B192C] uppercase tracking-wider border-b border-slate-200 pb-2">
              Corporate Headquarters
            </h4>

            <div className="text-xs text-slate-700 space-y-2.5">
              <div>
                <strong className="text-[#0B192C] block">Arbit Infratel Private Limited</strong>
                <span>Hariom Nagar, Civil Lines, Gorakhpur, Uttar Pradesh – 273001, India</span>
                <div className="text-[11px] text-slate-500 mt-0.5">Near Civil Lines Chowk / City Center</div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-slate-500 block text-[11px] uppercase font-bold">Direct Telephony:</span>
                <a href="tel:+915512204130" className="text-[#0B192C] font-mono font-bold hover:text-[#8B6533] block">
                  +91 (0551) 220-4130 / +91 94152 16041
                </a>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px] uppercase font-bold">Executive Email:</span>
                <a href="mailto:corporate@arbitinfratel.com" className="text-[#0B192C] font-mono font-semibold hover:text-[#8B6533] block">
                  corporate@arbitinfratel.com
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="text-slate-500 block text-[11px] uppercase font-bold">Inspection Hours:</span>
                <span className="font-semibold text-slate-800">Monday – Saturday: 09:30 AM – 07:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Section C: Project Locations & Proximity (Matching Jayabharath) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle">
            <h4 className="text-sm font-extrabold text-[#0B192C] uppercase tracking-wider border-b border-slate-200 pb-2 mb-3">
              Project Transit Proximity
            </h4>

            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                <span className="text-slate-500">Mahayogi Gorakhnath Airport:</span>
                <strong className="text-[#0B192C] font-mono">7.5 km</strong>
              </div>
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                <span className="text-slate-500">Gorakhpur Junction Railway:</span>
                <strong className="text-[#0B192C] font-mono">2.2 km</strong>
              </div>
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                <span className="text-slate-500">NH-28 4-Lane Highway:</span>
                <strong className="text-[#0B192C] font-mono">1.8 km</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Civil Lines Commercial Chowk:</span>
                <strong className="text-emerald-700 font-bold">200 meters</strong>
              </div>
            </div>
          </div>

          {/* Section D: Statutory Registrations Badges */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-corporate">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#D5BE9E] block mb-1">
              Statutory Transparency
            </span>
            <h4 className="text-sm font-bold text-white mb-3">
              Official Regulatory Verification
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span>MCA Corporate Identity:</span>
                <span className="font-mono text-emerald-400 font-bold">U64200UP2010PTC041308</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span>UP-RERA Promoter Reg:</span>
                <span className="font-mono text-[#D5BE9E] font-bold">UPRERAPRM160411</span>
              </div>
              <div className="flex items-center justify-between">
                <span>PWD Contractor Status:</span>
                <span className="font-mono text-amber-400 font-bold">Class-A Works</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

