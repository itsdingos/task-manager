import { useState } from "react";

function TaskGroup({ title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section>
      <button
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="sticky top-0 z-10 w-full bg-surface-primary p-4 text-text font-bold text-left text-lg font-title rounded-t-2xl"
      >
        {title}

        <span className="float-right">{isCollapsed ? "+" : "-"}</span>
      </button>

      {!isCollapsed && (
        <div>
          {children}
        </div>)
      }
    </section>
  )
}

export default TaskGroup;