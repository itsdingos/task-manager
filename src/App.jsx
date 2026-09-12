import { Outlet } from "react-router"
import Sidebar from "./assets/components/sidebar/Sidebar"
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="bg-background h-screen flex justify-center items-center p-16 font-default">
      <div className="bg-surface w-full h-full rounded-4xl flex">
        <aside>
          <Sidebar />
        </aside>

        <main className="w-full h-full bg-surface-hover rounded-4xl">
          <div className="p-8">
            <Outlet context={{tasks, setTasks}} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App