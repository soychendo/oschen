import React, { useContext, useRef } from 'react';
import { GlobalContext } from '@context/GlobalContext';
import useDraggable from '@hooks/useDraggable';
import close from '@images/pro/close.svg';

const Audio = () => {

  const { 
    state,
    closePlayer, 
    audioRef, 
    onPlay, 
    onToggle,
    autoPlay,
    volume,

  } = useContext(GlobalContext);
  const containerAudioRef = useRef(containerAudioRef);
  useDraggable(containerAudioRef);

  return (
    <div
    ref={containerAudioRef}
    onLoad={() => onPlay()} 
    onEnded={autoPlay} 
    id="Audio"
    className="audio"
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
            <audio ref={audioRef} src={`${state.selectedSong.mp3}`}></audio>
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

export { Audio };