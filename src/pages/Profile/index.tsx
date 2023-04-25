//Imports
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

//Component of the profile page
export default function Profile() {
    const redirect = useNavigate();
    const token = useSelector(selectToken);

    useEffect(() => {
        if (token === null) {
            redirect('/login', { replace: true });
        }
    }, [redirect, token]);

    return <main></main>;
}
