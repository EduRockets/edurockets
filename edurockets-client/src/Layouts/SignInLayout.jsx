import React from 'react';

import { NavBarSignIn } from '../Components/NavBar';

const SignInLayout = (props) => {
  const { children } = props;

  return (
    <>
      <NavBarSignIn />
      {children}
    </>
  );
};

export default SignInLayout;
