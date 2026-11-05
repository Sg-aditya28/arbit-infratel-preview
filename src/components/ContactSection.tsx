'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Building2, 
  CheckCircle2, 
  Compass,
  Calendar,
  Layers,
  HardHat,
  ShieldCheck,
  UserCheck,
  Navigation
} from 'lucide-react';

interface ContactSectionProps {
  onInquirySubmitted: (name: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onInquirySubmitted,
}) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Arbit The 25 Commercial Space',
    spaceRequirement: 'Ground Floor Retail (650 - 1,200 Sq.Ft.)',
    preferredDate: '',
    timeSlot: 'Morning (10:00 AM - 01:00 PM)',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('ARB-INQ-184920');
  const [activeBranch, setActiveBranch] = useState<'hq' | 'site' | 'plant'>('hq');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const generatedCode = `ARB-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryRef(generatedCode);
      setSent(true);
      onInquirySubmitted(formState.name);
    }, 600);
  };

  return (
    <section id="contact-desk" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div suppressHydrationWarning className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F4ECE1] border border-[#D5BE9E] text-[#735025] text-xs font-bold uppercase tracking-wider mb-3">
              <Phone className="w-3.5 h-3.5 text-[#8B6533]" />
              EXECUTIVE LIAISON &amp; SITE INSPECTION PORTAL
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Direct Corporate Enquire Desk
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Connect directly with our Gorakhpur Civil Lines headquarters or schedule an accompanied site inspection for <em>Arbit The 25</em> commercial showrooms and corporate suites.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 shadow-subtle text-xs text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Promoter Helpdesk Available: <strong>Mon – Sat (09:30 AM – 07:00 PM)</strong></span>
          </div>
        </div>

        {/* 2-Column Jayabharath Model Enquire Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Interactive Enquire Form & Site Visit Booking */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-elevated">
            
            <div className="border-b border-slate-200 pb-5 mb-6">
              <span className="text-[10px] uppercase font-bold text-[#8B6533] tracking-wider block">
                Official Correspondence
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B192C] tracking-tight mt-0.5">
                Dispatch an Executive Inquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Choose your division requirement below. Inquiries receive an official reference code and direct callback within 2–4 business hours.
              </p>
            </div>

            {sent ? (
              <div className="py-10 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-subtle">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span suppressHydrationWarning className="text-xs uppercase font-mono font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded">
                  Ref: {inquiryRef}
                </span>
                <h4 className="text-2xl font-extrabold text-[#0B192C] mt-3 mb-2">
                  Inquiry Dispatched to Executive Desk
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <strong className="text-slate-900">{formState.name}</strong>. Your inquiry regarding <em>{formState.interest}</em> has been assigned to our senior liaison officer in Civil Lines, Gorakhpur.
                </p>
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => {
                    setSent(false);
                    setFormState({
                      name: '',
                      phone: '',
                      email: '',
                      interest: 'Arbit The 25 Commercial Space',
                      spaceRequirement: 'Ground Floor Retail (650 - 1,200 Sq.Ft.)',
                      preferredDate: '',
                      timeSlot: 'Morning (10:00 AM - 01:00 PM)',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-md bg-[#0B192C] text-white hover:bg-[#8B6533] text-xs font-bold transition-all shadow-subtle cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Interest Category Pills */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select Requirement / Division *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Arbit The 25 Commercial Space',
                      'Ground Floor Anchor Showroom',
                      'First Floor Corporate Suite',
                      'Civil & Structural EPC Tender',
                      'Telecom & Utility Infrastructure',
                      'RERA Due Diligence / Legal'
                    ].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        suppressHydrationWarning
                        onClick={() => setFormState({ ...formState, interest: opt })}
                        className={`p-2.5 text-xs text-left font-semibold rounded-md border transition-all cursor-pointer ${
                          formState.interest === opt
                            ? 'bg-[#0B192C] text-white border-[#0B192C] shadow-subtle'
                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      suppressHydrationWarning
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. S.K. Singhania"
                      className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#8B6533] focus:ring-1 focus:ring-[#8B6533] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number (+91) *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-300 bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        suppressHydrationWarning
                        pattern="[0-9]{10}"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                        placeholder="98765 43210"
                        className="w-full bg-slate-50 border border-slate-300 rounded-r-md px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#8B6533] focus:ring-1 focus:ring-[#8B6533] transition-colors font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Floorplate Requirement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Corporate Email Address
                    </label>
                    <input
                      type="email"
                      suppressHydrationWarning
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="executive@enterprise.com"
                      className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#8B6533] focus:ring-1 focus:ring-[#8B6533] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Approx Floorplate Area
                    </label>
                    <select
                      suppressHydrationWarning
                      value={formState.spaceRequirement}
                      onChange={(e) => setFormState({ ...formState, spaceRequirement: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#8B6533] focus:ring-1 focus:ring-[#8B6533] transition-colors"
                    >
                      <option value="Ground Floor Retail (650 - 1,200 Sq.Ft.)">Ground Floor Retail (650 – 1,200 Sq.Ft.)</option>
                      <option value="Anchor Showroom (1,200 - 3,500 Sq.Ft.)">Anchor Showroom (1,200 – 3,500 Sq.Ft.)</option>
                      <option value="Corporate Office Suite (540 - 2,400 Sq.Ft.)">Corporate Office Suite (540 – 2,400 Sq.Ft.)</option>
                      <option value="Full Floor Plate (5,000+ Sq.Ft.)">Entire Commercial Floorplate (5,000+ Sq.Ft.)</option>
                      <option value="Civil EPC Contract Scope">Institutional Civil EPC Scope</option>
                    </select>
                  </div>
                </div>

                {/* Site Inspection Appointment Date & Time Slot */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 space-y-3">
                  <span className="text-[11px] font-bold text-[#0B192C] uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8B6533]" />
                    Optional: Schedule Accompanied Site Inspection (Civil Lines, Gorakhpur)
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Preferred Inspection Date
                      </label>
                      <input
                        type="date"
                        suppressHydrationWarning
                        value={formState.preferredDate}
                        onChange={(e) => setFormState({ ...formState, preferredDate: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded p-2 text-xs text-slate-900 focus:outline-none focus:border-[#8B6533]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Convenient Time Slot
                      </label>
                      <select
                        suppressHydrationWarning
                        value={formState.timeSlot}
                        onChange={(e) => setFormState({ ...formState, timeSlot: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded p-2 text-xs text-slate-900 focus:outline-none focus:border-[#8B6533]"
                      >
                        <option value="Morning (10:00 AM - 01:00 PM)">Morning: 10:00 AM – 01:00 PM</option>
                        <option value="Afternoon (02:00 PM - 04:30 PM)">Afternoon: 02:00 PM – 04:30 PM</option>
                        <option value="Evening (05:00 PM - 07:00 PM)">Evening: 05:00 PM – 07:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Specific Requirements / Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Particulars / Project Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide details regarding sq.ft. area requirements, proposed business profile, or tender scope..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-md p-3 text-sm text-slate-900 focus:outline-none focus:border-[#8B6533] focus:ring-1 focus:ring-[#8B6533] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  suppressHydrationWarning
                  disabled={loading}
                  className="w-full bg-[#0B192C] hover:bg-[#8B6533] text-white font-extrabold py-3.5 px-6 rounded-md transition-all flex items-center justify-center gap-2 shadow-corporate text-sm cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Registering Dispatch...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#D5BE9E]" />
                      <span>Transmit Official Inquiry to Headquarters</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  Strict client privacy maintained under UP-RERA Escrow regulations. No unsolicited third-party solicitations.
                </p>

              </form>
            )}

          </div>

          {/* Right Column (5 cols): Official Office Directory & Strategic Transit Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Branch Selector Tabs */}
            <div className="bg-white rounded-xl border border-slate-200 p-2 shadow-subtle flex items-center gap-1">
              {[
                { id: 'hq', label: 'Corporate HQ' },
                { id: 'site', label: 'Site Experience Centre' },
                { id: 'plant', label: 'Central Plant Yard' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setActiveBranch(tab.id as any)}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer text-center ${
                    activeBranch === tab.id
                      ? 'bg-[#0B192C] text-white shadow-subtle'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Branch Details Card */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-elevated">
              
              {activeBranch === 'hq' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#8B6533] tracking-wider block">
                        MCA Registered Entity
                      </span>
                      <h4 className="text-base font-extrabold text-[#0B192C]">
                        Corporate Headquarters (Gorakhpur)
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      EST. 2010
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-[#F4ECE1] text-[#8B6533] mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-[#0B192C] block">Address:</strong>
                        <span>Hariom Nagar, Civil Lines, Gorakhpur, Uttar Pradesh – 273001, India</span>
                        <div className="text-[11px] text-slate-500 mt-0.5">Landmark: Near City Centre &amp; Civil Lines Chowk</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-[#F4ECE1] text-[#8B6533] mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-[#0B192C] block">Direct Telephony:</strong>
                        <a href="tel:+915512204130" className="font-mono font-bold text-[#0B192C] hover:text-[#8B6533]">
                          +91 (0551) 220-4130 / +91 98390 12525
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-[#F4ECE1] text-[#8B6533] mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-[#0B192C] block">Corporate Mailbox:</strong>
                        <a href="mailto:corporate@arbitinfratel.com" className="font-mono text-[#0B192C] hover:text-[#8B6533]">
                          corporate@arbitinfratel.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeBranch === 'site' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#8B6533] tracking-wider block">
                        Flagship Sales Lounge
                      </span>
                      <h4 className="text-base font-extrabold text-[#0B192C]">
                        Arbit The 25 Experience Center
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-amber-900 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                      ON-SITE
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-[#F4ECE1] text-[#8B6533] mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-[#0B192C] block">Project Coordinates:</strong>
                        <span>Plot 25, Civil Lines Commercial Corridor, Gorakhpur, UP – 273001</span>
                        <div className="text-[11px] text-[#8B6533] font-bold mt-0.5">RERA Reg: UPRERAPRM160411</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-[#F4ECE1] text-[#8B6533] mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-[#0B192C] block">Relationship Manager Hotline:</strong>
                        <a href="tel:+919415216041" className="font-mono font-bold text-[#0B192C] hover:text-[#8B6533]">
                          +91 94152 16041 (Site Liaison)
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-[#F4ECE1] text-[#8B6533] mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-[#0B192C] block">Showroom Hours:</strong>
                        <span>Mon – Sat: 09:30 AM – 07:00 PM IST (Sunday by Booking)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeBranch === 'plant' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#8B6533] tracking-wider block">
                        Heavy Rig &amp; Concrete Depot
                      </span>
                      <h4 className="text-base font-extrabold text-[#0B192C]">
                        Central EPC Operations Yard
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-800 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                      CLASS-A EPC
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-[#F4ECE1] text-[#8B6533] mt-0.5">
                        <HardHat className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-[#0B192C] block">Mechanical Base:</strong>
                        <span>GIDA Industrial Area, Gorakhpur – Lucknow Highway Corridor</span>
                        <div className="text-[11px] text-slate-500 mt-0.5">Captive Schwing Stetter Batching &amp; Vermeer HDD Fleets</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded bg-[#F4ECE1] text-[#8B6533] mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-[#0B192C] block">Tender Cell:</strong>
                        <a href="mailto:epc.tenders@arbitinfratel.com" className="font-mono text-[#0B192C] hover:text-[#8B6533]">
                          epc.tenders@arbitinfratel.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Statutory Footnote Bar */}
              <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-600">
                <div>CIN: <strong className="text-[#0B192C]">U64200UP2010PTC041308</strong></div>
                <div>RERA: <strong className="text-[#0B192C]">UPRERAPRM160411</strong></div>
              </div>

            </div>

            {/* Strategic Transit Landmarks (Jayabharath Proximity Specs) */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-subtle">
              <span className="text-xs font-bold text-[#0B192C] uppercase tracking-wider flex items-center gap-1.5 mb-3">
                <Navigation className="w-4 h-4 text-[#8B6533]" />
                Civil Lines Headquarters Proximity &amp; Connectivity
              </span>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">Gorakhpur Airport (Mahayogi Gorakhnath):</span>
                  <strong className="text-[#0B192C] font-mono">7.5 km (15 mins)</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">Gorakhpur Junction Railway Station:</span>
                  <strong className="text-[#0B192C] font-mono">2.2 km (7 mins)</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">NH-28 / Lucknow-Gorakhpur Highway:</span>
                  <strong className="text-[#0B192C] font-mono">1.8 km (5 mins)</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 font-medium">Civil Lines Chowk &amp; Commercial Hub:</span>
                  <strong className="text-emerald-700 font-bold">200 meters (Immediate)</strong>
                </div>
              </div>
            </div>

            {/* Executive Board Direct Contact Card */}
            <div className="bg-slate-900 text-white p-6 rounded-xl shadow-corporate">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#D5BE9E] block mb-1">
                Board Level Liaison
              </span>
              <h4 className="text-sm font-bold text-white mb-3">
                Direct Secretarial Contacts
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span>Abhishek Agrawal (Director):</span>
                  <span className="font-mono text-emerald-400 font-bold">Strategic Projects</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Anand Kumar Mishra (Director):</span>
                  <span className="font-mono text-amber-400 font-bold">EPC &amp; Civil Works</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
