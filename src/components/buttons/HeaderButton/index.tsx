//Imports
import React from "react";
import { StyledHeaderButton } from "./style";
import { Link } from "react-router-dom";

//Types
type HeaderButtonProps = {
    text: string;
    route: string;
    onClick?: () => void;
    iconClassName: string;
};

//Component of a button in the header
export default function HeaderButton(props: HeaderButtonProps) {
    const { text, route, onClick, iconClassName } = props;

    return (
        <StyledHeaderButton>
            <Link to={route} onClick={onClick}>
                <i className={iconClassName} />
                {text}
            </Link>
        </StyledHeaderButton>
    );
}
