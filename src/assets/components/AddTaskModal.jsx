import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

function AddTaskModal({ setIsModalOpen, setTasks }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const { t } = useTranslation();

  function validateName(name) {
    if (name.trim() === "") return "Task name is empty"
    return null
  }

  function validateDate(date) {
    if (!date) {
      return "Enter valid date"
    }

    if (dayjs(date).isBefore(dayjs())) {
      return dayjs().format("Enter a date starting from YYYY/mm/dd")
    }

    return null
  }

  function validateForm({ name, dueDate }) {
    return {
      name: validateName(name),
      date: validateDate(dueDate)
    };
  }

  function handleNameChange(event) {
    if (!hasSubmitted) return;

    setErrors(prev => ({
      ...prev,
      name: validateName(event.target.value),
    }));
  }

  function handleDateChange(event) {
    if (!hasSubmitted) return;

    setErrors(prev => ({
      ...prev,
      dueDate: validateName(event.target.value),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setHasSubmitted(true);

    const taskInfo = event.target;
    const task = {
      id: dayjs(),
      name: taskInfo.taskName.value,
      description: taskInfo.description.value,
      dueDate: taskInfo.dueDate.value ? dayjs(taskInfo.dueDate.value).format('YYYY-MM-DD') : null,
      priority: taskInfo.priority.value,
      completed: false,
    }
    const err = validateForm(task);
    const isValid = Object.values(err).every(error => error === null);

    setErrors(err);

    if (!isValid) return;

    setTasks(prevTasks => [
      ...prevTasks,
      task
    ]);

    setIsModalOpen(false);
  }

  const today = dayjs().format("YYYY-MM-DD");
  const hasNameError = hasSubmitted && errors.name
  const hasDateError = hasSubmitted && errors.date
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key == 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsModalOpen]);

  return (
    <div className="fixed bg-black/50 flex items-center justify-center inset-0">
      <div className="bg-white rounded-lg shadow-md p-6 w-96 mx-auto mt-20">
        <h2 className="text-xl font-bold mb-4">{t('addTask.label')}</h2>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="taskName"
            className={`block ${hasNameError
              ? "text-red-600"
              : "text-gray-600"
              } `}>{t('addTask.taskName')} <span className='text-xs'>{t('addTask.required')}</span></label>
          <input
            type="text"
            name="taskName"
            id="taskName"
            className={`border ${hasNameError
              ? "border-red-600"
              : "border-gray-300"
              } rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            onChange={handleNameChange}
          />
          {hasNameError && (
            <p
              className="text-xs mt-1 text-red-600"
            >{errors.name}</p>
          )}

          <label htmlFor="description" className="block text-gray-600 mt-4">{t('addTask.taskDescription')} <span className='text-xs'>{t('addTask.optional')}</span></label>
          <input type="text" name="description" id="description" className="border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

          <div className="flex items-center mt-4 gap-x-4">
            <div>
              <label
                htmlFor="dueDate"
                className={`block ${hasDateError
                  ? "text-red-600"
                  : "text-gray-600"}
                mt-4`}>{t('addTask.dueDate')}</label>
              <input
                type="date"
                onChange={handleDateChange}
                min={today}
                defaultValue={today}
                name="dueDate"
                id="dueDate"
                className={`border ${hasDateError
                  ? "border-red-600 text-red-600"
                  : "border-gray-300 text-black"
                  } rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
              {hasDateError && (
                <p
                  className="text-xs mt-1 text-red-600"
                >{errors.date}</p>
              )}
            </div>
            <div>
              <label htmlFor="priority" className="block text-gray-600 mt-4">{t('addTask.priority')}</label>
              <select name="priority" id="priority" className="border border-gray-300 rounded-md py-2 px-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="low">{t('addTask.priotiyOptions.low')}</option>
                <option value="medium">{t('addTask.priotiyOptions.medium')}</option>
                <option value="high">{t('addTask.priotiyOptions.high')}</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-4 gap-x-2">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 font-bold text-white py-2 px-4 rounded">
              {t('addTask.submit')}
            </button>
            <button type="button" className="bg-gray-100 hover:bg-gray-300 font-bold py-2 px-4 rounded" onClick={() => setIsModalOpen(false)}>
              {t('addTask.cancel')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTaskModal