import React, {useContext} from 'react';
import { ExplorerContext } from '../../../context/ExplorerContext';

const ItemExplorer = () => {
  const { data } = useContext(ExplorerContext)
  const items = `${data[0].content.length} items`
    
  return (
    <div className="items_explorer">
      <span>{items}</span>
      <a href='https://chendo.dev'>chendodev</a>
    </div>
  );
}

export default ItemExplorer;