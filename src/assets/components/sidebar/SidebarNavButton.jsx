import { NavLink } from "react-router";

function SidebarNavButton({ path, name }) {
  return (
    <NavLink to={path}>
      <div className="
          font-title w-full pl-4 p-2 border-2 my-8
         text-text border-border rounded-full
         hover:bg-highlight-background hover:border-highlight-border
         hover:text-highlight-text transition-colors duration-200 ease-in"
      >
        <p>{name}</p>
      </div>
    </NavLink>
  )
}

export default SidebarNavButton;