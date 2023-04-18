//Imports
import React from 'react';
import argentBankLogo from '../../assets/argent_bank_logo.png';
import { StyledHeader, StyledLogo, StyledSignUp } from './style';
import { Link } from 'react-router-dom';

//Component of the header
export default function Header() {
    return (
        <StyledHeader>
            <StyledLogo to="/">
                <img src={argentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </StyledLogo>
            <StyledSignUp>
                <Link to="/sign-in">
                    <i className="fa fa-user-circle" />
                    Sign In
                </Link>
            </StyledSignUp>
        </StyledHeader>
    );
}
