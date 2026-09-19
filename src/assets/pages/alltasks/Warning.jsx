import { useRef } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

function Warning({ taskToDelete, setToDeleteTask, setTasks }) {
  const modal = useRef(null);

  function handleTaskDeletion(taskId) {
    setTasks(prevTasks => prevTasks.filter(task => (task.id !== taskId)));
  }

  function closeModal() {
    modal.current.close();
  }

  return (
    <Modal isOpen={taskToDelete} onClose={() => setToDeleteTask(null)} ref={modal}>
      <p className="text-text text-lg">Are you sure you want to delete this task?<br />
        <span className="font-bold">(This action cannot be undone)</span>
      </p>
      <div className="flex justify-between">
        <Button displayText="Delete" variant="danger" onClick={() => {
          handleTaskDeletion(taskToDelete);
          closeModal();
        }} />
        <Button displayText="Cancel" onClick={closeModal} />
      </div>
    </Modal>
  )
}

export default Warning;