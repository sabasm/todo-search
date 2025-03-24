"use server";
let tasks = [];

export async function getTasks() {
  return tasks;
}

export async function addTask(task) {
  tasks.push(task);
  return task;
}

export async function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== Number(id));
}

export async function updateTask(id, newData) {
  tasks = tasks.map((task) =>
    task.id === Number(id) ? { ...task, ...newData } : task
  );
  return tasks.find((task) => task.id === Number(id));
}

