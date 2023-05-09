//Imports
import React from "react";
import { StyledError } from "./style";

//Types
type ErrorMessageProps = {
    text: string | null;
    className?: any;
};

//Component of an error message
export default function ErrorMessage(props: ErrorMessageProps) {
    const { text, className } = props;

    if (text === null) {
        return null;
    }

    const displayedText = text.includes("Error")
        ? text.split("Error: ")[1]
        : text;

    return (
        <StyledError className={className}>
            <i className="fa fa-exclamation-triangle" />
            {displayedText}
        </StyledError>
    );
}
