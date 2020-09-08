import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={ 6 }>
                        <h2>Cezary Sanecki</h2>
                        <img 
                            src="/images/me.png"
                            alt="avatar"
                        />
                        <p>
                            Skontaktuj się jeśli chciałbyś/-abyś rozpocząć ze mną współpracę.
                        </p>
                    </Cell>
                    <Cell col={ 6 }>
                        <h2>Kontakt</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent className="contact-item">
                                        <i className="fa fa-phone-square" area-hidden="true" />
                                        793-962-920
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent className="contact-item">
                                        <i className="fa fa-envelope" area-hidden="true" />
                                        devcezz@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;