import React, {createContext, useReducer, useRef} from 'react';
import { globalReducer } from '@context/globalReducer';
import api from '../../database/db.json';

import { 
  CLOSE_PLAYER, 
  ON_PLAYER, 
  GET_SONG,
  OFF_PLAYER,
  START_MENU,
  CALCULATOR,
  EXPLORER
} from '@context/types';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const initialState = {
    selectedSong: null,
    activeSong: false,
    isPlaying: false,
    activeMenu: false,
    calculator: false,
    explorer: false,
  }
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Grid Programs ---->
  const appRef = useRef([]);
  const containerRef = useRef([]);

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

  // Get Audio Song

  const getAudio = (id) => {
    const audio = api.explorerList[4].content;
    audio.forEach(song => {
      song.id == id && dispatch({ type: GET_SONG, payload: song })
    })
  }
 
  // ------------------------------------>
  // Toggle Buttons
  const toggleMenu = (event) => {
    event.stopPropagation();
    dispatch({type: START_MENU});
  }
  const toggleCalculator = (event) => {
    event.stopPropagation();
    dispatch({type: CALCULATOR});
  }
  const toggleExplorer = (event) => {
    event.stopPropagation();
    dispatch({type: EXPLORER});
  }

  const playerContext = {
    state,
    onPlay,
    onPause,
    autoPlay,
    closePlayer,
    volume,
    getAudio
  }
  const valueContext = {
    data: state.data,
    toggleMenu,
    toggleCalculator,
    toggleExplorer,
    onToggle,
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