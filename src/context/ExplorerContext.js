import React, { createContext, useEffect, useState } from 'react';
import db from '../../database/db.json'

const ExplorerContext = createContext();

const ExplorerProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('Pc');
  const [id, setId] = useState(1)

  const handleId = ({id, name}) => {
    setId(id)
    setName(name)
  }
  
  useEffect(() => {
    const updatedDataExplorer = () => {
      const dataFilter = db.explorerList.filter(item => {
        return item.explorerId === id;
      })
      setData(dataFilter)
    }
    updatedDataExplorer()
  }, [id])

  const value = {handleId, data, name}

  return (
    <ExplorerContext.Provider value={value}>
      {children}
    </ExplorerContext.Provider>
  );
} 

export {ExplorerContext};
export {ExplorerProvider};