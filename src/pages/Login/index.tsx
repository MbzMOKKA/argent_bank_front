//Imports
import React, { useState } from "react";
import {
    StyledErrorMessage,
    StyledInputWrapper,
    StyledLogin,
    StyledModalHeader,
    StyledRememberMe,
    StyledSignInForm,
    StyledSignInModal,
} from "./style";
import { useDispatch } from "react-redux";
import { setToken } from "../../features/auth/authSlice";
import { userLogin } from "../../utils/apiHandler";
import { useNavigate } from "react-router-dom";

//Component of the login page
export default function Login() {
    const redirect = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState<string | null>(null);
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const emptyInputErrorMsg = "Email and password must be provided!";

    async function handleSubmit(e: any) {
        e.preventDefault();
        setError(null);
        if (inputEmail.length === 0) {
            setError(emptyInputErrorMsg);
            return;
        }
        if (inputPassword.length === 0) {
            setError(emptyInputErrorMsg);
            return;
        }
        const token = await userLogin(inputEmail, inputPassword, setError);
        dispatch(setToken(token));
        if (token !== null) {
            redirect("/profile", { replace: true });
        }
    }

    const changeEmail = (e: any) => {
        setInputEmail(e.target.value);
    };
    const changePassword = (e: any) => {
        setInputPassword(e.target.value);
    };

    return (
        <StyledLogin className="bg-dark">
            <StyledSignInModal>
                <StyledModalHeader>
                    <i className="fa fa-user-circle" />
                    <h1>Sign In</h1>
                </StyledModalHeader>
                <StyledSignInForm onSubmit={handleSubmit}>
                    <StyledInputWrapper>
                        <label htmlFor="input-email">Email</label>
                        <input
                            type="text"
                            id="input-email"
                            onChange={changeEmail}
                        />
                    </StyledInputWrapper>
                    <StyledInputWrapper>
                        <label htmlFor="input-password">Password</label>
                        <input
                            type="password"
                            id="input-password"
                            onChange={changePassword}
                        />
                    </StyledInputWrapper>
                    <StyledRememberMe>
                        <input type="checkbox" id="input-remember" />
                        <label htmlFor="input-remember">Remember me</label>
                    </StyledRememberMe>
                    <StyledErrorMessage text={error} />
                    <button>Sign In</button>
                </StyledSignInForm>
            </StyledSignInModal>
        </StyledLogin>
    );
}
