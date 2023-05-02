//Imports
import React from "react";
import {
    StyledAccount,
    StyledBalance,
    StyledBalanceDescription,
    StyledCTA,
    StyledInfos,
} from "./style";

//Types
type AccountProps = {
    name: string;
    transactions: number;
    balance: number;
    balanceDescription?: string;
};

//Component of an account of the user
export default function Account(props: AccountProps) {
    const {
        name,
        transactions,
        balance,
        balanceDescription = "Available Balance",
    } = props;

    return (
        <StyledAccount>
            <StyledInfos>
                <h3>{`${name} x(${transactions})`}</h3>
                <StyledBalance>{`$${balance.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}`}</StyledBalance>
                <StyledBalanceDescription>
                    {balanceDescription}
                </StyledBalanceDescription>
            </StyledInfos>
            <StyledCTA>View transactions</StyledCTA>
        </StyledAccount>
    );
}
