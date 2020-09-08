import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ProjectCard from './model/ProjectCard';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return (
                <Grid>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#1 Drug List" 
                            projectDescription="Wyświetlana jest lista leków, które można dowolnie sortować, dodawać, usuwać oraz modyfikować." 
                            backgroundImageUrl={{ background: 'url(/images/react.png) center / cover' }}
                            projectLink="https://github.com/DevCezz/DrugListReact"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#2 My CV" 
                            projectDescription="Moje wirtualne CV wraz z informacjami o moich projektach." 
                            backgroundImageUrl={{ background: 'url(/images/react.png) center / cover' }}
                            projectLink="https://github.com/DevCezz/MyCV"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#3 BookApp Client" 
                            projectDescription="Aplikacja korzystająca z API innej mojej aplikacji book-api w Spring'u." 
                            backgroundImageUrl={{ background: 'url(/images/react.png) center / cover' }}
                            projectLink="https://github.com/DevCezz/BookAppClient"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                </Grid>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <Grid>
                    <Cell col={ 4 }>
                        <ProjectCard
                            projectName="#1 MemoryGame"
                            projectDescription="Gra w Pamięć. Polega na znajdowaniu par - możliwość mierzenia czasu."
                            backgroundImageUrl={{ background: 'url(/images/java.png) left / cover' }}
                            projectLink="https://github.com/DevCezz/MemoryGame"
                            projectLinkName="GitHub"
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard
                            projectName="#2 PapperSoccer"
                            projectDescription="Gra w piłkę na papierze. Została napisana w oparciu o TDD."
                            backgroundImageUrl={{ background: 'url(/images/java.png) left / cover' }}
                            projectLink="https://github.com/DevCezz/PaperSoccer"
                            projectLinkName="GitHub"
                        />
                    </Cell>
                </Grid>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <Grid>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#1 CarNet" 
                            projectDescription="Aplikacja zarządzania komisem samochodowym." 
                            backgroundImageUrl={{ background: 'url(/images/spring.png) left / cover' }}
                            projectLink="https://github.com/DevCezz/CarNet"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#2 ShopPage" 
                            projectDescription="Aplikacja zarządzania sklepem z możliwością ich zakupu, dodawania nowych kategorii oraz produktów." 
                            backgroundImageUrl={{ background: 'url(/images/spring.png) left / cover' }}
                            projectLink="https://github.com/DevCezz/ShopPage"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#3 MicroLoan" 
                            projectDescription="Aplikacja zrobiona na potrzeby rekrutacji - zarządzanie pożyczkami." 
                            backgroundImageUrl={{ background: 'url(/images/spring.png) left / cover' }}
                            projectLink="https://github.com/DevCezz/MicroLoan"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#4 BookAppServer" 
                            projectDescription="Zwykła aplikacja CRUD'owa do zarządzania książkami." 
                            backgroundImageUrl={{ background: 'url(/images/spring.png) left / cover' }}
                            projectLink="https://github.com/DevCezz/BookAppServer"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                </Grid>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <Grid>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#1 BlogPage" 
                            projectDescription="Projekt dodawnia wpisów na bloga oraz możliwość ich edycji przez panel administratora" 
                            backgroundImageUrl={{ background: 'url(/images/php.png) center / cover' }}
                            projectLink="https://github.com/DevCezz/BlogPagePhp"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                </Grid>
            )
        }
    }

    render() {
        return (
            <div className="project-body">
                <Tabs activeTab={ this.state.activeTab } onChange={ (tabId) => this.setState({ activeTab: tabId }) } ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>Spring</Tab>
                    <Tab>PHP</Tab>
                </Tabs>

                { this.toggleCategories() }
            </div>
        )
    }
}

export default Projects;