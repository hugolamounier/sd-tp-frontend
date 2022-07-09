import { useContext } from 'react';
import { AuthenticationContext } from '../context/AuthenticationContext';

const useUser = () => {
  const { isAdmin } = useContext(AuthenticationContext);

  return { isAdmin };
};

export default useUser;
