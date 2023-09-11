import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const isAuth = true; // Replace with your authentication logic

export const PrivateRoute = ({ element: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuth ? <Component /> : <Navigate to="/" />}
    />
  );
};
