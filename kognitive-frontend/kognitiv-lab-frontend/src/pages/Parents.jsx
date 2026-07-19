import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder — build the real parent dashboard next (grades + AI feedback view).
export default function ParentDashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper font-body text-slate p-8">
      <div className="text-center">
        <h1 className="font-display text-2xl mb-2">Parent dashboard</h1>
        <p className="text-sm text-slate-muted mb-6">Coming soon — grades and feedback will live here.</p>
        <Link to="/" className="text-sm underline">
          Back to home
        </Link>
      </div>
    </div>
  );
}