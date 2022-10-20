import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../common/Loader';

const RequiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loader />
    }

    if (!user) {
        return (
            <Navigate to="/login" state={{ form: location }} replace></Navigate>
        );
    }

    return children;
};

export default RequiredAuth;
