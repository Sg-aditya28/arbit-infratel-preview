'use client';

import React from 'react';
import { 
  Building2, 
  Calendar, 
  Layers, 
  ShieldCheck, 
  HardHat, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';

interface StatItem {
  id: string;
  metric: string;
  unit?: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  badge?: string;
}

const STATS: StatItem[] = [
  {
    id: 'legacy',
    metric: '15+',
    unit: 'Years',
    label: 'Execution Legacy',
    sublabel: 'Est. 2010 in Gorakhpur, UP',
    icon: <Calendar className="w-5 h-5 text-[#8B6533]" />,
    badge: 'EST. 2010'
  },
  {
    id: 'area',
    metric: '2.5M+',
    unit: 'Sq.Ft.',
    label: 'Developed & Built',
    sublabel: 'Commercial & Civil Complexes',
    icon: <Building2 className="w-5 h-5 text-[#8B6533]" />,
    badge: 'GRADE-A'
  },
  {
    id: 'telecom',
    metric: '150+',
    unit: 'Sites',
    label: 'Telecom & Utility Works',
    sublabel: '850+ km HDD Trenchless Ducting',
    icon: <Layers className="w-5 h-5 text-[#8B6533]" />,
    badge: 'NIC 64200'
  },
  {
    id: 'rera',
    metric: '100%',
    unit: 'Compliant',
    label: 'RERA Escrow Banking',
    sublabel: 'Promoter: UPRERAPRM160411',
    icon: <ShieldCheck className="w-5 h-5 text-[#8B6533]" />,
    badge: 'UP-RERA'
  },
  {
    id: 'epc',
    metric: 'CLASS-A',
    unit: 'PWD',
    label: 'Govt Works Status',
    sublabel: 'Highway Bridges & Civil EPC',
    icon: <HardHat className="w-5 h-5 text-[#8B6533]" />,
    badge: 'REGISTERED'
  }
];

export const MilestoneStats: React.FC<{ variant?: 'light' | 'card' }> = ({ variant = 'light' }) => {
  return (
    <div className="w-full">
      {/* Signature Jayabharath Counting & Milestones Matrix */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-elevated p-6 sm:p-8">
        
        {/* Top Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-[#0B192C] uppercase tracking-wider">
              Arbit Infratel Enterprise Milestones &amp; Track Record
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Audited Statutory Data • MCA ROC Kanpur Verified</span>
          </div>
        </div>

        {/* 5-Column Jayabharath Counting Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {STATS.map((stat, idx) => (
            <div 
              key={stat.id} 
              className={`flex flex-col justify-between group ${
                idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#F4ECE1] border border-[#D5BE9E] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {stat.icon}
                  </div>
                  {stat.badge && (
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#735025] bg-[#F4ECE1] px-2 py-0.5 rounded">
                      {stat.badge}
                    </span>
                  )}
                </div>

                {/* Big Bold Stat Counter */}
                <div className="flex items-baseline gap-1 my-1">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] tracking-tight group-hover:text-[#8B6533] transition-colors">
                    {stat.metric}
                  </span>
                  {stat.unit && (
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {stat.unit}
                    </span>
                  )}
                </div>

                <div className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight leading-snug">
                  {stat.label}
                </div>
              </div>

              <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed font-normal">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

