import React from 'react';
import HeroImage from '@components/HeroImage/HeroImage';
import Taskbar from '@containers/Taskbar_System/Taskbar';
import OsMenu from '@components/OsMenu/OsMenu';
import { ExplorerProvider } from '@context/ExplorerContext';
import { GlobalProvider } from '@context/GlobalContext';
import { contextMenuCustom } from '@utils/OsContextMenu';
import { ContainerExplorer } from '@containers/Explorer';
import { ContainerCalculator } from '@containers/Calc';
import { ContainerAudio } from '@components/explorer/Audio';

const Oschen = () => {

  return (
    <div onLoad={contextMenuCustom} id="Oschen">
      <GlobalProvider>
        <ExplorerProvider>
          <ContainerExplorer />
        </ExplorerProvider>
        <HeroImage />
        <ContainerCalculator />
        <ContainerAudio />
        <Taskbar /> 
        <OsMenu />
      </GlobalProvider> 
    </div>
  );
}

export default Oschen;
