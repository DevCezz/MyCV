import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Exceprience extends Component {
    joinDescription(list) {
        if(list) {
            var indents = [];

            list.forEach(item => {
                indents.push(<div style={{ paddingLeft: '5px' }}>- { item }</div>);
            });

            return indents;
        }
    };

    render() {
        return (
            <Grid>
                <Cell col={ 3 }>
                    <p style={{ fontSize: '18px' }}>
                        { this.props.startYear } - { this.props.endYear }
                    </p>
                </Cell>
                <Cell col={ 9 }>
                    <h4 style={{ fontSize: '30px', margin: '0' }}>{ this.props.jobName }</h4>
                    <h5 style={{ fontWeight: 'bold', fontSize: '15px', margin: '5px 0' }}>{ this.props.jobProfesion }</h5>
                    <p style={{ marginBottom: '0' }}>
                        { this.joinDescription(this.props.jobDescription) }
                    </p>
                </Cell>
            </Grid>
        )
    }
}

export default Exceprience;