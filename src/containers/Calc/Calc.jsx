import React, { useContext, useEffect } from "react";
import { GlobalContext } from "@context/GlobalContext";
import OschenMouseDown, { touring }  from '@utils/OschenMouseDown';
import { useZindex } from '@hooks/useZindex';

import minimize from "@images/pro/minimize.svg";
import maximize from "@images/pro/maximize.svg";
import close from "@images/pro/close.svg";
import start from "@images/ism/start.svg";

const Calc = () => {

  const { closeCalc } = useContext(GlobalContext);

  const ca = document.querySelector('.calculators');
  const { active, changeZindex } = useZindex(ca)

  const handleContainer = (e) => {
    OschenMouseDown(e, "calculators");
    touring(".calculators");
  }

  useEffect(() => {
    changeZindex()
  }, [])

  return(
    <div
      onMouseDown={e => handleContainer(e)} 
      id="chendo_calc" 
      data-id="2" 
      className="chendo_calc"
      style={active}
    >
      <div onMouseDown={changeZindex} className="calculators" >
        <div className="head"></div>
        <h1>Calculator</h1>
        <div className="mmc">
          <img className="minimize" src={minimize} alt="minimize" />
          <img className="maximize" src={maximize} alt="maximize" />
          <img onClick={closeCalc} className="close" src={close} alt="close" />
        </div>
        <div className="menu_calc">
          <img src={start} alt="Menu items" />
          <span>Standard</span>
        </div>
        <div className="showDisplay">
          <div id="texto"></div>
          <input readOnly autoComplete="off" id="results_calc" type="hidden" value="" size="28" maxLength="25" />
          <span className="show-result">0</span> 
        </div>
        <div className="maths">
          <div className="m">
            <button className="btn-math disable">Mc</button>
            <button className="btn-math disable">Mr</button>
            <button className="btn-math disable">M+</button>
            <button className="btn-math disable btn-action">M-</button>
            <button className="btn-math disable btn-action">Ms</button>
            <button className="btn-math disable">M</button>
          </div>
          <div className="operators">
            <button className="btn-math" value="%">%</button>
            <button className="btn-math" value="clear">Ce</button>
            <button className="btn-math" value="clear">C</button>
            <button className="btn-math btn-action del" value="del">←</button>
            <button className="btn-math btn-action" value="clear">&frac12;</button>
            <button className="btn-math" value="sq">x²</button>
            <button className="btn-math" value="sqrt">√</button>
            <button className="btn-math" value="/">/</button>
            <button className="btn-math oscure" value="7">7</button>
            <button className="btn-math oscure" value="8">8</button>
            <button className="btn-math oscure" value="9">9</button>
            <button className="btn-math" value="*">X</button>
            <button className="btn-math oscure" value="4">4</button>
            <button className="btn-math oscure" value="5">5</button>
            <button className="btn-math oscure" value="6">6</button>
            <button className="btn-math" value="-">-</button>
            <button className="btn-math oscure" value="1">1</button>
            <button className="btn-math oscure" value="2">2</button>
            <button className="btn-math oscure" value="3">3</button>
            <button className="btn-math" value="+">+</button>
            <button className="btn-math oscure">±</button>
            <button className="btn-math oscure" value="0">0</button>
            <button className="btn-math oscure">.</button>
            <button className="btn-math equal" value="equal">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;