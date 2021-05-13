import React from 'react';

import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

import '../Styles/StandardLayout.css';

const StandardLayout = (props) => {
  const { children } = props;

  console.log('pendejada xd');

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default StandardLayout;
