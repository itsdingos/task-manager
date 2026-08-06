import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs';
import { PriorityInfo } from '../constants/priority'
import TrashIcon from '../images/trash.png'

function TaskListItem({ task, expanded, onRemoveTask, onExpandToggle, onCompleteToggle }) {
  const { t } = useTranslation();

  return (
    <li className="flex flex-col my-2 border rounded-lg shadow-sm">
      <div className="flex justify-between m-4 cursor-pointer" onClick={onExpandToggle}>
        <div className="flex items-center gap-x-4">
          <p className={`transition-transform ${expanded
            ? "rotate-90"
            : ""
            }`}>{"\u25B6\uFE0E"}</p>
          <p
            className={`font-semibold text-gray-700 ${task.completed ? 'line-through' : ''}`}
          >{task.name}
          </p>
        </div>
        <button onClick={() => onRemoveTask(task.id)} className="text-red-500 hover:text-red-700 cursor-pointer">
          <img src={TrashIcon} alt="Remove Task" className="transition duration-200 hover:opacity-75" />
        </button>
      </div>

      {expanded && (
        <div className="flex justify-between px-4 gap-x-10 mb-4">
          <p
            className="text-gray-500"
          >{task.description}
          </p>

          <div>
            <div className="flex gap-x-2 items-center">
              <dt className="text-lg font-semibold">Deadline<span className="font-normal">:</span></dt>
              <dd>{dayjs(task.dueDate).format(t('weekDateFormat'))}</dd>
            </div>


            <div className="flex gap-x-2 items-center">
              <dt className="text-lg font-semibold">Priority<span className="font-normal">:</span></dt>
              <dd>{t(PriorityInfo[task.priority].translationKey)}</dd>
            </div>
            <div className="flex justify-center mt-8">
              <button
                className={`${task.completed
                  ? "bg-emerald-500 hover:bg-emerald-600"
                  : "bg-rose-500 hover:bg-rose-600"
                  } text-white font-bold py-2 px-4 rounded cursor-pointer`}
                onClick={() => { onCompleteToggle(task.id) }}
              >{
                  task.completed
                    ? "Remove Mark"
                    : "Mark Completed"
                }</button>
            </div>
          </div>
        </div>
      )}
    </li>
  )
}

export default TaskListItem