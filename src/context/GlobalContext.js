import React, {createContext, useReducer, useRef, useState} from 'react';
import { dataReducer } from '@context/dataReducer';
import { database } from '@public/database/database';

import { 
  GET_SONG,
  CLOSE_PLAYER, 
  ON_PLAYER, 
  OFF_PLAYER,
  START_MENU,
  OUT_START_MENU,
} from '@context/types';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const initialState = {
    data: [],
    selectedSong: null,
    activeSong: false,
    isPlaying: false,
    activeMenu: false,
  }
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [explorer, setExplorer] = useState(false);
  const [calc, setCalc] = useState(false);

  // Grid Programs ---->
  const appRef = useRef([]);
  const containerRef = useRef([]);

  const getAudio = (id) => {
    database.music.forEach(song => {
      if(song.id == id) {
        dispatch({ type: GET_SONG, payload: song })
      }
    })
  }
  const audioRef = useRef();

  const onPlay = () => {
    const audio = audioRef.current;
    audio.play();
    dispatch({type: ON_PLAYER});
  }
  const onPause = () => {
    const audio = audioRef.current;
    audio.pause();
    dispatch({type: OFF_PLAYER});
  }
  const onToggle = async () => {
    const audio = audioRef.current;
    if( audio.paused ) { return onPlay(); } 
    else { if( !audio.paused ) { return onPause(); } }
  }
  const autoPlay = () => {
    const audio = audioRef.current;
    audio.load();
    audio.play();
  }
  const volume = (e) => {
    const volumen = e.target.value;
    const audio = audioRef.current;
    audio.volume = volumen;
  }
  const closePlayer = () => {
    dispatch({type: CLOSE_PLAYER});
  }
  // State App ---------->
  const handleExplorer = () => {
   setExplorer(!explorer)
  }
  const handleCalc = () => {
    setCalc(!calc)
  }
  // ------------------------------------>
  const closeExplorer = () => {
    setExplorer(false);
  }
  const closeCalc = () => {
    setCalc(false);
  }
  // State Start Menu 
  const toogleMenu = () => {
    dispatch({type: START_MENU});
  }
  const outStartMenu = () => {
    const os = document.querySelector('.os_system');
    window.addEventListener('mousedown', e => {
      if(e.target !== os && !os?.contains(e.target)) {
        dispatch({type: OUT_START_MENU})
      }
    }) 
  }

  const playerContext = {
    state,
    onPlay,
    onPause,
    autoPlay,
    volume,
    getAudio,
  }
  const valueContext = {
    data: state.data,
    toogleMenu,
    outStartMenu,
    onToggle,
    closePlayer,
    closeExplorer,
    closeCalc,
    handleExplorer,
    handleCalc,
    explorer,
    calc
  }
  const useRefContext = {
    appRef,
    containerRef,
    audioRef
  }
  const globalContext = {
    ...playerContext,
    ...valueContext,
    ...useRefContext,
  }

  return(
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider};
export {GlobalContext};