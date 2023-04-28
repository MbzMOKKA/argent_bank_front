//Imports
import React from 'react';
import { StyledWelcome, StyledEditButton } from './style';

//Component of the hero section
export default function Welcome() {
    return (
        <StyledWelcome>
            <h1>
                Welcome back
                <br />
                {'{USER_NAME}'}!
            </h1>
            <StyledEditButton>Edit Name</StyledEditButton>
        </StyledWelcome>
    );
}
