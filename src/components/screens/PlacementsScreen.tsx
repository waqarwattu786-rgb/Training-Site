import React, { useState } from 'react';
import { ALUMNI, PARTNERS } from '../../data/alumniData';

interface PlacementsScreenProps {
  onNotify: (msg: string) => void;
  onOpenEnroll: () => void;
}

export const PlacementsScreen: React.FC<PlacementsScreenProps> = ({
  onNotify,
  onOpenEnroll,
}) => {
  // Candidate form state
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateDomain, setCandidateDomain] = useState('Full Stack Artificial Intelligence');
  const [submitted, setSubmitted] = useState(false);

  // Recruiter vs Student modal toggle
  const [jobFestModal, setJobFestModal] = useState<'candidate' | 'recruiter' | null>(null);
  const [recruiterCompany, setRecruiterCompany] = useState('');
  const [recruiterRoles, setRecruiterRoles] = useState('');

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onNotify('Profile Submitted to 200+ Hiring Partners!');
    setTimeout(() => {
      window.open(
        `https://wa.me/923096663330?text=Hi%20NexTalent%20Placement%20Cell%2C%20My%20Name%20is%20${encodeURIComponent(
          candidateName
        )}.%20Phone:%20${encodeURIComponent(
          candidatePhone
        )}.%20I%20have%20submitted%20my%20career%20profile%20for%20${encodeURIComponent(
          candidateDomain
        )}%20placement%20matching.`,
        '_blank'
      );
    }, 800);
  };

  const handleRecruiterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNotify('Recruiter Request Sent! Placement Director will contact you.');
    setJobFestModal(null);
  };

  return (
    <div className="flex flex-col w-full px-4 space-y-6 text-[#dfe2f1]">
      {/* Verification Pill & Mission Micro-Hero */}
      <section className="flex flex-col gap-3 pt-2">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#161D2F] border border-[#2A364F]">
          <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-pulse"></span>
          <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11px] text-[#4cd7f6] tracking-wide uppercase">
            Official NexTalent Placement Cell
          </span>
          <span
            className="material-symbols-outlined text-[#10B981] text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-[#F9FAFB] tracking-tight">
            Bridging the Gap Between{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B30] via-[#4cd7f6] to-[#F9FAFB]">
              Talent &amp; Industry Careers
            </span>
          </h1>
          <p className="font-['Inter'] text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Direct corporate pipelines, AI-driven portfolio vetting, and institutional job fests delivering verified market entry for Pakistani engineers.
          </p>
        </div>

        {/* Accreditations Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#161D2F] border border-[#2A364F] shrink-0">
            <span className="material-symbols-outlined text-[#4cd7f6] text-xs">verified_user</span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#F9FAFB]">
              NAVTTC Approved
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#161D2F] border border-[#2A364F] shrink-0">
            <span className="material-symbols-outlined text-[#4cd7f6] text-xs">workspace_premium</span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#F9FAFB]">
              PSDF Certified
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#161D2F] border border-[#2A364F] shrink-0">
            <span className="material-symbols-outlined text-[#4cd7f6] text-xs">school</span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#F9FAFB]">
              TEVTA Recognized
            </span>
          </div>
        </div>
      </section>

      {/* High-Impact Placement Metric Blocks */}
      <section className="grid grid-cols-3 gap-2.5">
        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#161D2F] border border-[#2A364F] shadow-md text-center">
          <span className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-[#FF3B30] leading-none">
            85%
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mt-1.5">
            Placement Rate
          </span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#161D2F] border border-[#2A364F] shadow-md text-center">
          <span className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-[#4cd7f6] leading-none">
            18K+
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mt-1.5">
            Alumni Placed
          </span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#161D2F] border border-[#2A364F] shadow-md text-center">
          <span className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-[#F9FAFB] leading-none">
            200+
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider mt-1.5">
            Hiring Nodes
          </span>
        </div>
      </section>

      {/* Dual Toggle CTA: Job Fest 2026 */}
      <section className="p-4 rounded-xl bg-[#161D2F] border border-[#2A364F] shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#FF3B30] text-xl">rocket_launch</span>
            <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
              Nexskill Job Fest 2026
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#1E293B] border border-[#2A364F] font-['Plus_Jakarta_Sans'] text-[10px] text-[#4cd7f6] tracking-wide uppercase font-bold">
            Active Round
          </span>
        </div>
        <p className="font-['Inter'] text-xs text-[#94A3B8] pb-4 leading-relaxed">
          Join 7,000+ documented success stories. Rapid screening, on-spot interviews, and corporate placements happening daily across Lahore, Karachi &amp; Mian Channu centers.
        </p>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => {
              setJobFestModal('candidate');
              onNotify('Job Fest Application Form Loaded');
            }}
            className="flex items-center justify-center gap-1.5 h-12 px-3 rounded-xl bg-[#FF3B30] hover:bg-[#ff544a] text-white font-['Inter'] text-xs font-bold shadow-lg shadow-[#FF3B30]/20 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-base">send</span>
            <span>Apply for Fest</span>
          </button>
          <button
            onClick={() => {
              setJobFestModal('recruiter');
              onNotify('Recruiter Desk Connected');
            }}
            className="flex items-center justify-center gap-1.5 h-12 px-3 rounded-xl bg-[#1E293B] text-[#F9FAFB] font-['Inter'] text-xs font-semibold border border-[#2A364F] active:scale-95 transition-transform hover:bg-[#262a35]"
          >
            <span className="material-symbols-outlined text-base text-[#4cd7f6]">
              corporate_fare
            </span>
            <span>Hire Grads</span>
          </button>
        </div>
      </section>

      {/* 4-Step Placement Roadmap Flow */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6] text-xl">
              conversion_path
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
              Placement Pipeline
            </h2>
          </div>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#64748B] uppercase font-bold">
            4 Phase Readiness
          </span>
        </div>

        <div className="flex flex-col gap-3 relative">
          {/* Step 1 */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#161D2F] border border-[#2A364F] shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#1E293B] border border-[#2A364F] flex items-center justify-center shrink-0 text-[#4cd7f6] font-['Plus_Jakarta_Sans'] text-sm font-bold">
              01
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-['Inter'] text-xs font-semibold text-[#F9FAFB]">
                  Technical Mastery &amp; AI Capstone
                </span>
                <span className="material-symbols-outlined text-[#4cd7f6] text-sm">memory</span>
              </div>
              <p className="font-['Inter'] text-xs text-[#94A3B8] mt-1 leading-relaxed">
                Production-grade sprint building real apps under direct senior engineer supervision. End-to-end fullstack AI architecture.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#161D2F] border border-[#2A364F] shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#1E293B] border border-[#2A364F] flex items-center justify-center shrink-0 text-[#FF3B30] font-['Plus_Jakarta_Sans'] text-sm font-bold">
              02
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-['Inter'] text-xs font-semibold text-[#F9FAFB]">
                  Soft Skills &amp; Leadership Lab
                </span>
                <span className="material-symbols-outlined text-[#FF3B30] text-sm">
                  record_voice_over
                </span>
              </div>
              <p className="font-['Inter'] text-xs text-[#94A3B8] mt-1 leading-relaxed">
                Mock executive panels, team communication, and negotiation protocols. Yields 95% confidence uplift and 90% interview clearance.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-0.5 rounded bg-[#1E293B] border border-[#2A364F] font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#10B981]">
                  +95% Confidence
                </span>
                <span className="px-2 py-0.5 rounded bg-[#1E293B] border border-[#2A364F] font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#4cd7f6]">
                  90% First-Round Pass
                </span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#161D2F] border border-[#2A364F] shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#1E293B] border border-[#2A364F] flex items-center justify-center shrink-0 text-[#F9FAFB] font-['Plus_Jakarta_Sans'] text-sm font-bold">
              03
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-['Inter'] text-xs font-semibold text-[#F9FAFB]">
                  Resume &amp; GitHub Deep Scrub
                </span>
                <span className="material-symbols-outlined text-[#64748B] text-sm">terminal</span>
              </div>
              <p className="font-['Inter'] text-xs text-[#94A3B8] mt-1 leading-relaxed">
                Industry recruiters audit code repositories, live demo URLs, ATS-optimized CVs, and technical LinkedIn presences.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1E293B] border border-[#FF3B30]/30 shadow-md">
            <div className="w-9 h-9 rounded-lg bg-[#FF3B30]/20 flex items-center justify-center shrink-0 text-[#FF3B30] font-['Plus_Jakarta_Sans'] text-sm font-bold">
              04
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-['Inter'] text-xs font-semibold text-[#F9FAFB]">
                  Job Fest Direct Interviews
                </span>
                <span className="material-symbols-outlined text-[#10B981] text-sm">handshake</span>
              </div>
              <p className="font-['Inter'] text-xs text-[#94A3B8] mt-1 leading-relaxed">
                Guaranteed slot allocation with partnering software houses, fintech enterprises, and US/GCC remote dev desks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Hiring Stats Radar / Readiness Metrics */}
      <section className="p-4 rounded-xl bg-[#161D2F] border border-[#2A364F] shadow-lg flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
              Readiness Metrics
            </span>
            <span className="font-['Inter'] text-xs text-[#64748B]">Batch 2025-2026 Validation</span>
          </div>
          <span className="material-symbols-outlined text-[#4cd7f6]">query_stats</span>
        </div>

        <div className="space-y-3 pt-1">
          <div>
            <div className="flex justify-between font-['Inter'] text-xs pb-1 text-[#94A3B8]">
              <span>Technical Architecture Competency</span>
              <span className="text-[#F9FAFB] font-bold">96%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#1E293B] overflow-hidden">
              <div
                className="h-full bg-[#FF3B30] rounded-full transition-all duration-1000"
                style={{ width: '96%' }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between font-['Inter'] text-xs pb-1 text-[#94A3B8]">
              <span>AI Assisted Pair-Programming</span>
              <span className="text-[#F9FAFB] font-bold">92%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#1E293B] overflow-hidden">
              <div
                className="h-full bg-[#4cd7f6] rounded-full transition-all duration-1000"
                style={{ width: '92%' }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between font-['Inter'] text-xs pb-1 text-[#94A3B8]">
              <span>English &amp; Corporate Delivery</span>
              <span className="text-[#F9FAFB] font-bold">89%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#1E293B] overflow-hidden">
              <div
                className="h-full bg-[#10B981] rounded-full transition-all duration-1000"
                style={{ width: '89%' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring & Academic Alliances Grid */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
              Hiring &amp; Academic Alliances
            </h2>
            <p className="font-['Inter'] text-xs text-[#64748B]">
              Direct recruiting alliances &amp; institutional MOUs
            </p>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#161D2F] border border-[#2A364F] font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#4cd7f6]">
            200+ Active
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {PARTNERS.map((partner, pIdx) => (
            <div
              key={pIdx}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#161D2F] border border-[#2A364F] text-center hover:bg-[#1E293B] transition-colors"
            >
              <span className="font-['Inter'] text-xs font-bold text-[#F9FAFB]">
                {partner.name}
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[9px] text-[#64748B] mt-0.5">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Spotlights (Horizontal Scroll) */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
              Alumni Hires
            </h2>
            <p className="font-['Inter'] text-xs text-[#64748B]">
              Real careers transformed at Arfa Tower &amp; Campuses
            </p>
          </div>
          <span className="material-symbols-outlined text-[#FF3B30]">stars</span>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory no-scrollbar">
          {ALUMNI.map((alumnus) => (
            <div
              key={alumnus.id}
              className="snap-start shrink-0 w-[280px] p-4 rounded-xl bg-[#161D2F] border border-[#2A364F] flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 rounded-full object-cover border border-[#2A364F]"
                    alt={alumnus.name}
                    src={alumnus.photoUrl}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuBqqhHHTHZC88TE7Phu9LawdThp5Sa4oP_qQ7wveVLHm9l5ijo3qqjex6w0HUx7eepTbyh0iWVVFP23jgxZRoTfwF5hzygNeA8s1ANaKY3hydd1ripq3M2X7mds6cXHFPDv6o8tCY_CvrCm3OOJl12pNg05nE931cErmrk9u9o_NRp8lPBVFVqxeWtiwjKq76vxz0R9v3scWTQO30trjwC9m7M9IouG7e8xsMosqDJYOLZejcgUTpn4fw';
                    }}
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-['Inter'] text-xs font-bold text-[#F9FAFB] truncate">
                      {alumnus.name}
                    </span>
                    <span className="font-['Inter'] text-[11px] text-[#4cd7f6]">
                      {alumnus.role}
                    </span>
                    <span className="font-['Inter'] text-[10px] text-[#64748B]">
                      Placed at {alumnus.company}
                    </span>
                  </div>
                </div>
                <div className="mt-3 p-2.5 rounded-lg bg-[#1E293B] border border-[#2A364F]/50">
                  <p className="font-['Inter'] text-xs text-[#94A3B8] italic leading-relaxed">
                    &quot;{alumnus.quote}&quot;
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#2A364F]/40">
                <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#10B981] uppercase">
                  {alumnus.jump}
                </span>
                <span className="material-symbols-outlined text-[#10B981] text-sm">verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Physical Campus Direct Assistance Card */}
      <section className="p-4 rounded-xl bg-[#161D2F] border border-[#2A364F] shadow-lg flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#FF3B30] text-xl">apartment</span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
              In-Person Placement Desks
            </h3>
          </div>
          <span className="flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#10B981]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping"></span> Open
            10AM-9PM
          </span>
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <a
            className="flex items-center justify-between p-2.5 rounded-lg bg-[#1E293B] hover:bg-[#262a35] transition-colors border border-[#2A364F]"
            href="https://maps.app.goo.gl/eScw8ScfL5m1ojsY8"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-col min-w-0">
              <span className="font-['Inter'] text-xs font-semibold text-[#F9FAFB]">
                Lahore: Arfa Tower &amp; Garden Town
              </span>
              <span className="font-['Inter'] text-[11px] text-[#64748B] truncate">
                2nd Floor Arfa Software Tech Park / New Garden Town
              </span>
            </div>
            <span className="material-symbols-outlined text-[#4cd7f6] text-lg">near_me</span>
          </a>

          <a
            className="flex items-center justify-between p-2.5 rounded-lg bg-[#1E293B] hover:bg-[#262a35] transition-colors border border-[#2A364F]"
            href="https://maps.app.goo.gl/KW6Pj3u2dBxDFXSm8"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-col min-w-0">
              <span className="font-['Inter'] text-xs font-semibold text-[#F9FAFB]">
                Karachi: PARSA Tower
              </span>
              <span className="font-['Inter'] text-[11px] text-[#64748B] truncate">
                Office #608, Shahra-e-Faisal, Karachi
              </span>
            </div>
            <span className="material-symbols-outlined text-[#4cd7f6] text-lg">near_me</span>
          </a>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#1E293B] border border-[#2A364F]">
            <div className="flex flex-col min-w-0">
              <span className="font-['Inter'] text-xs font-semibold text-[#F9FAFB]">
                24/7 Placement Helpline
              </span>
              <span className="font-['Inter'] text-[11px] text-[#64748B]">
                +92 309 666 3330 • trainings@nexskill.com
              </span>
            </div>
            <a
              className="w-9 h-9 rounded-lg bg-[#FF3B30]/20 flex items-center justify-center text-[#FF3B30] hover:bg-[#FF3B30]/30 transition-colors"
              href="tel:+923096663330"
            >
              <span className="material-symbols-outlined text-lg">call</span>
            </a>
          </div>
        </div>
      </section>

      {/* Fast-Track Career Registration Form */}
      <section className="p-4 rounded-xl bg-[#161D2F] border border-[#2A364F] shadow-xl flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
              Fast-Track Career Registration
            </h3>
            <p className="font-['Inter'] text-xs text-[#64748B]">
              Submit credentials for immediate partner matching
            </p>
          </div>
          <span className="material-symbols-outlined text-[#4cd7f6]">badge</span>
        </div>

        <form onSubmit={handleRegistration} className="space-y-3 pt-1">
          <div className="space-y-1">
            <label className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#94A3B8] uppercase">
              Full Name
            </label>
            <input
              className="w-full h-11 px-3 rounded-lg bg-[#1E293B] border border-[#2A364F] text-[#F9FAFB] font-['Inter'] text-xs placeholder:text-[#64748B] focus:outline-none focus:border-[#FF3B30]"
              placeholder="e.g. Daniyal Tariq"
              required
              type="text"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#94A3B8] uppercase">
              WhatsApp / Contact Number
            </label>
            <input
              className="w-full h-11 px-3 rounded-lg bg-[#1E293B] border border-[#2A364F] text-[#F9FAFB] font-['Inter'] text-xs placeholder:text-[#64748B] focus:outline-none focus:border-[#FF3B30]"
              placeholder="03096663330 or +923096663330"
              required
              type="tel"
              value={candidatePhone}
              onChange={(e) => setCandidatePhone(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#94A3B8] uppercase">
              Field of Specialization
            </label>
            <select
              value={candidateDomain}
              onChange={(e) => setCandidateDomain(e.target.value)}
              className="w-full h-11 px-3 rounded-lg bg-[#1E293B] border border-[#2A364F] text-[#F9FAFB] font-['Inter'] text-xs focus:outline-none focus:border-[#FF3B30]"
            >
              <option>Full Stack Artificial Intelligence</option>
              <option>Software Engineering with AI</option>
              <option>Advance Cyber Security</option>
              <option>Digital Growth Marketing with AI</option>
              <option>Mobile App Development with AI</option>
              <option>UI/UX &amp; Product Design</option>
            </select>
          </div>

          <button
            className="w-full h-12 mt-2 rounded-xl bg-[#FF3B30] hover:bg-[#ff544a] text-[#F9FAFB] font-['Inter'] text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-[#FF3B30]/20"
            type="submit"
          >
            <span className="material-symbols-outlined text-lg">check_circle</span>
            <span>Submit for Placement Matching</span>
          </button>
        </form>

        {submitted && (
          <div className="p-3 rounded-xl bg-[#1c1f2a] border border-[#10B981]/50 flex items-center gap-2 text-[#10B981] animate-in fade-in">
            <span className="material-symbols-outlined text-lg">verified</span>
            <span className="text-xs">
              Candidate profile submitted! Placement Cell will review your GitHub/CV.
            </span>
          </div>
        )}
      </section>

      {/* Recruiter / Job Fest Modal */}
      {jobFestModal && (
        <div className="fixed inset-0 z-50 bg-[#0a0e18]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-[#161D2F] border border-[#2A364F] rounded-2xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#F9FAFB]">
                {jobFestModal === 'recruiter'
                  ? 'Hire Nexskill Graduates'
                  : 'Apply for Job Fest 2026'}
              </h3>
              <button
                onClick={() => setJobFestModal(null)}
                className="w-8 h-8 rounded-lg bg-[#1E293B] text-[#94A3B8] hover:text-[#F9FAFB] flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {jobFestModal === 'recruiter' ? (
              <form onSubmit={handleRecruiterSubmit} className="space-y-3">
                <p className="text-xs text-[#94A3B8]">
                  Connect with pre-vetted AI engineers, MERN developers, and cybersecurity analysts.
                </p>
                <div>
                  <label className="block text-[10px] font-bold text-[#94A3B8] uppercase mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={recruiterCompany}
                    onChange={(e) => setRecruiterCompany(e.target.value)}
                    placeholder="e.g. Purelogics / Arbisoft"
                    className="w-full h-10 px-3 rounded-lg bg-[#1E293B] border border-[#2A364F] text-xs text-[#F9FAFB]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#94A3B8] uppercase mb-1">
                    Open Engineering Positions
                  </label>
                  <input
                    type="text"
                    required
                    value={recruiterRoles}
                    onChange={(e) => setRecruiterRoles(e.target.value)}
                    placeholder="e.g. 2x Junior AI Engineer, 1x React Dev"
                    className="w-full h-10 px-3 rounded-lg bg-[#1E293B] border border-[#2A364F] text-xs text-[#F9FAFB]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-11 rounded-xl bg-[#4cd7f6] text-[#0f131d] font-bold text-xs"
                >
                  Request Candidate Portfolios
                </button>
              </form>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-[#94A3B8]">
                  Job Fest 2026 takes place live at Arfa Tower &amp; PARSA Tower Karachi. Fast registration gives you direct recruiter booth access.
                </p>
                <button
                  onClick={() => {
                    setJobFestModal(null);
                    onOpenEnroll();
                  }}
                  className="w-full h-11 rounded-xl bg-[#FF3B30] text-white font-bold text-xs"
                >
                  Continue to Fast-Track Enrollment
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
