import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={ 12 }>
                        <img 
                            src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png" 
                            alt="avatar" 
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Java Developer</h1>
                            <hr/>
                            <p>
                                Java | Spring | Hibernate
                            </p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/cezary-sanecki-54ba94154/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/Czarus0/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* GitLab */}
                                <a href="https://gitlab.com/Sanecki" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-gitlab" aria-hidden="true" />
                                </a>

                                {/* BitBucket */}
                                <a href="https://bitbucket.org/%7B13196241-9403-4cb2-bc11-a7f1616b9fbe%7D/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-bitbucket" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;