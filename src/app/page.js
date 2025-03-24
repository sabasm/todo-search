'use client';
import { useTodoState } from '@/hooks/useTodoState';
import { useSearch } from '@/hooks/useSearch';
import TodoList from '@/components/TodoList';
import SearchBar from '@/components/SearchBar';
import TaskInput from '@/components/TaskInput';
import TaskCounter from '@/components/TaskCounter';
import ClearCompletedButton from '@/components/ClearCompletedButton';

export default function Home() {
  const {
    tasks,
    newTaskText,
    totalTasks,
    achievedTasks,
    setNewTaskText,
    addTask,
    deleteTask,
    toggleTask,
    deleteCompletedTasks,
  } = useTodoState();

  const { searchQuery, handleSearchChange } = useSearch();

  const filtered = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-8">
      <h1 className="text-3xl font-bold text-center">To‑Do List</h1>
      <div className="flex flex-col items-center gap-4">
        <TaskInput
          newTaskText={newTaskText}
          setNewTaskText={setNewTaskText}
          addTask={addTask}
        />
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
        <TodoList
          tasks={filtered}
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
