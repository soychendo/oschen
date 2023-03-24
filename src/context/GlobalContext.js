import React, {createContext, useEffect, useReducer, useRef} from 'react';
import { globalReducer } from '@context/globalReducer';
import api from '@api/db.json';

import { 
  CLOSE_PLAYER, 
  ON_PLAYER, 
  GET_SONG,
  OFF_PLAYER,
  START_MENU,
  MENU_OUTSIDE,
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
  const menuRef = useRef(null)
  const sidebarRef = useRef(null)

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
  // Focus Out Start Menu
  useEffect(() => {
    const handleMenuOutside = (event) => {
      if(menuRef.current && !menuRef.current.contains(event.target) && 
      sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        dispatch({type: MENU_OUTSIDE})
      }
    }
    document.addEventListener('mousedown', handleMenuOutside);

    return () => {
      document.removeEventListener('mousedown', handleMenuOutside)
    }
  }, [menuRef])
 
  // ------------------------------------>

  // Action Open Explorer Calculator
  const closeMenu = () => {
    dispatch({type: MENU_OUTSIDE})
  }
  // Toggle Buttons
  const toggleMenu = (event) => {
    event.stopPropagation();
    dispatch({type: START_MENU});
  }
  const toggleCalculator = (event) => {
    event.stopPropagation();
    dispatch({type: CALCULATOR});
    closeMenu();
  }
  const toggleExplorer = (event) => {
    event.stopPropagation();
    dispatch({type: EXPLORER});
    closeMenu();
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
    audioRef,
    menuRef,
    sidebarRef
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