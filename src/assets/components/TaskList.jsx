function TaskList( { tasks, setTasks } ) {
  function handleCheckboxChange(index) {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  }

  function handleRemoveTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="mt-4">
      <ul className="list-none list-outside">
        {
          tasks.length === 0
          ? <p className="text-center text-gray-400">No tasks available</p>
          : tasks.map((tasks, index) => {
            return (
              <div key={tasks.id} className="flex justify-between mb-2 gap-x-4">
                <div key={tasks.id} className="flex items-center gap-x-4">
                  <input name="checkbox" type="checkbox" checked={tasks.completed} onChange={() => handleCheckboxChange(index)} />
                  <li
                    className={`text-gray-700 ${tasks.completed ? 'line-through' : ''}`}
                  >{tasks.name}</li>
                </div>
                <button onClick={() => handleRemoveTask(index)} className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TaskList