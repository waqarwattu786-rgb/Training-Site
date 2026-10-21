import React from 'react';
import { ScreenTab } from '../../types';
import { CAMPUSES } from '../../data/campusesData';

interface MenuDrawerProps {
  isOpen: boolean;
  currentTab: ScreenTab;
  onClose: () => void;
  onSelectTab: (tab: ScreenTab) => void;
  onOpenFeeCalculator: () => void;
  onOpenEnroll: () => void;
  onNotify: (msg: string) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  currentTab,
  onClose,
  onSelectTab,
  onOpenFeeCalculator,
  onOpenEnroll,
  onNotify,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0e18]/85 backdrop-blur-md flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Slide Drawer */}
      <div className="relative w-full max-w-xs h-full bg-[#161D2F] border-l border-[#2A364F] flex flex-col p-5 shadow-2xl overflow-y-auto no-scrollbar z-10 animate-in slide-in-from-right duration-200">
        {/* Drawer header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2A364F]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF3B30] flex items-center justify-center text-white font-extrabold text-sm">
              NX
            </div>
            <div className="flex flex-col">
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-sm text-[#F9FAFB]">
                NEXSKILL
              </span>
              <span className="text-[10px] text-[#4cd7f6] uppercase font-semibold">
                AI &amp; Tech Institute
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-[#F9FAFB]"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Navigation items */}
        <div className="py-4 space-y-1 border-b border-[#2A364F]">
          <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider font-['Plus_Jakarta_Sans'] block px-3 mb-1">
            Navigation
          </span>
          {[
            { id: 'home', label: 'Home Experience', icon: 'home' },
            { id: 'courses', label: 'Flagship Bootcamps', icon: 'terminal' },
            { id: 'placements', label: 'NexTalent Placements', icon: 'workspace_premium' },
            { id: 'campuses', label: 'Campus Centers', icon: 'apartment' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id as ScreenTab);
                onClose();
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                currentTab === item.id
                  ? 'bg-[#FF3B30] text-white shadow-md'
                  : 'text-[#dfe2f1] hover:bg-[#1E293B]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-base">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          ))}
        </div>

        {/* Student Tools & Quick Utilities */}
        <div className="py-4 space-y-1 border-b border-[#2A364F]">
          <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider font-['Plus_Jakarta_Sans'] block px-3 mb-1">
            Tools &amp; Services
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenFeeCalculator();
            }}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-[#dfe2f1] hover:bg-[#1E293B] transition-all"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-base text-[#4cd7f6]">
                calculate
              </span>
              <span>Fee &amp; Scholarship Calculator</span>
            </div>
            <span className="material-symbols-outlined text-sm text-[#64748B]">chevron_right</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenEnroll();
            }}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-[#dfe2f1] hover:bg-[#1E293B] transition-all"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-base text-[#FF3B30]">
                how_to_reg
              </span>
              <span>Fast-Track Admission 2026</span>
            </div>
            <span className="material-symbols-outlined text-sm text-[#64748B]">chevron_right</span>
          </button>

          <a
            href="https://play.google.com/store/apps/details?id=com.p2pclouds.nexskill_lms"
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-[#dfe2f1] hover:bg-[#1E293B] transition-all"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-base text-[#10B981]">
                install_mobile
              </span>
              <span>Download Student LMS</span>
            </div>
            <span className="material-symbols-outlined text-sm text-[#64748B]">open_in_new</span>
          </a>
        </div>

        {/* Campuses Quick List */}
        <div className="py-4 space-y-2 border-b border-[#2A364F]">
          <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider font-['Plus_Jakarta_Sans'] block px-3">
            Active Campus Desks
          </span>
          <div className="space-y-1">
            {CAMPUSES.slice(0, 3).map((camp) => (
              <div
                key={camp.id}
                className="p-2.5 rounded-lg bg-[#1c1f2a] flex items-center justify-between text-xs"
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-[#F9FAFB]">{camp.name}</span>
                  <span className="text-[10px] text-[#64748B]">{camp.phone}</span>
                </div>
                <a
                  href={`tel:${camp.cleanPhone}`}
                  className="w-7 h-7 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#FF3B30] hover:bg-[#262a35]"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Hotline Bottom */}
        <div className="mt-auto pt-4 space-y-2">
          <div className="p-3 rounded-xl bg-gradient-to-r from-[#1c1f2a] to-[#1E293B] border border-[#2A364F]">
            <div className="flex items-center gap-1.5 text-[#10B981] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Admissions Hotline
              </span>
            </div>
            <a
              href="tel:+923096663330"
              className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#F9FAFB] block hover:text-[#4cd7f6]"
            >
              +92 309 666 3330
            </a>
            <span className="text-[10px] text-[#94A3B8] block">
              trainings@nexskill.com • 10AM - 9PM
            </span>
          </div>

          <button
            onClick={() => {
              window.open(
                'https://wa.me/923096663330?text=Hi%20Nexskill%2C%20I%20want%20to%20learn%20more%20about%20your%20IT%20bootcamps.',
                '_blank'
              );
              onNotify('Connecting to WhatsApp Counselor...');
            }}
            className="w-full h-10 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Connect on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
