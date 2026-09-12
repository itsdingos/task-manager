import { useOutletContext } from "react-router";
import EmptyTasksNotice from "./EmptyTasksNotice";

function AllTasks() {
  const { tasks } = useOutletContext();

  return (
    <div className="flex-1">
      <div className="bg-surface-accent w-full h-16">
      </div>

      <h1>Manage Tasks</h1>
      <p>Set the goals for your future</p>
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