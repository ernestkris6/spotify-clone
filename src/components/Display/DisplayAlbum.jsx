import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets } from '../../assets/assets';


const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id]
    //console.log(albumData);

  return (
    <>
        <Navbar />
        <div className='flex flex-col mt-10 md:items-end md:flex-row md:items-end'>
            <img className='w-48' src={albumData.image} alt="" />
            <div className='flex flex-col'>
                <p className='md:ml-4'>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl md:ml-3'>{albumData.name}</h2>  
                <h4 className='md:ml-3'>{albumData.desc}</h4>
                <p className='mt-1 md:ml-3'>
                    <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                    <b className='ml-1.5 mr-2'>Spotify</b>
                    
                    ~ 1,132,154 likes
                    ~<b className='ml-1.5 mr-2'>50 Songs</b>
                    about 2 hrs 30 mins
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date added</p>
            <img className='w-4 m-auto' src={assets.clock_icon} alt="" />
        </div>
        <hr className='mt-1'/>


    </>
  )
}

export default DisplayAlbum;