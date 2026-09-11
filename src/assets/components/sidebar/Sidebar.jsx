import SidebarNavButton from "./SidebarNavButton";

function Sidebar() {
  return (
    <div className="w-48 h-full shrink-0 mx-6 my-12">
      <h1 className="font-title text-text text-center text-4xl font-bold">Task<br />Manager</h1>
      <div>
        <SidebarNavButton path="/" name="Overview" />
        <SidebarNavButton path="/AllTasks" name="Manage Tasks" />
      </div>
    </div>
  );
}

export default Sidebar;