//Imports
import React from 'react';
import Styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import ErrorNotFound from '../pages/ErrorNotFound';
import Home from '../pages/Home';

//Component of the web application
export default function App() {
    return (
        <StyledAppContainer>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<ErrorNotFound />}></Route>
            </Routes>
        </StyledAppContainer>
    );
}

//Local styles
export const StyledAppContainer = Styled.div`
    display: flex;
`;
