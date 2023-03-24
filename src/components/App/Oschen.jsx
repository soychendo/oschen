import React from 'react';
import HeroImage from '@components/HeroImage/HeroImage';
import Taskbar from '@containers/Taskbar_System/Taskbar';
import OsMenu from '@components/OsMenu/OsMenu';
import { contextMenuCustom } from '@utils/OsContextMenu';
import { ContainerCalculator } from '@containers/Calc';
import { ContainerAudio } from '@components/explorer/Audio';

const Oschen = () => {

  return (
    <div onLoad={contextMenuCustom} id="Oschen">
      <HeroImage />
      <ContainerCalculator />
      <ContainerAudio />
      <Taskbar /> 
      <OsMenu />
    </div>
  );
}

export default Oschen;
