function TaskListItem({ task, index, expanded, onRemoveTask, onCheckboxChanged, onExpandToggle }) {
  return (
    <li className="flex flex-col my-2 border rounded-lg p-4 shadow-sm">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-4">
          <input name="checkbox" type="checkbox" checked={task.completed} onChange={() => onCheckboxChanged(index)} />
          <button
            className={`font-semibold text-gray-700 ${task.completed ? 'line-through' : ''}`}
            onClick={onExpandToggle}
          >{task.name}
          </button>
        </div>
        <button onClick={() => onRemoveTask(index)} className="text-red-500 hover:text-red-700">
          Remove
        </button>
      </div>

      {expanded && (
        <div className="flex justify-between px-4 gap-x-10">
          <p
            className="text-gray-500"
          >{task.description}
          </p>

          <div>
            <div className="flex gap-x-2 items-center">
              <dt className="text-lg font-semibold">Deadline<span className="font-normal">:</span></dt>
              <dd>{task.dueDate}</dd>
            </div>

            <div className="flex gap-x-2 items-center">
              <dt className="text-lg font-semibold">Priority<span className="font-normal">:</span></dt>
              <dd>{task.priority}</dd>
            </div>
            <div className="flex justify-center mt-8">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >Complete</button>
            </div>
          </div>
        </div>
      )}
    </li>
  )
}

export default TaskListItem