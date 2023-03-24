import { 
  GET_SONG,
  CLOSE_PLAYER, 
  ON_PLAYER, 
  OFF_PLAYER, 
  START_MENU,
  MENU_OUTSIDE,
  CALCULATOR,
  EXPLORER,
} from "@context/types";

export const globalReducer = (state, action) => {
  const { type, payload } = action;
  const { activeMenu, calculator, explorer } = state;

  switch (type) {
    case GET_SONG:
      return {
        ...state,
        selectedSong: payload,
        activeSong: true
      };
    case ON_PLAYER:
      return {
        ...state,
        isPlaying: true
      }
    case OFF_PLAYER:
      return {
        ...state,
        isPlaying: false
      }    
    case CLOSE_PLAYER:
      return {
        ...state,
        activeSong: false
      }
    case START_MENU:
      return {
        ...state,
        activeMenu: !activeMenu
      }
    case MENU_OUTSIDE:
      return {
        ...state,
        activeMenu: false
      }
    case CALCULATOR:
      return {
        ...state,
        calculator: !calculator
      }  
    case EXPLORER:
      return {
        ...state,
        explorer: !explorer
      } 
    default:
      return state;
  }
};