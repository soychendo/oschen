import React, { useContext } from 'react';
import db from '../../../../database/db.json';
import { ExplorerContext } from '../../../context/ExplorerContext';

const ExplorerRoutes = () => {
  const { handleId } = useContext(ExplorerContext)
  const { explorer } = db;

  return (
    <ul className="RoutesPc">
    {
      explorer.map(list => (
        <li key={list.id} data-id={list.id} onClick={() => handleId({...list})}>
          <img src={list.cover} alt={list.name} />
          <span>{list.name}</span>
        </li>
      ))
    }
    </ul>
  );
}

export {ExplorerRoutes};