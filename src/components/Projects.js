import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

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
                    {/* Project 1 */}
                    <Cell col={ 4 }>
                        <Card shadow={ 5 } style={{ width: '250px', margin: 'auto'}}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover' }}>
                                React Project #1
                            </CardTitle>
                            <CardText>
                                lorem
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>

                    {/* Project 2 */}
                    <Cell col={ 4 }>
                        <Card shadow={ 5 } style={{width: '250px', margin: 'auto'}}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover' }}>
                                React Project #2
                            </CardTitle>
                            <CardText>
                                lorem
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>

                    {/* Project 3 */}
                    <Cell col={ 4 }>
                        <Card shadow={ 5 } style={{width: '250px', margin: 'auto'}}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover' }}>
                                React Project #3
                            </CardTitle>
                            <CardText>
                                lorem
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div><h1>Java Projects</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>Spring Projects</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div><h1>C++ Projects</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={ this.state.activeTab } onChange={ (tabId) => this.setState({ activeTab: tabId }) } ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>Spring</Tab>
                    <Tab>C++</Tab>
                </Tabs>

                { this.toggleCategories() }
            </div>
        )
    }
}

export default Projects;