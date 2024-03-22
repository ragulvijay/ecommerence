import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AdminRoute = ({ element, ...rest }) => {
  // Get the user data from local storage
  const user = JSON.parse(localStorage.getItem('user'));

  // Check if the user exists and has the 'admin' role
  if (user && user.role === 'admin') {
    return <Route {...rest} element={element} />;
  }

  // If the user does not have the 'admin' role, redirect to the login page
  return <Navigate to="/login" replace />;
};

export default AdminRoute;