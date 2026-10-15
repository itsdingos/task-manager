import { SignalHigh, SignalLow, SignalMedium } from "lucide-react"

export const TaskPriority = {
  high: {
    display: "High",
    icon: SignalHigh,
    color: "text-danger",
    order: 0
  },

  medium: {
    display: "Medium",
    icon: SignalMedium,
    color: "text-muted",
    order: 1
  },

  low: {
    display: "Low",
    icon: SignalLow,
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
