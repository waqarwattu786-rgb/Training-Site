import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 max-w-md mx-auto z-50 animate-in fade-in slide-in-from-bottom duration-200 pointer-events-auto">
      <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#1E293B] border border-[#2A364F] shadow-2xl">
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className="material-symbols-outlined text-[#10B981] text-xl shrink-0"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <span className="font-['Inter'] text-xs font-semibold text-[#F9FAFB] truncate">
            {message}
          </span>
        </div>
        <button
          onClick={onClose}
          className="ml-2 text-[#94A3B8] hover:text-[#F9FAFB] text-xs uppercase tracking-wider font-bold shrink-0"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};
