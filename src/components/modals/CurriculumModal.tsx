import React from 'react';
import { Course } from '../../types';

interface CurriculumModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (course: Course) => void;
  onNotify: (msg: string) => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({
  course,
  isOpen,
  onClose,
  onApply,
  onNotify,
}) => {
  if (!isOpen || !course) return null;

  const handleDownload = () => {
    onNotify(`Downloading ${course.title} Syllabus (PDF)...`);
    // Create a mock download blob
    const element = document.createElement('a');
    const file = new Blob(
      [
        `NEXSKILL AI & TECH INSTITUTE - OFFICIAL CURRICULUM SYLLABUS\n\nCourse: ${course.title}\nTrack: ${course.trackLabel}\nDuration: ${course.duration}\nTarget Role Salary: ${course.targetSalary}\nCampuses: ${course.campuses}\n\nMODULES BREAKDOWN:\n` +
          course.modules.map((m, i) => `\n${i + 1}. ${m.title}\n   ${m.description}`).join('\n') +
          `\n\nAdmissions Helpline: +92 309 666 3330\nWebsite: trainings@nexskill.com\nAddress: Arfa Software Technology Park, Lahore`,
      ],
      { type: 'text/plain' }
    );
    element.href = URL.createObjectURL(file);
    element.download = `${course.id}-syllabus-2026.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0e18]/85 backdrop-blur-md flex flex-col justify-end sm:items-center sm:justify-center p-0 sm:p-4 transition-all duration-300">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Drawer content */}
      <div className="relative w-full sm:max-w-xl max-h-[88vh] bg-[#161D2F] rounded-t-3xl sm:rounded-2xl border border-[#2A364F] p-5 flex flex-col shadow-2xl overflow-y-auto no-scrollbar z-10 animate-in fade-in slide-in-from-bottom duration-200">
        {/* Mobile handle indicator */}
        <div className="w-12 h-1.5 rounded-full bg-[#1E293B] mx-auto mb-4 sm:hidden"></div>

        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#1E293B] text-[#4cd7f6] font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold tracking-wider border border-[#2A364F]">
                Curriculum Deep Dive
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#FF3B30]/15 text-[#FF3B30] font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold">
                {course.duration}
              </span>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#F9FAFB] mt-1.5 tracking-tight">
              {course.title}
            </h3>
            <p className="text-xs text-[#94A3B8] mt-0.5">{course.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-[#F9FAFB] transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Course Meta Cards */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="p-2.5 rounded-xl bg-[#1c1f2a] border border-[#2A364F]/60 flex flex-col">
            <span className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider font-['Plus_Jakarta_Sans']">
              Target Salary Band
            </span>
            <span className="text-sm font-bold text-[#4cd7f6] font-['Plus_Jakarta_Sans']">
              {course.targetSalary}
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#1c1f2a] border border-[#2A364F]/60 flex flex-col">
            <span className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider font-['Plus_Jakarta_Sans']">
              Verified Placement
            </span>
            <span className="text-sm font-bold text-[#10B981] font-['Plus_Jakarta_Sans'] flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              {course.placementRate || '85% Placed'}
            </span>
          </div>
        </div>

        {/* Modules Breakdown */}
        <div className="space-y-3 font-['Inter'] text-sm text-[#94A3B8] mb-5">
          <span className="text-xs font-bold text-[#F9FAFB] uppercase tracking-wider font-['Plus_Jakarta_Sans']">
            Core Learning Modules
          </span>
          {course.modules.map((mod, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-[#1c1f2a] border border-[#2A364F]/60">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]"></span>
                <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#F9FAFB] font-bold">
                  {mod.title}
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed pl-3">{mod.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-5">
          <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block mb-2 font-['Plus_Jakarta_Sans']">
            Technologies Covered
          </span>
          <div className="flex flex-wrap gap-1.5">
            {course.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-[#1E293B] text-[#dfe2f1] text-[11px] border border-[#2A364F]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[#2A364F]">
          <button
            onClick={handleDownload}
            className="flex-1 h-11 rounded-xl bg-[#1E293B] hover:bg-[#262a35] text-[#F9FAFB] text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all border border-[#2A364F]"
          >
            <span className="material-symbols-outlined text-base text-[#4cd7f6]">download</span>
            <span>Download Syllabus</span>
          </button>
          <button
            onClick={() => {
              onClose();
              onApply(course);
            }}
            className="flex-1 h-11 rounded-xl bg-[#FF3B30] hover:bg-[#ff544a] text-white text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-all shadow-lg shadow-[#FF3B30]/20"
          >
            <span>Apply For Seat</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
