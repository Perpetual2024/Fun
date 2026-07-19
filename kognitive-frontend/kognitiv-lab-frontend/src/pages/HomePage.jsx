import React from 'react';
import { Link } from 'react-router-dom';
import LedgerInsightCard from '../components/LedgerInsightCard';

export default function HomePage() {
  return (
    <div className="font-body text-slate bg-paper">
      {/* Nav */}
      <header className="border-b border-rule/30">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="font-display text-xl tracking-tight">
            Kognitiv<span className="pen-tick">.</span>Analitica
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-muted">
            <a href="#how-it-works" className="hover:text-slate transition-colors">
              How it works
            </a>
            <a href="#for-teachers" className="hover:text-slate transition-colors">
              For teachers
            </a>
            <a href="#for-parents" className="hover:text-slate transition-colors">
              For parents
            </a>
          </nav>
          <Link
            to="/login"
            className="text-sm font-medium px-4 py-2 rounded-full bg-ink text-paper hover:bg-ink-soft transition-colors"
          >
            Log in
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-pen font-medium mb-4">
            For schools · teachers · parents
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
            Every grade,
            <br />
            read out loud.
          </h1>
          <p className="text-lg text-slate-muted mb-8 max-w-md">
            Kognitiv Analitica turns raw marks into feedback a parent can actually act on —
            and gives teachers the AI groundwork to write it, term after term.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/login"
              className="px-6 py-3 rounded-full bg-ink text-paper font-medium hover:bg-ink-soft transition-colors"
            >
              Log in to your dashboard
            </Link>
            <a
              href="#how-it-works"
              className="px-6 py-3 rounded-full border border-slate/20 font-medium hover:border-slate/40 transition-colors"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <LedgerInsightCard />
        </div>
      </section>

      {/* How it works — a genuine sequence, numbering is earned here */}
      <section id="how-it-works" className="bg-ink text-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl mb-12">How it works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                n: '01',
                title: 'Marks go in',
                body: 'Teachers enter or import scores the same way they already do — per subject, per term, per learner.',
              },
              {
                n: '02',
                title: 'AI reads the pattern',
                body: 'Kognitiv Analitica compares each mark against the learner\u2019s own history, not just a class average, and drafts a note.',
              },
              {
                n: '03',
                title: 'Feedback goes out',
                body: 'The teacher reviews and sends it. Parents see it instantly in plain language, no jargon, no guesswork.',
              },
            ].map((step) => (
              <div key={step.n} className="ledger-rule-on-ink pb-6 md:pb-0 md:border-b-0">
                <span className="data-figure text-sm text-gold">{step.n}</span>
                <h3 className="font-display text-xl mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-paper/70 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For teachers */}
      <section id="for-teachers" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-sm uppercase tracking-widest text-pen font-medium mb-3">
            For teachers
          </p>
          <h2 className="font-display text-3xl mb-4">Less writing. More marking.</h2>
          <p className="text-slate-muted leading-relaxed mb-6">
            Stop drafting the same feedback sentence forty times a term. Kognitiv Analitica
            drafts a first pass from the marks you already entered — you edit, approve,
            and send.
          </p>
          <ul className="space-y-3 text-sm">
            {[
              'AI-drafted feedback per learner, per subject',
              'Class-level trend view across terms',
              'One-click send to every parent on the class list',
            ].map((item) => (
              <li key={item} className="flex gap-3 ledger-rule pb-3">
                <span className="pen-tick">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-paper-dim rounded-2xl p-8 flex items-center justify-center">
          <p className="font-display text-2xl text-slate-muted text-center leading-snug">
            "Report writing used to take a weekend.
            <br />
            Now it takes an afternoon."
          </p>
        </div>
      </section>

      {/* For parents */}
      <section id="for-parents" className="bg-paper-dim py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-paper rounded-2xl p-8">
            <p className="font-display text-2xl leading-snug">
              "Instead of a number, I finally got a sentence I could act on."
            </p>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-widest text-pen font-medium mb-3">
              For parents
            </p>
            <h2 className="font-display text-3xl mb-4">See the grade. Understand the child.</h2>
            <p className="text-slate-muted leading-relaxed mb-6">
              Log in with your child's student credentials to see every subject,
              every term, and a plain-language note on what to do next — not just a
              percentage.
            </p>
            <Link
              to="/login"
              className="inline-block px-6 py-3 rounded-full bg-ink text-paper font-medium hover:bg-ink-soft transition-colors"
            >
              Log in as a parent
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-lg">
          Kognitiv<span className="pen-tick">.</span>Analitica
        </span>
        <div className="flex items-center gap-6 text-sm text-slate-muted">
          <Link to="/terms" className="hover:text-slate transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="hover:text-slate transition-colors">
            Privacy
          </Link>
        </div>
        <Link
          to="/login"
          className="px-6 py-3 rounded-full border border-slate/20 font-medium hover:border-slate/40 transition-colors"
        >
          Log in
        </Link>
      </footer>
    </div>
  );
}