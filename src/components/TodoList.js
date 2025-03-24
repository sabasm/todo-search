'use client';

import React from 'react';
import TaskItem from './TaskItem';

export default function TodoList({ tasks, deleteTask, toggleTask }) {
  if (tasks.length === 0) {
    return (
      <ul className="w-full max-w-md border rounded divide-y">
        <li className="p-4 text-center text-gray-500">No tasks to display</li>
      </ul>
    );
  }

  return (
    <ul className="w-full max-w-md border rounded divide-y">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}
