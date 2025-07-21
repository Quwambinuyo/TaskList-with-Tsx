import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";

type Task = {
  description: string;
  isCompleted: boolean;
};

const App = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!taskDescription.trim()) {
      toast.error("Please enter a task description.");
      return;
    }

    const newTask: Task = {
      description: taskDescription,
      isCompleted: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTaskDescription("");
    toast.success("Task added!");
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-6 px-4 flex flex-col">
      <h1 className="text-3xl font-bold text-center text-rose-700 mb-4">
        Tasks App
      </h1>

      <form
        onSubmit={handleSubmit}
        className="form bg-white shadow-md rounded-md w-full flex flex-col gap-3 p-4"
      >
        <label htmlFor="task" className="text-sm font-medium text-gray-700">
          Task
        </label>
        <div className="flex flex-col sm:flex-row w-full gap-2">
          <input
            id="task"
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter a task..."
            className="form-input flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <button
            type="submit"
            className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md transition duration-200"
          >
            Add Task
          </button>
        </div>
      </form>

      <div className="mt-6">
        <ul className="space-y-2 list">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-gray-100 p-2 rounded-md shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => toggleTaskCompletion(index)}
                  className="accent-rose-600"
                />
                <span
                  className={`text-gray-800 ${
                    task.isCompleted ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.description}
                </span>
              </div>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
                title="Delete Task"
              >
                <FaTrash size={18} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
