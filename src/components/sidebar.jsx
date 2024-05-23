import React from 'react';
import {assets} from '../assets/assets'

const sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-color-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex-col justify-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="home icon" />
                <p className='font-bold text-white'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="home icon" />
                <p className='font-bold text-white'>Search</p>
            </div>
        </div>     
        <div className='h-[85%] bg-[#121212] rounded'>
            <div className='p-4 flex items-center gap-3'>
                <img className='w-8' src={assets.stack_icon} alt="" />
                <p className='text-white font-semibold'>Your Library</p>
            </div>
        </div>   
    </div>
  )
}

export default sidebar;