import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class ProjectCard extends Component {
    render() {
        return (
            <Card shadow={ 5 } className="project-card">
                <CardTitle className="project-card-title" style={ this.props.backgroundImageUrl }>
                    { this.props.projectName }
                </CardTitle>
                <CardText>
                { this.props.projectDescription }
                </CardText>
                <CardActions border>
                    <Button colored>
                        <a className="project-link" href={ this.props.projectLink } target="_blank" rel="noopener noreferrer">
                            { this.props.projectLinkName }
                        </a>
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProjectCard;