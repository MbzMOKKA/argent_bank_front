//Imports
import styled from "styled-components";
import ErrorMessage from "../ErrorMessage";

//Local styles
export const StyledForm = styled.form`
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const StyledInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    input {
        margin: 0px 6px;
        width: 20vw;
    }
    @media (max-width: 700px) {
        flex-direction: column;
        input {
            margin: 6px 0px;
            width: 90vw;
        }
    }
`;

export const StyledButtons = styled.div`
    margin-top: 12px;
    display: flex;
    button {
        margin: 0px 6px;
        width: 12vw;
    }
    @media (max-width: 700px) {
        button {
            width: 40vw;
        }
    }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
    margin-top: 12px;
`;
