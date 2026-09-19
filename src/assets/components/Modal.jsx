import { useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, ref, children }) {
  const [isClosing, setIsClosing] = useState(false);

  useImperativeHandle(ref, () => ({
    close() {
      setIsClosing(true);

      setTimeout(() => {
        onClose();
      }, 200)
    }
  }));

  if (!isOpen && !isClosing) return null;

  return createPortal(
    <div className={`
      fixed inset-0 bg-black/25 flex justify-center items-center
      ${isClosing
        ? "animate-[backdrop-out_200ms_ease-out_forwards]"
        : "animate-[backdrop-in_200ms_ease-out_forwards]"}
    `}>
      <div className={`
          w-[50%] max-w-lg
          min-h-48 max-h-[90vh]
          p-6
          rounded-4xl
          bg-surface-tertiary
          flex flex-col justify-between
          overflow-y-auto

          ${isClosing
            ? "animate-[modal-out_200ms_ease-out_forwards]"
            : "animate-[modal-in_200ms_ease-out_forwards]"
          }
        `}>
        {children}
      </div>
    </div>, document.body
  )
}

export default Modal