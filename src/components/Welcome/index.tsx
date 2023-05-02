//Imports
import React from "react";
import { StyledWelcome, StyledEditButton } from "./style";
import { formatUserName } from "../../utils/formatStrings";
import { selectUser } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";

//Component of the hero section
export default function Welcome() {
    const user = useSelector(selectUser);

    return (
        <StyledWelcome>
            <h1>
                Welcome back
                <br />
                {user === null
                    ? "..."
                    : formatUserName(user.firstName, user.lastName)}
                !
            </h1>
            <StyledEditButton>Edit Name</StyledEditButton>
        </StyledWelcome>
    );
}
