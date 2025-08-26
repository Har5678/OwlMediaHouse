import React from 'react'
import { Link } from 'react-router-dom'

import assets1 from '../assets/assets'


const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <Link to="/add" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
            <img src={assets1.Add} alt="" />
            <p className='hidden md:block'>Add Blogs</p>
            </Link>
            <Link to="/list" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
            <img src={assets1.Order} alt="" />
            <p className='hidden md:block'>List Blogs</p>
            </Link>
            </div>
        </div>

    )
}

export default Sidebar;