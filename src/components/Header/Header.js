import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header>
            <Container maxWidth="lg">
                <Link to="/">Asif's Blog</Link>
            </Container>
        </header>
    );
};

export default Header;