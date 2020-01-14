import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={ 3 }>
                    <p style={{ fontSize: '18px' }}>
                        { this.props.startYear } - { this.props.endYear }
                    </p>
                </Cell>
                <Cell col={ 9 }>
                    <h4 style={{ fontSize: '30px', margin: '0' }}>{ this.props.schoolName }</h4>
                    <h5 style={{ fontWeight: 'bold', fontSize: '15px', margin: '5px 0' }}>{ this.props.schoolProfile }</h5>
                    <p style={{ marginBottom: '0', whiteSpace: 'pre-wrap' }}>
                        { this.props.schoolDescription }
                    </p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;