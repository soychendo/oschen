import React, { useContext } from 'react';
import { GlobalContext } from '@context/GlobalContext';
import { database } from '@public/database/database';

const Songs = () => {

  const audioContext = useContext(GlobalContext);


  return (
    <div id="music" data-id="4">
      {
      database.music.length
        ? database.music.map(audio => (
          <div 
            key={audio.name} 
            onClick={() => audioContext.getAudio(audio.id)} 
            className="align_items" 
            data-id={audio.id}
          >
            <img src={`assets/content/${audio.image}`} alt={audio.name} />
            <span>{audio.name}</span>
          </div>
        ))
        : null 
      }
    </div>
  );
}

export default Songs;