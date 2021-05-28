import React from 'react';

import NavBar from '../Components/NavBar';

import '../Styles/StandardLayout.css';

const NavBarLayout = (props) => {
  const { children } = props;

  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default NavBarLayout;
