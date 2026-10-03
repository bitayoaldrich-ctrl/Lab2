import React from 'react';

export default function StatsSummary({ tasks, activeFilter, onFilterChange, onClearAll, onClearCompleted }) {
  const total = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = total - completedCount;

  return (
    <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 flex flex-col gap-4">
      {/* Counters display */}
      <div className="grid grid-cols-3 gap-2 text-center border-b border-slate-700/60 pb-3">
        <div>
          <span className="block text-xl font-bold text-slate-100">{total}</span>
          <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Total</span>
        </div>
        <div>
          <span className="block text-xl font-bold text-amber-400">{pendingCount}</span>
          <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Not Done</span>
        </div>
        <div>
          <span className="block text-xl font-bold text-emerald-400">{completedCount}</span>
          <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Done</span>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        {/* Filter Buttons */}
        <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-700/50">
          {['all', 'pending', 'completed'].map((f) => (
            <button
              key={f}
              onClick={() => onFilterChange(f)}
              className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition ${
                activeFilter === f
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {f === 'pending' ? 'Not Done' : f}
            </button>
          ))}
        </div>

        {/* Clear Actions */}
        <div className="flex gap-2 text-xs">
          {completedCount > 0 && (
            <button
              onClick={onClearCompleted}
              className="text-slate-400 hover:text-amber-400 transition"
            >
              Clear Completed
            </button>
          )}
          {total > 0 && (
            <button
              onClick={onClearAll}
              className="text-slate-400 hover:text-rose-400 transition"
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
