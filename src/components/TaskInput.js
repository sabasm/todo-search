'use client';

import React from 'react';

export default function TaskInput({ newTaskText, setNewTaskText, addTask }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="flex gap-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Add new task"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border rounded p-2 flex-1"
      />
      <button
        onClick={addTask}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </div>
  );
}
