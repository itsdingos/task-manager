import { Link } from 'react-router';
import { House, Notebook } from '../utils/icons'

function Sidebar() {
  return (
    <div className="w-15 flex flex-col items-center gap-y-5 mr-5">
      <Link to="/">
        <button className="cursor-pointer flex items-center">
          <House className="size-11 hover:text-emerald-300" />
          <p className="m-4">Home</p>
        </button>
      </Link>

      <Link to="/alltasks">
        <button className="cursor-pointer">
          <Notebook className="size-11 hover:text-emerald-300" />
        </button>
      </Link>
    </div>
  )
}

export default Sidebar