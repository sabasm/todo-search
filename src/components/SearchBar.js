'use client';
import React from 'react';
export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 19l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={value}
        onChange={onChange}
        className="border rounded p-2 pl-10 w-full"
      />
    </div>
  );
}
