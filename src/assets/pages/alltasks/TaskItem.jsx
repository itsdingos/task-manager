import { GetTaskPriority, GetTaskStatus } from "../../utils/TaskUtils";
import { Clock, Flag } from "lucide-react";

function TaskItem({ task }) {
  const priorityDetails = GetTaskPriority(task);
  const PriorityIcon = priorityDetails.icon

  const statusDetails = GetTaskStatus(task);

  return (
    <div className="flex justify-between bg-surface-accent p-6 rounded-3xl mb-4">
      <div className="flex flex-col">
        <div className="flex">
          <div className="w-16 h-16 bg-text rounded-full mr-4 mb-4"></div>
          <div>
            <h3 className="font-title font-semibold text-lg text-text">{task.name}</h3>
            <p className="text-text-secondary">{task.description}</p>
          </div>
        </div>
        <div className="flex">
          <div className={`flex mr-4 items-center ${priorityDetails.color}`}>
            <PriorityIcon strokeWidth={1.2} size={24} className="mr-2" />
            <p>{priorityDetails.display}</p>
          </div>

          <div className="flex mr-4 items-center">
            <Clock strokeWidth={1.2} size={24} className="mr-2" />
            <p>{task.dueDate}</p>
          </div>

          <div className={`flex mr-4 items-center ${statusDetails.color}`}>
            <Flag strokeWidth={1.2} size={24} className="mr-2" />
            <p>{statusDetails.display}</p>
          </div>
        </div>
      </div>

      <button className="
        my-auto px-4 py-2 border rounded-full cursor-pointer
        border-danger text-danger
        hover:bg-danger hover:text-highlight-text
        transition-all duration-150
      ">Delete</button>
    </div>

  )
}

export default TaskItem;