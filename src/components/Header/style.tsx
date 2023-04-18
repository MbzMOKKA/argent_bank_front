//Imports
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

//Local styles
export const StyledHeader = Styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
`;

export const StyledLogo = Styled(Link)`
    display: flex;
    align-items: center;
    img {
        max-width: 100%;
        width: 200px;
    }
`;

export const StyledSignUp = Styled.div`
    display: flex;
    align-items: center;
    a {
        text-decoration: none;
        margin-right: 0.5rem;
        font-weight: bold;
        color: #2c3e50;
    }
    a:hover {
        text-decoration: none;
    }
    i {
        margin-right: 5px;
    }
`;
