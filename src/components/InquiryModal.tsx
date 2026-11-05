'use client';

import React, { useState } from 'react';
import { 
  X, 
  Send, 
  User, 
  Phone, 
  Mail, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';
import { InquiryFormData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (data: InquiryFormData) => void;
  preselectedSubject?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
  preselectedSubject = 'Arbit The 25 Commercial Space',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    unitType: 'Commercial Retail / Showroom',
    projectOrInterest: preselectedSubject,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('ARB-INQ-591823');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setTicketRef(`ARB-INQ-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
      onSubmitSuccess(formData);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      unitType: 'Commercial Retail / Showroom',
      projectOrInterest: preselectedSubject,
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full border border-slate-300 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 bg-slate-50 text-[#0B192C] flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F4ECE1] border border-[#D5BE9E] flex items-center justify-center text-[#8B6533]">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#8B6533] font-bold">
                Direct Corporate Desk
              </div>
              <h3 className="text-lg font-bold text-[#0B192C]">
                Arbit Infratel Inquiry Desk
              </h3>
            </div>
          </div>
          <button
            type="button"
            suppressHydrationWarning
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto bg-white">
          {submitted ? (
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#0B192C] mb-2">
                Inquiry Logged Successfully
              </h4>
              <p className="text-sm text-slate-600 mb-4 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. An executive ticket has been dispatched to our Gorakhpur corporate office.
              </p>
              <div suppressHydrationWarning className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs font-mono text-slate-700 max-w-xs mx-auto mb-6">
                Ticket Ref: {ticketRef}
              </div>
              <button
                type="button"
                suppressHydrationWarning
                onClick={handleReset}
                className="bg-[#0B192C] text-white font-semibold px-6 py-2.5 rounded-md hover:bg-[#A37D4C] transition-colors text-sm shadow-subtle cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    required
                    suppressHydrationWarning
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-50 border border-slate-300 rounded-md pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#A37D4C] focus:ring-1 focus:ring-[#A37D4C] transition-colors shadow-subtle"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number (Mobile) *
                </label>
                <div className="flex shadow-subtle">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-slate-300 bg-slate-100 text-slate-600 text-xs font-mono font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    suppressHydrationWarning
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                    placeholder="98765 43210"
                    className="w-full bg-slate-50 border border-slate-300 rounded-r-md px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#A37D4C] focus:ring-1 focus:ring-[#A37D4C] transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="email"
                    suppressHydrationWarning
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-md pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#A37D4C] focus:ring-1 focus:ring-[#A37D4C] transition-colors shadow-subtle"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Inquiry Nature / Division
                </label>
                <select
                  suppressHydrationWarning
                  value={formData.projectOrInterest}
                  onChange={(e) => setFormData({ ...formData, projectOrInterest: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#A37D4C] focus:ring-1 focus:ring-[#A37D4C] transition-colors shadow-subtle"
                >
                  <option value="Arbit The 25 Commercial Space">Arbit The 25 • Commercial / Retail Booking</option>
                  <option value="Civil Engineering & Structural EPC">Civil Engineering &amp; Structural EPC Tender</option>
                  <option value="Telecom & Utility Infrastructure">Telecom Infrastructure (NIC 64200) Works</option>
                  <option value="Commercial & Turnkey Works Contract">Commercial Turnkey Works Contract</option>
                  <option value="Vendor / Subcontractor Pre-qualification">Vendor / Subcontractor Empanelment</option>
                  <option value="Corporate / Board Liaison">Corporate / Board Level Meeting</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Requirements / Message
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding sq.ft. requirements, tender specifications, or location..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-md p-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#A37D4C] focus:ring-1 focus:ring-[#A37D4C] transition-colors resize-none shadow-subtle"
                  ></textarea>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  suppressHydrationWarning
                  disabled={isSubmitting}
                  className="w-full bg-[#0B192C] text-white font-bold py-3 px-4 rounded-md hover:bg-[#A37D4C] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-subtle disabled:opacity-50 text-sm cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Routing to Corporate Desk...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#D5BE9E]" />
                      <span>Submit Corporate Inquiry</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Confidential Corporate Communication • Direct Director Desk</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

