import SidebarNavButton from "./SidebarNavButton";

function Sidebar() {
  return (
    <div className="w-48 h-full shrink-0 mx-6 my-12">
      <SidebarNavButton path="/" name="Overview" />
      <SidebarNavButton path="/AllTasks" name="Manage Tasks" />
    </div>
  );
}

export default Sidebar;