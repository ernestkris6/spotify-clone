import React, { useContext } from 'react'
//import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../Context/PlayerContext';

const SongItem = ({name, desc, image, id}) => {

  const {playWithId} = useContext(PlayerContext)

  //const navigate = useNavigate();
  
  return (
    <div onClick={()=> playWithId(id)} className='min-w-[180px] cursor-pointer rounded hover:bg-[#ffffff26] p-2 px-3'>
        <img src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem;