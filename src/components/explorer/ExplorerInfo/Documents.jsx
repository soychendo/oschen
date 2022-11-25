import React from 'react';
import { database } from '@public/database/database';

const Documents = () => {

  return (
    <div id="documents" data-id="2">
      {database.documents.map(document => (
        <div key={document.name} className="align_items">
        <img src={`assets/content/${document.image}`} alt={document.name} />
        <span>{document.name}</span>
      </div>
      ))}
    </div>
  );
}

export default Documents;