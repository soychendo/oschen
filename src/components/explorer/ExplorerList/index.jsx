import React, { useContext } from 'react';
import { ExplorerContext } from '@context/ExplorerContext';
import { ExplorerRoutes } from '../ExplorerRoutes';

const ExplorerList = () => {

  return (
    <div className="ExplorerList">
      <ExplorerRoutes />
    </div>
  );
}

export default ExplorerList;