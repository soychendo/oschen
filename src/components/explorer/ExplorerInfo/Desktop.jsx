import React from 'react';
import { database } from '@public/database/database';

const Desktop = () => {

  return (
    <div id="desktop" data-id="1">
      {database.desktop.map(desktop => (
        <div key={desktop.name} className="align_items">
          <img src={`assets/content/${desktop.image}`} alt={desktop.name} />
          <span>{desktop.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Desktop;