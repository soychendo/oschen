import React, { useContext } from "react";
import { GlobalContext } from "@context/GlobalContext";
import programs from '@public/database/programs';
import spotLight from '@utils/spotLight';

const GridPrograms = () => {
  const { appRef, containerRef } = useContext(GlobalContext);

  let app = appRef.current;
  let con = containerRef.current;

  return (
    <div className="GridPrograms">
      {programs.map((icon, index) => (
      <React.Fragment key={icon.id}>
        <a href={icon.href} ref={el => (con[index] = el)} onLoad={() => spotLight(app[index], con[index])} className="containerIcon">
          <div ref={el => (app[index] = el)} className="box"></div>
          <div className="icon_open">
            <img src={`assets/pro/${icon.imagen}`} alt={icon.name} />
            <span>{icon.name}</span>
          </div>
        </a>
      </React.Fragment>
      ))}
    </div>
  );
}

export default GridPrograms;