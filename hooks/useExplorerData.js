import { useState, useEffect } from "react";
import db from '../database/db.json';

const useExplorerData = () => {

  const [explorerList, setExplorerList] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(db);
      const data = response.json();
      setExplorerList(data.explorer)
      console.log(data.explorer)
    }
    fetchData()
  }, [])
  console.log(explorerList)
  return {
    explorerList
  }
}

export { useExplorerData }