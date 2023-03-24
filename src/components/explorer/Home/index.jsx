import React, { useContext, useCallback } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';

const Home = (props) => {

  const { state, select } = useContext(ExplorerContext);

  const onclick = useCallback((list) => {
    select({...list});
  }, [state, select]);

  return (
    <div
      data-id={props.id}
      onClick={() => onclick(props)}
      className='Home'
    >
    <img src={`${props.src}`} alt={props.name} />
    <span>{props.name}</span>
  </div>
  );
};

export {Home};