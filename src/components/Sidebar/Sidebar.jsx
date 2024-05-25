import React from 'react';
import {assets} from '../../assets/assets';

const sidebar = () => {


  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-color-white hidden lg:flex'>
        <div className='bg-[#121212] pt-4 h-[15%] rounded flex-col justify-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="home icon" />
                <p className='font-bold text-white'>Home</p>
            </div>
            <div className='flex items-center gap-3 pt-4 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="home icon" />
                <p className='font-bold text-white'>Search</p>
            </div>
        </div>     
        <div className='h-[85%] bg-[#121212] rounded'>
            <div className='p-4 flex items-center justify-between'>
               <div className='flex items-center gap-3'>
               <img className='w-8' src={assets.stack_icon} alt="stack icon" />
                <p className='text-white font-semibold'>Your Library</p>
               </div>
               <div className='flex items-center gap-3'>
                    <img className='w-3 cursor-pointer' src={assets.arrow_icon} alt="stack icon" />
                    <img className='w-3 cursor-pointer' src={assets.plus_icon} alt="stack icon" />
                </div>
            </div>
            <div className='bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
               <h1 className='text-white'>Create your first playlist</h1>
               <p className='font-light text-white'>It's easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] rounded-full mt-4 mb-4'>Create Playlist</button>
            </div>
            <div className='bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
               <h1 className='text-white'>Let's find some podcasts to follow</h1>
               <p className='font-light text-white'>We will keep you updated on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] rounded-full mt-4 mb-4'>Browse podcasts</button>
            </div>
        </div>   
    </div>
  )
}

export default sidebar;