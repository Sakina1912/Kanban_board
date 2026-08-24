import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import TaskModal from "./TaskModal";

function Column({
  title,
  tasks,
  deleteTask,
  icon: Icon,
  // handleSubmit,
  handleEditTask,
}) {
  const columnTasks = Array.isArray(tasks)
    ? tasks.filter((task) => task?.status === title)
    : [];

  const [editTaskForm, setEditTaskForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <>
      <div className="min-w-60 flex-1 max-w-xs bg-white rounded-lg p-5 min-h-96 shadow-lg border border-slate-200 transition-all hover:shadow-2xl hover:-translate-y-1">
        <h2 className="flex items-center text-lg font-bold text-slate-900 mb-4 pb-3 border-b-2 border-blue-500">
          <span className="mr-3 text-blue-600 text-xl">
            <Icon />
          </span>
          {title}
        </h2>

        <div className="space-y-3">
          {columnTasks.map((task) => (
            <div
              key={task.id}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 border border-slate-200 hover:shadow-lg hover:border-blue-400 transition-all duration-200 cursor-move"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-semibold flex-1 text-blue-600">
                  {task.title}
                </h3>
                <div className="flex gap-2 ml-2 opacity-70 hover:opacity-100 transition-opacity">
                  <span
                    className="cursor-pointer text-slate-500 hover:text-red-600 hover:scale-110 transition"
                    onClick={() => deleteTask(task.id)}
                  >
                    <MdDelete size={18} />
                  </span>
                  <span
                    className="cursor-pointer text-slate-500 hover:text-blue-600 hover:scale-110 transition"
                    onClick={() => {
                      setSelectedTask(task);
                      console.log(task);
                      setEditTaskForm(true);
                    }}
                  >
                    <MdEdit size={18} />
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    task.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : task.priority === "Medium"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-green-100 text-green-700"
                  }`}
                >
                  {task.priority}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-3">{task.description}</p>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(task.tags)
                  ? task.tags
                      .filter((tag) => tag.trim() !== "")
                      .map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-slate-200 text-slate-700 font-medium"
                        >
                          {tag.trim()}
                        </span>
                      ))
                  : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      {editTaskForm && (
        <TaskModal
          onClose={() => {
            setEditTaskForm(false);
            setSelectedTask(null);
          }}
          mode="edit"
          task={selectedTask}
          onSubmit={handleEditTask}
        />
      )}
    </>
  );
}

export default Column;
