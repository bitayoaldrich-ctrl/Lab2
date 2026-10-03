import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Instructions from './components/Instructions';
import StatsSummary from './components/StatsSummary';

export default function App() {
  // Initialize state with localStorage data or sample tasks
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('todo_tasks');
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (e) {
        console.error("Failed to parse local storage tasks", e);
      }
    }
    return [
      { id: 1, text: 'Complete React components assignment', completed: false, createdAt: '10:00 AM' },
      { id: 2, text: 'Style interface using Tailwind CSS', completed: true, createdAt: '10:30 AM' },
      { id: 3, text: 'Deploy project to Vercel or Netlify', completed: false, createdAt: '11:00 AM' }
    ];
  });

  const [filter, setFilter] = useState('all'); // 'all' | 'pending' | 'completed'

  // Persist tasks to LocalStorage whenever tasks state updates
  useEffect(() => {
    localStorage.setItem('todo_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Feature 1: Adding tasks dynamically
  const handleAddTask = (taskText) => {
    if (!taskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  // Feature 2: Marking tasks as Done or Not Done (Toggle)
  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Feature 3: Deleting individual task
  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Feature 4: Clear / Reset Functionality
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all tasks?")) {
      setTasks([]);
    }
  };

  const handleClearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  // Filter logic
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* App Header */}
        <header className="text-center space-y-2">
          <div className="inline-block p-3 bg-indigo-600/20 text-indigo-400 rounded-2xl mb-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            TaskMaster Pro
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Built with React, Tailwind CSS & State Management
          </p>
        </header>

        {/* Main Interface Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left / Top Column: Task Creation & List */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Input Component */}
            <TaskInput onAddTask={handleAddTask} />

            {/* Statistics & Filter Controls */}
            <StatsSummary 
              tasks={tasks} 
              activeFilter={filter} 
              onFilterChange={setFilter} 
              onClearAll={handleClearAll}
              onClearCompleted={handleClearCompleted}
            />

            {/* Task List Component */}
            <TaskList 
              tasks={filteredTasks} 
              onToggleTask={handleToggleTask} 
              onDeleteTask={handleDeleteTask} 
            />
          </div>

          {/* Right / Bottom Column: User Guide & Instructions */}
          <div className="lg:col-span-1">
            <Instructions />
          </div>

        </main>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-slate-800 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Student Project • React State & Event Handling Demonstration</p>
        </footer>

      </div>
    </div>
  );
}
