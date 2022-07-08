import React, { createContext } from 'react';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
  return <AuthenticationContext.Provider>{children}</AuthenticationContext.Provider>;
};

export default AuthenticationContextProvider;
