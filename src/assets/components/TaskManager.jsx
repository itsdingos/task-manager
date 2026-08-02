import { useState, useEffect } from 'react'
import TaskList from './TaskList'
import AddTaskModal from './AddTaskModal';

function TaskManager() {
  const [ tasks, setTasks] = useState(
    () => {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    }
  )

  const [ isModalOpen, setIsModalOpen ] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="bg-gray-100 w-3xl rounded-lg shadow-md p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>
      </div>
      <div>
        <p className="text-center text-gray-400">---- Tasks ----</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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
        <button onClick={() => setTasks([])}>Reset</button>
    </div>
  )
}

export default TaskManager