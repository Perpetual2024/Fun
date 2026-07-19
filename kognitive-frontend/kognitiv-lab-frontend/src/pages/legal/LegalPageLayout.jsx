import React from 'react';
import { Link } from 'react-router-dom';


 
export default function LegalPageLayout({ title, lastUpdated, sections, children }) {
  return (
    <div className="min-h-screen bg-paper font-body text-slate">
      <header className="border-b border-rule/30">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-display text-xl tracking-tight">
            Kognitiv<span className="pen-tick">.</span>Lab
          </Link>
          <Link to="/" className="text-sm text-slate-muted hover:text-slate transition-colors">
            Back to home
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[220px_1fr] gap-16">
        {/* TOC */}
        <nav className="hidden md:block sticky top-16 self-start">
          <p className="text-xs uppercase tracking-widest text-slate-muted mb-3">On this page</p>
          <ul className="space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-slate-muted hover:text-slate transition-colors">
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl mb-2">{title}</h1>
          <p className="text-sm text-slate-muted mb-12">Last updated: {lastUpdated}</p>
          <div className="space-y-12">{children}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * One numbered section. `id` must match the corresponding entry passed to
 * LegalPageLayout's `sections` prop so the TOC anchor links land correctly.
 */
export function LegalSection({ id, number, heading, children }) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="font-display text-xl mb-3">
        <span className="data-figure pen-tick mr-2">{number}.</span>
        {heading}
      </h2>
      <div className="text-sm text-slate-muted leading-relaxed space-y-3">{children}</div>
    </section>
  );
}