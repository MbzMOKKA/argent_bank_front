//Imports
import styled from "styled-components";

//Local styles
export const StyledWelcome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    h1 {
        color: #fff;
        margin-top: 24px;
    }
    @media (max-width: 350px) {
        h1 {
            font-size: 1.5em;
        }
    }
`;
