import React, { useContext } from "react";
import { ExplorerContext } from "../../../context/ExplorerContext";
import ExplorerInfo from "../ExplorerInfo";

const ContainerExplorer = () => {
  const { data, name } = useContext(ExplorerContext)

  return(
    <section className="ContainerPc">
      <div id={name}>
        {
          data[0].content.map(item => (
            <ExplorerInfo key={item.name} {...item} />
          ))
        }
      </div>
    </section>
  );
}

export { ContainerExplorer }