import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { NavLink } from 'react-router-dom';

class App extends React.Component {
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }

    render() {
        return (
            <Layout>
                <Header className="header-color" title={ <NavLink className="header-main-link" to="/">Home</NavLink> }>
                    <Navigation>
                        <NavLink activeClassName="chosen-page-header" to="/resume">CV</NavLink>
                        <NavLink activeClassName="chosen-page-header" to="/aboutme">O mnie</NavLink>
                        <NavLink activeClassName="chosen-page-header" to="/projects">Projekty</NavLink>
                        <NavLink activeClassName="chosen-page-header" to="/contact">Kontakt</NavLink>
                    </Navigation>
                </Header>
                <Drawer title={ <NavLink onClick={() => this.hideToggle()} className="drawer-main-link" to="/">Home</NavLink> }>
                    <Navigation>
                        <NavLink onClick={() => this.hideToggle()} activeClassName="chosen-page-drawer" to="/resume">CV</NavLink>
                        <NavLink onClick={() => this.hideToggle()} activeClassName="chosen-page-drawer" to="/aboutme">O mnie</NavLink>
                        <NavLink onClick={() => this.hideToggle()} activeClassName="chosen-page-drawer" to="/projects">Projekty</NavLink>
                        <NavLink onClick={() => this.hideToggle()} activeClassName="chosen-page-drawer" to="/contact">Kontakt</NavLink>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
            </Layout>
        );
    }
}

export default App;
