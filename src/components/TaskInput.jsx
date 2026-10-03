import React, { useState } from 'react';

export default function TaskInput({ onAddTask }) {
  const [inputTask, setInputTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTask.trim()) {
      onAddTask(inputTask);
      setInputTask('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-slate-800/80 backdrop-blur border border-slate-700/60 p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row gap-3"
    >
      <input
        type="text"
        className="flex-1 bg-slate-900/90 text-slate-100 placeholder-slate-500 text-sm sm:text-base rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-700/50 transition-all"
        placeholder="Enter a new task here..."
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      />
      <button
        type="submit"
        disabled={!inputTask.trim()}
        className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-200 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>Add Task</span>
      </button>
    </form>
  );
}
