import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

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
                <div><h1>React Projects</h1></div>
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

                <section className="projects-grid">
                    { this.toggleCategories() }
                </section>
            </div>
        )
    }
}

export default Projects;