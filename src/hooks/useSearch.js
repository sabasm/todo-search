'use client';
import { useState, useCallback } from 'react';
export function useSearch(initialValue = '') {
  const [searchQuery, setSearchQuery] = useState(initialValue);
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);
  return { searchQuery, setSearchQuery, handleSearchChange };
}
