import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="container">
      {/*<Navbar />*/}
      <div>{children}</div>
    </div>
  );
}

export default Layout;
