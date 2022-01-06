import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <h1>Tasker app 2022</h1>
                <Link to="/">Login</Link>
            </nav>
        </header>
    );
};

export default Header;
