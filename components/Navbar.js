import React from 'react'
import Searchbar from "./ui/searchbar"
import { FaRegUserCircle, FaRocketchat } from 'react-icons/fa'
import { TfiAnnouncement } from 'react-icons/tfi'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6 py-3 border-b border-gray-200'>
      {/* Left: Search Bar */}
      <div className='hidden md:block lg:block'>
        <Searchbar />
      </div>

      {/* Right: Icons and User Profile */}
      <div className='flex items-center gap-4 w-full justify-end'>
        <div className='flex items-center gap-4 text-gray-600 text-lg'>
          <FaRocketchat className='cursor-pointer hover:text-gray-800' />
          <div className='relative flex items-center cursor-pointer '>  
              <TfiAnnouncement className='cursor-pointer hover:text-gray-800' />
              <span className='absolute -top-3.5 -right-4 bg-red-950 text-white text-[10px] font-bold w-3 h-full flex items-center justify-center rounded-xl p-2'>23</span>
          </div>
        </div>

        <div className='flex items-center gap-3 pl-3 border-l border-gray-200'>
          <div className='flex flex-col text-right'>
            <span className='text-sm font-semibold text-gray-800'>John Doe</span>
            <span className='text-xs text-gray-500'>Admin</span>
          </div>
          <FaRegUserCircle className='text-3xl text-gray-600' />
        </div>
      </div> 
    </div>
  )
}

export default Navbar