import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react'
import TaskList from './TaskList'
import AddTaskModal from './AddTaskModal';

function TaskManager() {
  const { t, i18n } = useTranslation();
  const [tasks, setTasks] = useState(
    () => {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    }
  )
  const [filters, setFilters] = useState({
    dueDate: "all",
    status: "all"
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks, i18n]);

  const filteredTasks = tasks.filter(task => {
    if (filters.status === 'completed' && !task.completed) return false;
    if (filters.status === 'pending' && task.completed) return false;

    if (filters.dueDate !== 'all' && filters.dueDate !== task.dueDate) return false;

    return true;
  })

  const uniqueDates = [...new Set(tasks.map(task => { return task.dueDate }))];


  return (
    <div className="bg-gray-100 w-3xl rounded-lg shadow-md p-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{t('title')}</h1>
      </div>
      <div>
        <p className="text-center text-gray-400 my-4">---- Tasks ----</p>
        <div className="flex justify-between items-center">
          <div className='flex gap-x-3'>
            <select
              value={filters.dueDate}
              onChange={e => {
                setFilters(prev => ({
                  ...prev,
                  dueDate: e.target.value
                }))
              }}
              name="dateFilter"
              id="dateFilter"
              className="border border-gray-300 rounded-md py-2 px-3 w-3xs focus:outline-none focus:ring-2 focus:ring-blue-500">
              {uniqueDates.length > 0
                ? (
                  <>
                    <option value="all">{t('filterTypes.all')}</option>
                    {uniqueDates.map(date => {
                      return (
                        <option key={date} value={date}>{dayjs(date).format(t('weekDateFormat'))}</option>
                      )
                    })}
                  </>
                )

                : <option value="all">{t('noTasks')}</option>
              }
            </select>

            <select
              value={filters.status}
              onChange={e => {
                setFilters(prev => ({
                  ...prev,
                  status: e.target.value
                }))
              }}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">{t('filterTypes.all')}</option>
              <option value="completed">{t('filterTypes.completed')}</option>
              <option value="pending">{t('filterTypes.pending')}</option>
            </select>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsModalOpen(true)}
          >{t('addTask.label')}
          </button>
        </div>
        <TaskList
          tasks={filteredTasks}
          setTasks={setTasks}
        />
      </div>
      {isModalOpen && (
        <AddTaskModal
          setIsModalOpen={setIsModalOpen}
          setTasks={setTasks}
        />)}
      <button onClick={() => setTasks([])}>Reset</button>
    </div>
  )
}

export default TaskManager