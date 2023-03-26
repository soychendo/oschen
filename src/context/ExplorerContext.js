import React, { createContext, useEffect, useReducer } from 'react';
import { explorerReducer } from './explorerReducer';
import api from '@api/db.json'

import { 
  SELECT, 
  SELECTED, 
  GO_BACK,
} from './types';

const ExplorerContext = createContext();

const ExplorerProvider = ({children}) => {

  const initialState = {

    data: api.explorerList,
    name: 'Home',
    selected: 1,
    detail: 'assets/explorer/pc.svg',
    selectedContent: [],
    previous: null,
    stack: [{ id: 1, name: 'Home', cover: 'assets/explorer/pc.svg' }], // Add the default values to the start of the array
    selectionHistory: [1],
  }

  const [state, dispatch] = useReducer(explorerReducer, initialState);

  useEffect(() => {
  
    const selectedItem = state.data.find(item => item.explorerId === state.selected);

    const selectedContent = selectedItem && selectedItem.content ? selectedItem.content : [];
  
    dispatch({type: SELECTED, payload: selectedContent});

  }, [state.selected]);
 
  const select = ({ id, name, cover }) => {
    dispatch({type: SELECT, payload: { id, name, cover }});
  };

  const goBack = () => {
    if (state.selectionHistory.length > 1) { 
      dispatch({ type: GO_BACK });
    }
  };

  const value = { 
    state, 
    select,
    goBack,
    selectedContent: state.selectedContent, 
  }

  return (
    <ExplorerContext.Provider value={value}>
      {children}
    </ExplorerContext.Provider>
  );
} 

export {ExplorerContext};
export {ExplorerProvider};