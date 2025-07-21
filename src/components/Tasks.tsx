const App = () => {
  const btn = document.querySelector("button");
  btn?.addEventListener("click", () => {});

  return (
    <div className="max-w-2xl mx-auto mt-6 px-4 flex flex-col">
      <h1 className="text-3xl font-bold text-center text-rose-700 mb-4">
        Tasks App
      </h1>

      <form className="bg-white shadow-md rounded-md w-full flex flex-col gap-3 p-4">
        <label htmlFor="task" className="text-sm font-medium text-gray-700">
          Task
        </label>
        <div className="flex flex-col sm:flex-row w-full gap-2">
          <input
            id="task"
            type="text"
            placeholder="Enter a task..."
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
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
        <ul className="space-y-2">
          <li className="bg-gray-100 p-2 rounded-md shadow-sm">Hey</li>
          <button>Click me</button>
        </ul>
      </div>
    </div>
  );
};

export default App;
