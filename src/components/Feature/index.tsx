//Imports
import React from "react";
import { StyledFeature } from "./style";

//Types
type FeatureProps = {
    icon: string;
    iconAlt: string;
    title: string;
    description: string;
};

//Component of a feature of the service in the homepage
export default function Feature(props: FeatureProps) {
    const { icon, iconAlt, title, description } = props;

    return (
        <StyledFeature>
            <img src={icon} alt={iconAlt} />
            <h3>{title}</h3>
            <p>{description}</p>
        </StyledFeature>
    );
}
