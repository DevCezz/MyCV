import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './model/Education';
import Experience from './model/Experience';
import Skills from './model/Skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={ 4 }>
                        <div style={{ textAlign: 'center' }}>
                            <img 
                                src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Cezary Sanecki</h2>
                        <h4 style={{ color: 'grey' }}>Java Developer</h4>
                        <hr style={{ borderTop: '3px solid #833FB2', width: '50%' }} />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a 
                            type specimen book.
                        </p>
                        <hr style={{ borderTop: '3px solid #833FB2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>
                            ul. Wrzeciono 12A m.5
                            <br />
                            01-961, Warszawa
                        </p>
                        <h5>Phone</h5>
                        <p>
                            793-962-920
                        </p>
                        <h5>Email</h5>
                        <p>
                            csanecki@gmail.com
                        </p>
                        <h5>Web</h5>
                        <p>
                            https://github.com/Czarus0
                        </p>
                    </Cell>
                    <Cell col={ 8 } className="resume-right-col">
                        <h2>Education</h2>

                        <Education startYear={ 2016 } endYear="obecnie"
                            schoolName="Politechnika Warszawska2"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s"
                        />
                        <Education startYear={ 2012 } endYear={ 2016 } 
                            schoolName="Politechnika Warszawska"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' } } />

                        <h2>Experience</h2>

                        <Experience startYear={ 2016 } endYear="obecnie"
                            jobName="PKBI"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s"
                        />
                        <Experience startYear={ 2012 } endYear={ 2016 } 
                            jobName="ECS"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s"
                        />
                        
                        <hr style={{ borderTop: '3px solid #e22947' } } />
                        
                        <h2>Skills</h2>

                        <Skills skill="Java" progress={ 75 } />
                        <Skills skill="Spring" progress={ 65 } />
                        <Skills skill="Hibernate" progress={ 50 } />
                        <Skills skill="React" progress={ 15 } />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;