// src/hooks/useTodoState.js
"use client";
import { useState, useCallback } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useTodoState() {
  const { data, mutate } = useSWR("/api/todos", fetcher);
  const tasks = Array.isArray(data) ? data : [];

  const [newTaskText, setNewTaskText] = useState("");

  const addTask = useCallback(async () => {
    if (!newTaskText.trim()) return;
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newTaskText }),
    });
    if (res.ok) {
      await mutate();
      setNewTaskText("");
    }
  }, [newTaskText, mutate]);

  const deleteTask = useCallback(async (id) => {
    const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
    if (res.ok) {
      await mutate();
    }
  }, [mutate]);

  const toggleTask = useCallback(
    async (id) => {
      const task = tasks.find((t) => t.id === id);
      if (!task) return;
      const res = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      });
      if (res.ok) {
        await mutate();
      }
    },
    [tasks, mutate]
  );

  const deleteCompletedTasks = useCallback(async () => {
    for (const task of tasks.filter((t) => t.completed)) {
      await fetch(`/api/todos/${task.id}`, { method: "DELETE" });
    }
    await mutate();
  }, [tasks, mutate]);

  const totalTasks = tasks.length;
  const achievedTasks = tasks.filter((task) => task.completed).length;

  return {
    tasks,
    newTaskText,
    totalTasks,
    achievedTasks,
    setNewTaskText,
    addTask,
    deleteTask,
    toggleTask,
    deleteCompletedTasks,
  };
}
