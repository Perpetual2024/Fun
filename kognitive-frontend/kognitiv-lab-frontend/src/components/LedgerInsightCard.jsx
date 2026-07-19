import React from 'react';

const rows = [
  { subject: 'Mathematics', score: 78 },
  { subject: 'English', score: 64 },
  { subject: 'Biology', score: 91 },
];

export default function LedgerInsightCard({ compact = false }) {
  return (
    <div
      className={`relative rounded-2xl bg-paper text-slate shadow-xl ${
        compact ? 'p-5 max-w-sm' : 'p-8 max-w-md'
      }`}
    >
      <div className="flex items-baseline justify-between mb-4">
        <span className="font-display text-lg">Term 2 · Grade 7</span>
        <span className="text-xs uppercase tracking-wide text-slate-muted">Mark sheet</span>
      </div>

      <div className="space-y-0">
        {rows.map((row, i) => (
          <div
            key={row.subject}
            className={`flex items-center justify-between py-2.5 ${
              i !== rows.length - 1 ? 'ledger-rule' : ''
            }`}
          >
            <span className="text-sm">{row.subject}</span>
            <span className="data-figure text-sm">{row.score}%</span>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-ink text-paper p-4 relative">
        <svg
          className="absolute -top-3 -left-2 w-7 h-7 pen-tick"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 12.5L9 18L21 4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-xs uppercase tracking-wide text-gold-soft mb-1.5">AI feedback</p>
        <p className="text-sm leading-snug">
          Strong grasp of algebra this term — English composition dipped slightly.
          Suggest 15 minutes of guided reading, three times a week. Books recommended: <em>Advanced English - comprehensive passages</em>.
        </p>
      </div>
    </div>
  );
}