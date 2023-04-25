//Imports
import React from 'react';
import argentBankLogo from '../../assets/argent_bank_logo.png';
import { StyledButtonContainer, StyledHeader, StyledLogo } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectToken } from '../../features/auth/authSlice';
import HeaderButton from '../buttons/HeaderButton';

//Component of the header
export default function Header() {
    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    function signOut() {
        dispatch(logOut());
    }

    return (
        <StyledHeader>
            <StyledLogo to="/">
                <img src={argentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </StyledLogo>
            <StyledButtonContainer>
                {token == null ? (
                    <HeaderButton text="Sign In" route="/login" iconClassName="fa fa-user-circle" />
                ) : (
                    <>
                        <HeaderButton text="Tony" route="/profile" iconClassName="fa fa-user-circle" />
                        <HeaderButton text="Sign Out" route="/" onClick={signOut} iconClassName="fa fa-sign-out" />
                    </>
                )}
            </StyledButtonContainer>
        </StyledHeader>
    );
}
