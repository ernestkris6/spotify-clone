import React from 'react'
import Navbar from '../Navbar/Navbar';
import { albumsData } from '../../assets/assets';
import AlbumItem from '../Album/AlbumItem';
import SongItem from '../Album/SongItem';
import { songsData }  from '../../assets/assets';

const DisplayHome = () => {
  return (
    <>
        <Navbar />
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
          <div className='my-5 font-bold text-2xl flex overflow-auto'>
          {albumsData.map((item, index)=> (
            <AlbumItem 
            key={index} 
            name={item.name}
            desc={item.desc}
            image={item.image}
            id={item.id}
            />
          ))}
        </div>
        </div>
        
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
          <div className='my-5 font-bold text-2xl flex overflow-auto'>
          {songsData.map((item, index)=> (
            <SongItem
            key={index} 
            name={item.name}
            image={item.image}
            desc={item.desc}
            id={item.id} />
          ))}
        </div>
        </div>
    </>
  )
}

export default DisplayHome;