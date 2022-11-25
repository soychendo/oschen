import React from 'react';
import { database } from '@public/database/database';

const Pictures = () => {

  return (
    <div id="pictures" data-id="5">
      {database.pictures.map(picture => (
        <div key={picture.name} className="align_items">
        <img src={`assets/content/${picture.image}`} alt={picture.name} />
        <span>{picture.name}</span>
      </div>
      ))}
    </div>
  );
}

export default Pictures;