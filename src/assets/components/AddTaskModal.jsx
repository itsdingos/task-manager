import { useEffect } from 'react'

function AddTaskModal({ setIsModalOpen, setTasks }) {
  function handleKeyDown(event) {
    if (event.key == 'Escape') {
      setIsModalOpen(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const taskName = event.target.taskName.value;
    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: Date.now(),
        name: taskName,
        completed: false
      }
    ]);
    
    setIsModalOpen(false);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className="fixed bg-black/50 flex items-center justify-center inset-0">
      <div className="bg-white rounded-lg shadow-md p-6 w-96 mx-auto mt-20">
        <h2 className="text-xl font-bold mb-4">Add Task</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="taskName" className="block mb-2 text-gray-600">Task Name</label>
          <input type="text" name="taskName" id="taskName" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          

          <div className="flex justify-end mt-4 gap-x-2">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 font-bold text-white py-2 px-4 rounded">
              Submit
            </button>
            <button type="button" className="bg-gray-100 hover:bg-gray-300 font-bold py-2 px-4 rounded" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTaskModal