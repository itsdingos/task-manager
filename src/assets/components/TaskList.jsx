import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import TaskListItem from './TaskListItem';

function TaskList({ tasks, setTasks }) {
  const { t } = useTranslation();

  const [expandedTaskIndex, setExpandedTaskIndex] = useState(null);

  function handleRemoveTask(id) {
    const updatedTasks = tasks.filter(
      task => {
        return task.id !== id
      }
    );
    setTasks(updatedTasks);
  }

  function handleCompleteToggle(id) {
    const updatedTasks = tasks.map(
      task =>
        task.id === id
        ? {...task, completed: !task.completed}
        : task
      )

      setTasks(updatedTasks);
  }

  return (
    <div className="mt-4">
      <ul className="list-none list-outside">
        {
          tasks.length === 0
            ? <p className="text-center text-gray-400">{t('noTasks')}</p>
            : tasks.map((task) => {
              return (
                <TaskListItem
                  key={task.id}
                  task={task}
                  expanded={task.id === expandedTaskIndex}
                  onRemoveTask={handleRemoveTask}
                  onExpandToggle={() => {
                    setExpandedTaskIndex(
                      expandedTaskIndex === task.id
                        ? null
                        : task.id
                    )
                  }}
                  onCompleteToggle={handleCompleteToggle}
                />
              )
            })
        }
      </ul>
    </div>
  )
}

export default TaskList