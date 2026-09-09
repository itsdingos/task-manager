import { NavLink } from "react-router";

function Sidebar() {
  return (
    <div className="w-full h-full">
      <NavLink to="/AllTasks">
        <p>Manage Tasks</p>
      </NavLink>
    </div>
  );
}

export default Sidebar;