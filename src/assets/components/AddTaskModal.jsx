import { useEffect, useRef } from 'react'
import dayjs from 'dayjs'

function AddTaskModal({ setIsModalOpen, setTasks }) {
  function handleKeyDown(event) {
    if (event.key == 'Escape') {
      setIsModalOpen(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const taskInfo = event.target;
    setTasks(prevTasks => [
      ...prevTasks,
      {
        id: Date.now(),
        name: taskInfo.taskName.value,
        description: taskInfo.description.value,
        dueDate: taskInfo.dueDate.value ? dayjs(taskInfo.dueDate.value).format('YYYY-MM-DD') : null,
        priority: taskInfo.priority.value,
        completed: false,
      }
    ]);
    
    setIsModalOpen(false);
  }

  const dateInputRef = useRef(null);

  useEffect(() => {
    const dateElement = dateInputRef.current;
    const today = dayjs().format('YYYY-MM-DD');
    dateElement.min = today;
    dateElement.value = today;
    
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
          <label htmlFor="taskName" className="block text-gray-600">Task Name</label>
          <input type="text" name="taskName" id="taskName" className="border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          
          <label htmlFor="description" className="block text-gray-600 mt-4">Description</label>
          <input type="text" name="description" id="description" className="border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(optional)" />

          <div className="flex items-center mt-4 gap-x-4">
            <div>
              <label htmlFor="dueDate" className="block text-gray-600 mt-4">Due Date</label>
              <input ref={dateInputRef} type="date" name="dueDate" id="dueDate" className="border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="priority" className="block text-gray-600 mt-4">Priority</label>
              <select name="priority" id="priority" className="border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

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