
import React, { useContext } from "react";
import { Audio } from "./Audio";
import { GlobalContext } from "@context/GlobalContext";

export const ContainerAudio =  () => {

  const { state } = useContext(GlobalContext)

  return (
    <div id="ContainerAudio">
      { state.activeSong ? <Audio /> : null }
    </div>
  )
}