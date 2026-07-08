import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LedgerInsightCard from '../components/LedgerInsightCard';

export default function LoginPage() {
  const [role, setRole] = useState('teacher'); // 'teacher' | 'parent'
  const [teacherForm, setTeacherForm] = useState({ email: '', password: '' });
  const [parentForm, setParentForm] = useState({ admissionNumber: '', parentPin: '' });
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      // Replace with your actual Node API endpoints.
      // Teacher and parent likely hit different auth flows on the backend
      // since parents authenticate against a student record, not their own account.
      const endpoint = role === 'teacher' ? '/api/auth/teacher/login' : '/api/auth/parent/login';
      const payload = role === 'teacher' ? teacherForm : parentForm;

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(
          role === 'teacher'
            ? 'That email and password don\u2019t match a teacher account.'
            : 'That admission number and PIN don\u2019t match a student record.'
        );
      }

      const data = await res.json();
      // TODO: store auth token / redirect to the correct dashboard, e.g.:
      // navigate(role === 'teacher' ? '/teacher/dashboard' : '/parent/dashboard');
      console.log('Logged in:', data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2 font-body text-slate">
      {/* Brand panel */}
      <div className="hidden md:flex flex-col justify-between bg-ink text-paper p-12">
        <Link to="/" className="font-display text-xl">
          Kognitiv<span className="pen-tick">.</span>Lab
        </Link>
        <div className="flex justify-center">
          <LedgerInsightCard compact />
        </div>
        <p className="text-sm text-paper/60 max-w-sm">
          One login for the people who need the full picture — teachers writing it,
          parents reading it.
        </p>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <Link to="/" className="md:hidden font-display text-xl block mb-8">
            Kognitiv<span className="pen-tick">.</span>Lab
          </Link>

          <h1 className="font-display text-2xl mb-1">Welcome back</h1>
          <p className="text-sm text-slate-muted mb-8">Log in to see the latest grades and feedback.</p>

          {/* Role toggle */}
          <div
            role="tablist"
            aria-label="Log in as"
            className="flex rounded-full bg-paper-dim p-1 mb-8"
          >
            {['teacher', 'parent'].map((r) => (
              <button
                key={r}
                role="tab"
                aria-selected={role === r}
                onClick={() => {
                  setRole(r);
                  setError(null);
                }}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition-colors ${
                  role === r ? 'bg-ink text-paper' : 'text-slate-muted hover:text-slate'
                }`}
              >
                {r === 'teacher' ? 'Teacher' : 'Parent'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {role === 'teacher' ? (
              <>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={teacherForm.email}
                    onChange={(e) => setTeacherForm({ ...teacherForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-rule/40 focus:outline-none focus:ring-2 focus:ring-gold bg-paper"
                    placeholder="you@school.ac.ke"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1.5">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    value={teacherForm.password}
                    onChange={(e) => setTeacherForm({ ...teacherForm, password: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-rule/40 focus:outline-none focus:ring-2 focus:ring-gold bg-paper"
                    placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="admissionNumber" className="block text-sm font-medium mb-1.5">
                    Student admission number
                  </label>
                  <input
                    id="admissionNumber"
                    type="text"
                    required
                    value={parentForm.admissionNumber}
                    onChange={(e) =>
                      setParentForm({ ...parentForm, admissionNumber: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg border border-rule/40 focus:outline-none focus:ring-2 focus:ring-gold bg-paper font-mono"
                    placeholder="e.g. 2024/0142"
                  />
                  <p className="text-xs text-slate-muted mt-1.5">
                    Find this on your child's school ID or report form.
                  </p>
                </div>
                <div>
                  <label htmlFor="parentPin" className="block text-sm font-medium mb-1.5">
                    Parent PIN
                  </label>
                  <input
                    id="parentPin"
                    type="password"
                    required
                    inputMode="numeric"
                    value={parentForm.parentPin}
                    onChange={(e) => setParentForm({ ...parentForm, parentPin: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-rule/40 focus:outline-none focus:ring-2 focus:ring-gold bg-paper"
                    placeholder="Sent to you by the school"
                  />
                </div>
              </>
            )}

            {error && (
              <p role="alert" className="text-sm text-pen">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-lg bg-ink text-paper font-medium hover:bg-ink-soft transition-colors disabled:opacity-50"
            >
              {submitting ? 'Logging in\u2026' : 'Log in'}
            </button>
          </form>

          <p className="text-sm text-slate-muted mt-6 text-center">
            {role === 'teacher' ? (
              <>Trouble logging in? Ask your school admin to reset your password.</>
            ) : (
              <>Lost your PIN? Ask the school office to resend it.</>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}