//Imports
import React, { useRef } from 'react';
import { StyledInputWrapper, StyledLogin, StyledRememberMe, StyledSignInForm, StyledSignInModal } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, setToken } from '../../features/auth/authSlice';
import { userLogin } from '../../utils/apiHandler';
import { useNavigate } from 'react-router-dom';

//Component of the login page
export default function Login() {
    const redirect = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const refInputEmail = useRef<HTMLInputElement>(null);
    const refInputPassword = useRef<HTMLInputElement>(null);

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (!refInputEmail.current) {
            return;
        }
        if (!refInputPassword.current) {
            return;
        }
        const token = await userLogin(refInputEmail.current.value, refInputPassword.current.value);
        dispatch(setToken(token));
        if (token !== null) {
            redirect('/profile', { replace: true });
        }
    }

    return (
        <StyledLogin className="bg-dark">
            <StyledSignInModal>
                <i className="fa fa-user-circle" />
                <h1>Sign In</h1>
                <StyledSignInForm onSubmit={handleSubmit}>
                    <StyledInputWrapper>
                        <label htmlFor="input-email">Email</label>
                        <input type="text" id="input-email" ref={refInputEmail} />
                    </StyledInputWrapper>
                    <StyledInputWrapper>
                        <label htmlFor="input-password">Password</label>
                        <input type="password" id="input-password" ref={refInputPassword} />
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
