'use client';

import React from 'react';

interface FloatingEnquireButtonProps {
  onClick?: () => void;
}

export const FloatingEnquireButton: React.FC<FloatingEnquireButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <aside aria-label="Quick Enquiry Widget" className="fixed bottom-6 right-6 z-40 select-none">
      <button
        type="button"
        suppressHydrationWarning
        onClick={handleClick}
        className="bg-[#0B131E] hover:bg-[#152132] text-white px-5 sm:px-6 py-3 rounded-lg font-sans font-bold text-sm tracking-wide border border-white/15 shadow-2xl hover:shadow-[#B8965A]/20 transition-all duration-300 cursor-pointer flex items-center gap-2.5 group hover:-translate-y-0.5 active:translate-y-0"
        aria-label="Enquire Now"
      >
        {/* Phone Receiver Icon with signal waves matching screenshot */}
        <div className="relative flex items-center justify-center">
          <svg
            className="w-4 h-4 text-[#C9A86A] group-hover:scale-110 transition-transform flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>

        <span className="text-white font-bold text-sm">Enquire Now</span>
      </button>
    </aside>
  );
};

