import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={ 1 }>
                    { this.props.skill }
                </Cell>
                <Cell col={ 11 } className="skill-progress">
                    <ProgressBar className="skill-progress-bar" 
                        progress={ this.props.progress }
                    />
                </Cell>
            </Grid>
        )
    }
}

export default Skills;