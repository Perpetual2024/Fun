import React from 'react'
import { Link } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';

function Teachers() {
  return (
    
       <DashboardLayout>
      <h1 className="font-display text-2xl mb-2">Welcome back</h1>
      <p className="text-sm text-slate-muted mb-6">
        Overview coming soon. For now, head to the gradebook to enter scores.
      </p>
      <Link
        to="/gradebook"
        className="inline-block px-5 py-2.5 rounded-full bg-ink text-paper text-sm font-medium hover:bg-ink-soft transition-colors"
      >
        Go to Gradebook
      </Link>
    </DashboardLayout>
  )
}

export default Teachers