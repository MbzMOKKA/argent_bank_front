//Imports
import styled from "styled-components";

//Local styles
export const StyledFeature = styled.div`
    flex: 1;
    padding: 2.5rem;
    text-align: center;
    img {
        width: 100px;
        border: 10px solid #00bc77;
        border-radius: 50%;
        padding: 1rem;
    }
    h3 {
        color: #222;
        font-size: 1.25rem;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 8px;
    }
    p {
        margin-top: 16px;
        margin-bottom: 16px;
    }
    @media (max-width: 400px) {
        padding: 1.5rem;
        img {
            width: 60px;
        }
    }
`;
