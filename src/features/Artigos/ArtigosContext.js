import React, { createContext, useState } from 'react';

export const ArtigosContext = createContext();

const ArtigosContextProvider = ({ children }) => {
  const [artigos, setArtigos] = useState([]);

  return <ArtigosContext.Provider value={{artigos, setArtigos}}>{children}</ArtigosContext.Provider>;
};

export default ArtigosContextProvider;