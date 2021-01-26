import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <header>
                <Link to="/">Asif's Blog</Link>
            </header>
            <hr/>
        </div>
    );
};

export default Header;