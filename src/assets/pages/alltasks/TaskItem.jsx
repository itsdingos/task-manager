import dayjs from "dayjs";
import { GetTaskPriority, GetTaskStatus } from "../../utils/TaskUtils";
import { Clock, Flag } from "lucide-react";
import Button from "../../components/Button";

function TaskItem({ task, setTaskToDelete }) {
  const priorityDetails = GetTaskPriority(task);
  const PriorityIcon = priorityDetails.icon

  const statusDetails = GetTaskStatus(task);

  const dueDate = dayjs(task.dueDate)
  const today = dayjs();

  return (
    <div className="flex justify-between bg-surface-tertiary p-6 rounded-3xl mb-4">
      <div className="flex flex-col">
        <div className="flex">
          <div className="w-16 h-16 bg-text rounded-full mr-4 mb-4"></div>
          <div>
            <h3 className="font-title font-semibold text-lg text-text">{task.name}</h3>
            <p className="text-text-secondary">{task.description}</p>
          </div>
        </div>
        <div className="flex font-semibold text-text-secondary">
          <div className={`flex mr-4 items-center ${priorityDetails.color}`}>
            <PriorityIcon strokeWidth={1.5} size={24} className="mr-2" />
            <p>{priorityDetails.display}</p>
          </div>

          <div className={`flex mr-4 items-center ${(dueDate.isSame(today) || dueDate.isBefore(today)) && "text-danger"}`}>
            <Clock strokeWidth={1.5} size={24} className="mr-2" />
            <p>
              {dueDate.format('D MMM YYYY')}
            </p>
          </div>

          <div className={`flex mr-4 items-center ${statusDetails.color}`}>
            <Flag strokeWidth={1.5} size={24} className="mr-2" />
            <p>{statusDetails.display}</p>
          </div>
        </div>
      </div>

      <Button displayText="Delete" variant="danger" onClick={() => {setTaskToDelete(task.id)}} />
    </div>

  )
}

export default TaskItem;