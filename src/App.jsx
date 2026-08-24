import Header from "./components/Header";
import { useState, useEffect } from "react";
import Board from "./components/Board";
import { Tasks } from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks);
        if (Array.isArray(parsedTasks)) {
          return parsedTasks;
        }
      } catch {
        // fall back to the starter data below
      }
    }

    return Tasks;
  });

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleEditTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-slate-900 w-full\">
        <header>
          <Header onAddTask={handleAddTask} />
        </header>
        <div className="flex justify-center">
          <Board
            tasks={tasks}
            deleteTask={deleteTask}
            handleEditTask={handleEditTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
