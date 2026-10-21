import React from 'react';
import { ScreenTab } from '../types';

interface HeaderProps {
  currentTab: ScreenTab;
  onOpenMenu: () => void;
  onOpenEnroll: () => void;
  viewMode: 'mobile' | 'responsive';
  onToggleViewMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  viewMode,
  onToggleViewMode,
}) => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0f131d]/90 backdrop-blur-xl border-b border-[#2A364F]/50 shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
      <div className="max-w-4xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#161D2F] flex items-center justify-center p-0.5 border border-[#2A364F]/60 overflow-hidden shrink-0">
            <img
              alt="Nexskill AI & Tech Institute"
              className="w-full h-full object-contain p-0.5"
              src="/assets/aistudio/Image_1_3d6c4153.jpeg"
              onError={(e) => {
                // Fallback to stylized SVG emblem if local image is not accessible
                (e.currentTarget as HTMLElement).style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector('.logo-fallback')) {
                  const fallback = document.createElement('div');
                  fallback.className = 'logo-fallback w-full h-full flex items-center justify-center text-xs font-bold text-[#FF3B30]';
                  fallback.innerHTML = 'NX';
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-base tracking-tight text-[#F9FAFB]">
                NEXSKILL
              </span>
              <div className="flex items-center gap-1 bg-[#1E293B] px-1.5 py-0.5 rounded-full border border-[#2A364F]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] animate-pulse"></span>
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[10px] text-[#4cd7f6] uppercase tracking-wider">
                  LIVE 2026
                </span>
              </div>
            </div>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] tracking-wider uppercase font-semibold">
              AI &amp; Tech Institute
            </span>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          {/* Desktop/Mobile device toggle button */}
          <button
            onClick={onToggleViewMode}
            title={viewMode === 'mobile' ? 'Switch to Full Screen view' : 'Switch to Mobile App Frame'}
            className="hidden sm:flex h-10 px-2.5 rounded-xl bg-[#161D2F] border border-[#2A364F] items-center gap-1.5 text-xs text-[#94A3B8] hover:text-[#F9FAFB] hover:bg-[#1E293B] transition-all"
          >
            <span className="material-symbols-outlined text-base text-[#4cd7f6]">
              {viewMode === 'mobile' ? 'fullscreen' : 'smartphone'}
            </span>
            <span className="font-medium">{viewMode === 'mobile' ? 'Full View' : 'App Frame'}</span>
          </button>

          {/* Call Admissions Desk */}
          <a
            aria-label="Call Admissions Desk"
            className="w-10 h-10 rounded-xl bg-[#161D2F] border border-[#2A364F] flex items-center justify-center text-[#4cd7f6] active:scale-95 transition-transform hover:bg-[#1E293B] hover:text-[#F9FAFB]"
            href="tel:+923096663330"
          >
            <span className="material-symbols-outlined text-xl">phone_in_talk</span>
          </a>

          {/* Menu Drawer Toggle */}
          <button
            aria-label="Open Menu"
            onClick={onOpenMenu}
            className="w-10 h-10 rounded-xl bg-[#161D2F] border border-[#2A364F] flex items-center justify-center text-[#F9FAFB] active:scale-95 transition-transform hover:bg-[#1E293B]"
          >
            <span className="material-symbols-outlined text-2xl">menu_open</span>
          </button>
        </div>
      </div>
    </header>
  );
};
