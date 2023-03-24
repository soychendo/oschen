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
import { useState, useEffect } from 'react';

const useZindex = (containerRef) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      const clickedElement = event.target;
      const containerElement = containerRef.current;
      
      if (clickedElement !== containerElement && !containerElement.contains(clickedElement)) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [containerRef]);

  const zIndex = isActive ? 7 : 0;

  return { zIndex };
};

export {useZindex};