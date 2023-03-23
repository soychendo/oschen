import React, { useContext } from 'react';
import { GlobalContext } from "@context/GlobalContext";
import { Explorer } from './Explorer';

const ContainerExplorer = () => {

  const { state } = useContext(GlobalContext)
  
  return (
   
    <div id='ContainerExplorer'>
      { state.explorer ? <Explorer /> : null }
    </div>

  );
}

export { ContainerExplorer };