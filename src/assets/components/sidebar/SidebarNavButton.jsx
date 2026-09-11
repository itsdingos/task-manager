import { NavLink } from "react-router";

function SidebarNavButton({ path, name }) {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <div className={`
          relative
          w-full
          pl-4 p-2
          my-8
          border-2 rounded-full
          font-bold 
          transition-colors duration-200 ease-in

          after:absolute
          after:left-1
          after:right-1
          after:-bottom-1
          after:h-1
          after:rounded-full
          after:bg-highlight-background
          after:blur-sm
          after:transition-opacity
          after:duration-200
          after:ease-in

         ${isActive
            ? "bg-highlight-background text-highlight-text border-highlight-border after:opacity-100"
            : "text-text border-border hover:bg-highlight-background hover:border-highlight-border hover:text-highlight-text after:opacity-0"
          }
        `}>
          <p>{name}</p>
        </div>
      )}
    </NavLink>
  )
}

export default SidebarNavButton;