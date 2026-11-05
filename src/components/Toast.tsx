'use client';

import React, { useEffect } from 'react';
import { CheckCircle2, Download, Bell, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  type?: 'success' | 'download' | 'info';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onDismiss: (id: string) => void }> = ({
  toast,
  onDismiss,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  return (
    <div className="pointer-events-auto bg-white text-[#0F172A] border border-slate-300 rounded-xl p-4 shadow-elevated flex items-start gap-3 animate-slideIn">
      <div className="p-2 rounded-lg bg-[#F4ECE1] text-[#8B6533] flex-shrink-0 mt-0.5 border border-[#D5BE9E]">
        {toast.type === 'download' && <Download className="w-4 h-4 text-[#8B6533] animate-bounce" />}
        {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
        {toast.type === 'info' && <Bell className="w-4 h-4 text-[#8B6533]" />}
        {!toast.type && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
      </div>

      <div className="flex-1 pr-2">
        <h4 className="text-xs font-bold text-[#0B192C] tracking-wide">
          {toast.title}
        </h4>
        <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
          {toast.description}
        </p>
      </div>

      <button
        type="button"
        suppressHydrationWarning
        onClick={() => onDismiss(toast.id)}
        className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
