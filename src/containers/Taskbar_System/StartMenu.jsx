import React, { useContext } from 'react';
import GridUser from '@components/taskbar/GridUser/GridUser';
import GridPrograms from '@components/taskbar/GridPrograms/GridPrograms';
import GridApplications from '@components/taskbar/GridApplications/GridApplications';
import useMediaQuery from '@hooks/useMediaQuery';
import { GlobalContext } from '@context/GlobalContext';

const StartMenu = () => {

  const matches = useMediaQuery("(max-width: 768px)");

  const { menuRef } = useContext(GlobalContext)

  return(
    <React.Fragment> 
      <div id="StartMenu" ref={menuRef} className='setMenu'>
        <div className="grid">
          <GridUser />
          <GridPrograms />
          {!matches ? <GridApplications /> : null }
        </div>
      </div>
    </React.Fragment>
  );
}

export {StartMenu};