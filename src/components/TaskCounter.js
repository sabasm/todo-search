'use client';

import React from 'react';

export default function TaskCounter({ totalTasks, achievedTasks }) {
  return (
    <footer className="text-center p-4 border-t">
      <p>
        Total Tasks: {totalTasks} | Completed: {achievedTasks}
      </p>
    </footer>
  );
}
