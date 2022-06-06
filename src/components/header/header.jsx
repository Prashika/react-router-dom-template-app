import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div>Dashboard</div>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/form-validation">FormValidation</Link></li>
            </ul>
        </header>
    );
}

export default Header;