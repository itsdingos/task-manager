function TaskList( { tasks } ) {
  return (
    <div className="mt-4">
      <ul className="list-none list-outside">
        {
          tasks.map((tasks) => {
            return (
              <li className="text-gray-700" key={tasks.id}>{tasks.name}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TaskList