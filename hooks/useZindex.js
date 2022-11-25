/*-----------------------------------------------------------------------------------

    Name: Oschen - Windows 10 - @chendodev
    Theme URI: @chendodev
    Description: Open Source Projects - Oschen
    Author: @chendodev - chendo | developer && web designer
    Author URI: https://facebook.com/chendoio
    Github: https://github.com/chendodev
    Youtube: https://youtube.com/@chendodev
    Website: https://chendo.dev

-----------------------------------------------------------------------------------*/
import { useState } from "react";
const  useZindex = (container) => {

  const [index, setIndex] = useState(false);
  
  const changeZindex = () => {
  window.addEventListener('mousedown', e => {
    if(e.target !== container && !container?.contains(e.target)) {
      setIndex(false)
    } else {
      setIndex(true)
    }
    })
  }
  const active = {
    zIndex: index ? "7" : "0"
  }

  return {
    changeZindex,
    active
  };
}
export {useZindex};