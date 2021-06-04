import React from 'react';

import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const StandardLayout = (props) => {
  const { children } = props;

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default StandardLayout;
