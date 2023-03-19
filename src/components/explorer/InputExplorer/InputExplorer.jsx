import React, { useContext, useEffect, useState } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';

import arrowRight from '@images/explorer/arrow_right.svg'
import arrowLeft from '@images/explorer/arrow_left.svg'
import down from '@images/explorer/down.svg'
import refresh from '@images/explorer/refresh.svg'

const InputExplorer = () => {
  const { name } = useContext(ExplorerContext)
  const [input, setInput] = useState({valor: name})

  const handleChange = (event) => {
    const target = event.target;
    setInput({valor: target.value})
  }
  useEffect(() => {
    setInput({valor: name})
  },[name])

  return (
    <div className="input_explorer">
      <div className="arrows">
        <img src={arrowRight} alt="right" />
        <img src={arrowLeft} alt="left" />
      </div>
      <div className="pc_information">
        <input 
          type="text" 
          name='valor' 
          autoComplete='off'
          value={input.valor} 
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