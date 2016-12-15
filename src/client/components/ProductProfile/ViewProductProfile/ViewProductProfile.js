import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    form: {
        margin: 20
    }
}

export default class ViewProductProfile extends React.Component{
    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.form}>
                    <div>
                        <img src="src/images/profile-icon.png" width="100px"/>
                    </div>
                    <div>
                        <h1>Max Mustermann</h1>
                        <p>Adresse: Musterstraße 1, 44444 Musterhausen</p>
                        <p>E-Mail: mail@mail.com</p>
                        <RaisedButton label="Bearbeiten" containerElement={<Link to="/editUserProfile" />}
                                      linkButton={true} primary={true} />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}