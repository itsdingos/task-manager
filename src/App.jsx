import { Outlet } from "react-router"
import Sidebar from "./assets/components/sidebar/Sidebar"

function App() {
  return (
    <div className="bg-background h-screen flex justify-center items-center p-16">
      <div className="bg-surface w-full h-full rounded-4xl flex">
        <aside>
          <Sidebar />
        </aside>

        <main className="w-full h-full bg-surface-hover rounded-4xl">
          <div className="">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App