import React, { useContext } from 'react';
import GridUser from '@components/taskbar/GridUser/GridUser';
import GridPrograms from '@components/taskbar/GridPrograms/GridPrograms';
import { GlobalContext } from '@context/GlobalContext';

const StartMenu = () => {

  const { menuRef } = useContext(GlobalContext)

  return(
    <React.Fragment> 
      <div id="StartMenu" ref={menuRef} className='setMenu'>
        <div className='grid-blur'></div>
        <div className="grid">
          <GridUser />
          <GridPrograms />
        </div>
      </div>
    </React.Fragment>
  );
}

export {StartMenu};