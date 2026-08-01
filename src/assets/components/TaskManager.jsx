import { useState } from 'react'
import TaskList from './TaskList'
import AddTaskModal from './AddTaskModal';

function TaskManager() {
  const [ tasks, setTasks] = useState([])

  const [ isModalOpen, setIsModalOpen ] = useState(false);

  return (
    <div className="bg-gray-100 w-3xl rounded-lg shadow-md p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>
      </div>
      <div>
        <p className="text-center text-gray-400">---- Tasks ----</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >Add Task
        </button>
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
      {isModalOpen && (
        <AddTaskModal
          setIsModalOpen={setIsModalOpen}
          setTasks={setTasks}
        />)}
    </div>
  )
}

export default TaskManager