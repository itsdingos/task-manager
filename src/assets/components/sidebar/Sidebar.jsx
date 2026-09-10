import { NavLink } from "react-router";

function Sidebar() {
  return (
    <div className="w-48 h-full shrink-0">
      <NavLink to="/AllTasks">
        <div className="
          font-title w-full pl-4 p-2 border-2
         text-text border-border rounded-full
         hover:bg-highlight-background hover:border-highlight-border
         hover:text-highlight-text transition-colors duration-200 ease-in"
        >
          <p>Manage Tasks</p>
        </div>
      </NavLink>
      <NavLink>
        <div>
          <p>Test button</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Sidebar;