import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Container  maxWidth="xl">
                <div className="container">
                    <Header></Header>
                    <Main></Main>
                </div>                    
            </Container>
        </div>
    );
};

export default Home;

