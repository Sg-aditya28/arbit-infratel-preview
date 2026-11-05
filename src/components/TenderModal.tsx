'use client';

import React from 'react';
import { EPCCapability } from '../types';
import { 
  X, 
  FileSpreadsheet, 
  Truck, 
  ShieldCheck, 
  CheckCircle, 
  Building2, 
  Layers, 
  Download, 
  Send,
  Award,
  HardHat
} from 'lucide-react';

interface TenderModalProps {
  capability: EPCCapability | null;
  onClose: () => void;
  onDownloadDossier: (capTitle: string) => void;
  onContactTenderDesk: (capTitle: string) => void;
}

export const TenderModal: React.FC<TenderModalProps> = ({
  capability,
  onClose,
  onDownloadDossier,
  onContactTenderDesk,
}) => {
  if (!capability) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full border border-slate-300 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-5 bg-slate-50 text-[#0B192C] flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#F4ECE1] border border-[#D5BE9E] text-[#8B6533]">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#8B6533] font-bold">
                Tender Pre-Qualification Dossier
              </div>
              <h3 className="text-lg font-bold text-[#0B192C]">
                {capability.title}
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

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate-700 bg-white">
          
          {/* Executive Overview Banner */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Execution Capability
              </div>
              <div className="text-lg font-extrabold text-[#0B192C]">
                {capability.subtitle}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Statutory Promoter: Arbit Infratel Pvt. Ltd. • Gorakhpur, UP
              </div>
            </div>
            <div className="bg-white border border-slate-200 px-4 py-2 rounded text-center sm:text-right flex-shrink-0">
              <div className="text-xl font-mono font-bold text-[#8B6533]">
                {capability.metric}
              </div>
              <div className="text-[10px] text-slate-500 uppercase font-semibold">
                {capability.metricLabel}
              </div>
            </div>
          </div>

          {/* Plant & Heavy Machinery Equipment Schedule */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#0B192C] uppercase tracking-wider mb-3">
              <Truck className="w-4 h-4 text-[#8B6533]" />
              <span>Dedicated Plant &amp; Machinery Fleet (100% Owned)</span>
            </div>
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 divide-y divide-slate-200">
              {capability.machinery.map((item, idx) => (
                <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications & Norms Grid */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#0B192C] uppercase tracking-wider mb-3">
              <HardHat className="w-4 h-4 text-[#8B6533]" />
              <span>Statutory QA/QC &amp; Safety Parameters</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capability.specs.map((sp, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-slate-200 bg-white">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                    {sp.label}
                  </span>
                  <span className="text-sm font-bold text-[#0B192C] mt-0.5 block">
                    {sp.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Institutional Client Reference Footprint */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#0B192C] uppercase tracking-wider mb-3">
              <Award className="w-4 h-4 text-[#8B6533]" />
              <span>Target Works &amp; Client Footprint</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {capability.keyClients.map((client, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500">
            Official Pre-Qualification Sheet (Ref: ARB-PQ-{capability.category.toUpperCase()}-2025)
          </div>
          <div className="flex items-center gap-3 justify-end">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => onDownloadDossier(capability.title)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded border border-slate-300 text-slate-700 bg-white hover:bg-slate-100 transition-colors shadow-subtle cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#8B6533]" />
              <span>Download PDF Dossier</span>
            </button>

            <button
              type="button"
              suppressHydrationWarning
              onClick={() => {
                onClose();
                onContactTenderDesk(capability.title);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded bg-[#0B192C] text-white hover:bg-[#A37D4C] transition-colors shadow-subtle cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#D5BE9E]" />
              <span>Initiate Tender Inquiry</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

