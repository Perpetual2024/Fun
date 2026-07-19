import React, { useState, useMemo } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { mockClasses, mockSubjects, mockTerms, mockStudentsByClass } from '../data/Mockgradebook';

export default function GradebookPage() {
  const [classId, setClassId] = useState(mockClasses[0].id);
  const [subjectId, setSubjectId] = useState(mockSubjects[0].id);
  const [termId, setTermId] = useState(mockTerms[1].id); 
  const [scores, setScores] = useState({});
  const [saveState, setSaveState] = useState('idle'); 

  const students = mockStudentsByClass[classId] ?? [];

  const dirtyCount = useMemo(
    () => students.filter((s) => scores[s.id] !== undefined && scores[s.id] !== '').length,
    [scores, students]
  );

  function handleScoreChange(studentId, value) {
    
    if (value !== '' && (Number(value) < 0 || Number(value) > 100)) return;
    setScores((prev) => ({ ...prev, [studentId]: value }));
    setSaveState('idle');
  }

  function handleContextChange(setter) {
    return (e) => {
      setter(e.target.value);
      setScores({}); 
      setSaveState('idle');
    };
  }

  async function handleSave() {
    setSaveState('saving');
    try {
      const payload = {
        classId,
        subjectId,
        termId,
        scores: students.map((s) => ({
          studentId: s.id,
          score: scores[s.id] === '' || scores[s.id] === undefined ? null : Number(scores[s.id]),
        })),
      };

    
      const res = await fetch('/api/grades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Save failed');
      setSaveState('saved');
    } catch {
      setSaveState('error');
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        <h1 className="font-display text-2xl mb-1">Gradebook</h1>
        <p className="text-sm text-slate-muted mb-8">
          Enter scores for a class, subject, and term. Feedback drafts are generated after you save.
        </p>

        {/* Selectors */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="block text-xs font-medium text-slate-muted mb-1.5">Class</label>
            <select
              value={classId}
              onChange={handleContextChange(setClassId)}
              className="px-3 py-2 rounded-lg border border-rule/40 bg-paper text-sm min-w-[10rem]"
            >
              {mockClasses.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-muted mb-1.5">Subject</label>
            <select
              value={subjectId}
              onChange={handleContextChange(setSubjectId)}
              className="px-3 py-2 rounded-lg border border-rule/40 bg-paper text-sm min-w-[10rem]"
            >
              {mockSubjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-muted mb-1.5">Term</label>
            <select
              value={termId}
              onChange={handleContextChange(setTermId)}
              className="px-3 py-2 rounded-lg border border-rule/40 bg-paper text-sm min-w-[8rem]"
            >
              {mockTerms.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Score table — styled as the mark-sheet ledger, same motif as the homepage */}
        <div className="bg-paper rounded-2xl overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-5 py-3 bg-paper-dim">
            <span className="text-xs uppercase tracking-wide text-slate-muted">
              {students.length} students
            </span>
            <span className="text-xs uppercase tracking-wide text-slate-muted data-figure">
              {dirtyCount} entered
            </span>
          </div>

          <div className="px-5">
            {students.map((student, i) => (
              <div
                key={student.id}
                className={`flex items-center justify-between py-3 ${
                  i !== students.length - 1 ? 'ledger-rule' : ''
                }`}
              >
                <div>
                  <p className="text-sm font-medium">{student.name}</p>
                  <p className="text-xs text-slate-muted data-figure">{student.admissionNumber}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={scores[student.id] ?? ''}
                    onChange={(e) => handleScoreChange(student.id, e.target.value)}
                    placeholder="—"
                    className="w-20 px-3 py-1.5 rounded-lg border border-rule/40 bg-paper text-sm data-figure text-right focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <span className="text-sm text-slate-muted">%</span>
                </div>
              </div>
            ))}

            {students.length === 0 && (
              <p className="text-sm text-slate-muted py-8 text-center">
                No students found for this class.
              </p>
            )}
          </div>
        </div>

        {/* Save bar */}
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={handleSave}
            disabled={saveState === 'saving' || dirtyCount === 0}
            className="px-6 py-2.5 rounded-full bg-ink text-paper text-sm font-medium hover:bg-ink-soft transition-colors disabled:opacity-40"
          >
            {saveState === 'saving' ? 'Saving…' : 'Save grades'}
          </button>

          {saveState === 'saved' && (
            <span className="text-sm pen-tick font-medium">✓ Saved</span>
          )}
          {saveState === 'error' && (
            <span className="text-sm text-pen font-medium">
              Couldn't save — check your connection and try again.
            </span>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}