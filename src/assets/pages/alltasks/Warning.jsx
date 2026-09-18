import { createPortal } from "react-dom";

function Warning({ taskToDelete, setToDeleteTask, setTasks }) {
  function handleTaskDeletion(taskId) {
    setTasks(prevTasks => prevTasks.filter(task => (task.id !== taskId)));
  }

  return createPortal(
    <div className="fixed inset-0 bg-black/25 flex justify-center items-center">
      <div className="bg-surface-accent w-lg h-64 p-6 rounded-4xl flex flex-col justify-between">
        <p className="text-text text-lg">Are you sure you want to delete this task?<br />
          <span className="font-bold">(This action cannot be undone)</span>
        </p>
        <div className="flex justify-between">
          <button
            className="
              font-semibold px-4 py-2 rounded-full cursor-pointer border
              bg-transparent text-danger border-danger
              hover:text-highlight-text hover:bg-danger
              transition-all duration-150
            "
            onClick={
              () => {
                handleTaskDeletion(taskToDelete)
                setToDeleteTask(null)
              }}
          >Delete</button>
          <button
            className="
              font-semibold border px-4 py-2 rounded-full cursor-pointer
              bg-transparent border-text text-text
              hover:bg-highlight-background hover:border-highlight-border hover:text-highlight-text
              transition-all duration-150
            "

            onClick={
              () => {
                setToDeleteTask(null)
              }}
          >Cancel</button>
        </div>
      </div>
    </div>, document.body
  )
}

export default Warning;