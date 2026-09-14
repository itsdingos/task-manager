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
          font-semibold
          transition-all duration-200 ease-in

          shadow-xl
          

         ${isActive
            ? "bg-highlight-background text-highlight-text border-highlight-border shadow-highlight-glow/10"
            : "text-text border-border hover:bg-highlight-background hover:border-highlight-border hover:text-highlight-text shadow-highlight-glow/0"
          }
        `}>
          <p>{name}</p>
        </div>
      )}
    </NavLink>
  )
}

export default SidebarNavButton;