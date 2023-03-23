import React, {useContext} from 'react';
import { ExplorerContext } from '../../../context/ExplorerContext';

const ItemExplorer = () => {
  const { state } = useContext(ExplorerContext)
  const items = `${state.selectedContent.length} items`

  return (
    <div className="items_explorer">
      <span>{items}</span>
      <a href='https://chendo.dev' target="_blank">chendodev</a>
    </div>
  );
}

export default ItemExplorer;