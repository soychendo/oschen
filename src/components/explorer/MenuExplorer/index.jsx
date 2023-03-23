import React from "react";
import ExplorerList from "../ExplorerList";
import { ContentExplorer } from "../ContentExplorer";
import useMediaQuery from '@hooks/useMediaQuery';

const MenuExplorer = () => {
  const matches = useMediaQuery("(min-width: 769px)");
  
  return(
    <div id="ContentPc">
      {matches ? <ExplorerList /> : null}
      <ContentExplorer />
    </div>
  );
}

export { MenuExplorer }