import { useTranslation } from 'react-i18next';

function TaskList( { tasks, setTasks } ) {
  const { t } = useTranslation();

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
          ? <p className="text-center text-gray-400">{t('noTasks')}</p>
          : tasks.map((task, index) => {
            return (
              <div key={task.id} className="flex justify-between mb-2 gap-x-4">
                <div key={task.id} className="flex items-center gap-x-4">
                  <input name="checkbox" type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(index)} />
                  <li
                    className={`text-gray-700 ${task.completed ? 'line-through' : ''}`}
                  >{task.name}</li>
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