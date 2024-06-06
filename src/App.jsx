import React, { useContext } from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Player from './components/Player/Player.jsx';
import Display from './components/Display/Display.jsx'
import { PlayerContext } from './components/Context/PlayerContext.jsx';

const App = () => {

  const {audioRef} = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
          <Sidebar />
          <Display />
      </div>
          <Player />
          <audio ref={audioRef} preload='auto'></audio>
    </div>
  )
}

export default App;