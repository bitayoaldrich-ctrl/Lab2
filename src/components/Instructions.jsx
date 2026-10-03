import React from 'react';

export default function Instructions() {
  return (
    <aside className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-4 shadow-xl">
      <div className="flex items-center gap-2 border-b border-slate-700 pb-3">
        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="font-bold text-slate-100 text-lg">Instructions & User Guide</h2>
      </div>

      <div className="space-y-4 text-xs sm:text-sm text-slate-300">
        <section className="space-y-1">
          <h3 className="font-semibold text-indigo-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span> 1. How to Add a Task
          </h3>
          <p className="text-slate-400 leading-relaxed pl-3">
            Type your task in the input field at the top and click <strong>"Add Task"</strong> or press <strong>Enter</strong>.
          </p>
        </section>

        <section className="space-y-1">
          <h3 className="font-semibold text-indigo-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span> 2. Mark Done / Not Done
          </h3>
          <p className="text-slate-400 leading-relaxed pl-3">
            Click the checkbox icon or the <strong>"Mark Done"</strong> button on any task item to toggle status between <strong>Done</strong> and <strong>Not Done</strong>.
          </p>
        </section>

        <section className="space-y-1">
          <h3 className="font-semibold text-indigo-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span> 3. How to Delete a Task
          </h3>
          <p className="text-slate-400 leading-relaxed pl-3">
            Click the trash icon (<svg className="w-3.5 h-3.5 inline text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>) to remove a specific task permanently. Use <strong>"Clear All"</strong> to delete all entries.
          </p>
        </section>
      </div>
    </aside>
  );
}
