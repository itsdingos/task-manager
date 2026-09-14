function EmptyTasksNotice() {
  return (
    <div className="bg-surface-accent w-lg h-128 p-16 text-text flex flex-col items-center rounded-4xl shadow-lg">
      <h2 className="font-title text-lg mb-4">Oops! No Tasks</h2>
      <p className="font-normal text-text-secondary">It seems you have not created any tasks yet.</p>
      <button className="
      font-semibold px-8 py-4 mt-auto rounded-lg
      bg-highlight-background text-highlight-text
      hover:bg-highlight-glow
      transition-colors duration-200
      cursor-pointer
      ">Add New</button>
    </div>
  )
}

export default EmptyTasksNotice;