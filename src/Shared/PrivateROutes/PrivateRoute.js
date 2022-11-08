import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthUseContext } from '../Context/UseAuthContext';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthUseContext)
    const location = useLocation()
    if (loading) {
        return <> <progress className="max-w-screen-xl mx-auto progress w-56 m-auto"></progress></>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;