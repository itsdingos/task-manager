import { useOutletContext } from "react-router";
import EmptyTasksNotice from "./EmptyTasksNotice";

function AllTasks() {
  const { tasks } = useOutletContext();

  return (
    <div className="flex-1">
      <div className="bg-surface-accent w-full h-16">
      </div>

      <h1 className="font-title font-bold text-text text-2xl mt-8 mb-4">Manage Tasks</h1>
      <h2 className="text-text-secondary text-lg mb-16">Set the goals for your future</h2>
      <div className="flex justify-center items-center">
        {
          tasks.length == 0
          ? <EmptyTasksNotice />
          : <p>Hello</p>
        }
      </div>
    </div>
  );
}

export default AllTasks;