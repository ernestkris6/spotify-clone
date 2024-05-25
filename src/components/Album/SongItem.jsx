import React from 'react'
import { useNavigate } from 'react-router-dom';

const SongItem = ({name, desc, image, id}) => {

  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate(`/album/${id}`)} className='min-w-[180px] cursor-pointer rounded hover:bg-[#ffffff26] p-2 px-3'>
        <img src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem;