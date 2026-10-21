import React, { useState } from 'react';
import { COURSES } from '../../data/coursesData';

interface FeeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (courseTitle: string) => void;
}

export const FeeCalculatorModal: React.FC<FeeCalculatorModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  if (!isOpen) return null;

  const [selectedCourseId, setSelectedCourseId] = useState(COURSES[0].id);
  const [paymentPlan, setPaymentPlan] = useState<'lumpsum' | 'installment'>('installment');
  const [scholarshipCategory, setScholarshipCategory] = useState<'none' | 'merit' | 'early' | 'women'>('early');

  const course = COURSES.find((c) => c.id === selectedCourseId) || COURSES[0];

  // Scholarship discounts
  const discountPercentages: Record<string, number> = {
    none: 0,
    merit: 20,
    early: 15,
    women: 25,
  };

  const discountPercent = discountPercentages[scholarshipCategory] || 0;
  const lumpsumDiscount = paymentPlan === 'lumpsum' ? 10 : 0;
  const totalDiscount = Math.min(discountPercent + lumpsumDiscount, 35);

  const basePrice = course.fee.total;
  const discountedPrice = Math.round(basePrice * (1 - totalDiscount / 100));
  const installmentMonths = parseInt(course.duration.split(' ')[0]) || 4;
  const monthlyCost = Math.round(discountedPrice / installmentMonths);

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0e18]/85 backdrop-blur-md flex flex-col justify-end sm:items-center sm:justify-center p-0 sm:p-4 transition-all duration-300">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full sm:max-w-md max-h-[90vh] bg-[#161D2F] rounded-t-3xl sm:rounded-2xl border border-[#2A364F] p-5 flex flex-col shadow-2xl overflow-y-auto no-scrollbar z-10 animate-in fade-in slide-in-from-bottom duration-200">
        <div className="w-12 h-1.5 rounded-full bg-[#1E293B] mx-auto mb-4 sm:hidden"></div>

        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#4cd7f6] text-base">calculate</span>
              <span className="text-[10px] uppercase font-bold text-[#4cd7f6] tracking-wider font-['Plus_Jakarta_Sans']">
                Tuition &amp; Aid Planner
              </span>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#F9FAFB] mt-1">
              Fee &amp; Scholarship Calculator
            </h3>
            <p className="text-xs text-[#94A3B8]">
              Calculate monthly installments and verify scholarship eligibility.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-[#F9FAFB] transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="space-y-4">
          {/* Select Course */}
          <div>
            <label className="block text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">
              Choose Bootcamp
            </label>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="w-full h-11 px-3 rounded-xl bg-[#1c1f2a] text-[#F9FAFB] border border-[#2A364F] text-xs focus:outline-none focus:border-[#FF3B30]"
            >
              {COURSES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} — {c.fee.total.toLocaleString()} PKR
                </option>
              ))}
            </select>
          </div>

          {/* Payment Plan */}
          <div>
            <label className="block text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1.5">
              Payment Method
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPaymentPlan('installment')}
                className={`h-10 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border ${
                  paymentPlan === 'installment'
                    ? 'bg-[#1E293B] border-[#4cd7f6] text-[#4cd7f6] shadow-sm'
                    : 'bg-[#1c1f2a] border-[#2A364F] text-[#94A3B8]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">payments</span>
                <span>Monthly Installments</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentPlan('lumpsum')}
                className={`h-10 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border ${
                  paymentPlan === 'lumpsum'
                    ? 'bg-[#1E293B] border-[#FF3B30] text-[#FF3B30] shadow-sm'
                    : 'bg-[#1c1f2a] border-[#2A364F] text-[#94A3B8]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">savings</span>
                <span>Lump Sum (Save 10%)</span>
              </button>
            </div>
          </div>

          {/* Scholarship Category */}
          <div>
            <label className="block text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1.5">
              Eligible Scholarship / Grant
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'early', label: 'Batch 2026 Early Bird (-15%)' },
                { id: 'merit', label: 'Academic Merit (-20%)' },
                { id: 'women', label: 'Women in Tech Grant (-25%)' },
                { id: 'none', label: 'Standard Registration' },
              ].map((sch) => (
                <button
                  key={sch.id}
                  type="button"
                  onClick={() => setScholarshipCategory(sch.id as any)}
                  className={`p-2.5 rounded-xl text-[11px] text-left font-medium transition-all border ${
                    scholarshipCategory === sch.id
                      ? 'bg-[#1E293B] border-[#10B981] text-[#10B981]'
                      : 'bg-[#1c1f2a] border-[#2A364F] text-[#94A3B8]'
                  }`}
                >
                  {sch.label}
                </button>
              ))}
            </div>
          </div>

          {/* Calculated Summary Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1c1f2a] to-[#1E293B] border border-[#2A364F] space-y-2">
            <div className="flex justify-between text-xs text-[#94A3B8]">
              <span>Base Program Fee:</span>
              <span className="line-through">{basePrice.toLocaleString()} PKR</span>
            </div>
            {totalDiscount > 0 && (
              <div className="flex justify-between text-xs text-[#10B981]">
                <span>Total Discount ({totalDiscount}%):</span>
                <span>-{(basePrice - discountedPrice).toLocaleString()} PKR</span>
              </div>
            )}
            <div className="pt-2 border-t border-[#2A364F] flex items-end justify-between">
              <div>
                <span className="text-[10px] text-[#94A3B8] uppercase block">
                  {paymentPlan === 'installment'
                    ? `Per Month (${installmentMonths} installments)`
                    : 'Final Net Payable'}
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#F9FAFB]">
                  {paymentPlan === 'installment'
                    ? `${monthlyCost.toLocaleString()} PKR`
                    : `${discountedPrice.toLocaleString()} PKR`}
                </span>
              </div>
              <span className="px-2 py-1 rounded bg-[#10B981]/20 text-[#10B981] text-[10px] font-bold">
                {totalDiscount}% SAVED
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => {
                onClose();
                onApply(course.title);
              }}
              className="w-full h-11 rounded-xl bg-[#FF3B30] hover:bg-[#ff544a] text-white text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-lg shadow-[#FF3B30]/20"
            >
              <span>Lock This Fee &amp; Apply</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
