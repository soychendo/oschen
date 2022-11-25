import React from 'react';
import { database } from '@public/database/database';

const Videos = () => {

  return (
    <div id="videos" data-id="6">
      {database.videos.map(video => (
        <div key={video.name} className="align_items">
        <img src={`assets/content/${video.image}`} alt={video.name} />
        <span>{video.name}</span>
      </div>
      ))}
    </div>
  );
}

export default Videos;