import { useState } from 'react'
import TaskList from './TaskList'

function TaskManager() {
  const [tasks] = useState([
    {
      id: 1,
      name: 'Task 1',
      completed: false
    },
    {
      id: 2,
      name: 'Task 2',
      completed: false
    },
    {
      id: 3,
      name: 'Task 3',
      completed: false
    }
  ])

  return (
    <div className="bg-gray-100 w-3xl rounded-lg shadow-md p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>
      </div>
      <div>
        <p className="text-center text-gray-400">---- Tasks ----</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Task
        </button>
        <TaskList tasks={tasks} />
      </div>
    </div>
  )
}

export default TaskManager