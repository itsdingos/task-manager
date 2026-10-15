import { useState } from "react";
import { useOutletContext } from "react-router";
import TaskItem from "./TaskItem";
import Warning from "./Warning";
import dayjs from "dayjs";
import TaskGroup from "./TaskGroup";

function AllTasks() {
  const fixedGroupOrder = [
    "overdue",
    "today",
    "tomorrow",
    "week",
  ];

  const { tasks, setTasks } = useOutletContext();
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = tasks.filter((task) => task.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const today = dayjs().startOf('day');
  const tomorrow = today.add(1, 'day');
  const week = today.add(1, 'week');

  const groupLabels = {
    overdue: "Overdue",
    today: "Today",
    tomorrow: "Tomorrow",
    week: "This Week",
  }
  const groupedTasks = {}

  filteredTasks.forEach(task => {
    const dueDate = dayjs(task.dueDate).startOf('day');

    if (dueDate.isBefore(today)) {
      addToGroup("overdue", task)
    } else if (dueDate.isSame(today)) {
      addToGroup("today", task)
    } else if (dueDate.isSame(tomorrow)) {
      addToGroup("tomorrow", task)
    } else if (dueDate.isBefore(week) || dueDate.isSame(week)) {
      addToGroup("week", task)
    } else {
      addToGroup(dueDate.format('YYYY-MM-DD'), task)
    }
  });

  const orderedGroups = [
    ...fixedGroupOrder.filter((group) =>
      Object.hasOwn(groupedTasks, group)
    ),
    ...Object.keys(groupedTasks)
      .filter((group) => !Object.hasOwn(groupLabels, group))
      .sort(),
  ];

  function addToGroup(group, task) {
    if (!Object.hasOwn(groupedTasks, group)) {
      groupedTasks[group] = [];
    }

    groupedTasks[group].push(task);
  }

  function getGroupLabel(group) {
    if (Object.hasOwn(groupLabels, group)) {
      return groupLabels[group];
    }

    return dayjs(group).format('MMMM D')
  }

  return (
    <div className="h-full flex flex-col">
      {taskToDelete !== null && <Warning taskToDelete={taskToDelete} setToDeleteTask={setTaskToDelete} setTasks={setTasks} />}

      <div className="bg-surface-tertiary w-full h-16 shrink-0 rounded-full">
        <input
          className="w-full h-full pl-8 rounded-full outline-none border-none text-text"
          placeholder="Search by name..."
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
      </div>

      <h1 className="font-title font-bold text-text text-2xl mt-8">
        Manage Tasks
      </h1>

      <h2 className="text-text-secondary text-lg mb-8">
        Set the goals for your future
      </h2>

      <div className="flex-1 min-h-0 overflow-y-auto">
        {orderedGroups.map((group) => (
          <TaskGroup key={group} title={getGroupLabel(group)}>
            {groupedTasks[group].map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                setTaskToDelete={setTaskToDelete}
              />
            ))}
          </TaskGroup>
        ))}
      </div>
    </div>
  );
}

export default AllTasks;