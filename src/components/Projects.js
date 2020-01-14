import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import ProjectCard from './ProjectCard';

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
                            backgroundImageUrl={{ background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover' }}
                            projectLink="https://bitbucket.org/csanecki/react-drug-list-page/"
                            projectLinkName="BitBucket" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#2 My CV" 
                            projectDescription="Moje wirtualne CV wraz z informacjami o moich projektach." 
                            backgroundImageUrl={{ background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover' }}
                            projectLink="https://gitlab.com/Sanecki/my-cv-site"
                            projectLinkName="GitLab" 
                        />
                    </Cell>
                </Grid>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <Grid>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#1 Communicator" 
                            projectDescription="Komunikator do komunikacji wielu użytkowników. Istnieje możliwość wybrania danego, aktywnego użytkownika
                                i rozpoczęcia z nim konwersacji." 
                            backgroundImageUrl={{ background: 'url(https://www.filepicker.io/api/file/qOEV4qksQDCOXVl36JmZ) left / cover' }}
                            projectLink="https://bitbucket.org/csanecki/communicator-like-gadu-gadu/"
                            projectLinkName="BitBucket" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#2 PapperSoccer" 
                            projectDescription="Gra w piłkę na papierze. Została napisana w oparciu o TDD." 
                            backgroundImageUrl={{ background: 'url(https://www.filepicker.io/api/file/qOEV4qksQDCOXVl36JmZ) left / cover' }}
                            projectLink="https://github.com/Czarus0/PaperSoccer"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#3 Arkanoid" 
                            projectDescription="Popularna gra Arkanoid. Napisana w Swingu - niektóre z zasad zostały uproszczone." 
                            backgroundImageUrl={{ background: 'url(https://www.filepicker.io/api/file/qOEV4qksQDCOXVl36JmZ) left / cover' }}
                            projectLink="https://github.com/Czarus0/Arkanoid"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#4 MemoryGame" 
                            projectDescription="Gra w Pamięć. Polega na znajdowaniu par - możliwość mierzenia czasu." 
                            backgroundImageUrl={{ background: 'url(https://www.filepicker.io/api/file/qOEV4qksQDCOXVl36JmZ) left / cover' }}
                            projectLink="https://github.com/Czarus0/MemoryGame"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#5 AnimalShelter" 
                            projectDescription="Symulacja zarządzania schroniskiem. Pierwszy z projektów oparty o bazę danych." 
                            backgroundImageUrl={{ background: 'url(https://www.filepicker.io/api/file/qOEV4qksQDCOXVl36JmZ) left / cover' }}
                            projectLink="https://github.com/Czarus0/AnimalShelterSimulator"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#6 ByteChanger" 
                            projectDescription="Aplikacja do zmiany szykanych bajtów na podane przez użytkownika." 
                            backgroundImageUrl={{ background: 'url(https://www.filepicker.io/api/file/qOEV4qksQDCOXVl36JmZ) left / cover' }}
                            projectLink="https://github.com/Czarus0/ByteChanger"
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
                            backgroundImageUrl={{ background: 'url(https://dammayxanh.files.wordpress.com/2017/09/springboot.png) left / cover' }}
                            projectLink="https://github.com/Czarus0/CarNet"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#2 ShopPage" 
                            projectDescription="Aplikacja zarządzania sklepem z możliwością ich zakupu, dodawania nowych kategorii oraz produktów." 
                            backgroundImageUrl={{ background: 'url(https://dammayxanh.files.wordpress.com/2017/09/springboot.png) left / cover' }}
                            projectLink="https://bitbucket.org/csanecki/spring-shop-page"
                            projectLinkName="BitBucket" 
                        />
                    </Cell>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#3 BookRental" 
                            projectDescription="Aplikacja zarządzania biblioteką. Możliwość rezerwowania pozycji bibliotecznych dla klienta. Próba 
                            wdrożenia DDD." 
                            backgroundImageUrl={{ background: 'url(https://dammayxanh.files.wordpress.com/2017/09/springboot.png) left / cover' }}
                            projectLink="https://gitlab.com/Sanecki/bookrental"
                            projectLinkName="GitLab" 
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
                            backgroundImageUrl={{ background: 'url(https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png) center / cover' }}
                            projectLink="https://bitbucket.org/csanecki/php-blog-page/"
                            projectLinkName="BitBucket" 
                        />
                    </Cell>
                </Grid>
            )
        } else if(this.state.activeTab === 4) {
            return (
                <Grid>
                    <Cell col={ 4 }>
                        <ProjectCard 
                            projectName="#1 TableMatch" 
                            projectDescription="Pierwszy projekt. Symulacja wyników ligi angielskiej na podstawie statystyk." 
                            backgroundImageUrl={{ background: 'url(https://avatars.mds.yandex.net/get-pdb/1925624/320af3e0-6b34-45ad-9d9f-7f88c541f9a0/s600) center / cover' }}
                            projectLink="https://github.com/Czarus0/TableOfMatches"
                            projectLinkName="GitHub" 
                        />
                    </Cell>
                </Grid>
            )
        }
    }

    render() {
        return (
            <div style={{ maxWidth: '1240px', margin: 'auto' }}>
                <Tabs activeTab={ this.state.activeTab } onChange={ (tabId) => this.setState({ activeTab: tabId }) } ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>Spring</Tab>
                    <Tab>PHP</Tab>
                    <Tab>C++</Tab>
                </Tabs>

                { this.toggleCategories() }
            </div>
        )
    }
}

export default Projects;