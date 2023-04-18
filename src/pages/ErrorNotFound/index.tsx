//Imports
import React from 'react';
import { StyledNotFound } from './style';
import { Link } from 'react-router-dom';

//Component of the page shown if the route is incorrect
export default function ErrorNotFound() {
    return (
        <StyledNotFound>
            <h1>
                <i className="fa fa-close" /> Error 404
            </h1>
            <p>The page you requested doesn't exist.</p>
            <p>
                To get back to a safe place, click <Link to="/">here</Link>
            </p>
        </StyledNotFound>
    );
}
