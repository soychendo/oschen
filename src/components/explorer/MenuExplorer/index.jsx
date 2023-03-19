import React from "react";
import ExplorerList from "../ExplorerList";
import { ContainerExplorer } from "../ContainerExplorer";
import useMediaQuery from '@hooks/useMediaQuery';

const MenuExplorer = () => {
  const matches = useMediaQuery("(min-width: 769px)");
  
  return(
    <div id="ContentPc">
      {matches ? <ExplorerList /> : null}
      <ContainerExplorer />
    </div>
  );
}

export { MenuExplorer }