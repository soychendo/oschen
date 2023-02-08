import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@context/GlobalContext';
import OschenMouseDown, { touring } from '@utils/OschenMouseDown';

import { useZindex } from '@hooks/useZindex';

import close from '@images/pro/close.svg';

const Audio = () => {

  const ca = document.querySelector('.ca')
  const { active, changeZindex } = useZindex(ca)

  const { 
    state,
    closePlayer, 
    audioRef, 
    onPlay, 
    onToggle,
    autoPlay,
    volume,

  } = useContext(GlobalContext);

  const handleContainer = (e) => {
    OschenMouseDown(e, "audio");
    touring(".audio");
  }

  useEffect(() => {
    changeZindex()
  }, [])

  return (
    <div
    onMouseMove={changeZindex()}
    onMouseDown={(e) => handleContainer(e)}
    onLoad={() => onPlay()} 
    onEnded={autoPlay} 
    id="Audio"
    className="audio ca"
    style={active}
    >
      <div className="mmc">
          <img onClick={() => closePlayer()} className="close" src={close} alt="close" />
      </div>
      <div className="AudioContainer">
        <div className="AudioDescription">
          {state.selectedSong ? (
            <>
            <div className="AlbumImg">
              <img 
                src={`assets/audioseven/album/${state.selectedSong.album}`} 
                alt={state.selectedSong.name} 
                style={{pointerEvents: 'none'}}
              />
            </div>
            <marquee 
            behavior="scroll" 
            direction="left" 
            width="100%" 
            bahaviur="alternate" 
            align="middle" 
            scrolldelay="5" 
            scrollamount="4" 
            loop="infinite" 
            hspace="10px" 
            vspace="5px"
            >
                <p className="AudioText">{state.selectedSong.name}</p>
            </marquee>
            <audio ref={audioRef} src={`audio/${state.selectedSong.mp3}`}></audio>
            </>
          ) : (
            <p className="AudioText">Add To Song</p> 
          )}
        </div>
      </div>
      <div id="play">
        <div 
          onClick={onToggle} 
          className={state.isPlaying ? 'btn-stop' : 'btn-play'} 
          alt="play">
        </div>  
      </div>
      <div className="volumen">
        <input 
        onInput={volume}
        type="range" 
        name="volumen" 
        id="volumen" 
        min="0" 
        max="1" 
        step="0.01" 
        defaultValue="0.7"
        /> 
      </div>
    </div>
  );
}

export default Audio;