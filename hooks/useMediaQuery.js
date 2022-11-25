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
import { useEffect, useState } from 'react';

function useMediaQuery(query, defaultMatches = window.matchMedia(query).matches) {

  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    const media = window.matchMedia(query);

    if(media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query, matches]);

  return matches;
}

export default useMediaQuery;