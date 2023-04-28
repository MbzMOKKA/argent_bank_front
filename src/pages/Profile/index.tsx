//Imports
import React from 'react';
import { StyledAccounts, StyledEditButton, StyledProfile, StyledUserInfos } from './style';
import Account from '../../components/Account';

//Component of the profile page
export default function Profile() {
    return (
        <StyledProfile className="bg-dark">
            <StyledUserInfos>
                <h1>
                    Welcome back
                    <br />
                    {'{USER_NAME}'}!
                </h1>
                <StyledEditButton>Edit Name</StyledEditButton>
            </StyledUserInfos>
            <StyledAccounts>
                <Account name="Argent Bank Checking" transactions={8349} balance={2082.79} />
                <Account name="Argent Bank Savings" transactions={6712} balance={10928.42} />
                <Account name="Argent Bank Credit Card" transactions={8349} balance={184.3} balanceDescription="Current Balance" />
            </StyledAccounts>
        </StyledProfile>
    );
}
