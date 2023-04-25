//Imports
import React from 'react';
import { StyledHero } from './style';

//Component of the hero section
export default function Hero() {
    return (
        <StyledHero>
            <section>
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </StyledHero>
    );
}
