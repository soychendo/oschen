import React from 'react';
import { database } from '@public/database/database';

const Downloads = () => {
  
  return (
    <div id="downloads" data-id="3">
      {database.downloads.map(download => (
        <div key={download.name} className="align_items">
        <img src={`assets/content/${download.image}`} alt={download.name} />
        <span>{download.name}</span>
      </div>
      ))}
    </div>
  );
}

export default Downloads;