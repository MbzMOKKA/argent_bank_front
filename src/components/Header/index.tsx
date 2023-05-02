//Imports
import React from "react";
import argentBankLogo from "../../assets/argent_bank_logo.png";
import { StyledButtonContainer, StyledHeader, StyledLogo } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectUser } from "../../features/auth/authSlice";
import HeaderButton from "../buttons/HeaderButton";
import { formatUserName } from "../../utils/formatStrings";

//Component of the header
export default function Header() {
    const user = useSelector(selectUser);
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
                {user === null ? (
                    <HeaderButton
                        text="Sign In"
                        route="/login"
                        iconClassName="fa fa-user-circle"
                    />
                ) : (
                    <>
                        <HeaderButton
                            text={formatUserName(user.firstName, user.lastName)}
                            route="/profile"
                            iconClassName="fa fa-user-circle"
                        />
                        <HeaderButton
                            text="Sign Out"
                            route="/"
                            onClick={signOut}
                            iconClassName="fa fa-sign-out"
                        />
                    </>
                )}
            </StyledButtonContainer>
        </StyledHeader>
    );
}
