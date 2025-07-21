const App = () => {
  return (
    <>
      <div className="  w-3/4 mx-auto mt-4 justify-center flex flex-col ">
        <h1 className="text-2xl font-bold text-center">Tasks App</h1>
        <form className="form bg-white shadow-sm  w-3/4 mx-auto mt-4 justify-center gap-3 flex flex-col p-4">
          <label htmlFor="">Task</label>
          <div className="flex">
            <input
              type="text"
              className="form-input outline-none rounded-l-md p-2  border-1 border-gray-400"
            />
            <button
              type="submit"
              className="btn w-30 bg-rose-600 rounded-r-sm py-2 text-white"
            >
              Add Task
            </button>
          </div>
        </form>

        <ul className="list">
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default App;
