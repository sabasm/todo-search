'use client';

import React from 'react';

export default function ClearCompletedButton({
  achievedTasks,
  deleteCompletedTasks,
}) {
  if (achievedTasks === 0) {
    return null;
  }

  return (
    <button
      onClick={deleteCompletedTasks}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
    >
      Delete All Completed ({achievedTasks})
    </button>
  );
}
