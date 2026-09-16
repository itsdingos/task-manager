import { LayerArrowUp, Layers2, LayerArrowDown } from "lucide-react"

export const TaskPriority = {
  high: {
    display: "High",
    icon: LayerArrowUp,
    color: "text-danger",
    order: 0
  },

  medium: {
    display: "Medium",
    icon: Layers2,
    color: "text-muted",
    order: 1
  },

  low: {
    display: "Low",
    icon: LayerArrowDown,
    color: "text-low",
    order: 2
  },
}

export const TaskStatus = {
  expired: {
    display: "Expired",
    color: "text-danger",
    order: 0
  },

  pending: {
    display: "Pending",
    color: "text-muted",
    order: 1
  },

  completed: {
    display: "Completed",
    color: "text-success",
    order: 2
  },
}

export function GetTaskPriority(task) {
  return TaskPriority[task.priority];
}

export function GetTaskStatus(task) {
  return TaskStatus[task.status];
}
