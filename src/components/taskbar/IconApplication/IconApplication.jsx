import React, { useContext } from 'react';
import { GlobalContext } from '@context/GlobalContext';

const IconApplication = () => {

  const { handleExplorer, handleCalc, outStartMenu } = useContext(GlobalContext);

  return (
    <>
    
    <div className="icon_application">
      <ul>
      <li onMouseDown={outStartMenu}>
        <a onClick={handleExplorer} className="btn-show explorer_icon">
          <img className="btn-show explorer_icon" src="assets/pro/explorer.svg" alt="explorer icon" />
        </a>
      </li>
      </ul>
    </div>
     <div className="icon_application">
     <ul>
     <li onMouseDown={outStartMenu}>
       <a onClick={handleCalc} className="btn-show calc_icon">
         <img className="btn-show calc_icon" src="assets/pro/calculator.svg" alt="calc icon" />
       </a>
     </li>
     </ul>
   </div>
    </>
    
  );
}

export default IconApplication;