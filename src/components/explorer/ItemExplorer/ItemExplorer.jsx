import React, {useContext} from 'react';
import { ExplorerContext } from '../../../context/ExplorerContext';

const ItemExplorer = () => {
  const { state } = useContext(ExplorerContext)
  const items = `${state.selectedContent.length} items`

  return (
    <div className="items_explorer">
      <span>{items}</span>
      <a href='https://github.com/soychendo' target="_blank">soychendo</a>
    </div>
  );
}

export default ItemExplorer;