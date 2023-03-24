import React, { useContext, useCallback } from 'react';
import db from '@api/db.json';
import { ExplorerContext } from '@context/ExplorerContext';

const ExplorerRoutes = () => {
  const { state, select } = useContext(ExplorerContext);
  const { explorer } = db;

  const onclick = useCallback((list) => {
    select({...list});
  }, [state, select]);

  return (
    <ul className="RoutesPc">
      {explorer.map(list => (
        <li 
          key={list.id} 
          data-id={list.id} 
          onClick={() => onclick(list)}
          className={state.selected === list.id ? 'selected' : ''}
        >
          <img src={list.cover} alt={list.name} />
          <span>{list.name}</span>
        </li>
      ))}
    </ul>
  );
}

export {ExplorerRoutes};