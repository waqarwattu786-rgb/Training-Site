import React, { useState } from 'react';
import { Course, ScreenTab } from '../../types';
import { COURSES } from '../../data/coursesData';
import { CAMPUSES } from '../../data/campusesData';

interface HomeScreenProps {
  onSelectTab: (tab: ScreenTab) => void;
  onOpenCurriculum: (course: Course) => void;
  onOpenEnroll: (course?: Course) => void;
  onNotify: (msg: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectTab,
  onOpenCurriculum,
  onOpenEnroll,
  onNotify,
}) => {
  // Free 1-on-1 form state
  const [counselingName, setCounselingName] = useState('');
  const [counselingPhone, setCounselingPhone] = useState('');
  const [counselingDomain, setCounselingDomain] = useState('Full Stack Artificial Intelligence');
  const [counselingSubmitted, setCounselingSubmitted] = useState(false);

  const handleCounselingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCounselingSubmitted(true);
    onNotify('1-on-1 Career Session Request Submitted!');
    setTimeout(() => {
      window.open(
        `https://wa.me/923096663330?text=Hi%20Nexskill%20Admissions%2C%20My%20Name%20is%20${encodeURIComponent(
          counselingName
        )}.%20I%20want%20a%20free%201-on-1%20career%20session%20for%20${encodeURIComponent(
          counselingDomain
        )}.`,
        '_blank'
      );
    }, 600);
  };

  // Featured courses for Home
  const featuredCourses = COURSES.slice(0, 3);
  const featuredCampuses = CAMPUSES.slice(0, 2);

  return (
    <div className="flex flex-col w-full relative">
      {/* Dynamic Ambient Glow Backdrops */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-[#FF3B30]/15 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-72 -right-20 w-60 h-60 bg-[#4cd7f6]/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Hero Identity & Accreditations */}
        <div className="px-4 pt-3 pb-6 flex flex-col gap-4 relative z-10">
          {/* Elite Status Badge */}
          <div className="inline-flex items-center gap-2 self-start bg-[#161D2F] border border-[#2A364F] px-3 py-1.5 rounded-full shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B30] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3B30]"></span>
            </span>
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11px] uppercase tracking-wider text-[#F9FAFB]">
              🏆 Pakistan&apos;s #1 IT Institute
            </span>
          </div>

          {/* Main Title & Value Prop */}
          <div className="flex flex-col gap-2">
            <h1 className="font-['Plus_Jakarta_Sans'] text-[28px] sm:text-[36px] font-extrabold leading-[1.2] tracking-tight text-[#F9FAFB]">
              Transform Your Career with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9FAFB] via-[#FF3B30] to-[#4cd7f6]">
                AI-Powered Tech
              </span>{' '}
              Education
            </h1>
            <p className="font-['Inter'] text-sm text-[#94A3B8] leading-relaxed">
              Master cutting-edge software engineering, generative AI, and cybersecurity at Pakistan&apos;s premier IT institution with direct job placements.
            </p>
          </div>

          {/* Government & Institutional Trust Pills */}
          <div className="flex items-center flex-wrap gap-1.5 pt-0.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#161D2F] border border-[#2A364F] text-[#4cd7f6] font-['Inter'] text-xs font-medium">
              <span
                className="material-symbols-outlined text-sm text-[#10B981]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span>NAVTTC Approved</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#161D2F] border border-[#2A364F] text-[#F9FAFB] font-['Inter'] text-xs font-medium">
              <span
                className="material-symbols-outlined text-sm text-[#4cd7f6]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span>PSDF Certified</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#161D2F] border border-[#2A364F] text-[#F9FAFB] font-['Inter'] text-xs font-medium">
              <span
                className="material-symbols-outlined text-sm text-[#FF3B30]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span>TEVTA Recognized</span>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-1 gap-2.5 pt-1.5">
            <button
              onClick={() => onOpenEnroll()}
              className="w-full h-12 bg-[#FF3B30] hover:bg-[#ff544a] text-[#F9FAFB] font-['Inter'] font-semibold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#FF3B30]/25 active:scale-[0.98] transition-all"
            >
              <span>Enroll Now (Job Ready 2026)</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
            <a
              className="w-full h-12 bg-[#161D2F] border border-[#2A364F] text-[#F9FAFB] font-['Inter'] font-semibold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-[#1E293B] active:scale-[0.98] transition-all"
              href="https://wa.me/923096663330?text=Hello%20Nexskill%2C%20I%20want%20to%20consult%20with%20an%20admissions%20counselor%20regarding%202026%20programs."
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[#10B981] text-xl">chat</span>
              <span>WhatsApp Counselor (+92 309 666 3330)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Live Verified Proof Numbers */}
      <div className="px-4 py-2 w-full">
        <div className="bg-[#161D2F] border border-[#2A364F] rounded-2xl p-4 shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#F9FAFB] font-extrabold tracking-tight">
                18,000+
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mt-0.5">
                Successful Alumni
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#FF3B30] font-extrabold tracking-tight">
                  85%
                </span>
                <span className="material-symbols-outlined text-[#FF3B30] text-xl">
                  trending_up
                </span>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mt-0.5">
                Placement Rate
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#4cd7f6] font-extrabold tracking-tight">
                200+
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mt-0.5">
                Industry Partners
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#F9FAFB] font-extrabold tracking-tight">
                  4.8
                </span>
                <div className="flex text-[#FF3B30]">
                  <span
                    className="material-symbols-outlined text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mt-0.5">
                Student Rating
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate & Academia Marquee Strip */}
      <div className="w-full py-4 mt-1 overflow-hidden flex flex-col gap-2">
        <div className="px-4 flex items-center justify-between">
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] uppercase tracking-widest font-bold">
            Hiring &amp; Academic Partners
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#4cd7f6] font-bold">
            Direct Placement MoUs
          </span>
        </div>
        <div className="relative w-full overflow-hidden flex bg-[#161D2F]/50 border-y border-[#2A364F]/50 py-2">
          <div className="animate-marquee gap-3 px-2">
            {[
              'LUMS',
              'PITB',
              'HBL Digital',
              'Purelogics',
              'Programmers Force',
              'UCP',
              'Game Storm Studios',
              'Ozi Pub',
              'Alkhidmat',
              'SSUET',
              'Techlogix',
              'Arbisoft',
              'LUMS',
              'PITB',
              'HBL Digital',
              'Purelogics',
            ].map((company, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[#161D2F] border border-[#2A364F] text-[#F9FAFB] font-['Inter'] text-xs font-semibold whitespace-nowrap"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Featured AI Bootcamps Section */}
      <section className="px-4 pt-4 pb-2 flex flex-col gap-3.5" id="flagship-courses">
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-[#FF3B30]">
              <span className="material-symbols-outlined text-sm">bolt</span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider">
                High Placement In-Demand
              </span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#F9FAFB]">
              Featured AI Bootcamps
            </h2>
          </div>
          <button
            onClick={() => onSelectTab('courses')}
            className="font-['Inter'] text-xs font-semibold text-[#4cd7f6] flex items-center gap-0.5 hover:underline"
          >
            <span>View all</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>

        {/* Featured Course Cards */}
        {featuredCourses.map((course, idx) => (
          <div
            key={course.id}
            className="bg-[#161D2F] border border-[#2A364F] rounded-2xl p-4 flex flex-col gap-3.5 shadow-md relative overflow-hidden group hover:border-[#4cd7f6]/50 transition-all"
          >
            {idx === 0 && (
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF3B30] via-[#4cd7f6] to-[#FF3B30]"></div>
            )}
            <div className="flex items-start justify-between gap-2 pt-0.5">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-[#FF3B30]/20 text-[#FF3B30] font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold">
                  {course.badge || 'Flagship Track'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#1E293B] text-[#94A3B8] font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-semibold">
                  {course.duration}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[#10B981] font-['Inter'] text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                Seats Open
              </span>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-xl bg-[#1E293B] border border-[#2A364F] flex items-center justify-center shrink-0 text-[#FF3B30]">
                <span className="material-symbols-outlined text-2xl">{course.icon}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB] truncate">
                  {course.title}
                </h3>
                <p className="font-['Inter'] text-xs text-[#94A3B8] line-clamp-1">
                  {course.subtitle}
                </p>
              </div>
            </div>

            <div className="bg-[#1E293B]/70 rounded-xl p-2.5 flex items-center justify-between border border-[#2A364F]/50">
              <div className="flex flex-col">
                <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] uppercase font-bold">
                  Mode of Study
                </span>
                <span className="font-['Inter'] text-xs text-[#F9FAFB] font-medium">
                  {course.mode}
                </span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] uppercase font-bold">
                  Target Role Salary
                </span>
                <span className="font-['Inter'] text-xs text-[#4cd7f6] font-bold">
                  {course.targetSalary}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => onOpenEnroll(course)}
                className="flex-1 h-11 bg-[#FF3B30] hover:bg-[#ff544a] text-[#F9FAFB] font-['Inter'] text-xs font-bold rounded-xl active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shadow-md shadow-[#FF3B30]/20"
              >
                <span>Apply For Batch</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
              <button
                aria-label="Course Details"
                onClick={() => onOpenCurriculum(course)}
                className="w-11 h-11 bg-[#1E293B] hover:bg-[#262a35] text-[#F9FAFB] border border-[#2A364F] rounded-xl flex items-center justify-center active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-lg">description</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Book 1-on-1 Career Session Interactive Form */}
      <section className="px-4 py-5">
        <div className="bg-gradient-to-b from-[#161D2F] to-[#1E293B] border border-[#2A364F] rounded-2xl p-4 shadow-xl flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#FF3B30]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#FF3B30]/20 text-[#FF3B30] flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">support_agent</span>
            </span>
            <div className="flex flex-col">
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
                Book Free 1-on-1 Career Session
              </h3>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] uppercase font-bold tracking-wider">
                Personalized Tech Roadmap
              </span>
            </div>
          </div>

          <form onSubmit={handleCounselingSubmit} className="flex flex-col gap-2.5 pt-1">
            <div className="flex flex-col gap-1">
              <label className="font-['Inter'] text-xs text-[#94A3B8] font-medium">
                Full Name
              </label>
              <input
                className="w-full h-11 px-3 rounded-xl bg-[#0f131d] text-[#F9FAFB] placeholder:text-[#64748B] border border-[#2A364F] focus:outline-none focus:border-[#FF3B30] font-['Inter'] text-xs"
                placeholder="e.g. Daniyal Ahmed"
                required
                type="text"
                value={counselingName}
                onChange={(e) => setCounselingName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-['Inter'] text-xs text-[#94A3B8] font-medium">
                Phone / WhatsApp Number
              </label>
              <input
                className="w-full h-11 px-3 rounded-xl bg-[#0f131d] text-[#F9FAFB] placeholder:text-[#64748B] border border-[#2A364F] focus:outline-none focus:border-[#FF3B30] font-['Inter'] text-xs"
                placeholder="03096663330 or +92..."
                required
                type="tel"
                value={counselingPhone}
                onChange={(e) => setCounselingPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-['Inter'] text-xs text-[#94A3B8] font-medium">
                Select Target Tech Domain
              </label>
              <div className="relative">
                <select
                  value={counselingDomain}
                  onChange={(e) => setCounselingDomain(e.target.value)}
                  className="w-full h-11 px-3 pr-8 rounded-xl bg-[#0f131d] text-[#F9FAFB] border border-[#2A364F] focus:outline-none focus:border-[#FF3B30] font-['Inter'] text-xs appearance-none"
                >
                  <option>Full Stack Artificial Intelligence</option>
                  <option>Software Engineering with AI</option>
                  <option>Advance Cyber Security</option>
                  <option>Digital Growth Marketing with AI</option>
                  <option>Flutter Dart with AI</option>
                  <option>Advance UI/UX &amp; Graphic Design</option>
                </select>
                <span className="material-symbols-outlined text-[#64748B] absolute right-3 top-3 pointer-events-none text-base">
                  expand_more
                </span>
              </div>
            </div>

            <button
              className="w-full h-12 bg-[#FF3B30] hover:bg-[#ff544a] text-[#F9FAFB] font-['Inter'] font-bold text-xs rounded-xl flex items-center justify-center gap-2 mt-1 active:scale-[0.98] transition-all shadow-md shadow-[#FF3B30]/20"
              type="submit"
            >
              <span>Start Conversation</span>
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </form>

          {counselingSubmitted && (
            <div className="flex items-center gap-2 p-3 bg-[#0f131d] border border-[#10B981]/50 rounded-xl text-[#10B981] animate-in fade-in">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              <span className="font-['Inter'] text-xs">
                Thank you! An admissions counselor will call you within 15 minutes.
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Nexskill Bento Grid */}
      <section className="px-4 py-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#FF3B30] uppercase tracking-wider font-bold">
            Unrivaled Career Advantage
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#F9FAFB]">
            Why Train at Nexskill
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {/* Bento 1: Full Width */}
          <div className="col-span-2 bg-[#161D2F] border border-[#2A364F] rounded-2xl p-4 flex items-center justify-between shadow-sm">
            <div className="flex flex-col gap-1 max-w-[70%]">
              <div className="w-8 h-8 rounded-lg bg-[#FF3B30]/20 text-[#FF3B30] flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">hub</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
                Job Placement Cell
              </h3>
              <p className="font-['Inter'] text-xs text-[#94A3B8] leading-snug">
                85% placement rate with direct corporate referral to 200+ partner software houses.
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[#1E293B] border border-[#2A364F] flex items-center justify-center text-[#FF3B30]">
              <span className="material-symbols-outlined text-3xl">verified_user</span>
            </div>
          </div>

          {/* Bento 2 */}
          <div className="col-span-1 bg-[#161D2F] border border-[#2A364F] rounded-2xl p-3.5 flex flex-col gap-2 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-[#4cd7f6]/20 text-[#4cd7f6] flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">terminal</span>
            </div>
            <h4 className="font-['Inter'] text-xs text-[#F9FAFB] font-bold">Lab Experience</h4>
            <p className="font-['Inter'] text-xs text-[#64748B] leading-tight">
              Modern high-spec iMac and RTX labs across campuses.
            </p>
          </div>

          {/* Bento 3 */}
          <div className="col-span-1 bg-[#161D2F] border border-[#2A364F] rounded-2xl p-3.5 flex flex-col gap-2 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-[#10B981]/20 text-[#10B981] flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">group</span>
            </div>
            <h4 className="font-['Inter'] text-xs text-[#F9FAFB] font-bold">Alumni Network</h4>
            <p className="font-['Inter'] text-xs text-[#64748B] leading-tight">
              Lifetime peer access, code reviews &amp; career meetups.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Quick Locator Section */}
      <section className="px-4 py-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#4cd7f6] uppercase tracking-wider font-bold">
              Physical Classrooms
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#F9FAFB]">
              Our Campus Centers
            </h2>
          </div>
          <button
            onClick={() => onSelectTab('campuses')}
            className="px-2 py-0.5 rounded-full bg-[#161D2F] border border-[#2A364F] text-[#10B981] font-['Plus_Jakarta_Sans'] text-[10px] font-bold"
          >
            5 Campuses &rarr;
          </button>
        </div>

        {featuredCampuses.map((camp) => (
          <div
            key={camp.id}
            className="bg-[#161D2F] border border-[#2A364F] rounded-2xl p-3.5 flex flex-col gap-2.5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#F9FAFB]">
                    {camp.name}
                  </h3>
                </div>
                <span className="font-['Inter'] text-xs text-[#64748B]">{camp.address}</span>
              </div>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#10B981] bg-[#1E293B] border border-[#2A364F] px-2 py-0.5 rounded-md font-bold">
                Open Now
              </span>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <a
                className="flex-1 h-9 bg-[#1E293B] text-[#F9FAFB] rounded-lg font-['Inter'] text-xs font-semibold flex items-center justify-center gap-1 hover:bg-[#262a35] transition-all"
                href={camp.gmapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-sm text-[#4cd7f6]">near_me</span>
                <span>Google Maps</span>
              </a>
              <a
                className="h-9 px-3 bg-[#1E293B] text-[#F9FAFB] rounded-lg font-['Inter'] text-xs font-semibold flex items-center justify-center gap-1 hover:bg-[#262a35] transition-all"
                href={`tel:${camp.cleanPhone}`}
              >
                <span className="material-symbols-outlined text-sm text-[#FF3B30]">call</span>
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Become an Instructor / Franchise Growth Cards */}
      <section className="px-4 py-4 flex flex-col gap-2.5">
        <div className="bg-[#161D2F] border border-[#2A364F] rounded-2xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex flex-col gap-1 max-w-[75%]">
            <div className="flex items-center gap-1.5 text-[#FF3B30]">
              <span className="material-symbols-outlined text-base">co_present</span>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold tracking-wider">
                Careers at Nexskill
              </span>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#F9FAFB]">
              Become an Instructor
            </h3>
            <p className="font-['Inter'] text-xs text-[#64748B]">
              Join our elite faculty of lead software architects and AI researchers.
            </p>
          </div>
          <a
            href="tel:+923096663330"
            className="w-10 h-10 rounded-xl bg-[#1E293B] text-[#F9FAFB] flex items-center justify-center active:scale-95 hover:bg-[#262a35]"
          >
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
        </div>

        <div className="bg-[#161D2F] border border-[#2A364F] rounded-2xl p-4 flex items-center justify-between shadow-sm">
          <div className="flex flex-col gap-1 max-w-[75%]">
            <div className="flex items-center gap-1.5 text-[#4cd7f6]">
              <span className="material-symbols-outlined text-base">storefront</span>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold tracking-wider">
                Business Opportunity
              </span>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#F9FAFB]">
              Start a Nexskill Franchise
            </h3>
            <p className="font-['Inter'] text-xs text-[#64748B]">
              Bring premier tech and AI education to your city.
            </p>
          </div>
          <button
            onClick={() => {
              window.open(
                'https://wa.me/923096663330?text=Hi%2C%20I%20am%20interested%20in%20opening%20a%20Nexskill%20Franchise.',
                '_blank'
              );
              onNotify('Connecting to Franchise Desk...');
            }}
            className="w-10 h-10 rounded-xl bg-[#1E293B] text-[#F9FAFB] flex items-center justify-center active:scale-95 hover:bg-[#262a35]"
          >
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* Floating Mobile Sticky Conversion Bar */}
      <aside className="sticky bottom-20 inset-x-0 px-4 py-2 z-40">
        <div className="w-full bg-[#161D2F]/95 backdrop-blur-xl border border-[#FF3B30]/30 rounded-2xl p-2.5 shadow-2xl flex items-center justify-between gap-3">
          <div className="flex flex-col pl-1.5">
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#4cd7f6] font-bold uppercase tracking-wider">
              Admissions 2026
            </span>
            <span className="font-['Inter'] text-xs text-[#F9FAFB] font-extrabold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] animate-ping"></span>
              Few Seats Left
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              aria-label="Quick Call"
              className="w-10 h-10 rounded-xl bg-[#1E293B] text-[#F9FAFB] border border-[#2A364F] flex items-center justify-center active:scale-95 hover:bg-[#262a35]"
              href="tel:+923096663330"
            >
              <span className="material-symbols-outlined text-lg">call</span>
            </a>
            <button
              onClick={() => onOpenEnroll()}
              className="h-10 px-4 rounded-xl bg-[#FF3B30] text-[#F9FAFB] font-['Inter'] text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md shadow-[#FF3B30]/20"
            >
              <span>Apply Now</span>
              <span className="material-symbols-outlined text-base">bolt</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};
