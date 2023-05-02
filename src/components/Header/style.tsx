//Imports
import { Link } from "react-router-dom";
import styled from "styled-components";

//Local styles
export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
`;

export const StyledLogo = styled(Link)`
    display: flex;
    align-items: center;
    img {
        max-width: 100%;
        width: 200px;
    }
`;

export const StyledButtonContainer = styled.div`
    display: flex;
`;
