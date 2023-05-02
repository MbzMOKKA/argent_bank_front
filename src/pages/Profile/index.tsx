//Imports
import React from "react";
import { StyledProfile } from "./style";
import Account from "../../components/Account";
import Welcome from "../../components/Welcome";

//Component of the profile page
export default function Profile() {
    return (
        <StyledProfile className="bg-dark">
            <Welcome />
            <section>
                <Account
                    name="Argent Bank Checking"
                    transactions={8349}
                    balance={2082.79}
                />
                <Account
                    name="Argent Bank Savings"
                    transactions={6712}
                    balance={10928.42}
                />
                <Account
                    name="Argent Bank Credit Card"
                    transactions={8349}
                    balance={184.3}
                    balanceDescription="Current Balance"
                />
            </section>
        </StyledProfile>
    );
}
