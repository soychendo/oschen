import React, { createContext, useEffect, useReducer } from 'react';
import { explorerReducer } from './explorerReducer';
import api from '../../database/db.json'

import { SELECT, SELECTED } from './types';

const ExplorerContext = createContext();

const ExplorerProvider = ({children}) => {

  const initialState = {
    data: api.explorerList,
    name: 'Home',
    selected: 1,
    detail: 'assets/explorer/pc.svg',
    selectedContent: [],
  }
  const [state, dispatch] = useReducer(explorerReducer, initialState);

  useEffect(() => {
  
    const selectedItem = state.data.find(item => item.explorerId === state.selected);

    const selectedContent = selectedItem && selectedItem.content ? selectedItem.content : [];
  
    dispatch({type: SELECTED, payload: selectedContent});
     
  }, [state.selected]);

  const select = ({ id, name, cover }) => {
    dispatch({type: SELECT, payload: { id, name, cover }})
  }

  const value = { 
    state, 
    select,
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