import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="demo-big-content">
            <Layout fixedHeader>
                <Header className="header-color" title={
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link>
                }>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer className="drawer-color"title={
                    <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
                }>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
            </Layout>
        </div>
    );
}

export default App;
