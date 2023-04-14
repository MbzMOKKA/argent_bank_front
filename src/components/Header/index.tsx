//Imports
import React from 'react';
import argentBankLogo from '../../assets/argent_bank_logo.png';

//Component of the header
export default function Header() {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./index.html">
                <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a className="main-nav-item" href="./sign-in.html">
                    <i className="fa fa-user-circle" />
                    {' Sign In '}
                </a>
            </div>
        </nav>
    );
}
