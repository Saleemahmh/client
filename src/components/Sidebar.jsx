import { Link } from 'react-router-dom';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { FaBook } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='bg-amber-900/80 font-amarante rounded flex flex-col items-center justify-between mt-20 p-4 text-amber-200 h-[90%]'>
    <div className='flex items-center flex-col justify-center'>
    <div className="w-full mt-4 h-[1px] bg-amber-500 hidden lg:block"></div>

    </div>
    <div className='w-full flex flex-col items-center gap-2'>
      <Link to="/dashboard" className='w-full py-2 text-amber-100 font-amarante flex items-center justify-center  text-center hover:bg-amber-950 rounded transition-all duration-300'>
      User Dashboard <RxAvatar className="ms-3"/>
      </Link>
      <Link to="/dashboard/myapplications" className='w-full text-amber-100 font-amarante py-2 flex items-center justify-center  text-center hover:bg-amber-950 rounded transition-all duration-300'>
      My Applications<FaBook className="ms-3"/>
      </Link>
      <Link to="/dashboard/licenserenewal" className='w-full text-amber-100 font-amarante py-2 flex items-center justify-center  text-center hover:bg-amber-950 rounded transition-all duration-300'>
      License Renewal  <MdDashboard className="ms-3"/>
      </Link>
      <Link to="/dashboard/uploaddoc" className='w-full text-amber-100 font-amarante py-2 flex items-center justify-center  text-center hover:bg-amber-950 rounded transition-all duration-300'>
      Upload Documents      <MdDashboard className="ms-3"/>
      </Link>
      <Link to="/dashboard/track" className='w-full text-amber-100 font-amarante py-2 flex items-center justify-center  text-center hover:bg-amber-950 rounded transition-all duration-300'>
      Track Setup Status   <MdDashboard className="ms-3"/>
      </Link>
    </div>
    <button className='bg-amber-950 w-3/6 lg:w-full mt-4 lg:mt-0 text-amber-200 flex items-center justify-center hover:bg-cyan-700 rounded transition-all duration-300'>
    <Link to="/">Log Out</Link> <FaArrowRightFromBracket className="ms-4"/>
    </button>
  </div>
  )
}

export default Sidebar