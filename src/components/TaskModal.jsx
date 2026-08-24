import { STATUSES } from "../data/tasks";
import { PRIORITIES } from "../data/tasks";
import { useState, useEffect } from "react";

const getEmptyFormData = () => ({
  title: "",
  description: "",
  status: "Backlog",
  priority: "Low",
  tags: "",
});

function AddTaskModal({ onClose, onSubmit, mode = "add", task = null }) {
  const [formData, setFormData] = useState(getEmptyFormData);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (mode === "edit" && task) {
      setFormData({
        title: task.title ?? "",
        description: task.description ?? "",
        status: task.status ?? "Backlog",
        priority: task.priority ?? "Low",
        tags: Array.isArray(task.tags) ? task.tags.join(", ") : "",
      });
    } else {
      setFormData(getEmptyFormData());
    }
  }, [mode, task]);

  const handleAddTask = (e) => {
    e.preventDefault();

    const taskData = {
      id: task?.id ?? crypto.randomUUID(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      status: formData.status,
      priority: formData.priority,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    onSubmit(taskData);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
            <h4 className="text-2xl font-bold text-slate-900">
              {mode === "edit" ? "Edit Task" : "Add New Task"}
            </h4>
            <button
              onClick={onClose}
              className="text-3xl cursor-pointer text-slate-400 hover:text-slate-600 transition font-light"
            >
              ×
            </button>
          </div>
          <form onSubmit={handleAddTask} className="flex flex-col gap-4 p-6">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Task Name"
              className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 text-slate-900 placeholder-slate-500"
              required
            ></input>

            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Task Description"
              className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 text-slate-900 placeholder-slate-500"
            ></input>

            <div className="flex flex-col gap-2">
              <p className="font-semibold text-slate-900">Status:</p>
              <div className="flex flex-wrap gap-3">
                {STATUSES.map((status) => (
                  <div key={status.title}>
                    <label
                      htmlFor={status.title}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="status"
                        value={status.title}
                        id={status.title}
                        checked={formData.status === status.title}
                        onChange={handleChange}
                        className="w-4 h-4 cursor-pointer accent-blue-600"
                      />
                      <span className="text-slate-700">{status.title}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold text-slate-900">Priority:</p>
              <div className="flex flex-wrap gap-3">
                {PRIORITIES.map((priority) => (
                  <div key={priority.value}>
                    <label
                      htmlFor={priority.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="priority"
                        value={priority.value}
                        id={priority.value}
                        checked={formData.priority === priority.value}
                        onChange={handleChange}
                        className="w-4 h-4 cursor-pointer accent-blue-600"
                      />
                      <span className="text-slate-700">{priority.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <input
              type="text"
              name="tags"
              placeholder="React, Tailwind, Frontend"
              value={formData.tags}
              onChange={handleChange}
              className="border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 text-slate-900 placeholder-slate-500"
            />

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white px-4 py-2.5 cursor-pointer hover:bg-blue-700 active:scale-95 transition rounded-lg font-medium shadow-md hover:shadow-lg"
              >
                {mode === "edit" ? "Save Changes" : "Add Task"}
              </button>
              <button
                type="button"
                className="flex-1 bg-slate-200 text-slate-900 px-4 py-2.5 cursor-pointer hover:bg-slate-300 active:scale-95 transition rounded-lg font-medium"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTaskModal;
