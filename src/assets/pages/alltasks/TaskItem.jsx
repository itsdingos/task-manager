import { Clock, Flag, Layers2 } from "lucide-react";

function TaskItem({ task }) {
  return (
    <div className="flex flex-col bg-surface-accent p-6 rounded-3xl mb-4">
      <div className="flex">
        <div className="w-16 h-16 bg-text rounded-full mr-4 mb-4"></div>
        <div>
          <h3 className="font-title font-semibold text-lg text-text">{task.name}</h3>
          <p className="text-text-secondary">{task.description}</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex mr-4 items-center">
          <Layers2 strokeWidth={1.2} size={24} className="mr-2" />
          <p>{task.priority}</p>
        </div>

        <div className="flex mr-4 items-center">
          <Clock strokeWidth={1.2} size={24} className="mr-2"/>
          <p>{task.dueDate}</p>
        </div>

        <div className="flex mr-4 items-center">
          <Flag strokeWidth={1.2} size={24} className="mr-2" />
          <p>{task.status}</p>
        </div>
      </div>
    </div>
  )
}

export default TaskItem;