import React from 'react';

export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border transition-all duration-200 gap-3 ${
      task.completed 
        ? 'bg-slate-800/40 border-slate-800 text-slate-500' 
        : 'bg-slate-800 border-slate-700/80 text-slate-200 hover:border-indigo-500/50 shadow-md'
    }`}>
      
      {/* Task Text & Status Icon */}
      <div className="flex items-start gap-3 flex-1 min-w-0 w-full">
        <button
          onClick={() => onToggleTask(task.id)}
          className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
            task.completed
              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
              : 'border-slate-500 hover:border-indigo-400 text-transparent'
          }`}
          title={task.completed ? "Mark as Not Done" : "Mark as Done"}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </button>

        <div className="flex-1 min-w-0">
          <p className={`text-sm sm:text-base break-words font-medium ${task.completed ? 'line-through text-slate-500' : ''}`}>
            {task.text}
          </p>
          <span className="text-[10px] text-slate-500 font-mono block mt-0.5">
            Added at {task.createdAt}
          </span>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-700/50">
        
        {/* Status Badge */}
        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${
          task.completed 
            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
        }`}>
          {task.completed ? 'Done' : 'Not Done'}
        </span>

        {/* Toggle Status Button */}
        <button
          onClick={() => onToggleTask(task.id)}
          className={`text-xs px-3 py-1.5 rounded-lg transition font-medium ${
            task.completed
              ? 'bg-slate-700 hover:bg-slate-600 text-slate-300'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white'
          }`}
        >
          {task.completed ? 'Undo' : 'Mark Done'}
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDeleteTask(task.id)}
          className="text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 p-1.5 rounded-lg transition"
          title="Delete task"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </li>
  );
}
