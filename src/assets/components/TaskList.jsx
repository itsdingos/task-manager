import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import TaskListItem from './TaskListItem';

function TaskList({ tasks, setTasks }) {
  const { t } = useTranslation();

  const [ expandedTaskIndex, setExpandedTaskIndex ] = useState(null);

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
              <TaskListItem
                key={task.id}
                task={task}
                index={index}
                expanded={index === expandedTaskIndex}
                onRemoveTask={handleRemoveTask}
                onCheckboxChanged={handleCheckboxChange}
                onExpandToggle={() => {setExpandedTaskIndex(
                  expandedTaskIndex === index
                  ? null
                  : index
                )}}
              />
            )
            })
        }
      </ul>
    </div>
  )
}

export default TaskList