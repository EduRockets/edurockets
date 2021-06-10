import { useContext } from 'react';

import { UserContext } from './AuthProvider';

const useAuth = () => {
  return useContext(UserContext);
};

export default useAuth;
