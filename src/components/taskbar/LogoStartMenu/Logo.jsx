import React, { useContext } from 'react';
import { GlobalContext } from '@context/GlobalContext';

import logo from '@public/favicon.svg'

const Logo = () => {

  const { toggleMenu } = useContext(GlobalContext)

  return (
    <div onClick={toggleMenu} id="startmenu" className="hide_menu">
      <img className="logo_win" src={logo} alt="Start Menu" />
    </div>
  );
}

export { Logo };