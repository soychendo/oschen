import React from 'react';
import OschenMouseDown, { touring }  from '@utils/OschenMouseDown';

import DescriptionClose from '@components/explorer/DescriptionClose/DescriptionClose';
import MenuManage from '@components/explorer/MenuManage/MenuManage';
import InputExplorer from '@components/explorer/InputExplorer/InputExplorer';
import ItemExplorer from '@components/explorer/ItemExplorer/ItemExplorer';

import { MenuExplorer } from '../../components/explorer/MenuExplorer';

const Explorer = () => {
  
  const handleContainer = (e) => {
    OschenMouseDown(e, "container_explorer");
    touring(".container_explorer");
  }

  return (
    <>
    <div 
    onMouseDown={e => handleContainer(e)}
    id="Explorer" 
    data-id="1" 
    className="explorer"
    >
    <div className="container_explorer ce">
      <DescriptionClose />
      <MenuManage />
      <InputExplorer />
      <MenuExplorer />
      <ItemExplorer />
    </div>
    </div>
    </>
  );
}

export { Explorer };