//Imports
import React from 'react';
import iconChat from '../../assets/icon-chat.png';
import iconMoney from '../../assets/icon-money.png';
import iconSecurity from '../../assets/icon-security.png';
import { StyledFeatures } from './style';
import Feature from '../Feature';

//Component of the homepage feature list
export default function Features() {
    return (
        <StyledFeatures>
            <h2 className="sr-only">Features</h2>
            <Feature icon={iconChat} iconAlt="Chat icon" title="You are our #1 priority" description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
            <Feature icon={iconMoney} iconAlt="Money icon" title="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!" />
            <Feature icon={iconSecurity} iconAlt="Security icon" title="Security you can trust" description="We use top of the line encryption to make sure your data and money is always safe." />
        </StyledFeatures>
    );
}
