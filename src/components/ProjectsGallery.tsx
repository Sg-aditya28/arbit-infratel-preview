'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ZoomIn, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  project: string;
  location: string;
  category: 'retail' | 'commercial' | 'milestones';
  categoryLabel: string;
  image: string;
  badge: string;
  description: string;
  highlights: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'arbit-34-westside',
    title: "Gorakhpur's Biggest Westside Store",
    project: 'Arbit 34',
    location: 'Gorakhpur, Uttar Pradesh',
    category: 'retail',
    categoryLabel: 'Anchor Retail',
    image: '/arbit-infratel-preview/social/post_6.jpg',
    badge: 'Delivered & Operational',
    description:
      'From vision to reality — proud to bring the new Westside store to life at Arbit 34. A landmark commercial development featuring multi-level retail floorplates and high-traffic visibility.',
    highlights: ['Westside Anchor Tenant', 'Prime Arterial Frontage', 'Delivered On Schedule'],
  },
  {
    id: 'arbit-36-reliance',
    title: 'Reliance Fashion Factory',
    project: 'Arbit 36',
    location: 'Gorakhnath, Gorakhpur',
    category: 'retail',
    categoryLabel: 'Anchor Retail',
    image: '/arbit-infratel-preview/social/post_1.jpg',
    badge: 'Delivered & Operational',
    description:
      'Reliance Fashion Factory is now fully operational at Arbit 36, Gorakhnath. Master-planned commercial retail destination built to international anchor brand specifications.',
    highlights: ['Reliance Retail Anchor', 'High-Footfall Retail Hub', 'Civil & Structural EPC'],
  },
  {
    id: 'arbit-vibhuti-metro',
    title: 'Metro Shoes at Arbit Vibhuti',
    project: 'Arbit Vibhuti',
    location: 'Golghar Central Market, Gorakhpur',
    category: 'retail',
    categoryLabel: 'Anchor Retail',
    image: '/arbit-infratel-preview/social/post_3.jpg',
    badge: 'Delivered & Operational',
    description:
      'Metro Shoes flagship showroom now open at Arbit Vibhuti, in the heart of Gorakhpur’s prime retail district (Golghar). Part of Arbit Infratel’s 38+ successful deliveries.',
    highlights: ['Golghar Retail Epicenter', 'Metro Shoes Showroom', '100% Occupancy'],
  },
  {
    id: 'vmart-opening',
    title: 'V-Mart Flagship Megastore',
    project: 'Arbit Commercial Premises',
    location: 'Commercial Corridor, Gorakhpur',
    category: 'retail',
    categoryLabel: 'Anchor Retail',
    image: '/arbit-infratel-preview/social/post_4.jpg',
    badge: 'Delivered & Operational',
    description:
      'V-Mart now open at Arbit Infratel commercial premises — bringing fashion, value, and joyful shopping together under one roof with double-height retail slabs.',
    highlights: ['V-Mart National Retailer', 'Large-Format Floorplate', 'Dedicated Customer Parking'],
  },
  {
    id: 'bhoomi-pujan-38',
    title: '38th Project Bhumi Pujan',
    project: 'Medical College Road Landmark',
    location: 'Medical College Road, Gorakhpur',
    category: 'milestones',
    categoryLabel: 'On-Ground Milestones',
    image: '/arbit-infratel-preview/social/post_2.jpg',
    badge: 'Groundbreaking Milestone',
    description:
      'With auspicious blessings and local tradition, groundbreaking ceremony for Arbit Infratel’s 38th commercial project on the fast-growing Medical College Road corridor.',
    highlights: ['38th Project in Gorakhpur', 'Civil EPC Commencement', 'Strategic Growth Corridor'],
  },
  {
    id: 'cm-blessings-civic',
    title: 'Blessings from Hon’ble CM Yogi Adityanath Ji',
    project: 'Civic Leadership',
    location: 'Gorakhpur, Uttar Pradesh',
    category: 'milestones',
    categoryLabel: 'Civic Leadership',
    image: '/arbit-infratel-preview/social/post_5.jpg',
    badge: 'State Leadership Recognition',
    description:
      'Our Director had the distinct honor of meeting Hon’ble Chief Minister Shri Yogi Adityanath Ji, receiving his guidance for infrastructure development and commercial growth in Eastern UP.',
    highlights: ['Executive Interaction', 'Eastern UP Infrastructure', 'Purvanchal Vision'],
  },
  {
    id: 'arbit-the-25-facade',
    title: 'Arbit The 25 Commercial Landmark',
    project: 'Arbit The 25',
    location: 'Civil Lines, Gorakhpur',
    category: 'commercial',
    categoryLabel: 'Commercial Centers',
    image: '/arbit-infratel-preview/social/post_7.jpg',
    badge: 'UP-RERA Registered',
    description:
      'Signature commercial landmark in Civil Lines featuring double-height retail showrooms, column-free corporate plates, and Seismic Zone-IV compliant RCC engineering.',
    highlights: ['UP-RERA: UPRERAPRJ218427', 'Civil Lines Address', 'Escrow Account Protected'],
  },
  {
    id: 'arbit-commercial-hub',
    title: 'Integrated Retail & Corporate Complex',
    project: 'Arbit Prime Hub',
    location: 'Gorakhpur, Uttar Pradesh',
    category: 'commercial',
    categoryLabel: 'Commercial Centers',
    image: '/arbit-infratel-preview/social/post_8.jpg',
    badge: 'Infrastructure Milestone',
    description:
      'High-specification commercial retail development engineered with energy-efficient glass curtain walls, 100% DG power backup, and modern architectural finishes.',
    highlights: ['Grade-A Infrastructure', 'Automated Basement Parking', 'Class-A PWD Quality'],
  },
];

interface ProjectsGalleryProps {
  onOpenEnquiry?: (projectTitle?: string) => void;
  limit?: number;
  showFilters?: boolean;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  onOpenEnquiry,
  limit,
  showFilters = true,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'retail' | 'commercial' | 'milestones'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleNextLightbox = () => {
    if (!selectedItem) return;
    const currentIndex = displayedItems.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % displayedItems.length;
    setSelectedItem(displayedItems[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!selectedItem) return;
    const currentIndex = displayedItems.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + displayedItems.length) % displayedItems.length;
    setSelectedItem(displayedItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Styled directly with the Logo's Azure Blue & Slate Navy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-slate-200 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2C8FEA]/10 text-[#2C8FEA] rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Real Delivered Landmarks • Gorakhpur</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#0F172A] tracking-tight">
              On-Ground Projects &amp; Building Gallery
            </h2>
            
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              Real photographs of Arbit Infratel’s landmark developments across Gorakhpur — home to the city’s largest Westside store, Reliance Fashion Factory, Metro Shoes, and V-Mart.
            </p>
          </div>

          {/* Key Stat Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-xs font-semibold text-[#0F172A]">
              <span className="text-[#2C8FEA] font-bold text-sm mr-1.5">38+</span>
              Projects Delivered
            </div>
            <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-xs font-semibold text-[#0F172A]">
              <span className="text-[#2C8FEA] font-bold text-sm mr-1.5">100%</span>
              Real Photo Proof
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#2C8FEA] text-white shadow-md shadow-[#2C8FEA]/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-[#2C8FEA] hover:text-[#2C8FEA]'
              }`}
            >
              All Landmarks ({GALLERY_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('retail')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'retail'
                  ? 'bg-[#2C8FEA] text-white shadow-md shadow-[#2C8FEA]/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-[#2C8FEA] hover:text-[#2C8FEA]'
              }`}
            >
              Anchor Retail (Westside / Reliance / Metro / V-Mart)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('commercial')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'commercial'
                  ? 'bg-[#2C8FEA] text-white shadow-md shadow-[#2C8FEA]/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-[#2C8FEA] hover:text-[#2C8FEA]'
              }`}
            >
              Commercial Centers (Arbit 34 / 36 / 25)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('milestones')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'milestones'
                  ? 'bg-[#2C8FEA] text-white shadow-md shadow-[#2C8FEA]/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-[#2C8FEA] hover:text-[#2C8FEA]'
              }`}
            >
              On-Ground Milestones
            </button>
          </div>
        )}

        {/* Gallery Cards Grid (Real Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#2C8FEA] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Real Building Image Box */}
              <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Gradient Overlay for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 group-hover:from-black/85 transition-colors"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-[#0F172A]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-semibold tracking-wide border border-white/20">
                  {item.project}
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3 bg-[#2C8FEA] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow">
                  {item.categoryLabel}
                </div>

                {/* Hover Quick Zoom Cue */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-[#2C8FEA] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                    View Real Photo
                  </span>
                </div>

                {/* Bottom Location */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-[#2C8FEA]" />
                    <span className="truncate">{item.location}</span>
                  </span>
                  <span className="text-[10px] bg-emerald-500/90 text-white font-bold px-1.5 py-0.5 rounded">
                    Active
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-bold text-base text-[#0F172A] group-hover:text-[#2C8FEA] transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#2C8FEA]">
                  <span>{item.badge}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: High-Res Real Building Photo */}
            <div className="relative md:w-3/5 bg-black flex items-center justify-center min-h-[300px] md:min-h-[460px]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain max-h-[520px]"
              />

              {/* Prev / Next Nav Buttons */}
              <button
                type="button"
                onClick={handlePrevLightbox}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#2C8FEA] text-white p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNextLightbox}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#2C8FEA] text-white p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right: Project Details Panel */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-white text-[#0F172A]">
              <div>
                {/* Close Button */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-[#2C8FEA] uppercase tracking-wider">
                    {selectedItem.categoryLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="p-1.5 text-slate-400 hover:text-[#0F172A] hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-xs font-bold text-slate-500 mb-1">
                  {selectedItem.project}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#0F172A] leading-tight mb-3">
                  {selectedItem.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-4">
                  <MapPin className="w-4 h-4 text-[#2C8FEA]" />
                  <span>{selectedItem.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {selectedItem.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {selectedItem.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2C8FEA]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enquire Action */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onOpenEnquiry?.(title);
                  }}
                  className="w-full bg-[#2C8FEA] hover:bg-[#1E75D8] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-[#2C8FEA]/20"
                >
                  Enquire About {selectedItem.project}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
