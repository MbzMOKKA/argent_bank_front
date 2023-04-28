//Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import ErrorNotFound from '../../pages/ErrorNotFound';
import { StyledAppContainer } from './style';
import Header from '../Header';
import Footer from '../Footer';
import RequireAuth from '../RequireAuth';

//Component of the web application
export default function App() {
    return (
        <StyledAppContainer>
            <Header />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route element={<RequireAuth />}>
                        <Route path="profile" element={<Profile />} />
                    </Route>
                </Route>
                <Route path="*" element={<ErrorNotFound />} />
            </Routes>
            <Footer />
        </StyledAppContainer>
    );
}
