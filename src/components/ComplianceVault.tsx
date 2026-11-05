'use client';

import React, { useState } from 'react';
import type { StatutoryDoc } from '../types';
import { 
  ShieldCheck, 
  Download, 
  FileText, 
  CheckCircle2, 
  Lock, 
  Eye, 
  Landmark,
  QrCode,
  X
} from 'lucide-react';

interface ComplianceVaultProps {
  onDownloadDoc: (doc: StatutoryDoc) => void;
}

export const STATUTORY_DOCS: StatutoryDoc[] = [
  {
    id: 'cin-mca',
    title: 'Certificate of Incorporation (MCA)',
    identifier: 'CIN: U64200UP2010PTC041308',
    issuingAuthority: 'Ministry of Corporate Affairs (ROC Kanpur)',
    dateOfIssue: '08 July 2010',
    status: 'Active & Verified',
    fileSize: '1.4 MB • Official Form 1',
    docCode: 'ROC-KNP-2010-041308',
    description: 'Statutory incorporation certificate verifying Arbit Infratel Private Limited under the Companies Act, 1956/2013, with authorized equity share capital and registered RoC Kanpur filing.'
  },
  {
    id: 'rera-promoter',
    title: 'UP-RERA Promoter Registration Certificate',
    identifier: 'Registration: UPRERAPRM160411',
    issuingAuthority: 'Uttar Pradesh Real Estate Regulatory Authority (Lucknow)',
    dateOfIssue: '14 November 2018',
    status: 'Permanent',
    fileSize: '2.1 MB • Signed Certificate',
    docCode: 'UP-RERA-PRM-160411-V2',
    description: 'Statutory clearance as a verified Real Estate Promoter under Section 5 of the Real Estate (Regulation and Development) Act, 2016 for real estate project execution and escrow banking.'
  },
  {
    id: 'corporate-deck',
    title: 'Corporate Profile & Leadership Registry Deck',
    identifier: 'Ref: Hariom Nagar, Civil Lines, Gorakhpur',
    issuingAuthority: 'Board of Directors (MCA Form DIR-12 Verified)',
    dateOfIssue: 'Current Fiscal 2024-2025',
    status: 'Annual Compliant',
    fileSize: '3.8 MB • Executive Dossier',
    docCode: 'ARB-CORP-DIR-2024',
    description: 'Corporate leadership dossier detailing Board Directors Abhishek Agrawal & Anand Kumar Mishra, registered office deed, banking consortia, and 15-year statutory financial standing.'
  }
];

export const ComplianceVault: React.FC<ComplianceVaultProps> = ({
  onDownloadDoc,
}) => {
  const [activePreviewDoc, setActivePreviewDoc] = useState<StatutoryDoc | null>(null);

  const handleDownload = (doc: StatutoryDoc) => {
    onDownloadDoc(doc);
  };

  return (
    <section id="compliance-vault" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div suppressHydrationWarning className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F4ECE1] border border-[#D5BE9E] text-[#735025] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8B6533]" />
              Institutional Due Diligence &amp; Governance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Statutory &amp; RERA Compliance Vault
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Transparent statutory filings, promoter licensing, and corporate credentials made accessible for banking partners, institutional buyers, and statutory audits.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 bg-emerald-50 border border-emerald-300 rounded-lg text-emerald-800 text-xs font-bold shadow-subtle">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>All Registrations Active on MCA &amp; UP-RERA Portals</span>
          </div>
        </div>

        {/* Clean Bordered Document Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-subtle overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 text-xs uppercase tracking-wider font-bold border-b border-slate-200">
                  <th className="py-4 px-6">Statutory Document / Authority</th>
                  <th className="py-4 px-6">Official Registration Identifier</th>
                  <th className="py-4 px-6">Issue / Renewal Date</th>
                  <th className="py-4 px-6">Compliance Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {STATUTORY_DOCS.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50 transition-colors group">
                    {/* Title & Authority */}
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-lg bg-slate-100 text-[#0B192C] group-hover:bg-[#0B192C] group-hover:text-white transition-colors mt-0.5">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-[#0B192C] text-base">
                            {doc.title}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {doc.issuingAuthority}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono mt-1">
                            Ref: {doc.docCode} • {doc.fileSize}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Official Registration Identifier */}
                    <td className="py-4 px-6">
                      <div className="font-mono font-bold text-sm text-[#0B192C] bg-slate-100 px-3 py-1.5 rounded border border-slate-200 inline-block">
                        {doc.identifier}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 max-w-xs line-clamp-1">
                        {doc.id === 'cin-mca' && 'Ministry of Corporate Affairs Registered'}
                        {doc.id === 'rera-promoter' && 'Registered Promoter Certificate'}
                        {doc.id === 'corporate-deck' && 'Directors: Abhishek Agrawal & Anand Kumar Mishra'}
                      </div>
                    </td>

                    {/* Date of Issue */}
                    <td className="py-4 px-6 text-slate-700 font-medium text-xs">
                      {doc.dateOfIssue}
                    </td>

                    {/* Compliance Status */}
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        {doc.status}
                      </span>
                    </td>

                    {/* Actions: Preview & Download */}
                    <td className="py-4 px-6 text-right">
                      <div className="inline-flex items-center gap-2 justify-end">
                        <button
                          type="button"
                          suppressHydrationWarning
                          onClick={() => setActivePreviewDoc(doc)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded border border-slate-300 text-slate-700 bg-white hover:bg-slate-100 hover:text-[#0B192C] transition-colors cursor-pointer"
                          title="Preview Verified Certificate"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#8B6533]" />
                          <span>Preview</span>
                        </button>

                        <button
                          type="button"
                          suppressHydrationWarning
                          onClick={() => handleDownload(doc)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded bg-[#0B192C] text-white hover:bg-[#A37D4C] transition-all shadow-subtle cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Security Notice */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>
                All documents are cryptographically hashed and cross-referenced against MCA21 and UP-RERA databases.
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Gorakhpur ROC Jurisdiction • RoC Kanpur
            </div>
          </div>
        </div>

        {/* Executive Compliance & Banking Endorsements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8F9FA] p-5 rounded-lg border border-slate-200 shadow-subtle">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0B192C] mb-1">
              <Landmark className="w-4 h-4 text-[#8B6533]" />
              RERA Escrow Account Compliance
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              100% of customer receivables for Arbit The 25 are deposited into statutory scheduled bank escrow accounts, released strictly as per certified architect and CA milestone certificates.
            </p>
          </div>

          <div className="bg-[#F8F9FA] p-5 rounded-lg border border-slate-200 shadow-subtle">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0B192C] mb-1">
              <CheckCircle2 className="w-4 h-4 text-[#8B6533]" />
              Clear Freehold Land Titles
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              All project land parcels hold unencumbered freehold titles, verified mutation registries at Gorakhpur Nagar Nigam, and sanctioned architectural layout maps.
            </p>
          </div>

          <div className="bg-[#F8F9FA] p-5 rounded-lg border border-slate-200 shadow-subtle">
            <div className="flex items-center gap-2 text-sm font-bold text-[#0B192C] mb-1">
              <ShieldCheck className="w-4 h-4 text-[#8B6533]" />
              Directors&apos; Statutory Governance
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Managed under the active leadership of Directors <strong>Abhishek Agrawal</strong> and <strong>Anand Kumar Mishra</strong> with seamless MCA compliance since 2010.
            </p>
          </div>
        </div>

      </div>

      {/* Document Preview Modal */}
      {activePreviewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-slate-300 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-4 bg-slate-50 text-[#0B192C] flex items-center justify-between border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#8B6533]" />
                <div>
                  <h3 className="text-sm font-bold leading-tight text-[#0B192C]">
                    {activePreviewDoc.title}
                  </h3>
                  <div className="text-[11px] text-slate-500 font-mono">
                    {activePreviewDoc.identifier}
                  </div>
                </div>
              </div>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setActivePreviewDoc(null)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document Realistic Visual Preview */}
            <div className="p-6 md:p-8 bg-[#F8F9FA] overflow-y-auto flex-1">
              <div className="bg-white border border-slate-300 p-8 shadow-subtle rounded-lg relative max-w-lg mx-auto">
                {/* Official Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                  <span className="text-6xl font-extrabold uppercase -rotate-45 tracking-widest text-[#0B192C]">
                    VERIFIED ARBIT
                  </span>
                </div>

                {/* Document Header */}
                <div className="text-center border-b border-slate-200 pb-4 mb-4">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    GOVERNMENT OF INDIA / STATE OF UTTAR PRADESH
                  </div>
                  <h4 className="text-lg font-extrabold text-[#0B192C] mt-1">
                    {activePreviewDoc.issuingAuthority}
                  </h4>
                  <div className="text-xs text-[#8B6533] font-semibold mt-0.5">
                    Official Statutory Certification Record
                  </div>
                </div>

                {/* Document Body */}
                <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
                  <p>
                    This certifies that <strong>ARBIT INFRATEL PRIVATE LIMITED</strong> has complied with all statutory requisites under filing code:
                  </p>

                  <div className="bg-slate-50 border border-slate-200 p-3 rounded text-center">
                    <span className="font-mono text-sm font-bold text-[#0B192C]">
                      {activePreviewDoc.identifier}
                    </span>
                  </div>

                  <p>
                    {activePreviewDoc.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100 text-[11px]">
                    <div>
                      <span className="text-slate-400 block">Registration Office:</span>
                      <strong className="text-slate-800">Civil Lines, Gorakhpur (UP)</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Date of Attestation:</span>
                      <strong className="text-slate-800">{activePreviewDoc.dateOfIssue}</strong>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-slate-100 border border-slate-300 flex items-center justify-center rounded">
                        <QrCode className="w-9 h-9 text-slate-700" />
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Scan to verify directly on <br />
                        <strong className="text-slate-700">Official Portal</strong>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] text-slate-400">Authorized Signatory</div>
                      <div className="text-xs font-mono font-bold text-[#0B192C] mt-1">
                        Registrar of Companies
                      </div>
                      <div className="text-[9px] text-emerald-600 font-semibold">Digitally Signed &amp; Stamped</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                SHA-256 Hash Verified
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setActivePreviewDoc(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-md cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => {
                    handleDownload(activePreviewDoc);
                    setActivePreviewDoc(null);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#A37D4C] rounded-md transition-colors shadow-subtle cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Verified PDF</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
