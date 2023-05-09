//Imports
import styled from "styled-components";
import ErrorMessage from "../ErrorMessage";

//Local styles
export const StyledForm = styled.form`
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledInputs = styled.div`
    display: flex;
    input {
        margin: 0px 6px;
        width: 20vw;
    }
`;

export const StyledButtons = styled.div`
    margin-top: 12px;
    display: flex;
    button {
        margin: 0px 6px;
        width: 12vw;
    }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
    margin-top: 12px;
`;
