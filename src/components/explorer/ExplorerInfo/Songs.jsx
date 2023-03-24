import React, { useRef, useContext } from 'react';
import { useSelectNode } from '@hooks/useSelectNode';
import { GlobalContext } from '@context/GlobalContext';

const Songs = ({ id, name, src }) => {

  const { getAudio } = useContext(GlobalContext);

  const selectedElement = useRef(null);
  const { onclick } = useSelectNode(selectedElement, 'select')

  const executeFunctions = () => {
    getAudio(id)
    onclick()
  }

  return (
    <div
      className='align_items'
      data-id={id}
      ref={selectedElement}
      onClick={() => executeFunctions(id)}
    >
    <img src={`${src}`} alt={name} />
    <span>{name}</span>
  </div>
  );
};

export {Songs};