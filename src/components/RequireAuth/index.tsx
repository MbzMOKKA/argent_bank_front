//Imports
import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../features/auth/authSlice';

//Component of the auth-required routes container
export default function RequireAuth() {
    const token = useSelector(selectToken);
    const location = useLocation();

    return <>{token !== null ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />}</>;
}
