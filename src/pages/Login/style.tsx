//Imports
import styled from 'styled-components';

//Local styles
export const StyledLogin = styled.main`
    flex: 1;
`;

export const StyledSignInModal = styled.section`
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
    i {
        font-size: 5rem;
    }
    h1 {
        margin-bottom: 12px;
    }
`;

export const StyledSignInForm = styled.form`
    button {
        display: block;
        width: 100%;
        padding: 8px;
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 1rem;
        border: none;
        background-color: #00bc77;
        color: #fff;
        text-decoration: underline;
        :hover {
            cursor: pointer;
        }
    }
`;

export const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    label {
        font-weight: bold;
    }
    input {
        padding: 5px;
        font-size: 1.2rem;
    }
`;

export const StyledRememberMe = styled.div`
    display: flex;
    label {
        margin-left: 0.25rem;
    }
`;
