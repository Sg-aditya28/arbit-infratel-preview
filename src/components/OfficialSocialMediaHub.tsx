'use client';

import React, { useState } from 'react';
import { Building2, MapPin, CheckCircle2, ShieldCheck, Award, Sparkles } from 'lucide-react';

interface ProjectPost {
  id: string;
  image: string;
  location: string;
  tag: string;
  title: string;
  snippet: string;
  badge: string;
}

const ON_GROUND_POSTS: ProjectPost[] = [
  {
    id: 'westside-arbit34',
    image: '/arbit-infratel-preview/social/post_6.jpg',
    location: 'Gorakhpur, UP',
    tag: 'ARBIT 34 • FLAGSHIP RETAIL',
    title: 'Gorakhpur’s Biggest Westside Store',
    snippet:
      'From vision to reality — proud to bring the new Westside store to life at Arbit 34. A landmark commercial development the whole city has been waiting for.',
    badge: 'Arbit 34 Landmark',
  },
  {
    id: 'reliance-arbit36',
    image: '/arbit-infratel-preview/social/post_1.jpg',
    location: 'Gorakhnath, Gorakhpur',
    tag: 'ARBIT 36 • COMMERCIAL CENTER',
    title: 'Reliance Fashion Factory Now Open',
    snippet:
      'Rooted in our traditions with the promise of delivering enduring value. Reliance Fashion Factory is now operational at Arbit 36, Gorakhnath.',
    badge: 'Arbit 36 Center',
  },
  {
    id: 'metro-vibhuti',
    image: '/arbit-infratel-preview/social/post_3.jpg',
    location: 'Golghar, Gorakhpur',
    tag: 'ARBIT VIBHUTI • GOLGHAR',
    title: 'Metro Shoes at Arbit Vibhuti',
    snippet:
      'Where national brands belong and business thrives. 35+ projects strong and counting across Gorakhpur and Eastern Uttar Pradesh.',
    badge: 'Arbit Vibhuti',
  },
  {
    id: 'vmart-opening',
    image: '/arbit-infratel-preview/social/post_4.jpg',
    location: 'Civil Lines Corridor',
    tag: 'RETAIL ANCHOR • ARBIT PREMISES',
    title: 'V-Mart Flagship Store Inauguration',
    snippet:
      'Bringing leading fashion, value, and premium retail footfall together under one roof at Arbit Infratel commercial premises.',
    badge: 'Retail Anchor',
  },
  {
    id: 'cm-blessings',
    image: '/arbit-infratel-preview/social/post_5.jpg',
    location: 'Gorakhpur, Uttar Pradesh',
    tag: 'LEADERSHIP & CIVIC RECOGNITION',
    title: 'Blessings from Hon’ble CM Yogi Adityanath Ji',
    snippet:
      'Our Director had the distinct honor of meeting Hon’ble Chief Minister Shri Yogi Adityanath Ji, receiving his gracious guidance for infrastructure delivery in Eastern UP.',
    badge: 'Civic Leadership',
  },
  {
    id: 'bhoomi-pujan-38',
    image: '/arbit-infratel-preview/social/post_2.jpg',
    location: 'Medical College Road, Gorakhpur',
    tag: '38TH PROJECT • GROUNDBREAKING',
    title: 'Bhumi Pujan on Medical College Road',
    snippet:
      'With auspicious blessings and local tradition, groundbreaking for our 38th commercial landmark project on Medical College Road.',
    badge: 'Project #38',
  },
];

export const OfficialSocialMediaHub: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filteredPosts =
    selectedTag === 'all'
      ? ON_GROUND_POSTS
      : ON_GROUND_POSTS.filter((p) => p.tag.toLowerCase().includes(selectedTag.toLowerCase()));

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-stone-200 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Section Header: Simple, Clean & Grounded in Gorakhpur */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-stone-200 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#9B7C44] mb-1.5 flex items-center gap-2">
              <span className="w-5 h-px bg-[#9B7C44]"></span>
              <span>ON-GROUND DELIVERIES • GORAKHPUR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#0B131E] font-normal tracking-tight">
              Real Milestones &amp; Brand Destinations
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 font-normal leading-relaxed">
              38+ landmark projects delivered across Gorakhpur — home to Westside, Reliance Fashion Factory, Metro Shoes, and V-Mart.
            </p>
          </div>

          {/* Simple On-Site Stat Pills (Non-Clickable, Clean) */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#F6F5F2] border border-stone-200 text-[#0B131E] px-3.5 py-1.5 text-xs font-mono font-bold">
              38+ Projects Strong
            </span>
            <span className="bg-[#F6F5F2] border border-stone-200 text-[#0B131E] px-3.5 py-1.5 text-xs font-mono font-bold">
              Est. 2010 • Gorakhpur
            </span>
          </div>
        </div>

        {/* 6 Native On-Ground Photo Cards (Non-Redirectable) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#F6F5F2] border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#9B7C44] transition-all"
            >
              {/* Authentic Photo Portrayal */}
              <div className="relative h-48 sm:h-52 w-full bg-stone-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center filter contrast-[1.03]"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#0B131E]/90 text-white text-[10px] font-mono px-2.5 py-1 border border-white/20 uppercase">
                  {post.badge}
                </div>
                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-stone-800 text-[10px] font-mono px-2 py-0.5 flex items-center gap-1 shadow-sm">
                  <MapPin className="w-3 h-3 text-[#9B7C44]" />
                  <span>{post.location}</span>
                </div>
              </div>

              {/* Native Post Caption & Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase text-[#9B7C44] tracking-wider mb-1">
                    {post.tag}
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#0B131E] mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {post.snippet}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Delivered on Site
                  </span>
                  <span>Gorakhpur HQ</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
