import React, { createContext, useEffect, useState } from 'react';
import SessionService from '../../services/SessionService';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const isUserAuthenticated = SessionService.isUserAuthenticated();
    if (isUserAuthenticated) setIsAdmin(SessionService.isAdmin());
  }, []);

  return (
    <AuthenticationContext.Provider value={isAdmin}>{children}</AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
