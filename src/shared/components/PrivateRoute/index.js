import React from 'react';
import SessionService from '../../../services/SessionService';
import AuthenticationContextProvider from '../../context/AuthenticationContext';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ exact, path, component }) => {
  const isLoggedIn = SessionService.isUserAuthenticated();

  if (isLoggedIn) {
    SessionService.setInterceptors();
  }

  if (!isLoggedIn) {
    window.location.assign('/login');
  }

  return (
    <AuthenticationContextProvider>
      <Route exact={exact} path={path} component={component} />
    </AuthenticationContextProvider>
  );
};

export default PrivateRoute;
