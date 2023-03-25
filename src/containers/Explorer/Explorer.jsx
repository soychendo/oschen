import React, { useRef } from 'react';
import DescriptionClose from '@components/explorer/DescriptionClose/DescriptionClose';
import MenuManage from '@components/explorer/MenuManage/MenuManage';
import InputExplorer from '@components/explorer/InputExplorer/InputExplorer';
import ItemExplorer from '@components/explorer/ItemExplorer/ItemExplorer';
import { MenuExplorer } from '@components/explorer/MenuExplorer';
import useDraggable from '@hooks/useDraggable';
import { useZindex } from '@hooks/useZindex';

const Explorer = () => {

  const explorerRef = useRef(null);
  const { zIndex } = useZindex(explorerRef);
  useDraggable(explorerRef);
  
  return (
    <>
      <div 
        id="Explorer" 
        ref={explorerRef}  
        data-zindex="1" 
        className="explorer"
        style={{ zIndex: zIndex }}
      >
        <div className="container_explorer ca">
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