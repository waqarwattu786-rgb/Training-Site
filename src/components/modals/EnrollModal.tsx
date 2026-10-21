import React, { useState } from 'react';
import { Course } from '../../types';
import { COURSES } from '../../data/coursesData';
import { CAMPUSES } from '../../data/campusesData';

interface EnrollModalProps {
  isOpen: boolean;
  initialCourse?: Course | null;
  onClose: () => void;
  onSuccess: (studentName: string) => void;
}

export const EnrollModal: React.FC<EnrollModalProps> = ({
  isOpen,
  initialCourse,
  onClose,
  onSuccess,
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState(
    initialCourse?.id || COURSES[0].id
  );
  const [selectedCampusId, setSelectedCampusId] = useState(CAMPUSES[0].id);
  const [batchType, setBatchType] = useState('weekend');
  const [submitted, setSubmitted] = useState(false);

  const selectedCourse = COURSES.find((c) => c.id === selectedCourseId) || COURSES[0];
  const selectedCampus = CAMPUSES.find((c) => c.id === selectedCampusId) || CAMPUSES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(fullName);
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  const handleWhatsAppInstant = () => {
    const text = `Hello Nexskill Admissions,%0A%0AI want to enroll in:* ${encodeURIComponent(selectedCourse.title)}*%0ACampus: ${encodeURIComponent(selectedCampus.name)}%0AMy Name: ${encodeURIComponent(fullName || 'Applicant')}%0APhone: ${encodeURIComponent(phone || 'Direct WhatsApp')}%0A%0APlease reserve my seat for the Spring 2026 Batch.`;
    window.open(`https://wa.me/923096663330?text=${text}`, '_blank');
    onSuccess(fullName || 'Applicant');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0e18]/85 backdrop-blur-md flex flex-col justify-end sm:items-center sm:justify-center p-0 sm:p-4 transition-all duration-300">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full sm:max-w-md max-h-[92vh] bg-[#161D2F] rounded-t-3xl sm:rounded-2xl border border-[#2A364F] p-5 flex flex-col shadow-2xl overflow-y-auto no-scrollbar z-10 animate-in fade-in slide-in-from-bottom duration-200">
        <div className="w-12 h-1.5 rounded-full bg-[#1E293B] mx-auto mb-4 sm:hidden"></div>

        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-ping"></span>
              <span className="text-[10px] uppercase font-bold text-[#FF3B30] tracking-wider font-['Plus_Jakarta_Sans']">
                Batch 2026 Fast-Track Admissions
              </span>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#F9FAFB] mt-1">
              Apply For Next Cohort
            </h3>
            <p className="text-xs text-[#94A3B8]">
              Reserve your seat with job placement guarantee &amp; industry labs.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-[#F9FAFB] transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h4 className="text-lg font-bold text-[#F9FAFB] font-['Plus_Jakarta_Sans']">
              Seat Reservation Received!
            </h4>
            <p className="text-xs text-[#94A3B8] max-w-xs">
              Welcome aboard, {fullName || 'Student'}! An Admissions Counselor will call you at{' '}
              <strong className="text-[#F9FAFB]">{phone}</strong> within 15 minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">
                Select Program
              </label>
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full h-11 px-3 rounded-xl bg-[#1c1f2a] text-[#F9FAFB] border border-[#2A364F] text-xs focus:outline-none focus:border-[#FF3B30]"
              >
                {COURSES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({c.duration})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">
                  Campus
                </label>
                <select
                  value={selectedCampusId}
                  onChange={(e) => setSelectedCampusId(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl bg-[#1c1f2a] text-[#F9FAFB] border border-[#2A364F] text-xs focus:outline-none focus:border-[#FF3B30]"
                >
                  {CAMPUSES.map((camp) => (
                    <option key={camp.id} value={camp.id}>
                      {camp.name}
                    </option>
                  ))}
                  <option value="online">100% Online Global Live</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">
                  Schedule
                </label>
                <select
                  value={batchType}
                  onChange={(e) => setBatchType(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl bg-[#1c1f2a] text-[#F9FAFB] border border-[#2A364F] text-xs focus:outline-none focus:border-[#FF3B30]"
                >
                  <option value="weekend">Weekend (Sat/Sun)</option>
                  <option value="evening">Weekday Evening</option>
                  <option value="morning">Morning Lab Batch</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Daniyal Ahmed"
                className="w-full h-11 px-3 rounded-xl bg-[#1c1f2a] text-[#F9FAFB] placeholder:text-[#64748B] border border-[#2A364F] text-xs focus:outline-none focus:border-[#FF3B30]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">
                WhatsApp / Phone Number
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="03096663330 or +92..."
                className="w-full h-11 px-3 rounded-xl bg-[#1c1f2a] text-[#F9FAFB] placeholder:text-[#64748B] border border-[#2A364F] text-xs focus:outline-none focus:border-[#FF3B30]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="daniyal@example.com"
                className="w-full h-11 px-3 rounded-xl bg-[#1c1f2a] text-[#F9FAFB] placeholder:text-[#64748B] border border-[#2A364F] text-xs focus:outline-none focus:border-[#FF3B30]"
              />
            </div>

            {/* Price Snapshot */}
            <div className="p-3 rounded-xl bg-[#1E293B] border border-[#2A364F] flex items-center justify-between text-xs">
              <span className="text-[#94A3B8]">Standard Tuition:</span>
              <span className="font-bold text-[#4cd7f6] font-['Plus_Jakarta_Sans']">
                {selectedCourse.fee.total.toLocaleString()} {selectedCourse.fee.currency} (or{' '}
                {selectedCourse.fee.monthly.toLocaleString()}/mo)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppInstant}
                className="h-11 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Chat WhatsApp</span>
              </button>

              <button
                type="submit"
                className="h-11 rounded-xl bg-[#FF3B30] hover:bg-[#ff544a] text-white text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md shadow-[#FF3B30]/20"
              >
                <span>Submit Form</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
