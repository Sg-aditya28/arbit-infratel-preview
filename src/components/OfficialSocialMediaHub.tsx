'use client';

import React from 'react';
import { ExternalLink, CheckCircle2, Radio, Building2, HardHat, ShieldCheck, Share2 } from 'lucide-react';

const FacebookIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const InstagramIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    />
  </svg>
);

const SOCIAL_UPDATES = [
  {
    id: 'post-1',
    network: 'instagram',
    tag: 'RETAIL LEASING • ARBIT THE 25',
    title: 'Home to Eminent Retail Brands & Luxury Living',
    snippet:
      'Welcoming marquee national retail anchors and corporate suites to Gorakhpur’s premier commercial destination. 18-ft double-height ground atriums with 100% UP-RERA escrow banking assurance.',
    date: 'Official Update',
    badge: 'UPRERAPRJ218427',
    href: 'https://www.instagram.com/arbitinfratel/?hl=en',
    icon: Building2,
  },
  {
    id: 'post-2',
    network: 'facebook',
    tag: 'TELECOM INFRASTRUCTURE O&M',
    title: 'O&M Infrastructure Partner for Altius Network',
    snippet:
      'Engineering and maintaining passive utility corridors, 850+ km of trenchless HDD optical fiber ducting, and 150+ telecom tower foundations with 24/7 technical uptime across Eastern UP.',
    date: 'Network Dispatch',
    badge: 'ALTIUS NETWORK',
    href: 'https://www.facebook.com/arbitinfratel/',
    icon: Radio,
  },
  {
    id: 'post-3',
    network: 'instagram',
    tag: 'CIVIL & STRUCTURAL EPC',
    title: 'Class-A PWD Heavy Infrastructure Deployments',
    snippet:
      'Monolithic concrete pour logistics powered by computerized mobile batching plants (120 m³/hr) and hydraulic rotary piling rigs for bridges, institutional complexes, and roadways.',
    date: 'Site Operations',
    badge: 'CLASS-A PWD',
    href: 'https://www.instagram.com/arbitinfratel/?hl=en',
    icon: HardHat,
  },
  {
    id: 'post-4',
    network: 'facebook',
    tag: 'STATUTORY GOVERNANCE',
    title: 'Verified UP-RERA Promoter & MCA RoC Kanpur Compliant',
    snippet:
      'Permanent promoter registration UPRERAPRM160411 with audited corporate equity disclosures, scheduled bank consortia agreements, and zero-litigation track record since 2010.',
    date: 'Corporate Registry',
    badge: 'UPRERAPRM160411',
    href: 'https://www.facebook.com/arbitinfratel/',
    icon: ShieldCheck,
  },
];

export const OfficialSocialMediaHub: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-stone-200 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#9B7C44] mb-2 flex items-center gap-2">
              <span className="w-6 h-px bg-[#9B7C44]"></span>
              <span>COMMUNITY &amp; DISPATCHES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0B131E] font-normal tracking-tight">
              Official Social Media &amp; Field Updates
            </h2>
            <p className="text-sm text-stone-600 mt-2 font-normal leading-relaxed">
              Stay connected with Arbit Infratel&apos;s real-time commercial leasing announcements, telecom O&amp;M milestones, and site progress directly from our verified channels.
            </p>
          </div>

          {/* Social Follower Direct Strip */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.facebook.com/arbitinfratel/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877F2] hover:bg-[#166fe5] text-white px-5 py-2.5 text-xs font-sans font-bold tracking-wider uppercase inline-flex items-center gap-2 transition-colors shadow-sm"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook • 6.4K+</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href="https://www.instagram.com/arbitinfratel/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white px-5 py-2.5 text-xs font-sans font-bold tracking-wider uppercase inline-flex items-center gap-2 hover:opacity-95 transition-opacity shadow-sm"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram • 2.5K+</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Channel Overview Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#F6F5F2] border border-stone-200 p-4 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center flex-shrink-0">
              <FacebookIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0B131E]">6,400+ Followers</div>
              <div className="text-[11px] text-stone-500 font-mono">@arbitinfratel • Facebook</div>
            </div>
          </div>

          <div className="bg-[#F6F5F2] border border-stone-200 p-4 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E4405F]/10 text-[#E4405F] flex items-center justify-center flex-shrink-0">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0B131E]">2,590+ Followers</div>
              <div className="text-[11px] text-stone-500 font-mono">@arbitinfratel • Instagram</div>
            </div>
          </div>

          <div className="bg-[#F6F5F2] border border-stone-200 p-4 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0B131E]">91+ Published Posts</div>
              <div className="text-[11px] text-stone-500 font-mono">Verified Project Updates</div>
            </div>
          </div>

          <div className="bg-[#F6F5F2] border border-stone-200 p-4 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0B131E]">Civil Lines, Gorakhpur</div>
              <div className="text-[11px] text-stone-500 font-mono">Hariom Nagar • Est. 2010</div>
            </div>
          </div>
        </div>

        {/* 4 Social Stream Update Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_UPDATES.map((post) => {
            const Icon = post.icon;
            const isIg = post.network === 'instagram';
            return (
              <a
                key={post.id}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F6F5F2] border border-stone-200 p-6 flex flex-col justify-between hover:border-[#9B7C44] hover:bg-white transition-all shadow-sm group cursor-pointer"
              >
                <div>
                  {/* Top Meta Strip */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200">
                    <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#9B7C44]">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{post.badge}</span>
                    </span>
                    <span className="text-[10px] text-stone-500 font-mono flex items-center gap-1">
                      {isIg ? (
                        <InstagramIcon className="w-3 h-3 text-[#E4405F]" />
                      ) : (
                        <FacebookIcon className="w-3 h-3 text-[#1877F2]" />
                      )}
                      <span>{isIg ? 'Instagram' : 'Facebook'}</span>
                    </span>
                  </div>

                  <div className="text-[10px] font-mono tracking-wider uppercase text-stone-500 mb-1 font-semibold">
                    {post.tag}
                  </div>

                  <h3 className="text-base font-serif text-[#0B131E] font-bold mb-2.5 leading-snug group-hover:text-[#9B7C44] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {post.snippet}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-200 flex items-center justify-between text-xs font-mono font-semibold text-[#0B131E] group-hover:text-[#9B7C44]">
                  <span>View On {isIg ? 'Instagram' : 'Facebook'}</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
