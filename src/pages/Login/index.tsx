//Imports
import React from 'react';
import { StyledInputWrapper, StyledLogin, StyledRememberMe, StyledSignInForm, StyledSignInModal } from './style';

//Component of the login page
export default function Login() {
    return (
        <StyledLogin className="bg-dark">
            <StyledSignInModal>
                <i className="fa fa-user-circle" />
                <h1>Sign In</h1>
                <StyledSignInForm>
                    <StyledInputWrapper>
                        <label htmlFor="input-username">Username</label>
                        <input type="text" id="input-username" />
                    </StyledInputWrapper>
                    <StyledInputWrapper>
                        <label htmlFor="input-password">Password</label>
                        <input type="password" id="input-password" />
                    </StyledInputWrapper>
                    <StyledRememberMe>
                        <input type="checkbox" id="input-remember" />
                        <label htmlFor="input-remember">Remember me</label>
                    </StyledRememberMe>
                    <button>Sign In</button>
                </StyledSignInForm>
            </StyledSignInModal>
        </StyledLogin>
    );
}
