import { Outlet } from "react-router"
import Sidebar from "./assets/components/sidebar/sidebar"

function App() {
  return (
    <div className="bg-background h-screen flex justify-center items-center p-16">
      <div className="bg-surface w-full h-full rounded-xl">
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App