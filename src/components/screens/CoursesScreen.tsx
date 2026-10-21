import React, { useState, useMemo } from 'react';
import { Course } from '../../types';
import { COURSES } from '../../data/coursesData';

interface CoursesScreenProps {
  onOpenCurriculum: (course: Course) => void;
  onOpenEnroll: (course?: Course) => void;
  onNotify: (msg: string) => void;
}

export const CoursesScreen: React.FC<CoursesScreenProps> = ({
  onOpenCurriculum,
  onOpenEnroll,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTrack, setSelectedTrack] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'ai', label: 'AI & Data' },
    { id: 'web', label: 'Web Dev' },
    { id: 'security', label: 'Cyber Security' },
    { id: 'design', label: 'Design & UI' },
    { id: 'marketing', label: 'Growth Mktg' },
  ];

  const tracks = [
    { id: 'all', label: 'All Tracks' },
    { id: 'bootcamp', label: 'Job-Ready 2026' },
    { id: 'fast', label: 'Fast-Track (3M)' },
  ];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesCat =
        selectedCategory === 'all' || course.category === selectedCategory;
      const matchesTrack =
        selectedTrack === 'all' || course.track === selectedTrack;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.subtitle.toLowerCase().includes(q) ||
        course.skills.some((s) => s.toLowerCase().includes(q));

      return matchesCat && matchesTrack && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedTrack]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTrack('all');
  };

  return (
    <div className="flex flex-col w-full text-[#dfe2f1]">
      {/* Ambient Backdrop Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-44 bg-[#FF3B30]/15 blur-[90px] rounded-full pointer-events-none"></div>
        <div className="absolute top-48 -right-16 w-56 h-56 bg-[#4cd7f6]/10 blur-[80px] rounded-full pointer-events-none"></div>

        {/* Screen Title & Value Proposition */}
        <section className="px-4 pt-3 pb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1E293B] border border-[#2A364F] text-[#4cd7f6]">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-[10px] uppercase tracking-wider">
                NAVTTC • PSDF • TEVTA
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#64748B]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold uppercase text-[#94A3B8]">
                Batch 2026 Admissions
              </span>
            </div>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-[#F9FAFB] tracking-tight mb-1">
            Master Modern{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B30] via-[#ff544a] to-[#4cd7f6]">
              AI &amp; Tech
            </span>{' '}
            Careers
          </h1>
          <p className="font-['Inter'] text-xs text-[#94A3B8] leading-relaxed">
            Pakistan&apos;s #1 career-transformation curriculum with 85% verified placements and hands-on production labs.
          </p>

          {/* Key Trust Metrics Strip */}
          <div className="grid grid-cols-3 gap-2 mt-3.5">
            <div className="p-2.5 rounded-xl bg-[#161D2F] border border-[#2A364F] flex flex-col shadow-sm">
              <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#F9FAFB]">
                85%
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] uppercase font-bold">
                Placement Rate
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#161D2F] border border-[#2A364F] flex flex-col shadow-sm">
              <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#4cd7f6]">
                18,000+
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] uppercase font-bold">
                Tech Alumni
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#161D2F] border border-[#2A364F] flex flex-col shadow-sm">
              <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#FF3B30]">
                200+
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] uppercase font-bold">
                Hiring Partners
              </span>
            </div>
          </div>
        </section>

        {/* Search & Filter Sticky Bar */}
        <section className="sticky top-16 z-30 px-4 py-2 bg-[#0f131d]/95 backdrop-blur-md border-b border-[#2A364F]/50">
          <div className="relative w-full mb-2">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B] text-xl pointer-events-none">
              search
            </span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-10 rounded-xl bg-[#161D2F] text-[#F9FAFB] placeholder:text-[#64748B] font-['Inter'] text-xs border border-[#2A364F] focus:outline-none focus:border-[#4cd7f6] transition-colors"
              placeholder="Search AI, MERN, Pentesting, Flutter, UI/UX..."
              type="text"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#F9FAFB]"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            )}
          </div>

          {/* Domain Category Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 h-8 px-3.5 rounded-full font-['Inter'] text-xs font-semibold transition-all active:scale-95 border ${
                    active
                      ? 'bg-[#FF3B30] border-[#FF3B30] text-white shadow-sm'
                      : 'bg-[#161D2F] border-[#2A364F] text-[#94A3B8] hover:text-[#F9FAFB]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Certification Track Segment Control */}
        <section className="px-4 py-2">
          <div className="p-1 rounded-xl bg-[#1c1f2a] border border-[#2A364F] flex items-center gap-1 shadow-inner">
            {tracks.map((t) => {
              const active = selectedTrack === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTrack(t.id)}
                  className={`flex-1 h-9 rounded-lg font-['Inter'] text-[11px] leading-tight text-center font-bold transition-all flex items-center justify-center gap-1 ${
                    active
                      ? 'bg-[#1E293B] text-[#F9FAFB] border border-[#2A364F] shadow-sm'
                      : 'text-[#64748B] hover:text-[#94A3B8]'
                  }`}
                >
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]"></span>}
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Counter & Indicator */}
        <div className="px-4 py-1.5 flex items-center justify-between text-[#64748B]">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-[#4cd7f6]">bolt</span>
            <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#94A3B8]">
              Showing <strong className="text-[#F9FAFB] font-bold">{filteredCourses.length}</strong> flagship programs
            </span>
          </div>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#FF3B30] font-bold">
            Limited Seats (Spring 2026)
          </span>
        </div>

        {/* Course Cards Feed */}
        <section className="px-4 py-2 flex flex-col gap-4">
          {filteredCourses.map((course) => (
            <article
              key={course.id}
              className="relative rounded-2xl bg-[#161D2F] border border-[#2A364F] p-4 shadow-xl flex flex-col overflow-hidden transition-all duration-300 hover:border-[#4cd7f6]/50"
            >
              {course.badge?.includes('Flagship') && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF3B30] via-[#ff544a] to-[#4cd7f6]"></div>
              )}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-[#FF3B30]/15 text-[#FF3B30] font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-bold tracking-wider">
                    {course.trackLabel}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1E293B] text-[#4cd7f6] font-['Plus_Jakarta_Sans'] text-[10px] uppercase font-semibold">
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981]">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold">
                    {course.placementRate || '85% Placed'}
                  </span>
                </div>
              </div>

              <h2 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB] tracking-tight mb-1">
                {course.title}
              </h2>
              <p className="font-['Inter'] text-xs text-[#94A3B8] mb-3 leading-relaxed">
                {course.subtitle}
              </p>

              {/* Syllabus Preview Pills */}
              <div className="flex flex-wrap gap-1.5 mb-3.5">
                {course.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md bg-[#1E293B] border border-[#2A364F] text-[#94A3B8] font-['Plus_Jakarta_Sans'] text-[10px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Meta Logistics */}
              <div className="p-2.5 rounded-xl bg-[#1c1f2a] border border-[#2A364F]/50 flex items-center justify-between text-[#64748B] mb-3.5">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#4cd7f6]">
                    calendar_today
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#94A3B8]">
                    Starts: {course.startDate}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#F9FAFB]">
                    apartment
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#94A3B8]">
                    {course.campuses}
                  </span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => onOpenCurriculum(course)}
                  className="flex-1 h-11 rounded-xl bg-[#1E293B] text-[#F9FAFB] font-['Inter'] text-xs font-semibold active:scale-95 transition-transform hover:bg-[#262a35] border border-[#2A364F] flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">menu_book</span>
                  <span>Curriculum</span>
                </button>
                <button
                  onClick={() => onOpenEnroll(course)}
                  className="flex-1 h-11 rounded-xl bg-[#FF3B30] text-white font-['Inter'] text-xs font-bold active:scale-95 transition-transform flex items-center justify-center gap-1.5 shadow-lg shadow-[#FF3B30]/20"
                >
                  <span>Register Now</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </article>
          ))}

          {/* Empty Search State */}
          {filteredCourses.length === 0 && (
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#161D2F] border border-[#2A364F] text-center my-4">
              <div className="w-14 h-14 rounded-full bg-[#1E293B] flex items-center justify-center text-[#64748B] mb-3">
                <span className="material-symbols-outlined text-3xl">search_off</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB] mb-1">
                No Matching Courses Found
              </h3>
              <p className="font-['Inter'] text-xs text-[#94A3B8] mb-4 max-w-xs">
                We couldn&apos;t find a program matching &quot;{searchQuery}&quot;. Try adjusting your filters or talk directly to our counselors.
              </p>
              <button
                onClick={handleResetFilters}
                className="h-10 px-4 rounded-xl bg-[#1E293B] border border-[#2A364F] text-[#4cd7f6] font-['Inter'] text-xs font-semibold hover:bg-[#262a35]"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

        {/* Free Career Counseling Quick Bar */}
        <section className="px-4 py-4 mt-2">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#161D2F] to-[#1c1f2a] border border-[#2A364F] flex flex-col gap-3 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#FF3B30] text-2xl">
                  support_agent
                </span>
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-sm text-[#F9FAFB] font-bold">
                    Free 1-on-1 Career Counseling
                  </h4>
                  <p className="font-['Inter'] text-[11px] text-[#94A3B8]">
                    Confused between AI, MERN, Pentesting or Cyber Security?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <a
                className="flex-1 h-11 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-['Inter'] text-xs font-bold flex items-center justify-center gap-2 active:scale-95 shadow-md transition-all"
                href="https://wa.me/923096663330?text=Hi%20Nexskill%2C%20I%20need%20guidance%20on%202026%20courses"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>WhatsApp Desk</span>
              </a>
              <a
                className="h-11 px-4 rounded-xl bg-[#1E293B] border border-[#2A364F] text-[#F9FAFB] font-['Inter'] text-xs font-semibold flex items-center justify-center gap-1 active:scale-95 hover:bg-[#262a35] transition-all"
                href="tel:+923096663330"
              >
                <span className="material-symbols-outlined text-lg text-[#FF3B30]">call</span>
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        </section>

        {/* Accreditation Footer Micro-Banner */}
        <section className="px-4 pt-1 pb-6 text-center">
          <p className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] mb-2 tracking-wide uppercase font-bold">
            Recognized Credentials &amp; Partners
          </p>
          <div className="flex items-center justify-center flex-wrap gap-2 text-[#94A3B8]">
            <span className="px-2.5 py-1 rounded-md bg-[#161D2F] border border-[#2A364F] font-['Plus_Jakarta_Sans'] text-[10px]">
              NAVTTC Approved
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#161D2F] border border-[#2A364F] font-['Plus_Jakarta_Sans'] text-[10px]">
              PSDF Certified
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#161D2F] border border-[#2A364F] font-['Plus_Jakarta_Sans'] text-[10px]">
              TEVTA Recognized
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#161D2F] border border-[#2A364F] font-['Plus_Jakarta_Sans'] text-[10px]">
              200+ Corporate MOUs
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
