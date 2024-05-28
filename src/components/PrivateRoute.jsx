import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    console.log('kokokoko', isLoggedIn)

    return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
