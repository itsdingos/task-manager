import { createPortal } from "react-dom";
import Button from "../../components/Button";

function Warning({ taskToDelete, setToDeleteTask, setTasks }) {
  function handleTaskDeletion(taskId) {
    setTasks(prevTasks => prevTasks.filter(task => (task.id !== taskId)));
  }

  function closeModal() {
    setToDeleteTask(null);
  }

  return createPortal(
    <div className="
      fixed inset-0 bg-black/25 flex justify-center items-center
      animate-[backdrop-in_200ms_ease-out_forwards]
    ">
      <div className="
          w-[50%] max-w-lg
          min-h-48 max-h-[90vh]
          p-6
          rounded-4xl
          bg-surface-tertiary
          flex flex-col justify-between
          overflow-y-auto

          animate-[modal-in_200ms_ease-out_forwards]
        ">
        <p className="text-text text-lg">Are you sure you want to delete this task?<br />
          <span className="font-bold">(This action cannot be undone)</span>
        </p>
        <div className="flex justify-between">
          <Button displayText="Delete" variant="danger" onClick={() => {
            handleTaskDeletion(taskToDelete);
            closeModal();
          }} />
          <Button displayText="Cancel" onClick={() => { closeModal() }} />
        </div>
      </div>
    </div>, document.body
  )
}

export default Warning;