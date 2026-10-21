import React, { useState } from 'react';
import { CAMPUSES } from '../../data/campusesData';

interface CampusesScreenProps {
  onNotify: (msg: string) => void;
  onOpenEnroll: () => void;
}

export const CampusesScreen: React.FC<CampusesScreenProps> = ({
  onNotify,
  onOpenEnroll,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('fullstack-ai');
  const [campus, setCampus] = useState('arfa');
  const [inquiryStatus, setInquiryStatus] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryStatus(true);
    onNotify('Inquiry submitted! Redirecting to admissions counselor on WhatsApp...');

    const message = `Hello Nexskill Admissions,%0A%0AMy Name: ${encodeURIComponent(
      fullName
    )}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(
      email
    )}%0APreferred Program: ${encodeURIComponent(
      course
    )}%0ACampus: ${encodeURIComponent(campus)}%0A%0APlease connect me with a counselor.`;

    setTimeout(() => {
      window.open(`https://wa.me/923096663330?text=${message}`, '_blank');
    }, 600);
  };

  return (
    <div className="flex flex-col w-full text-[#dfe2f1]">
      {/* Top Hero Banner & 24/7 Admissions Hotline */}
      <section className="relative px-4 pt-3 pb-4 flex flex-col gap-3">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-36 bg-[#FF3B30]/15 blur-3xl rounded-full pointer-events-none"></div>

        {/* Accreditations Trust Strip */}
        <div className="flex items-center justify-between gap-1.5 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-1.5 bg-[#262a35] border border-[#2A364F] px-2.5 py-1 rounded-full text-[#4cd7f6] shrink-0">
            <span
              className="material-symbols-outlined text-sm text-[#10B981]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-wider uppercase">
              NAVTTC Certified
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#262a35] border border-[#2A364F] px-2.5 py-1 rounded-full text-[#4cd7f6] shrink-0">
            <span
              className="material-symbols-outlined text-sm text-[#10B981]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-wider uppercase">
              PSDF Partner
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#262a35] border border-[#2A364F] px-2.5 py-1 rounded-full text-[#4cd7f6] shrink-0">
            <span
              className="material-symbols-outlined text-sm text-[#10B981]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold tracking-wider uppercase">
              TEVTA Recognized
            </span>
          </div>
        </div>

        {/* 24/7 Hotline Marquee Card */}
        <div className="relative bg-gradient-to-r from-[#1E293B] via-[#161D2F] to-[#1E293B] border border-[#2A364F] rounded-xl p-3.5 shadow-xl flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#FF3B30]/10 flex items-center justify-center text-[#FF3B30] shrink-0">
              <span className="material-symbols-outlined text-2xl animate-pulse">
                support_agent
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
                <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#10B981] uppercase tracking-wider">
                  24/7 Live Admissions
                </span>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB] tracking-tight truncate">
                +92 309 666 3330
              </span>
              <span className="font-['Inter'] text-[11px] text-[#64748B] truncate">
                trainings@nexskill.com • Mon-Sun: 10AM - 9PM
              </span>
            </div>
          </div>
          <a
            aria-label="Direct Phone Hotline"
            className="shrink-0 w-11 h-11 rounded-xl bg-[#FF3B30] text-white flex items-center justify-center active:scale-95 transition-transform shadow-md"
            href="tel:+923096663330"
          >
            <span className="material-symbols-outlined text-xl">phone</span>
          </a>
        </div>

        {/* Quick Stats Metric Micro-Bar */}
        <div className="grid grid-cols-3 gap-2 pt-0.5">
          <div className="bg-[#161D2F] border border-[#2A364F] rounded-lg p-2.5 text-center flex flex-col justify-center">
            <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
              85%
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] uppercase font-bold">
              Placement Rate
            </span>
          </div>
          <div className="bg-[#161D2F] border border-[#2A364F] rounded-lg p-2.5 text-center flex flex-col justify-center">
            <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#4cd7f6]">
              18,000+
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] uppercase font-bold">
              Alumni Network
            </span>
          </div>
          <div className="bg-[#161D2F] border border-[#2A364F] rounded-lg p-2.5 text-center flex flex-col justify-center">
            <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#FF3B30]">
              5 Hubs
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] uppercase font-bold">
              Active Campuses
            </span>
          </div>
        </div>
      </section>

      {/* Campus Finder & Locations Section */}
      <section className="px-4 py-2 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#FF3B30] text-xl">apartment</span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
              Campus Centers
            </h2>
          </div>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#4cd7f6] uppercase">
            Walk-ins Welcome
          </span>
        </div>

        {/* Vertical Campus Cards List */}
        <div className="flex flex-col gap-3.5">
          {CAMPUSES.map((camp) => (
            <article
              key={camp.id}
              className="relative bg-[#161D2F] border border-[#2A364F] rounded-xl overflow-hidden shadow-xl"
            >
              {camp.highlight && <div className="h-1 w-full bg-[#FF3B30]"></div>}
              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
                        {camp.name}
                      </span>
                      {camp.tag && (
                        <span className="bg-[#FF3B30]/20 text-[#FF3B30] px-2 py-0.5 rounded-full font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold tracking-wider">
                          {camp.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-['Inter'] text-xs text-[#94A3B8] mt-0.5">{camp.address}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-[#1E293B] border border-[#2A364F] px-2 py-1 rounded-full shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#10B981] uppercase">
                      Open
                    </span>
                  </div>
                </div>

                {/* Amenities Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {camp.amenities.map((amenity, aIdx) => (
                    <span
                      key={aIdx}
                      className="bg-[#1E293B] text-[#94A3B8] border border-[#2A364F] px-2 py-1 rounded font-['Plus_Jakarta_Sans'] text-[10px] flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-xs text-[#4cd7f6]">
                        {amenity.icon}
                      </span>
                      <span>{amenity.label}</span>
                    </span>
                  ))}
                </div>

                {/* Timings & Phone */}
                <div className="flex items-center justify-between text-[#64748B] font-['Inter'] text-xs pt-1 border-t border-[#2A364F]/50">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    <span>{camp.timings}</span>
                  </div>
                  <span className="font-['Inter'] text-xs text-[#94A3B8] font-semibold">
                    {camp.phone}
                  </span>
                </div>

                {/* Actions: Directions & Call */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    className="h-11 rounded-xl bg-[#1E293B] text-[#F9FAFB] flex items-center justify-center gap-1.5 font-['Inter'] text-xs font-semibold active:scale-95 transition-transform hover:bg-[#262a35] border border-[#2A364F]"
                    href={camp.gmapsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-base text-[#4cd7f6]">
                      directions
                    </span>
                    <span>Get Directions</span>
                  </a>
                  <a
                    className={`h-11 rounded-xl flex items-center justify-center gap-1.5 font-['Inter'] text-xs font-bold active:scale-95 transition-transform shadow-md ${
                      camp.highlight
                        ? 'bg-[#FF3B30] text-white hover:bg-[#ff544a]'
                        : 'bg-[#1E293B] text-[#F9FAFB] border border-[#2A364F] hover:bg-[#262a35]'
                    }`}
                    href={`tel:${camp.cleanPhone}`}
                  >
                    <span
                      className={`material-symbols-outlined text-base ${
                        camp.highlight ? 'text-white' : 'text-[#FF3B30]'
                      }`}
                    >
                      call
                    </span>
                    <span>Call Campus</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Admissions & Counseling Form */}
      <section className="px-4 py-4 flex flex-col gap-3">
        <div className="bg-[#161D2F] border border-[#2A364F] rounded-xl p-5 shadow-2xl flex flex-col gap-4 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#FF3B30]/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#FF3B30]/20 flex items-center justify-center text-[#FF3B30]">
                <span className="material-symbols-outlined text-base">edit_note</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
                Admissions &amp; Counseling
              </h3>
            </div>
            <p className="font-['Inter'] text-xs text-[#94A3B8]">
              Book a free 1-on-1 career consultation or get fast admission clearance on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleInquirySubmit} className="flex flex-col gap-3">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-['Inter'] text-xs text-[#94A3B8] font-medium">
                Full Name
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#64748B] text-lg">
                  person
                </span>
                <input
                  className="w-full h-11 pl-10 pr-3 rounded-lg bg-[#1E293B] border border-[#2A364F] text-[#F9FAFB] placeholder:text-[#64748B] font-['Inter'] text-xs focus:outline-none focus:border-[#FF3B30]"
                  placeholder="e.g. Muhammad Hamza"
                  required
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="font-['Inter'] text-xs text-[#94A3B8] font-medium">
                WhatsApp / Phone Number
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#64748B] text-lg">
                  call
                </span>
                <input
                  className="w-full h-11 pl-10 pr-3 rounded-lg bg-[#1E293B] border border-[#2A364F] text-[#F9FAFB] placeholder:text-[#64748B] font-['Inter'] text-xs focus:outline-none focus:border-[#FF3B30]"
                  placeholder="0309 6663330"
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <span className="font-['Inter'] text-[10px] text-[#64748B]">
                Standard format: 03096663330 or +923096663330
              </span>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="font-['Inter'] text-xs text-[#94A3B8] font-medium">
                Email Address
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#64748B] text-lg">
                  alternate_email
                </span>
                <input
                  className="w-full h-11 pl-10 pr-3 rounded-lg bg-[#1E293B] border border-[#2A364F] text-[#F9FAFB] placeholder:text-[#64748B] font-['Inter'] text-xs focus:outline-none focus:border-[#FF3B30]"
                  placeholder="hamza@example.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Desired Program */}
            <div className="flex flex-col gap-1.5">
              <label className="font-['Inter'] text-xs text-[#94A3B8] font-medium">
                Select Desired Program
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#64748B] text-lg">
                  school
                </span>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full h-11 pl-10 pr-8 rounded-lg bg-[#1E293B] border border-[#2A364F] text-[#F9FAFB] font-['Inter'] text-xs focus:outline-none focus:border-[#FF3B30] appearance-none"
                >
                  <option value="Full Stack Artificial Intelligence">
                    Full Stack Artificial Intelligence
                  </option>
                  <option value="Advance Cyber Security & Pentesting">
                    Advance Cyber Security &amp; Pentesting
                  </option>
                  <option value="Web Development with AI (MERN)">
                    Web Development with AI (MERN)
                  </option>
                  <option value="Advance UI/UX Design with AI">
                    Advance UI/UX Design with AI
                  </option>
                  <option value="Advance Flutter with AI">Advance Flutter with AI</option>
                  <option value="AI Growth Marketing & E-Commerce">
                    AI Growth Marketing &amp; E-Commerce
                  </option>
                </select>
                <span className="material-symbols-outlined absolute right-3 pointer-events-none text-[#64748B] text-base">
                  expand_more
                </span>
              </div>
            </div>

            {/* Preferred Campus */}
            <div className="flex flex-col gap-1.5">
              <label className="font-['Inter'] text-xs text-[#94A3B8] font-medium">
                Preferred Campus
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#64748B] text-lg">
                  location_on
                </span>
                <select
                  value={campus}
                  onChange={(e) => setCampus(e.target.value)}
                  className="w-full h-11 pl-10 pr-8 rounded-lg bg-[#1E293B] border border-[#2A364F] text-[#F9FAFB] font-['Inter'] text-xs focus:outline-none focus:border-[#FF3B30] appearance-none"
                >
                  <option value="Lahore: Arfa Software Technology Park">
                    Lahore: Arfa Software Technology Park
                  </option>
                  <option value="Lahore: Garden Town Campus">Lahore: Garden Town Campus</option>
                  <option value="Lahore: Bahria Town Campus">Lahore: Bahria Town Campus</option>
                  <option value="Karachi: PARSA Tower Shahrah-e-Faisal">
                    Karachi: PARSA Tower Shahrah-e-Faisal
                  </option>
                  <option value="Mian Channu: Bodla Memorial Complex">
                    Mian Channu: Bodla Memorial Complex
                  </option>
                  <option value="100% Online Global Live Class">
                    100% Online Global Live Class
                  </option>
                </select>
                <span className="material-symbols-outlined absolute right-3 pointer-events-none text-[#64748B] text-base">
                  expand_more
                </span>
              </div>
            </div>

            {/* WhatsApp Submit Button */}
            <button
              className="w-full h-12 mt-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-['Inter'] text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-[0_4px_16px_rgba(16,185,129,0.3)]"
              type="submit"
            >
              <span className="material-symbols-outlined text-xl">chat</span>
              <span>Submit Inquiry &amp; Chat on WhatsApp</span>
            </button>

            {inquiryStatus && (
              <p className="font-['Inter'] text-xs text-center text-[#10B981] pt-1 animate-in fade-in">
                Inquiry sent! Connecting to admissions counselor...
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Become an Instructor / LMS Callouts */}
      <section className="px-4 py-2 flex flex-col gap-3">
        <div className="bg-[#161D2F] border border-[#2A364F] rounded-xl p-4 shadow-md flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E293B] text-[#FF3B30] flex items-center justify-center shrink-0 border border-[#2A364F]">
              <span className="material-symbols-outlined text-2xl">co_present</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#F9FAFB] truncate">
                Become an Instructor
              </span>
              <span className="font-['Inter'] text-xs text-[#64748B] line-clamp-1">
                Join elite industry mentors &amp; tech leaders
              </span>
            </div>
          </div>
          <a
            className="shrink-0 px-3 py-2 rounded-lg bg-[#1E293B] border border-[#2A364F] text-[#4cd7f6] font-['Inter'] text-xs font-semibold active:scale-95 transition-transform flex items-center gap-1 hover:bg-[#262a35]"
            href="tel:+923096663330"
          >
            <span>Apply</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

        <div className="bg-[#161D2F] border border-[#2A364F] rounded-xl p-4 shadow-md flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E293B] text-[#4cd7f6] flex items-center justify-center shrink-0 border border-[#2A364F]">
              <span className="material-symbols-outlined text-2xl">install_mobile</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#F9FAFB] truncate">
                Download LMS App
              </span>
              <span className="font-['Inter'] text-xs text-[#64748B] line-clamp-1">
                Offline learning &amp; progress tracking
              </span>
            </div>
          </div>
          <a
            className="shrink-0 px-3 py-2 rounded-lg bg-[#1E293B] border border-[#2A364F] text-[#F9FAFB] font-['Inter'] text-xs font-semibold active:scale-95 transition-transform flex items-center gap-1 hover:bg-[#262a35]"
            href="https://play.google.com/store/apps/details?id=com.p2pclouds.nexskill_lms"
            target="_blank"
            rel="noreferrer"
          >
            <span>Install</span>
            <span className="material-symbols-outlined text-sm">download</span>
          </a>
        </div>
      </section>

      {/* Persistent Bottom Floating Counselor Bar */}
      <aside className="sticky bottom-20 z-40 mx-4 mt-2">
        <div className="bg-[#161D2F]/95 backdrop-blur-xl border border-[#FF3B30]/35 rounded-2xl p-2.5 shadow-2xl flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 pl-1.5 min-w-0">
            <div className="relative shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#FF3B30]/20 flex items-center justify-center text-[#FF3B30]">
                <span className="material-symbols-outlined text-lg">headset_mic</span>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-[#161D2F]"></span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#10B981] uppercase">
                Desk Online
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#F9FAFB] truncate leading-tight">
                Need Course Guidance?
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <a
              className="h-10 px-3 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-['Inter'] text-xs font-bold flex items-center gap-1 active:scale-95 transition-transform shadow-md"
              href="https://wa.me/923096663330?text=Hi%20Nexskill%20Admissions,%20I%20am%20inquiring%20about%20campus%20programs."
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp</span>
            </a>
            <a
              className="h-10 w-10 rounded-xl bg-[#FF3B30] hover:bg-[#ff544a] text-white flex items-center justify-center active:scale-95 transition-transform shadow-md shadow-[#FF3B30]/20"
              href="tel:+923096663330"
            >
              <span className="material-symbols-outlined text-lg">call</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};
