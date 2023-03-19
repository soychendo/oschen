import React, { useContext } from 'react';
import HeroImage from '@components/HeroImage/HeroImage';
import Taskbar from '@containers/Taskbar_System/Taskbar';
import Audio from '@components/explorer/Audio/Audio';

import { Explorer } from '@containers/Explorer';
import { GlobalContext } from '@context/GlobalContext';
import { ExplorerProvider } from '@context/ExplorerContext';
import OsMenu from '@components/OsMenu/OsMenu';

import { contextMenuCustom } from '@utils/OsContextMenu';
import Calc from '@containers/Calc/Calc';

const Oschen = () => {

  

  const { explorer, state, calc } = useContext(GlobalContext);

  return (
    <div onLoad={contextMenuCustom} id="Oschen">
      <ExplorerProvider>
        { explorer ? <Explorer /> : null }
      </ExplorerProvider>
      <HeroImage />
       { calc ? <Calc /> : null }
      { state.activeSong ? <Audio /> : null }
      <Taskbar /> 
      <OsMenu />
    </div>
  );
}

export default Oschen;
