import React from 'react';
import { ScreenTab } from '../types';

interface BottomNavProps {
  currentTab: ScreenTab;
  onSelectTab: (tab: ScreenTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const navItems: { id: ScreenTab; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'courses', label: 'Courses', icon: 'terminal' },
    { id: 'placements', label: 'Placements', icon: 'workspace_premium' },
    { id: 'campuses', label: 'Campuses', icon: 'apartment' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-[#161D2F]/95 backdrop-blur-xl border-t border-[#2A364F] shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center min-w-[64px] min-h-[44px] gap-1 transition-all active:scale-95 ${
                isActive
                  ? 'text-[#FF3B30] font-semibold scale-105'
                  : 'text-[#64748B] hover:text-[#94A3B8]'
              }`}
            >
              <div className="relative">
                <span
                  className={`material-symbols-outlined text-2xl transition-transform ${
                    isActive ? 'scale-110 font-bold' : ''
                  }`}
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF3B30]"></span>
                )}
              </div>
              <span className="font-['Inter'] text-[11px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
