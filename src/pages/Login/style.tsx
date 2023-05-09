//Imports
import styled from "styled-components";
import ErrorMessage from "../../components/ErrorMessage";

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
`;

export const StyledModalHeader = styled.header`
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
`;

export const StyledRememberMe = styled.div`
    display: flex;
    label {
        margin-left: 0.25rem;
    }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
    margin-top: 12px;
`;
