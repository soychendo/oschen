import React, { useContext } from 'react';
import { GlobalContext } from '@context/GlobalContext';

const IconApplication = () => {

  const { toggleCalculator, toggleExplorer } = useContext(GlobalContext);

  return (
    <>
    <div onClick={toggleExplorer} className="icon_application">
      <a className="btn-show explorer_icon">
        <img className="btn-show explorer_icon" src="assets/pro/explorer.svg" alt="explorer icon" />
      </a>
    </div>
    <div className="icon_application">
      <a onClick={toggleCalculator} className="btn-show calc_icon">
        <img className="btn-show calc_icon" src="assets/pro/calculator.svg" alt="calc icon" />
      </a>
    </div>
  </>
  );
}

export default IconApplication;