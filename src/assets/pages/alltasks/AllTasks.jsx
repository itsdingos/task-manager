import { useState } from "react";
import { useOutletContext } from "react-router";
import EmptyTasksNotice from "./EmptyTasksNotice";
import TaskItem from "./TaskItem";
import Warning from "./Warning";

function AllTasks() {
  const { tasks, setTasks } = useOutletContext();
  const [taskToDelete, setTaskToDelete] = useState(null);

  return (
    <div className="h-full flex flex-col">
      {taskToDelete !== null && <Warning taskToDelete={taskToDelete} setToDeleteTask={setTaskToDelete} setTasks={setTasks} />}

      <div className="bg-surface-accent w-full h-16 shrink-0">
      </div>

      <h1 className="font-title font-bold text-text text-2xl mt-8">
        Manage Tasks
      </h1>

      <h2 className="text-text-secondary text-lg mb-8">
        Set the goals for your future
      </h2>

      <div className="flex-1 min-h-0 overflow-y-auto">
        {tasks.length === 0
          ? <EmptyTasksNotice />
          : tasks.map(task => (
            <TaskItem key={task.id} task={task} setTaskToDelete={setTaskToDelete} />
          ))
        }
      </div>
    </div>
  );
}

export default AllTasks;