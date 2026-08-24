import { useState } from "react";
import TaskModal from "./TaskModal";

function Header({ onAddTask }) {
  const [addTaskForm, setAddTaskForm] = useState(false);

  return (
    <>
      <header className="px-6 py-4 border-b-4 border-blue-600 bg-white shadow-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-900">Kanban Board 🚀</h1>

          <button
            className="bg-blue-600 text-white px-6 py-2.5 cursor-pointer rounded-lg hover:bg-blue-700 active:scale-95 transition duration-200 font-medium shadow-md hover:shadow-lg"
            onClick={() => setAddTaskForm(true)}
          >
            + Add Task
          </button>
        </div>
      </header>
      {addTaskForm && (
        <TaskModal
          onClose={() => setAddTaskForm(false)}
          onSubmit={onAddTask}
          mode="add"
        />
      )}
    </>
  );
}

export default Header;
