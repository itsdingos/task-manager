import { Outlet } from "react-router"
import Sidebar from "./assets/components/sidebar/Sidebar"
import { useEffect, useState } from "react"

// Remove dev shortcut later.

window.addTestTask = function () {
  const task = {
    id: crypto.randomUUID(),
    name: "Test Task",
    description: "This is a test task",
    priority: "medium",
    dueDate: "2026-09-15",
    status: "pending"
  };

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  localStorage.setItem(
    "tasks",
    JSON.stringify([...tasks, task])
  );
};

window.removeAllTasks = function () {
  localStorage.setItem("tasks", JSON.stringify([]));
}

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="bg-background h-screen flex justify-center items-center p-16 font-default">
      <div className="bg-surface-primary w-full h-full rounded-4xl flex">
        <aside>
          <Sidebar />
        </aside>

        <main className="w-full h-full bg-surface-secondary rounded-4xl">
          <div className="p-8 h-full">
            <Outlet context={{ tasks, setTasks }} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App