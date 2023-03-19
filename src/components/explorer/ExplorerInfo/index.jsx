import React from 'react';

const ExplorerInfo = (props) => {

  return (
    <div className="align_items">
      <img src={`${props.src}`} alt={props.name}/>
      <span>{props.name}</span>
    </div>
  );
}

export default ExplorerInfo;