//Imports
import { Link } from "react-router-dom";
import styled from "styled-components";

//Local styles
export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    @media (max-width: 300px) {
        flex-direction: column;
        padding: 0px;
        padding-bottom: 12px;
    }
`;

export const StyledLogo = styled(Link)`
    display: flex;
    align-items: center;
    img {
        max-width: 100%;
        width: 200px;
        @media (max-width: 400px) {
            width: 128px;
        }
        @media (max-width: 300px) {
            margin: auto;
            width: 70%;
        }
        @media (max-width: 250px) {
            width: 90%;
        }
    }
`;

export const StyledButtonContainer = styled.div`
    display: flex;
`;
