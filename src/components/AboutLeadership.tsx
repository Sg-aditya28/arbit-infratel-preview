'use client';

import React from 'react';
import { 
  Users, 
  Target, 
  Award, 
  MapPin, 
  ShieldCheck, 
  Briefcase, 
  Clock, 
  Compass 
} from 'lucide-react';

export const AboutLeadership: React.FC = () => {
  return (
    <section id="about-us" className="py-20 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F4ECE1] border border-[#D5BE9E] text-[#735025] text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-[#8B6533]" />
            Heritage &amp; Executive Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Built on Structural Integrity, Guided by Vision
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Founded in 2010 in Gorakhpur, Arbit Infratel Private Limited has evolved from specialized telecom tower contracting into one of eastern Uttar Pradesh’s most trusted multi-disciplinary Civil EPC and real estate development enterprises.
          </p>
        </div>

        {/* 2-Column Story & Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column (7 cols): Corporate Story & Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-subtle space-y-4">
              <h3 className="text-xl font-bold text-[#0B192C] flex items-center gap-2">
                <Target className="w-5 h-5 text-[#8B6533]" />
                Purvanchal’s Modern Infrastructure Catalyst
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating under Corporate Identity Number <strong className="text-slate-900 font-mono">U64200UP2010PTC041308</strong>, Arbit Infratel was conceived to bridge the gap between high-velocity civil engineering and stringent compliance standards. Headquartered in Civil Lines, Gorakhpur, the company has deployed engineering assets across Uttar Pradesh for both institutional state authorities and commercial private clients.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                With deep heritage in telecom infrastructure (NIC 64200), we expanded our capabilities into commercial grade-A real estate developments and turnkey municipal EPC contracts. Every development is executed with 100% owned plant &amp; machinery, computerized concrete batching, and zero-compromise safety protocols.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-subtle">
                <div className="w-9 h-9 rounded bg-[#F4ECE1] text-[#8B6533] border border-[#D5BE9E] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0B192C] mb-1">RERA Rigor</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every sq. ft. is registered, titled, and backed by escrow banking safeguards.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-subtle">
                <div className="w-9 h-9 rounded bg-[#F4ECE1] text-[#8B6533] border border-[#D5BE9E] flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0B192C] mb-1">Engineering Precision</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Zone IV seismic compliance, computer-batched concrete, and zero LTI.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-subtle">
                <div className="w-9 h-9 rounded bg-[#F4ECE1] text-[#8B6533] border border-[#D5BE9E] flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0B192C] mb-1">15-Year Legacy</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Over a decade and a half of verified on-time project completions across UP.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Board of Directors Profile Cards (Light Aesthetic) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white text-[#0F172A] p-6 sm:p-7 rounded-xl border border-slate-200 shadow-subtle">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F4ECE1] border border-[#D5BE9E] text-[#735025] text-xs font-bold uppercase mb-4">
                <Briefcase className="w-3.5 h-3.5 text-[#8B6533]" />
                Board of Directors
              </div>
              <h3 className="text-xl font-bold text-[#0B192C] mb-4">
                Executive Leadership
              </h3>

              {/* Director 1: Anand Kumar Mishra */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg mb-4 hover:border-[#A37D4C]/60 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#0B192C] border-2 border-[#A37D4C] flex items-center justify-center text-[#D5BE9E] font-bold text-base flex-shrink-0">
                    AM
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0B192C]">
                      Anand Kumar Mishra
                    </h4>
                    <p className="text-xs text-[#8B6533] font-semibold">
                      Director &amp; Co-Founder
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Oversees site operations, plant &amp; heavy machinery logistics, procurement, and EPC contract engineering. Over 18+ years of technical experience in foundation engineering and telecom network rollouts.
                </p>
                <div className="mt-2 text-[10px] text-slate-400 font-mono">
                  DIN: Active • MCA Form DIR-12 Compliant
                </div>
              </div>

              {/* Director 2: Abhishek Agrawal */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg hover:border-[#A37D4C]/60 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#0B192C] border-2 border-[#A37D4C] flex items-center justify-center text-[#D5BE9E] font-bold text-base flex-shrink-0">
                    AA
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0B192C]">
                      Abhishek Agrawal
                    </h4>
                    <p className="text-xs text-[#8B6533] font-semibold">
                      Director &amp; Co-Founder
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Leads corporate strategy, statutory project acquisition, municipal liaison, and institutional real estate development. Instrumental in bringing the landmark &quot;Arbit The 25&quot; project from blueprint to reality.
                </p>
                <div className="mt-2 text-[10px] text-slate-400 font-mono">
                  DIN: Active • MCA Form DIR-12 Compliant
                </div>
              </div>

              {/* Head Office Anchor */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-[#8B6533] flex-shrink-0 mt-0.5" />
                <span>
                  Registered Corporate Headquarters: <strong className="text-[#0B192C]">Hariom Nagar, Civil Lines, Gorakhpur, UP - 273001</strong>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Milestone Timeline Ribbon */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-subtle">
          <h3 className="text-sm font-bold text-[#0B192C] uppercase tracking-wider mb-6 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#8B6533]" />
            Corporate Growth Trajectory (2010 – 2026)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-xl font-extrabold text-[#8B6533] font-mono">2010</span>
              <h5 className="text-xs font-bold text-[#0B192C] mt-1">Incorporation</h5>
              <p className="text-[11px] text-slate-500 mt-1">
                Incorporated in Gorakhpur as a specialized infrastructure enterprise (RoC Kanpur).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-xl font-extrabold text-[#8B6533] font-mono">2014</span>
              <h5 className="text-xs font-bold text-[#0B192C] mt-1">Telecom Expansion</h5>
              <p className="text-[11px] text-slate-500 mt-1">
                Completed 100+ Ground-Based Tower foundations and OFC ducting projects across UP East.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-xl font-extrabold text-[#8B6533] font-mono">2018</span>
              <h5 className="text-xs font-bold text-[#0B192C] mt-1">UP-RERA Promoter</h5>
              <p className="text-[11px] text-slate-500 mt-1">
                Granted official promoter registration (UPRERAPRM160411) under new statutory norms.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-xl font-extrabold text-[#8B6533] font-mono">2022</span>
              <h5 className="text-xs font-bold text-[#0B192C] mt-1">Civil EPC Scale</h5>
              <p className="text-[11px] text-slate-500 mt-1">
                Surpassed 2 million sq. ft. of structural civil construction with automated plant fleet.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#F4ECE1] border-2 border-[#A37D4C] shadow-subtle">
              <span className="text-xl font-extrabold text-[#735025] font-mono">2024-26</span>
              <h5 className="text-xs font-bold text-[#0B192C] mt-1">Arbit The 25</h5>
              <p className="text-[11px] text-slate-700 mt-1 font-medium">
                Execution of flagship Grade-A commercial and retail development in Gorakhpur.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
