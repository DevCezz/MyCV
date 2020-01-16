import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
    return (
        <Layout>
            <Header className="header-color" title={ <Link className="header-main-link" to="/">Home</Link> }>
                <Navigation>
                    <Link to="/resume">CV</Link>
                    <Link to="/aboutme">O mnie</Link>
                    <Link to="/projects">Projekty</Link>
                    <Link to="/contact">Kontakt</Link>
                </Navigation>
            </Header>
            <Drawer title={ <Link className="drawer-main-link" to="/">Home</Link> }>
                <Navigation>
                    <Link to="/resume">CV</Link>
                    <Link to="/aboutme">O mnie</Link>
                    <Link to="/projects">Projekty</Link>
                    <Link to="/contact">Kontakt</Link>
                </Navigation>
            </Drawer>
            <Content>
                <Main />
            </Content>
        </Layout>
    );
}

export default App;
