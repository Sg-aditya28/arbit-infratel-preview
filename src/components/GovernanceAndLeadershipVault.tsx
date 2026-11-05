'use client';

import React, { useState } from 'react';
import { ShieldCheck, Download, CheckCircle2, Scale } from 'lucide-react';

interface StatutoryRecord {
  id: string;
  authority: string;
  title: string;
  identifier: string;
  date: string;
  status: string;
  scope: string;
}

const STATUTORY_RECORDS: StatutoryRecord[] = [
  {
    id: 'cin-mca',
    authority: 'MINISTRY OF CORPORATE AFFAIRS (ROC KANPUR)',
    title: 'Certificate of Corporate Incorporation',
    identifier: 'CIN: U64200UP2010PTC041308',
    date: '08 July 2010',
    status: 'ACTIVE & ANNUAL COMPLIANT',
    scope: 'Incorporated under the Companies Act with authorized capital for commercial real estate development and turnkey civil EPC.',
  },
  {
    id: 'rera-promoter',
    authority: 'UP REAL ESTATE REGULATORY AUTHORITY',
    title: 'Real Estate Promoter Registration',
    identifier: 'PROMOTER ID: UPRERAPRM160411',
    date: '14 November 2018',
    status: 'PERMANENT CLEARANCE',
    scope: 'Official regulatory certification to promote, execute, and market commercial real estate developments in Uttar Pradesh.',
  },
  {
    id: 'pwd-epc',
    authority: 'PUBLIC WORKS DEPARTMENT (GOVT. OF UP)',
    title: 'Class-A Registered Civil Contractor',
    identifier: 'PWD / CE / CLASS-A / 2018-GOR',
    date: 'Current Fiscal Renewal',
    status: 'CLASS-A TENDER RATED',
    scope: 'Certified high-solvency contractor for state highways, heavy structural bridges, and public infrastructure works.',
  },
  {
    id: 'telecom-nic',
    authority: 'CENTRAL REGISTRIES & MINISTRY OF COMMERCE',
    title: 'National Industrial Classification (NIC 64200)',
    identifier: 'NIC CODE: 64200 / PASSIVE INFRA',
    date: 'Est. 2010',
    status: 'OFFICIAL CLASSIFICATION',
    scope: 'Registered classification for telecommunications infrastructure, optical fiber corridors, and passive utility grids.',
  },
];

export const GovernanceAndLeadershipVault: React.FC = () => {
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);

  const handleDownloadDoc = (record: StatutoryRecord) => {
    const content = `ARBIT INFRATEL PRIVATE LIMITED\nOFFICIAL STATUTORY RECORD VERIFICATION\n\nAUTHORITY: ${record.authority}\nDOCUMENT TITLE: ${record.title}\nREGISTRATION CODE: ${record.identifier}\nISSUANCE DATE: ${record.date}\nREGULATORY STATUS: ${record.status}\nREGISTERED SCOPE: ${record.scope}\n\nREGISTERED OFFICE:\nHariom Nagar, Civil Lines, Gorakhpur, Uttar Pradesh - 273001\nCIN: U64200UP2010PTC041308 | UP-RERA: UPRERAPRM160411\n\nVerified via Board Secretariat.`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Arbit-Infratel-${record.id}-Statutory-Record.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccessId(record.id);
    setTimeout(() => setDownloadSuccessId(null), 3000);
  };

  return (
    <section id="statutory-vault" className="py-16 sm:py-24 bg-[#F6F5F2] text-[#0B131E] border-b border-stone-200 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 mb-12 border-b border-stone-200 gap-4">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#9B7C44] mb-2">
              04 // STATUTORY RECORDS &amp; ESCROW PROTOCOLS
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-normal tracking-tight">
              Corporate Governance &amp; Statutory Vault
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-white border border-stone-300 px-4 py-2 text-xs font-mono text-emerald-800 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>100% ESCROW BANKING • ZERO LITIGATION</span>
          </div>
        </div>

        {/* 12-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (5 Cols): Leadership Profile Cards & HSE Commitment */}
          <div id="leadership" className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono tracking-wider text-[#9B7C44] uppercase font-bold mb-1">
                BOARD OF DIRECTORS
              </div>
              <h3 className="text-2xl font-serif text-[#0B131E] font-normal mb-1">
                Executive Leadership
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Anchoring Arbit Infratel&apos;s 16-year growth with fiscal prudence, transparency, and engineering quality.
              </p>
            </div>

            {/* Director 1 Card */}
            <div className="bg-white border border-stone-200 p-6 shadow-sm hover:border-[#B8965A] transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[10px] font-mono tracking-wider text-[#9B7C44] uppercase font-bold">
                    FOUNDING DIRECTOR
                  </div>
                  <h4 className="text-xl font-serif text-[#0B131E] font-bold mt-0.5">
                    Mr. Abhishek Agrawal
                  </h4>
                  <div className="text-xs text-stone-500 font-sans mt-0.5">
                    Director, Arbit Infratel Private Limited
                  </div>
                </div>
                <div className="w-10 h-10 bg-stone-100 border border-stone-300 text-[#0B131E] flex items-center justify-center font-serif font-bold text-base">
                  AA
                </div>
              </div>
              <p className="text-xs text-stone-600 mt-4 leading-relaxed border-t border-stone-100 pt-3 font-normal">
                Oversees corporate strategy, banking consortia relations, and flagship commercial developments including <em>Arbit The 25</em> in Gorakhpur.
              </p>
            </div>

            {/* Director 2 Card */}
            <div className="bg-white border border-stone-200 p-6 shadow-sm hover:border-[#B8965A] transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[10px] font-mono tracking-wider text-[#9B7C44] uppercase font-bold">
                    TECHNICAL DIRECTOR
                  </div>
                  <h4 className="text-xl font-serif text-[#0B131E] font-bold mt-0.5">
                    Mr. Anand Kumar Mishra
                  </h4>
                  <div className="text-xs text-stone-500 font-sans mt-0.5">
                    Director, Arbit Infratel Private Limited
                  </div>
                </div>
                <div className="w-10 h-10 bg-stone-100 border border-stone-300 text-[#0B131E] flex items-center justify-center font-serif font-bold text-base">
                  AM
                </div>
              </div>
              <p className="text-xs text-stone-600 mt-4 leading-relaxed border-t border-stone-100 pt-3 font-normal">
                Directs civil EPC execution, plant and machinery deployment, and municipal infrastructure works across Uttar Pradesh.
              </p>
            </div>

            {/* HSE & Quality Statement */}
            <div className="border-l-2 border-[#9B7C44] bg-white p-5 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#9B7C44] mb-1">
                <Scale className="w-4 h-4" />
                <span>ZERO-HARM HSE POLICY</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                Enforcing strict site safety protocols, lab-certified concrete testing, and scheduled statutory compliance audits across all active works.
              </p>
            </div>
          </div>

          {/* Right Column (7 Cols): Ledger Cards */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono tracking-wider text-[#9B7C44] uppercase mb-1">
                  OFFICIAL FILINGS
                </div>
                <h3 className="text-2xl font-serif text-[#0B131E] font-normal">
                  Verifiable Corporate Credentials
                </h3>
              </div>
              <span className="text-[11px] font-mono text-stone-500">
                AUDITED RECORDS
              </span>
            </div>

            {/* Ledger Cards */}
            <div className="space-y-4">
              {STATUTORY_RECORDS.map((rec) => {
                const isDownloaded = downloadSuccessId === rec.id;

                return (
                  <div
                    key={rec.id}
                    className="bg-white border border-stone-200 p-6 shadow-sm hover:border-[#B8965A] transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono tracking-wider uppercase text-[#9B7C44] font-bold">
                          {rec.authority}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5">
                          {rec.status}
                        </span>
                      </div>

                      <h4 className="text-lg font-serif text-[#0B131E] font-bold mb-1">
                        {rec.title}
                      </h4>

                      <div className="bg-stone-100 border border-stone-200 px-3 py-1 font-mono text-xs text-[#0B131E] font-bold inline-block mb-3">
                        {rec.identifier}
                      </div>

                      <p className="text-xs text-stone-600 leading-relaxed mb-4 font-normal">
                        {rec.scope}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
                      <span className="text-stone-500">Date: {rec.date}</span>
                      
                      <button
                        type="button"
                        suppressHydrationWarning
                        onClick={() => handleDownloadDoc(rec)}
                        className="bg-[#0B131E] hover:bg-[#B8965A] text-white px-4 py-2 text-[11px] font-mono uppercase tracking-wider font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        {isDownloaded ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span>RECORD VERIFIED</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5 text-[#B8965A]" />
                            <span>DOWNLOAD FILING</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Registered Headquarters Footnote */}
            <div className="mt-6 bg-white border border-stone-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-600 font-mono gap-2 shadow-sm">
              <span>REGISTERED OFFICE: HARIOM NAGAR, CIVIL LINES, GORAKHPUR</span>
              <span className="text-[#9B7C44] font-bold">ROC KANPUR REGISTERED</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
