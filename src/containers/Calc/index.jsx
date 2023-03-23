import React, { useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";
import Calc from "./Calc";

const ContainerCalculator = () => {

  const { state } = useContext(GlobalContext)

  return(
    <div id="ContainerCalculator">
      { state.calculator ? <Calc /> : null }
    </div>
  );
}

export { ContainerCalculator };