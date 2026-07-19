import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/teacher', label: 'Overview' },
  { path: '/gradebook', label: 'Gradebook' },
  { path: '/feedback', label: 'AI Feedback' },
];

export default function DashboardLayout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-paper-dim font-body text-slate">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 bg-ink text-paper flex flex-col">
        <Link to="/" className="font-display text-lg px-6 py-6">
          Kognitiv<span className="pen-tick">.</span>Lab
        </Link>

        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active ? 'bg-ink-soft text-paper' : 'text-paper/70 hover:text-paper hover:bg-ink-soft/60'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-6 py-6 ledger-rule-on-ink">
          <p className="text-sm font-medium">Ms. Otieno</p>
          <p className="text-xs text-paper/50">Grade 7 · Mathematics</p>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}