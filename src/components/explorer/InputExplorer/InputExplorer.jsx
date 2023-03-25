import React, { useContext, useEffect, useState } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';
import down from '@images/explorer/down.svg'
import refresh from '@images/explorer/refresh.svg'
import { Arrow } from './Arrow';

const InputExplorer = () => {
  const { state, goBack } = useContext(ExplorerContext)
  const [input, setInput] = useState({valor: state.name})

  const handleChange = (event) => {
    const target = event.target;
    setInput({valor: target.value})
  }
  useEffect(() => {
    setInput({valor: state.name})
  },[state.name])

  return (
    <div className="input_explorer">
      <div onClick={goBack} className="arrows">
        <Arrow />
      </div>
      <div className="pc_information">
        <input 
          type="text" 
          name='valor' 
          autoComplete='off'
          value={input.valor || ''} 
          onChange={(e) => handleChange(e)} 
        />
        <div className="arrow_refresh">
          <img src={down} alt="down" />
          <img src={refresh} alt="refresh" />
        </div>
      </div>
      <div className="search_chendo">
        <input type="search" placeholder="Search" spellCheck="false" />
      </div>
  </div>
  );
}

export default InputExplorer;