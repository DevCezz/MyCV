import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <Grid className="landing-grid">
                <Cell col={ 12 }>
                    <img 
                        src="/images/cv.png" 
                        alt="avatar" 
                        className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>Cezary Sanecki</h1>
                        <h2>Java Developer</h2>
                        <hr/>
                        <p>
                            Java | Spring | Hibernate | Git | MySQL
                        </p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/cezary-sanecki/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/DevCezz" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Twitter */}
                            <a href="https://twitter.com/cezzdev" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Landing;