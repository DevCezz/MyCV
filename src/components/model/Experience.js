import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Exceprience extends Component {
    joinDescription(list) {
        if(list) {
            return list.map((item, index) =>
                <div key={ index }>- { item }</div>
            );
        }
    };

    render() {
        return (
            <Grid>
                <Cell col={ 3 }>
                    <p className="experience-date">
                        { this.props.startYear } - { this.props.endYear }
                    </p>
                </Cell>
                <Cell col={ 9 }>
                    <h4 className="experience-job-name">
                        { this.props.jobName }
                    </h4>
                    <h5 className="experience-job-profession">
                        { this.props.jobProfession }
                    </h5>
                    <div className="experience-job-desc">
                        { this.joinDescription(this.props.jobDescription) }
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Exceprience;