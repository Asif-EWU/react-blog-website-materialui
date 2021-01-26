import { Container } from '@material-ui/core';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Container  maxWidth="lg">
                <p>
                    <span className="name"> Asif Mohammad</span> &copy; All Rights Reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;