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
    color: "text-warning",
    order: 0
  },

  low: {
    display: "Low",
    icon: LayerArrowDown,
    color: "text-low",
    order: 0
  },
}

export function GetTaskPriority(task) {
  return TaskPriority[task.priority];
}
