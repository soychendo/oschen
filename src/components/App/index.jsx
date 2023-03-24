import React from 'react';
import Oschen from '@components/App/Oschen';
import { ExplorerProvider } from '@context/ExplorerContext';
import { GlobalProvider } from '@context/GlobalContext';
import { ContainerExplorer } from '@containers/Explorer';

const App = () => {
           
  return (
    <GlobalProvider>
      <ExplorerProvider>
        <ContainerExplorer />
      </ExplorerProvider>
      <Oschen /> 
    </GlobalProvider> 
  );
}

export default App;