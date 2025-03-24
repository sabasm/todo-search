'use client';

import React from 'react';

export default function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li className="flex justify-between items-center p-3 group hover:bg-gray-50 dark:hover:bg-gray-800">
      <div className="flex items-center flex-1">
        <button
          onClick={() => toggleTask(task.id)}
          className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
            task.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'
          }`}
        >
          {task.completed && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <span
          className={`cursor-pointer ${
            task.completed ? 'line-through text-gray-500' : ''
          }`}
          onClick={() => toggleTask(task.id)}
        >
          {task.text}
        </span>
      </div>
      {task.completed && (
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      )}
    </li>
  );
}
