'use client';

import { useTodoState } from '@/hooks/useTodoState';
import TodoList from '@/components/TodoList';
import SearchBar from '@/components/SearchBar';
import TaskInput from '@/components/TaskInput';
import TaskCounter from '@/components/TaskCounter';
import ClearCompletedButton from '@/components/ClearCompletedButton';

export default function Home() {
  const {
    filteredTasks,
    newTaskText,
    totalTasks,
    achievedTasks,
    setNewTaskText,
    setSearchQuery,
    addTask,
    deleteTask,
    toggleTask,
    deleteCompletedTasks,
  } = useTodoState();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-8">
      <h1 className="text-3xl font-bold text-center">To-Do List</h1>

      <div className="flex flex-col items-center gap-4">
        <TaskInput
          newTaskText={newTaskText}
          setNewTaskText={setNewTaskText}
          addTask={addTask}
        />

        <SearchBar setSearchQuery={setSearchQuery} />

        <TodoList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />

        <ClearCompletedButton
          achievedTasks={achievedTasks}
          deleteCompletedTasks={deleteCompletedTasks}
        />
      </div>

      <TaskCounter totalTasks={totalTasks} achievedTasks={achievedTasks} />
    </div>
  );
}
