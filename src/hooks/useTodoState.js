'use client';

import { useState, useCallback } from 'react';

export function useTodoState() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = useCallback(() => {
    if (!newTaskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskText('');
  }, [newTaskText]);

  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteCompletedTasks = useCallback(() => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalTasks = tasks.length;
  const achievedTasks = tasks.filter((task) => task.completed).length;

  return {
    tasks,
    filteredTasks,
    newTaskText,
    searchQuery,
    totalTasks,
    achievedTasks,
    setNewTaskText,
    setSearchQuery,
    addTask,
    deleteTask,
    toggleTask,
    deleteCompletedTasks,
  };
}
